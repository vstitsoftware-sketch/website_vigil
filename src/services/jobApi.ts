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
    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data as Job;
};

export const submitJobApplication = async (application: JobApplication) => {
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

export const getJobApplications = async (): Promise<JobApplicationWithDetails[]> => {
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
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching applications:", error);
        // If the join fails (e.g. job_id is text not uuid), fall back to raw query
        const { data: rawData, error: rawError } = await supabase
            .from('job_applications')
            .select('*')
            .order('created_at', { ascending: false });

        if (rawError) {
            console.error("Error fetching raw applications:", rawError);
            return [];
        }

        return (rawData || []).map((app: Record<string, unknown>) => ({
            ...app,
            jobs: null,
        })) as JobApplicationWithDetails[];
    }

    return (data || []) as JobApplicationWithDetails[];
};

