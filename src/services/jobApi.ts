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

export const uploadResume = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error } = await supabase.storage
        .from('resumes')
        .upload(filePath, file);

    if (error) {
        throw error;
    }

    return filePath;
};

// Fallback data to ensure jobs appear immediately
const FALLBACK_JOBS: Job[] = [
    {
        id: "soft-eng-1",
        title: "Software Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "We are seeking a talented Software Engineer to join our dynamic team. You will be instrumental in developing robust software solutions that drive our business forward. In this role, you will work on the full software development lifecycle, from conception to deployment.",
        responsibilities: [
            "Develop, test, and maintain high-quality software applications",
            "Collaborate with cross-functional teams to define and design new features",
            "Troubleshoot and debug applications to ensure optimal performance",
            "Participate in code reviews and contribute to engineering best practices",
            "Write clean, scalable, and efficient code"
        ],
        requirements: [
            "Bachelor’s degree in Computer Science or related field",
            "Proficiency in JavaScript/TypeScript and React",
            "Experience with backend technologies like Node.js or Python",
            "Solid understanding of database management systems (SQL/NoSQL)",
            "Strong problem-solving and communication skills"
        ],
        created_at: new Date().toISOString()
    },
    {
        id: "hard-eng-1",
        title: "Hardware Engineer",
        department: "Engineering",
        location: "On-site",
        type: "Full-time",
        description: "We are looking for a skilled Hardware Engineer to design and develop cutting-edge hardware components. You will work closely with our product and software teams to integrate hardware and software solutions seamlessly.",
        responsibilities: [
            "Design and develop hardware schematics and PCB layouts",
            "Perform hardware testing and validation",
            "Collaborate with manufacturing teams to ensure product quality",
            "Troubleshoot hardware issues and provide technical support",
            "Stay updated with the latest hardware technologies and trends"
        ],
        requirements: [
            "Bachelor’s degree in Electrical Engineering or related field",
            "Experience with PCB design software (e.g., Altium, Eagle)",
            "Knowledge of analog and digital circuit design",
            "Hands-on experience with soldering and hardware testing equipment",
            "Ability to work independently and as part of a team"
        ],
        created_at: new Date().toISOString()
    }
];

export const getJobs = async () => {
    // Try fetching from Supabase first
    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });

    // If DB has error, log it
    if (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }

    return data as Job[];
};

export const getJobById = async (id: string) => {
    // Check if it's one of our fallback IDs
    // const fallbackJob = FALLBACK_JOBS.find(j => j.id === id);
    // if (fallbackJob) return fallbackJob;

    const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single();

    if (error) throw error;
    return data as Job;
};

export const submitJobApplication = async (application: JobApplication) => {
    const { error } = await supabase
        .from('job_applications')
        .insert([application]);

    if (error) throw error;
    return true;
};

