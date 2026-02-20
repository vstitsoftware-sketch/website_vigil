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
            Smart access management for secure and controlled entry to facilities.
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
                Our access control systems provide intelligent entry management for buildings, rooms, and restricted areas. Using modern authentication methods, we ensure only authorized personnel can access sensitive areas while maintaining complete audit trails.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From card readers and biometrics to mobile credentials, our solutions offer flexibility and security for every access scenario.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">System Features</h2>
              <div className="space-y-4">
                {[
                  "Multiple credential types (card, PIN, biometric)",
                  "Door lock control and monitoring",
                  "Elevator access integration",
                  "Time-based access rules",
                  "Visitor management",
                  "Real-time access reporting",
                  "Mobile app access control",
                  "Emergency override capabilities"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Authentication Methods</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Access Cards/Badges",
                  "Biometric Recognition",
                  "PIN/Passcodes",
                  "Mobile Credentials",
                  "Multi-factor Auth",
                  "Hybrid Systems"
                ].map((method) => (
                  <li key={method} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{method}</span>
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
              icon: Shield,
              title: "Enhanced Security",
              description: "Control and monitor who enters your facility at all times"
            },
            {
              icon: Users,
              title: "User Management",
              description: "Easily add, remove, or modify access privileges for employees"
            },
            {
              icon: Zap,
              title: "Audit Trail",
              description: "Track all access events for security and compliance purposes"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Control Access with Confidence</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Implement our access control system to secure your facilities and manage entry intelligently.
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
