import { supabase } from "@/lib/supabase";

export interface ContactSubmission {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
    if (!supabase) {
        throw new Error("Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
    }

    const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

    if (error) {
        throw error;
    }

    return true;
};
