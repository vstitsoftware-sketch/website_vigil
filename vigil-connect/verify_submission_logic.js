
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const supabaseUrl = 'https://qjniewxsxhptlrrtbhbp.supabase.co';
const supabaseKey = 'sb_publishable_qKIvEv6MAm91aRxnXFfHAQ_JZmDtdJ1';
const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
    let log = "Verification Report:\n";
    console.log("Starting verification...");

    // 1. Fetch Jobs
    const { data: jobs, error: jobsError } = await supabase.from('jobs').select('id, title').limit(1);
    if (jobsError) {
        log += "FAIL: Fetch Jobs - " + jobsError.message + "\n";
        console.log("Job Fetch Failed");
    } else if (!jobs || jobs.length === 0) {
        log += "FAIL: No Jobs Found in Database.\n";
        console.log("No Jobs Found");
    } else {
        log += `PASS: Found Job: ${jobs[0].title} (${jobs[0].id})\n`;
        const jobId = jobs[0].id;

        // 2. Upload Dummy Resume
        const fileName = `test_resume_${Date.now()}.txt`;
        const fileBody = new Blob(["dummy resume content"], { type: 'text/plain' });

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('resumes')
            .upload(fileName, fileBody);

        if (uploadError) {
            log += "FAIL: Upload Resume - " + uploadError.message + "\n";
            // If bucket not found, this will be the error
        } else {
            log += "PASS: Upload Resume - Success\n";
            const resumePath = uploadData.path;

            // 3. Insert Application
            const application = {
                job_id: jobId,
                full_name: "Test User",
                email: "test@example.com",
                phone: "1234567890",
                cover_letter: "Testing submission",
                resume_file_path: resumePath // Use canonical storage path
            };

            const { data: insertData, error: insertError } = await supabase
                .from('job_applications')
                .insert([application])
                .select();

            if (insertError) {
                log += "FAIL: Insert Application - " + insertError.message + "\n";
            } else {
                log += "PASS: Insert Application - Success\n";
            }
        }
    }

    // fs.writeFileSync('verification_result.txt', log);
    console.log(log);
}

verify();
