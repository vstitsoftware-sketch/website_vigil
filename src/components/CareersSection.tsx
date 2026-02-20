import { useEffect, useState } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getJobs, Job } from "@/services/jobApi";
import { toast } from "sonner";

const benefits = [
  "Competitive salary & equity",
  "Flexible remote work",
  "Health & dental insurance",
  "Unlimited PTO",
  "Learning budget",
  "401(k) matching",
];

const CareersSection = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        // optionally filter or slice if you only want specific roles on home page
        setJobs(data.slice(0, 2));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Build Your Career at Vigil Everywhere
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're looking for passionate individuals who want to make an impact.
              Join our team of innovators and help shape the future of business
              technology.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/careers">
              <Button variant="accent" size="lg">
                View All Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Right Content - Job Listings */}
          <div className="space-y-4">
            {loading ? (
              <p>Loading open positions...</p>
            ) : (
              jobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/${job.id}`}
                  className="block p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {job.department}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                </Link>
              ))
            )}

            {!loading && jobs.length === 0 && (
              <p className="text-muted-foreground">No open positions at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
