import { AlertTriangle, ArrowLeft, CheckCircle2, Shield, Zap, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntrusionDetection = () => {
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Intrusion Detection and Alarm Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Reliable security systems to detect unauthorized access and alert you instantly.
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
                Our intrusion detection and alarm systems help protect your property by identifying unauthorized access in real time. Using a combination of sensors and monitoring systems, you are alerted immediately when a breach is detected.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We design systems that cover both perimeter and internal areas, creating multiple layers of security. This helps reduce the chances of intrusion and ensures quick response if any activity is detected.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The system can be connected to monitoring centers, mobile devices, and other security setups like CCTV, giving you complete visibility and control over your premises.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Motion and Vibration Sensors",
                  "Door and Window Contact Sensors",
                  "Perimeter Protection Systems",
                  "Glass Break Detection Sensors",
                  "Alarm Control Panel and Notification System"
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
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Residential Complexes",
                  "Commercial Buildings and Offices",
                  "Warehouses and Storage Facilities",
                  "Retail Stores and Showrooms",
                  "Banks and Financial Institutions",
                  "Industrial Sites"
                ].map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>

              <Link to="/#contact">
                <Button variant="accent" size="lg" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Standards and Compliances */}
            <div className="bg-accent/10 rounded-2xl p-8 mt-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "IEC Security System Standards",
                  "Alarm System Safety Guidelines",
                  "Local Security and Surveillance Regulations",
                  "Data Security and Privacy Standards"
                ].map((standard) => (
                  <li key={standard} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Bell,
              title: "Instant Alerts",
              description: "Get immediate notifications when any suspicious activity is detected."
            },
            {
              icon: Shield,
              title: "Layered Security",
              description: "Protect both the outer perimeter and internal areas for better coverage."
            },
            {
              icon: Zap,
              title: "Better Control",
              description: "Monitor and manage your security system easily through mobile or centralized access."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Secure Your Property with Confidence</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Install a reliable intrusion detection system to protect your premises at all times.
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

export default IntrusionDetection;
