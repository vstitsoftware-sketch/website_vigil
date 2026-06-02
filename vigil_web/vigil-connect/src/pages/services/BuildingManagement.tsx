import { Building2, ArrowLeft, CheckCircle2, Zap, Thermometer, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";
import ServiceHero from "@/components/ServiceHero";

const BuildingManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
         <ServiceHero
           title="Building Management System"
           description="Integrated smart building management for HVAC, lighting, energy, and facility operations to improve efficiency and occupant comfort."
           image="/services_hero_posters/building-management-and-elv.png"
           menu={<ServicePageMenu />}
         />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Overview */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our building management and ELV systems bring together all essential building functions into one easy-to-manage platform. This includes systems like HVAC, lighting, security, fire alarms, and access control, allowing you to monitor and control everything from a central interface.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                By connecting these systems, you can improve energy usage, reduce manual intervention, and maintain better control over your facility. It also helps in identifying issues early and responding quickly when needed.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These solutions are suitable for commercial buildings, offices, hospitals, and large facilities where managing multiple systems separately can be difficult and inefficient.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "HVAC and Temperature Control Systems",
                  "Lighting Automation and Control",
                  "Access Control and Security Integration",
                  "CCTV and Surveillance Systems",
                  "Centralized Monitoring and Control Platform"
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
                  "Commercial Buildings and Offices",
                  "Hospitals and Healthcare Facilities",
                  "Hotels and Hospitality",
                  "Shopping Malls and Retail Spaces",
                  "Industrial and Manufacturing Units",
                  "Educational Institutions"
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

            {/* Standards and Compliances */}
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "IEC Standards",
                  "ISO 50001 (Energy Management)",
                  "Fire and Safety Regulations",
                  "Building and Electrical Safety Codes"
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
              icon: Zap,
              title: "Centralized Control",
              description: "Manage multiple building systems from one place, making operations simpler and more efficient."
            },
            {
              icon: Lightbulb,
              title: "Energy Efficiency",
              description: "Monitor and optimize energy usage to reduce waste and lower operating costs."
            },
            {
              icon: Thermometer,
              title: "Improved Comfort",
              description: "Maintain better control over lighting, temperature, and environment for occupants."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Make Your Building Smarter</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Use integrated systems to improve control, efficiency, and overall building performance.
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
