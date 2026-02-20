import { Flame, ArrowLeft, CheckCircle2, AlertTriangle, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FireFighting = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link to="/#services" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Flame className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Fire Fighting Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Comprehensive fire safety and suppression systems designed to protect lives and assets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Overview */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our fire fighting systems provide complete fire safety solutions, from detection and alarm to active suppression. We design, install, and maintain comprehensive fire protection systems tailored to your facility's specific needs and regulatory requirements.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our systems comply with international fire safety standards and are designed to minimize property damage while maximizing life safety.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">System Components</h2>
              <div className="space-y-4">
                {[
                  "Fire detection systems (smoke, heat, flame)",
                  "Automatic fire alarm and alert systems",
                  "Sprinkler systems (dry, wet, pre-action)",
                  "Foam suppression systems",
                  "Gas suppression systems",
                  "Emergency evacuation systems",
                  "Fire safety signage and guidance",
                  "Regular maintenance and inspection services"
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-accent/10 rounded-2xl p-8 sticky top-20">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards & Compliance</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "NFPA Standards",
                  "ISO Fire Safety Codes",
                  "Local Building Codes",
                  "International Standards",
                  "Regular Inspections",
                  "Certification & Testing"
                ].map((standard) => (
                  <li key={standard} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{standard}</span>
                  </li>
                ))}
              </ul>

              <Link to="/#contact">
                <Button variant="accent" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: AlertTriangle,
              title: "Early Detection",
              description: "Detect fires at the earliest stages for quick response and containment"
            },
            {
              icon: Shield,
              title: "Life Safety",
              description: "Protect occupants with fast alerts and safe evacuation routes"
            },
            {
              icon: Activity,
              title: "Asset Protection",
              description: "Minimize property damage with rapid suppression systems"
            }
          ].map((benefit) => (
            <div key={benefit.title} className="bg-card rounded-2xl p-8 shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Protect Your Facility with Advanced Fire Systems</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact our fire safety experts for a comprehensive assessment and customized fire protection plan.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">
              Schedule Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FireFighting;
