import { supabase } from "@/lib/supabase";

export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    created_at: string;
}

export interface JobApplication {
    job_id: string;
    full_name: string;
    email: string;
    phone: string;
    cover_letter?: string;
    // New canonical field: storage object path (e.g. "164..._abc.pdf")
    resume_file_path?: string;
    // Deprecated/compatibility: may contain legacy public URL
    resume_url?: string;
}

export const uploadResume = async (file: File): Promise<string | null> => {
    if (!supabase) {
        console.warn("Supabase is not configured. Resume upload is disabled.");
        return null;
    }

    try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data: uploadData, error } = await supabase.storage
            .from('resumes')
            .upload(filePath, file as any);

        if (error) {
            console.warn("Resume upload failed (storage bucket may not exist):", error.message);
            return null;
        }

        // Return canonical storage object path only (do not store public URL here)
        return (uploadData && (uploadData as any).path) || filePath;
    } catch (err) {
        console.warn("Resume upload error:", err);
        return null;
    }
};

export const getJobs = async () => {
    if (!supabase) {
        console.warn("Supabase is not configured. Returning empty jobs list.");
        return [];
    }

    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }

    return data as Job[];
};

export const getJobById = async (id: string) => {
    if (!supabase) {
        throw new Error("Supabase is not configured.");
    }

    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data as Job;
};

export const submitJobApplication = async (application: JobApplication) => {
    if (!supabase) {
        throw new Error("Supabase is not configured.");
    }

    // Clean up the payload: remove resume_url if it's null/undefined
    const payload: Record<string, unknown> = {
        job_id: application.job_id,
        full_name: application.full_name,
        email: application.email,
        phone: application.phone,
    };

    if (application.cover_letter) {
        payload.cover_letter = application.cover_letter;
    }
    // Prefer storing the canonical storage object path in `resume_file_path`.
    // For backwards compatibility, if only resume_url is available, use that as a fallback.
    if (application.resume_file_path) {
        payload.resume_file_path = application.resume_file_path;
    } else if (application.resume_url) {
        // Legacy callers may still pass a public URL; preserve it for now.
        payload.resume_url = application.resume_url;
    }

    const { error } = await supabase
        .from('job_applications')
        .insert([payload]);

    if (error) {
        // Try a compatibility fallback: if we attempted to write `resume_file_path` but the
        // target schema expects `resume_url`, retry with the alternate column.
        if (application.resume_file_path) {
            const fallbackPayload: Record<string, unknown> = { ...payload };
            delete fallbackPayload.resume_file_path;
            // Put the path into the legacy `resume_url` column so older schemas can accept it.
            fallbackPayload.resume_url = application.resume_file_path;

            const { error: fallbackError } = await supabase
                .from('job_applications')
                .insert([fallbackPayload]);

            if (fallbackError) {
                console.error("Supabase insert error:", fallbackError);
                throw fallbackError;
            }

            return true;
        }

        // If we originally wrote `resume_url` and insert failed, try moving it to resume_file_path
        if (application.resume_url) {
            const fallbackPayload: Record<string, unknown> = { ...payload };
            delete fallbackPayload.resume_url;
            fallbackPayload.resume_file_path = application.resume_url;

            const { error: fallbackError } = await supabase
                .from('job_applications')
                .insert([fallbackPayload]);

            if (fallbackError) {
                console.error("Supabase insert error:", fallbackError);
                throw fallbackError;
            }

            return true;
        }

        console.error("Supabase insert error:", error);
        throw error;
    }

    return true;
};

// --- HR Portal API ---

export interface JobApplicationWithDetails {
    id: string;
    job_id: string;
    full_name: string;
    email: string;
    phone: string;
    cover_letter: string | null;
    resume_url: string | null;
    resume_file_path: string | null;
    created_at: string;
    jobs: {
        title: string;
        department: string;
        location: string;
        type: string;
    } | null;
}

type JobApplicationRow = {
    id: string;
    job_id: string;
    full_name: string;
    email: string;
    phone: string;
    cover_letter?: string | null;
    resume_url?: string | null;
    resume_file_path?: string | null;
    created_at?: string;
    submitted_at?: string;
    jobs?: {
        title: string;
        department: string;
        location: string;
        type: string;
    } | null;
};

const normalizeApplicationRow = (row: JobApplicationRow): JobApplicationWithDetails => ({
    id: row.id,
    job_id: row.job_id,
    full_name: row.full_name,
    email: row.email,
    phone: row.phone,
    cover_letter: row.cover_letter ?? null,
    // Prefer canonical `resume_file_path` if present; keep `resume_url` for backward compatibility.
    resume_file_path: row.resume_file_path ?? row.resume_url ?? null,
    resume_url: row.resume_url ?? null,
    created_at: row.created_at ?? row.submitted_at ?? new Date(0).toISOString(),
    jobs: row.jobs ?? null,
});

export const getJobApplications = async (): Promise<JobApplicationWithDetails[]> => {
    if (!supabase) {
        console.warn("Supabase is not configured. Returning empty applications list.");
        return [];
    }

    const { data, error } = await supabase
        .from('job_applications')
        .select(`
            *,
            jobs (
                title,
                department,
                location,
                type
            )
        `)
        .order('created_at', { ascending: false, nullsFirst: false });

    if (error) {
        console.error("Error fetching applications:", error);
        // If the join fails (e.g. job_id is text not uuid), fall back to raw query
        const { data: rawData, error: rawError } = await supabase
            .from('job_applications')
            .select('*')
            .order('created_at', { ascending: false, nullsFirst: false });

        if (rawError) {
            const { data: submittedAtData, error: submittedAtError } = await supabase
                .from('job_applications')
                .select('*')
                .order('submitted_at', { ascending: false, nullsFirst: false });

            if (submittedAtError) {
                console.error("Error fetching raw applications:", submittedAtError);
                return [];
            }

            return (submittedAtData || []).map((app) => normalizeApplicationRow(app as JobApplicationRow));
        }

        return (rawData || []).map((app) => normalizeApplicationRow(app as JobApplicationRow));
    }

    return (data || []).map((app) => normalizeApplicationRow(app as JobApplicationRow));
};

