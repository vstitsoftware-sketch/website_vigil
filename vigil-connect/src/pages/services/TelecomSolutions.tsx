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
            Scalable and reliable communication infrastructure designed to keep your enterprise connected, productive, and future-ready.
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
                Our telecom solutions provide end-to-end communication infrastructure tailored to modern enterprise demands. From high-performance voice systems, including EPBX and intercom solutions, to resilient data networks, we design and deploy systems that ensure seamless connectivity across your organization.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We handle the complete lifecycle—from network design and implementation to ongoing monitoring and maintenance—ensuring high availability and consistent performance. Our EPBX systems enable efficient internal and external communication management, while intercom solutions enhance on-site coordination and security across facilities.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built with scalability and reliability at the core, our solutions incorporate redundancy and failover mechanisms to maintain uninterrupted communication, even in critical or high-demand environments.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Enterprise VoIP & EPBX Systems",
                  "Intercom & Internal Communication Systems",
                  "Network Infrastructure Design & Deployment",
                  "Broadband & Dedicated Connectivity Solutions",
                  "Unified Communication Platforms"
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
                  "IT & Corporate Enterprises",
                  "Manufacturing & Industrial Units",
                  "Healthcare & Hospitals",
                  "Educational Institutions",
                  "Retail & Multi-Location Businesses",
                  "Logistics & Warehousing"
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
                  "TRAI Regulations (India Telecom Standards)",
                  "ITU-T Communication Standards",
                  "ISO/IEC Network Security Standards",
                  "Data Protection & Compliance Guidelines"
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
              icon: Globe,
              title: "Seamless Connectivity",
              description: "Ensure uninterrupted communication across teams, locations, and devices with high-performance network infrastructure."
            },
            {
              icon: Zap,
              title: "Scalable Architecture",
              description: "Flexible telecom systems designed to grow with your business without major infrastructure changes."
            },
            {
              icon: Smartphone,
              title: "High Reliability",
              description: "Built-in redundancy and failover mechanisms ensure continuous operations even during network disruptions."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Upgrade Your Communication Infrastructure</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Deploy reliable, scalable telecom solutions that keep your business connected and operational at all times.
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
