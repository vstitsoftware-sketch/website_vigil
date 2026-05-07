import { supabase } from "@/lib/supabase";

export interface ContactSubmission {
    name: string;
    email: string;
    subject?: string;
    message: string;
}

export const submitContactForm = async (data: ContactSubmission) => {
    if (!supabase) {
        throw new Error("Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
    }

    const enquiry = {
        full_name: data.name,
        email: data.email,
        subject: data.subject?.trim() || null,
        message: data.message,
    };

    const { error } = await supabase
        .from('enquiries')
        .insert([enquiry]);

    if (error) {
        throw error;
    }

    return true;
};
