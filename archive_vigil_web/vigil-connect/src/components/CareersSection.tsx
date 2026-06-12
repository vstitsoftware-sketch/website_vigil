import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Sparkles, ShieldCheck } from "lucide-react";

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
    <section id="careers" className="py-12 bg-background">
      <div className="w-full">
        <div className="relative">
          <div className="w-[100vw] -ml-[calc(50vw-50%)] rounded-none bg-card p-10 md:p-20 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Left content */}
              <div className="lg:col-span-7">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-16 bg-accent rounded-full shrink-0 mt-1" />
                  <div>
                    <div className="mb-2">
                      <span className="text-accent font-semibold text-xs uppercase tracking-wider">JOIN OUR TEAM</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-[56ch] mb-3">
                      Build your career at Vigil Safety Technologies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-prose mb-6 leading-relaxed">
                      We're looking for passionate individuals who want to make an impact. Join our team of
                      innovators and help shape the future of business technology.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {benefits.map((b) => (
                        <div
                          key={b}
                          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background text-sm text-foreground shadow-sm"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* button removed from left column - placed centered below */}
                  </div>
                </div>
              </div>

              {/* Right content - stacked feature cards */}
              <div className="lg:col-span-5 space-y-4 mt-2">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Collaborative teams</div>
                      <div className="text-sm text-muted-foreground">Work with cross-functional teams and product-focused engineers.</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Meaningful impact</div>
                      <div className="text-sm text-muted-foreground">Ship systems that are used every day by customers in the field.</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Stability & support</div>
                      <div className="text-sm text-muted-foreground">Competitive benefits and a structured hiring experience.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link to="/careers">
                <Button variant="accent" size="lg" className="px-8 py-4 text-lg shadow-md">
                  View All Positions
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
