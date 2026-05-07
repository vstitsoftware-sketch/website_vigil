import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim();

const isValidHttpUrl = (value?: string): boolean => {
    if (!value) return false;
    try {
        const parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        return false;
    }
};

const isPlaceholderValue = (value: string): boolean => {
    const normalized = value.toLowerCase();
    return normalized.includes('your_supabase') || normalized === 'your_project_url' || normalized === 'your_anon_key';
};

export const isSupabaseConfigured =
    isValidHttpUrl(supabaseUrl) &&
    typeof supabaseAnonKey === 'string' &&
    supabaseAnonKey.length > 0 &&
    !isPlaceholderValue(supabaseUrl) &&
    !isPlaceholderValue(supabaseAnonKey);

if (!isSupabaseConfigured) {
    console.warn('Supabase is not configured. Add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env to enable API features.');
}

export const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
