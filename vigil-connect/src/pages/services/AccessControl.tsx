import { Lock, ArrowLeft, CheckCircle2, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccessControl = () => {
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
              <Lock className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Access Control Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Simple and secure access management for controlled entry across your facility.
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
                Our access control systems help you manage who can enter specific areas within your facility. Using modern authentication methods like cards, PINs, biometrics, and mobile access, you can ensure that only authorized people are allowed entry.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The system gives you full control over doors, entry points, and restricted zones. You can define access rules based on time, roles, or departments, making it easier to manage staff movement without manual supervision.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With built-in tracking and reporting, you can monitor access activity and maintain clear records for security and compliance purposes.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Card, PIN, and Biometric Access Systems",
                  "Door Lock Control and Monitoring",
                  "Time-Based Access Management",
                  "Visitor Management System",
                  "Real-Time Access Logs and Reporting"
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
                  "Offices and Corporate Buildings",
                  "Industrial and Manufacturing Units",
                  "Hospitals and Healthcare Facilities",
                  "Educational Institutions",
                  "Data Centers and IT Facilities",
                  "Residential and Gated Communities"
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{industry}</span>
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
                  "IEC Security Standards",
                  "Data Protection and Privacy Guidelines",
                  "Workplace Safety Regulations",
                  "Access Control System Compliance Standards"
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
              icon: Shield,
              title: "Controlled Access",
              description: "Ensure only authorized individuals can enter specific areas within your facility."
            },
            {
              icon: Users,
              title: "Easy Management",
              description: "Set access rules and manage permissions without manual tracking."
            },
            {
              icon: Zap,
              title: "Full Visibility",
              description: "Track entry and exit activity with detailed logs and real-time updates."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Take Control of Your Facility Access</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Manage entry points securely and efficiently with a reliable access control system.
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

export default AccessControl;
