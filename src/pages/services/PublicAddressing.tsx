import { AlertTriangle, ArrowLeft, CheckCircle2, Volume2, Radio, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PublicAddressing = () => {
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
              <AlertTriangle className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Public Addressing System</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Reliable communication solutions for public announcements and emergency alerts.
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
                Our public addressing systems deliver clear, reliable announcements throughout your facility. Designed for both routine communications and emergency situations, our systems ensure that critical messages reach everyone quickly and effectively.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From airports and transit stations to corporate buildings and educational institutions, our PA systems are engineered for performance and reliability in any environment.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">System Features</h2>
              <div className="space-y-4">
                {[
                  "Multi-zone announcement capability",
                  "High-quality audio output",
                  "Emergency override functionality",
                  "Centralized control console",
                  "Integration with alarm systems",
                  "Microphone and line inputs",
                  "Background music capability",
                  "Remote access and control"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Applications</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Airports & Transportation",
                  "Shopping Malls",
                  "Educational Institutions",
                  "Corporate Buildings",
                  "Hospitals & Healthcare",
                  "Manufacturing Facilities"
                ].map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{app}</span>
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
              icon: Volume2,
              title: "Clear Communication",
              description: "Ensure critical messages are heard clearly throughout your facility"
            },
            {
              icon: Radio,
              title: "Emergency Ready",
              description: "Rapid response capability for emergency alerts and safety announcements"
            },
            {
              icon: Users,
              title: "Audience Reach",
              description: "Reach large audiences with zoned announcements and targeted messaging"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Implement Public Addressing Today</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Deploy a reliable PA system for effective communication and emergency preparedness.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublicAddressing;
