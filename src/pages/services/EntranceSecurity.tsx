import { Scan, ArrowLeft, CheckCircle2, Eye, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EntranceSecurity = () => {
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
              <Scan className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Entrance Security Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Comprehensive security solutions for building entrances and checkpoints.
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
                Our entrance security systems create a comprehensive first line of defense for your facility. We integrate multiple technologies to screen visitors, verify credentials, and maintain a secure perimeter at all entry points.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From advanced screening to visitor management and threat detection, our systems protect your premises while maintaining operational efficiency.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Security Capabilities</h2>
              <div className="space-y-4">
                {[
                  "Metal detection systems",
                  "X-ray and baggage screening",
                  "Facial recognition technology",
                  "Visitor registration & badges",
                  "Queue management systems",
                  "Emergency lockdown capability",
                  "CCTV integration",
                  "Access logs & reporting"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Protected Facilities</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Government Buildings",
                  "Airports & Terminals",
                  "Corporate Offices",
                  "Banks & Financial",
                  "Healthcare Facilities",
                  "Event Venues"
                ].map((facility) => (
                  <li key={facility} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{facility}</span>
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
              icon: Eye,
              title: "Threat Detection",
              description: "Identify and intercept potential threats before they enter"
            },
            {
              icon: Shield,
              title: "Complete Screening",
              description: "Comprehensive verification of all visitors and their belongings"
            },
            {
              icon: Zap,
              title: "Smooth Operations",
              description: "Manage security without creating bottlenecks or delays"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Secure Your Entrances Today</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Deploy comprehensive entrance security for maximum protection and visitor safety.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">
              Schedule Security Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntranceSecurity;
