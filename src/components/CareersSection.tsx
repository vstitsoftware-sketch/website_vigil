import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Sales Director",
    department: "Sales",
    location: "Chicago, IL",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Flexible remote work",
  "Health & dental insurance",
  "Unlimited PTO",
  "Learning budget",
  "401(k) matching",
];

const CareersSection = () => {
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
              Build Your Career at Vijil
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

            <Button variant="accent" size="lg">
              View All Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Content - Job Listings */}
          <div className="space-y-4">
            {positions.map((position) => (
              <a
                key={position.title}
                href="#contact"
                className="block p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                      {position.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {position.department}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {position.type}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
