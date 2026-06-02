import { Flame, ArrowLeft, CheckCircle2, AlertTriangle, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";
import ServiceHero from "@/components/ServiceHero";

const FireFighting = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ServiceHero
        title="Fire Fighting Systems"
        description="End-to-end fire protection solutions—from early detection and alarm systems to advanced suppression—engineered to safeguard lives, assets, and operations while meeting stringent safety standards."
        image="/services_hero_posters/fire-fighting-system.png"
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
                Our fire fighting systems deliver comprehensive protection by integrating detection, alarm, and suppression technologies into a unified safety framework. Each system is carefully engineered based on your facility's layout, risk profile, and operational requirements, ensuring rapid response in the event of a fire incident.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We provide complete lifecycle support—including design, installation, testing, and maintenance—ensuring your fire protection infrastructure remains reliable and compliant at all times. Our solutions are built to minimize downtime, reduce property damage, and most importantly, protect human life.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                All systems are designed in accordance with recognized international and local fire safety standards, ensuring regulatory compliance and long-term operational resilience.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Fire Detection Systems (Smoke, Heat, and Flame Detectors)",
                  "Fire Alarm & Notification Systems (Audible and Visual Alerts)",
                  "Automatic Sprinkler Systems",
                  "Hydrant & Hose Reel Systems",
                  "Fire Suppression Systems (Gas-based, Foam, or Water Mist)"
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
                  "Manufacturing & Industrial Facilities",
                  "Commercial Buildings & Offices",
                  "Warehouses & Logistics Hubs",
                  "Hospitals & Healthcare Facilities",
                  "Educational Institutions",
                  "Retail & Shopping Complexes"
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
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "NFPA (National Fire Protection Association) Standards",
                  "NBC (National Building Code of India)",
                  "IS Codes (Bureau of Indian Standards)",
                  "Local Fire Authority Regulations"
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
              icon: AlertTriangle,
              title: "Rapid Fire Detection",
              description: "Early warning systems detect fire hazards instantly, enabling faster response times and reducing the risk of escalation."
            },
            {
              icon: Shield,
              title: "Comprehensive Protection",
              description: "Integrated detection and suppression systems ensure complete coverage, minimizing damage to property and infrastructure."
            },
            {
              icon: Activity,
              title: "Regulatory Compliance",
              description: "Systems designed to meet national and international standards help you stay compliant and audit-ready at all times."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ensure Complete Fire Safety for Your Facility</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Protect your people, property, and operations with a fully compliant fire fighting system tailored to your needs.
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

export default FireFighting;
