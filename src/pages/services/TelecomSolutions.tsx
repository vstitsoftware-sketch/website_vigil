import { Wifi, ArrowLeft, CheckCircle2, Zap, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TelecomSolutions = () => {
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
              <Wifi className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Telecom Solutions</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Modern telecommunications infrastructure for seamless connectivity and communication.
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
                Our telecom solutions deliver robust, scalable telecommunications infrastructure for enterprises of all sizes. We provide comprehensive connectivity solutions that keep your organization connected and productive.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From network design to implementation and maintenance, we ensure reliable communication channels for your business operations.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Solutions Offered</h2>
              <div className="space-y-4">
                {[
                  "Enterprise VoIP systems",
                  "Network infrastructure design",
                  "Broadband connectivity",
                  "Private wireless networks",
                  "Unified communication solutions",
                  "Data transmission systems",
                  "Redundancy and disaster recovery",
                  "24/7 technical support"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Technology Stack</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "5G Ready Infrastructure",
                  "Fiber Optic Networks",
                  "Cloud Integration",
                  "IoT Enabled",
                  "Scalable Systems",
                  "Enterprise Grade"
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{tech}</span>
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
              icon: Globe,
              title: "Global Connectivity",
              description: "Connect with teams and customers worldwide with reliable networks"
            },
            {
              icon: Zap,
              title: "High Performance",
              description: "Low latency and high-speed connectivity for optimal productivity"
            },
            {
              icon: Smartphone,
              title: "Mobile Ready",
              description: "Seamless integration with mobile devices and remote work solutions"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Connect Your Business Today</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let our telecom experts design a connectivity solution that matches your organization's needs.
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

export default TelecomSolutions;
