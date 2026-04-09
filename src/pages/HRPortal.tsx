import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Search,
    Mail,
    Phone,
    FileText,
    Download,
    Briefcase,
    MapPin,
    Clock,
    ChevronDown,
    ChevronUp,
    Users,
    Inbox,
    Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { getJobApplications, getJobs, Job, JobApplicationWithDetails } from "@/services/jobApi";
import { toast } from "sonner";

const HRPortal = () => {
    const [applications, setApplications] = useState<JobApplicationWithDetails[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedJobFilter, setSelectedJobFilter] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [appsData, jobsData] = await Promise.all([
                    getJobApplications(),
                    getJobs(),
                ]);
                setApplications(appsData);
                setJobs(jobsData);
            } catch (error) {
                console.error("Error fetching HR data:", error);
                toast.error("Failed to load applications");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Get job title from the joined data or from the jobs list
    const getJobTitle = (app: JobApplicationWithDetails) => {
        if (app.jobs?.title) return app.jobs.title;
        const job = jobs.find((j) => j.id === app.job_id);
        return job?.title || "Unknown Position";
    };

    const getJobDepartment = (app: JobApplicationWithDetails) => {
        if (app.jobs?.department) return app.jobs.department;
        const job = jobs.find((j) => j.id === app.job_id);
        return job?.department || "";
    };

    const getJobLocation = (app: JobApplicationWithDetails) => {
        if (app.jobs?.location) return app.jobs.location;
        const job = jobs.find((j) => j.id === app.job_id);
        return job?.location || "";
    };

    const getJobType = (app: JobApplicationWithDetails) => {
        if (app.jobs?.type) return app.jobs.type;
        const job = jobs.find((j) => j.id === app.job_id);
        return job?.type || "";
    };

    // Filter applications
    const filteredApplications = applications.filter((app) => {
        const matchesSearch =
            app.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            getJobTitle(app).toLowerCase().includes(searchQuery.toLowerCase());

        const matchesJob =
            selectedJobFilter === "all" || app.job_id === selectedJobFilter;

        return matchesSearch && matchesJob;
    });

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="max-w-6xl mx-auto">
                    {/* Title & Stats */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                                <Users className="h-5 w-5 text-accent" />
                            </div>
                            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                                HR Portal
                            </h1>
                        </div>
                        <p className="text-muted-foreground ml-[52px]">
                            Review and manage job applications
                        </p>

                        {/* Stats bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-foreground">
                                    {applications.length}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Total Applications
                                </div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-accent">
                                    {jobs.length}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    Open Positions
                                </div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-foreground">
                                    {applications.filter((a) => a.resume_url).length}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    With Resumes
                                </div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-foreground">
                                    {
                                        applications.filter(
                                            (a) =>
                                                new Date(a.created_at) >
                                                new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                                        ).length
                                    }
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                    This Week
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search by name, email, or position..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-muted-foreground" />
                            <Select
                                value={selectedJobFilter}
                                onValueChange={setSelectedJobFilter}
                            >
                                <SelectTrigger className="w-[220px]">
                                    <SelectValue placeholder="Filter by position" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Positions</SelectItem>
                                    {jobs.map((job) => (
                                        <SelectItem key={job.id} value={job.id}>
                                            {job.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Applications List */}
                    {loading ? (
                        <div className="text-center py-16">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent mb-4" />
                            <p className="text-muted-foreground">Loading applications...</p>
                        </div>
                    ) : filteredApplications.length === 0 ? (
                        <div className="text-center py-16 bg-card border border-border rounded-xl">
                            <Inbox className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                                No Applications Found
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {applications.length === 0
                                    ? "No applications have been submitted yet."
                                    : "Try adjusting your search or filter criteria."}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredApplications.map((app) => {
                                const isExpanded = expandedId === app.id;
                                return (
                                    <div
                                        key={app.id}
                                        className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-elevated"
                                    >
                                        {/* Main Row */}
                                        <button
                                            onClick={() => toggleExpand(app.id)}
                                            className="w-full p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer"
                                        >
                                            <div className="flex items-start gap-4">
                                                {/* Avatar */}
                                                <div className="w-11 h-11 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                                                    {app.full_name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")
                                                        .toUpperCase()
                                                        .slice(0, 2)}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground">
                                                        {app.full_name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground mt-0.5">
                                                        {app.email}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        <Badge variant="secondary" className="text-xs">
                                                            <Briefcase className="h-3 w-3 mr-1" />
                                                            {getJobTitle(app)}
                                                        </Badge>
                                                        {getJobLocation(app) && (
                                                            <Badge variant="outline" className="text-xs">
                                                                <MapPin className="h-3 w-3 mr-1" />
                                                                {getJobLocation(app)}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 sm:shrink-0">
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDate(app.created_at)}
                                                </span>
                                                {isExpanded ? (
                                                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                                )}
                                            </div>
                                        </button>

                                        {/* Expanded Details */}
                                        {isExpanded && (
                                            <div className="px-5 pb-5 border-t border-border pt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {/* Contact Info */}
                                                    <div className="space-y-3">
                                                        <h5 className="text-sm font-semibold text-foreground">
                                                            Contact Information
                                                        </h5>
                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <Mail className="h-4 w-4 text-accent" />
                                                                <a
                                                                    href={`mailto:${app.email}`}
                                                                    className="hover:text-accent transition-colors"
                                                                >
                                                                    {app.email}
                                                                </a>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <Phone className="h-4 w-4 text-accent" />
                                                                <a
                                                                    href={`tel:${app.phone}`}
                                                                    className="hover:text-accent transition-colors"
                                                                >
                                                                    {app.phone}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Job Info */}
                                                    <div className="space-y-3">
                                                        <h5 className="text-sm font-semibold text-foreground">
                                                            Position Details
                                                        </h5>
                                                        <div className="space-y-2 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-2">
                                                                <Briefcase className="h-4 w-4 text-accent" />
                                                                {getJobTitle(app)}
                                                            </div>
                                                            {getJobDepartment(app) && (
                                                                <div className="flex items-center gap-2">
                                                                    <Users className="h-4 w-4 text-accent" />
                                                                    {getJobDepartment(app)}
                                                                </div>
                                                            )}
                                                            {getJobType(app) && (
                                                                <div className="flex items-center gap-2">
                                                                    <Clock className="h-4 w-4 text-accent" />
                                                                    {getJobType(app)}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Cover Letter */}
                                                {app.cover_letter && (
                                                    <div className="space-y-2">
                                                        <h5 className="text-sm font-semibold text-foreground">
                                                            Cover Letter / Note
                                                        </h5>
                                                        <div className="bg-secondary/50 p-4 rounded-lg text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                                            {app.cover_letter}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Resume */}
                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    {app.resume_url ? (
                                                        <a
                                                            href={app.resume_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button variant="outline" size="sm">
                                                                <Download className="h-4 w-4 mr-2" />
                                                                Download Resume
                                                            </Button>
                                                        </a>
                                                    ) : (
                                                        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/50 px-3 py-2 rounded-lg">
                                                            <FileText className="h-3.5 w-3.5" />
                                                            No resume attached
                                                        </div>
                                                    )}

                                                    <a href={`mailto:${app.email}`}>
                                                        <Button variant="accent" size="sm">
                                                            <Mail className="h-4 w-4 mr-2" />
                                                            Email Candidate
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HRPortal;
