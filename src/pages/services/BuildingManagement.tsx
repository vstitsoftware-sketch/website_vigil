import { Building2, ArrowLeft, CheckCircle2, Zap, Thermometer, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BuildingManagement = () => {
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
              <Building2 className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Building Management & ELV Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Integrated building automation and extra-low voltage systems for smart facilities.
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
                Our building management and ELV (Extra-Low Voltage) systems integrate all critical building functions into a unified control platform. From HVAC and lighting to security and fire safety, we manage every aspect of your facility's infrastructure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Create smart, efficient buildings that optimize energy consumption, enhance occupant comfort, and improve operational management.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">System Components</h2>
              <div className="space-y-4">
                {[
                  "HVAC & temperature control",
                  "Lighting automation & control",
                  "Access control integration",
                  "CCTV & surveillance systems",
                  "Fire alarm systems",
                  "Energy monitoring & management",
                  "Elevator management",
                  "Centralized control & monitoring"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Building Types</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Corporate Offices",
                  "Shopping Centers",
                  "Residential Complexes",
                  "Hospitals",
                  "Hotels & Hospitality",
                  "Industrial Facilities"
                ].map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{type}</span>
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
              icon: Lightbulb,
              title: "Energy Efficiency",
              description: "Reduce energy consumption with intelligent automation and monitoring"
            },
            {
              icon: Thermometer,
              title: "Occupant Comfort",
              description: "Maintain optimal temperature and lighting for maximum comfort"
            },
            {
              icon: Zap,
              title: "Smart Integration",
              description: "Unified control of all building systems from a single platform"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Create Your Smart Building</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let our experts design an integrated building management system tailored to your facility's needs.
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

export default BuildingManagement;
