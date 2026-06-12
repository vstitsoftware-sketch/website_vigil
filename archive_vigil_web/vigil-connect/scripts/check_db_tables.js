#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client } from 'pg';
import { createClient } from '@supabase/supabase-js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IGNORE = ['node_modules', '.git', 'dist', 'build', 'venv', '.venv', 'coverage', 'vendor'];
const TEXT_FILE_EXTS = ['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.sql', '.html', '.css', '.env', '.txt'];

function walk(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const resolved = path.join(dir, e.name);
    const rel = path.relative(ROOT, resolved);
    if (IGNORE.some(i => rel.split(path.sep).includes(i))) continue;
    if (e.isDirectory()) {
      walk(resolved, list);
    } else {
      list.push(resolved);
    }
  }
  return list;
}

function looksLikeText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return TEXT_FILE_EXTS.includes(ext) || ext === '';
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

const DB_URL = process.env.DATABASE_URL || process.env.SUPABASE_DATABASE_URL || process.env.SUPABASE_DB_URL;
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

function buildRepoReferencePatterns(table) {
  const reParts = [
    `\\.from\\(['\\"]${table}['\\"]\\)`,
    `from\\s+['\\"]?public\\.?${table}['\\"]?`,
    `insert\\s+into\\s+public\\.?${table}`,
    `\\b${table}\\b`
  ];
  return new RegExp(reParts.join('|'), 'i');
}

function findRepoReferences(tables) {
  const tableRefs = {};
  tables.forEach((t) => { tableRefs[t] = []; });
  const repoReferenced = new Set();
  const fromPattern = /\.from\(['\"](\w+)['\"]\)/g;
  const insertPattern = /insert\s+into\s+(?:public\.)?(\w+)/ig;

  const files = walk(ROOT);
  for (const file of files) {
    if (!looksLikeText(file)) continue;
    const txt = readFileSafe(file);
    if (!txt) continue;

    for (const table of tables) {
      const pattern = buildRepoReferencePatterns(table);
      if (pattern.test(txt)) {
        tableRefs[table].push(path.relative(ROOT, file));
      }
    }

    let m;
    while ((m = fromPattern.exec(txt)) !== null) {
      repoReferenced.add(m[1]);
    }
    while ((m = insertPattern.exec(txt)) !== null) {
      repoReferenced.add(m[1]);
    }
  }

  return { tableRefs, repoReferenced: Array.from(repoReferenced).sort() };
}

async function queryDbTables(client) {
  const q = `SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public' AND table_type = 'BASE TABLE';`;
  const res = await client.query(q);
  return (res.rows || []).map((row) => row.table_name).sort();
}

async function trySupabaseCatalog(supabase) {
  const candidates = [
    { table: 'information_schema.tables', select: 'table_name,table_schema' },
    { table: 'pg_catalog.pg_tables', select: 'tablename,schemaname' }
  ];

  for (const candidate of candidates) {
    const { data, error } = await supabase.from(candidate.table).select(candidate.select).limit(1);
    if (!error && Array.isArray(data)) {
      return candidate.table;
    }
  }

  return null;
}

async function checkReferencedTablesWithSupabase(supabase, referencedTables) {
  const tableStatus = {};
  for (const table of referencedTables) {
    try {
      const { error } = await supabase.from(table).select('*').limit(1);
      if (error) {
        const missing = /Could not find the table/i.test(error.message) || /no relation/i.test(error.message);
        tableStatus[table] = missing ? 'missing' : 'error';
      } else {
        tableStatus[table] = 'present';
      }
    } catch {
      tableStatus[table] = 'error';
    }
  }
  return tableStatus;
}

async function main() {
  const outPath = path.join(ROOT, 'scripts', 'table_check_report.json');
  const repoReferences = new Set();
  const files = walk(ROOT);
  const fromPattern = /\.from\(['\"](\w+)['\"]\)/g;
  const insertPattern = /insert\s+into\s+(?:public\.)?(\w+)/ig;
  for (const file of files) {
    if (!looksLikeText(file)) continue;
    const txt = readFileSafe(file);
    if (!txt) continue;
    let m;
    while ((m = fromPattern.exec(txt)) !== null) {
      repoReferences.add(m[1]);
    }
    while ((m = insertPattern.exec(txt)) !== null) {
      repoReferences.add(m[1]);
    }
  }

  let report = {
    timestamp: new Date().toISOString(),
    mode: null,
    dbTablesCount: null,
    dbTables: [],
    repoReferencedTables: Array.from(repoReferences).sort(),
    tableReferences: {},
    unusedTables: [],
    referencedNotInDb: [],
    referencedTableStatus: {},
    notes: []
  };

  if (DB_URL) {
    report.mode = 'database_url';
    const client = new Client({ connectionString: DB_URL });
    await client.connect();
    const tables = await queryDbTables(client);
    report.dbTablesCount = tables.length;
    report.dbTables = tables;

    const { tableRefs, repoReferenced } = findRepoReferences(tables);
    report.tableReferences = tableRefs;
    report.repoReferencedTables = repoReferenced;
    report.unusedTables = tables.filter((t) => tableRefs[t].length === 0);
    report.referencedNotInDb = repoReferenced.filter((name) => !tables.includes(name));

    await client.end();
  } else if (SUPABASE_URL && SERVICE_ROLE_KEY) {
    report.mode = 'supabase_service_role';
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

    const catalogTable = await trySupabaseCatalog(supabase);
    if (catalogTable) {
      report.notes.push(`Catalog exposed via ${catalogTable}.`);
      const { data, error } = await supabase.from(catalogTable).select('*').limit(1000);
      if (!error && Array.isArray(data)) {
        const names = data.map((row) => row.table_name || row.tablename).filter(Boolean);
        report.dbTables = [...new Set(names)].sort();
        report.dbTablesCount = report.dbTables.length;
        const { tableRefs, repoReferenced } = findRepoReferences(report.dbTables);
        report.tableReferences = tableRefs;
        report.repoReferencedTables = repoReferenced;
        report.unusedTables = report.dbTables.filter((t) => tableRefs[t].length === 0);
        report.referencedNotInDb = repoReferenced.filter((name) => !report.dbTables.includes(name));
      } else {
        report.notes.push(`Could not read catalog rows from ${catalogTable}.`);
      }
    } else {
      report.notes.push('Could not expose database catalog; falling back to validating referenced tables only.');
      report.referencedTableStatus = await checkReferencedTablesWithSupabase(supabase, report.repoReferencedTables);
    }
  } else {
    console.error('ERROR: Set either DATABASE_URL or both SUPABASE_URL and SERVICE_ROLE_KEY in your environment.');
    process.exit(1);
  }

  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log('--- Summary ---');
  console.log(`Mode: ${report.mode}`);
  if (report.dbTablesCount !== null) console.log(`DB tables count: ${report.dbTablesCount}`);
  if (report.unusedTables.length) console.log(`Unused DB tables: ${report.unusedTables.join(', ')}`);
  if (report.referencedNotInDb.length) console.log(`Referenced tables missing from DB: ${report.referencedNotInDb.join(', ')}`);
  if (Object.keys(report.referencedTableStatus).length) {
    const missing = Object.entries(report.referencedTableStatus).filter(([, status]) => status !== 'present');
    console.log(`Referenced table status: ${missing.length} tables missing or errored.`);
    missing.forEach(([table, status]) => console.log(`  ${table}: ${status}`));
  }
  if (report.notes.length) console.log(`Notes: ${report.notes.join(' | ')}`);
  console.log(`Detailed report written to: ${outPath}`);
}

await main();
