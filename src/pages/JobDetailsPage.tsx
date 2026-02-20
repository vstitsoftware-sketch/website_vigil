import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, CheckCircle2, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getJobById, submitJobApplication, uploadResume, Job } from "@/services/jobApi";
import { toast } from "sonner";

const JobDetailsPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        cover_letter: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!id) return;
        const fetchJob = async () => {
            try {
                const data = await getJobById(id);
                setJob(data);
            } catch (error) {
                console.error("Error fetching job:", error);
                toast.error("Could not load job details");
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!job) return;
        if (!file) {
            toast.error("Please upload your resume");
            return;
        }

        setIsSubmitting(true);
        try {
            // 1. Upload Resume
            const resumePath = await uploadResume(file);

            // 2. Save to Database
            await submitJobApplication({
                job_id: job.id,
                ...formData,
                resume_url: resumePath
            });

            toast.success("Application submitted successfully!");
            setFormData({ full_name: "", email: "", phone: "", cover_letter: "" });
            setFile(null);

        } catch (error) {
            console.error("Error submitting application:", error);
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div className="pt-24 text-center">Loading...</div>;
    if (!job) return <div className="pt-24 text-center">Job not found</div>;

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4">
                <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Careers
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Job Details */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                                <span className="flex items-center gap-1.5">
                                    <Briefcase className="h-4 w-4" />
                                    {job.department}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    {job.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    {job.type}
                                </span>
                            </div>

                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <h3 className="text-xl font-semibold mb-3">Role Overview</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {job.description}
                                </p>

                                <h3 className="text-xl font-semibold mb-3">Key Responsibilities</h3>
                                <ul className="mb-6 space-y-2">
                                    {job.responsibilities.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                                <ul className="mb-6 space-y-2">
                                    {job.requirements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-6 rounded-xl border border-border">
                            <h3 className="font-semibold text-lg mb-4">What We Offer</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-sm text-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Competitive Salary & Equity
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Health & Wellness Benefits
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Flexible Remote Work
                                </div>
                                <div className="flex items-center gap-2 text-sm text-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Professional Development
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-card p-6 rounded-xl shadow-elevated sticky top-24">
                            <h3 className="font-serif text-2xl font-bold mb-6">Apply Now</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                                    <Input
                                        required
                                        placeholder="John Doe"
                                        value={formData.full_name}
                                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Email</label>
                                    <Input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                                    <Input
                                        required
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Resume (PDF/Word)</label>
                                    <Input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        required
                                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                                        className="cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Cover Letter / Note</label>
                                    <Textarea
                                        rows={4}
                                        placeholder="Tell us why you're a great fit..."
                                        value={formData.cover_letter}
                                        onChange={(e) => setFormData({ ...formData, cover_letter: e.target.value })}
                                    />
                                </div>

                                <Button className="w-full" variant="accent" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                                </Button>

                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    By submitting, you agree to our privacy policy and terms of service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
