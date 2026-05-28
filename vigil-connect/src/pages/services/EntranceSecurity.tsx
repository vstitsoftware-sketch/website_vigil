import { Scan, ArrowLeft, CheckCircle2, Eye, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";

const EntranceSecurity = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <ServicePageMenu />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Scan className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Entrance Security Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Reliable security systems to manage entry points, screen visitors, and protect your facility.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Overview */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our entrance security systems help you secure all entry and exit points of your facility. By combining different technologies, we make it easier to screen visitors, verify identity, and control access without slowing down daily operations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                These systems are designed for places where security is critical, such as offices, industrial sites, and public buildings. From basic visitor management to advanced screening and monitoring, everything is set up to reduce risks and improve control at entry points.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With proper tracking and reporting, you can maintain clear records of who enters and exits your premises at any time.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Metal Detection Systems",
                  "X-ray and Baggage Scanning Systems",
                  "Facial Recognition and Identity Verification",
                  "Visitor Management and Badge Systems",
                  "CCTV Integration and Monitoring"
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
            <div className="bg-accent/10 rounded-2xl p-8 mb-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Corporate Offices and IT Parks",
                  "Airports and Transport Hubs",
                  "Industrial and Manufacturing Units",
                  "Government Buildings",
                  "Educational Institutions",
                  "Hospitals and Healthcare Facilities"
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

            {/* Standards and Compliances */}
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "Security Screening Standards",
                  "IEC Safety Standards",
                  "Data Protection and Privacy Guidelines",
                  "Local Security and Building Regulations"
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
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Shield,
              title: "Stronger Entry Control",
              description: "Monitor and manage all entry points to prevent unauthorized access."
            },
            {
              icon: Eye,
              title: "Efficient Screening",
              description: "Check visitors and belongings quickly without creating delays."
            },
            {
              icon: Zap,
              title: "Complete Visibility",
              description: "Maintain records and monitor activity at all entrances in real time."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Secure Every Entry Point</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Set up a reliable entrance security system to protect your people and premises.
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

export default EntranceSecurity;
