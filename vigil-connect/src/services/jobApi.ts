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

        const { error } = await supabase.storage
            .from('resumes')
            .upload(filePath, file);

        if (error) {
            console.warn("Resume upload failed (storage bucket may not exist):", error.message);
            return null;
        }

        // Get the public URL for the uploaded file
        const { data: urlData } = supabase.storage
            .from('resumes')
            .getPublicUrl(filePath);

        return urlData?.publicUrl || filePath;
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

    if (application.resume_url) {
        payload.resume_url = application.resume_url;
    }

    const { error } = await supabase
        .from('job_applications')
        .insert([payload]);

    if (error && application.resume_url) {
        // Handle schema variant where resume_file_path exists instead of resume_url.
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

    if (error) {
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
    resume_url: row.resume_url ?? row.resume_file_path ?? null,
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

