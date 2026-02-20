import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getJobs, Job } from "@/services/jobApi";
import { toast } from "sonner";

const CareersPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await getJobs();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
                toast.error("Failed to load job openings");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Link to="/#careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-4">
                        Join Our Team
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Shape the Future With Us
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At Vigil Everywhere, we're passionate about building technology that shapes the future.
                        We're always looking for creative thinkers, problem solvers, and innovators to join our team.
                        Discover a place where your work matters and your growth is encouraged.
                    </p>
                </div>

                {/* Job Listings */}
                <div className="max-w-5xl mx-auto">
                    {loading ? (
                        <div className="text-center py-12">Loading positions...</div>
                    ) : (
                        <div className="grid gap-6">
                            {jobs.map((job) => (
                                <div key={job.id} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elevated transition-all border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                                                {job.title}
                                            </h3>
                                            <p className="text-muted-foreground mt-1">{job.department}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                                                <MapPin className="h-3.5 w-3.5" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full">
                                                <Clock className="h-3.5 w-3.5" />
                                                {job.type}
                                            </div>
                                        </div>
                                    </div>

                                    <Link to={`/careers/${job.id}`}>
                                        <Button variant="outline" className="w-full md:w-auto hover:bg-accent hover:text-accent-foreground">
                                            View Details
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            ))}

                            {jobs.length === 0 && (
                                <div className="text-center py-12 text-muted-foreground">
                                    No current openings. Please check back later!
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
