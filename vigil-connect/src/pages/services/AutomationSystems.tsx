import { Zap, ArrowLeft, CheckCircle2, BarChart, Cog, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";

const AutomationSystems = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <ServicePageMenu />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Zap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Automation Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Intelligent automation solutions that streamline operations, enhance efficiency, and enable real-time control across your organization.
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
                Our automation systems convert manual and repetitive processes into intelligent, data-driven workflows that improve operational efficiency and accuracy. By integrating advanced control systems, IoT technologies, and analytics, we help organizations optimize performance while reducing human intervention and operational costs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We design and implement automation solutions across industrial, commercial, and enterprise environments—tailored to your specific processes and scalability requirements. This includes building-level automation such as lighting control, as well as access and structural automation like automated gates and motorized roof systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From initial system design to deployment and ongoing support, we ensure seamless integration with your existing infrastructure. With real-time monitoring and centralized control, our solutions empower you to make faster, more informed decisions while maintaining consistency and reliability in operations.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Industrial Process Automation Systems",
                  "Building Management & Control Systems (BMS)",
                  "Lighting Automation Systems (Smart & Energy-Efficient Control)",
                  "Gate & Access Automation Systems",
                  "Roof & Structural Automation Systems (Motorized Control)"
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
                  "Manufacturing & Industrial Plants",
                  "Commercial Buildings & Smart Facilities",
                  "Energy & Utilities",
                  "Warehousing & Logistics",
                  "Healthcare Facilities",
                  "IT & Corporate Offices"
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
                  "IEC (International Electrotechnical Commission) Standards",
                  "ISO 9001 (Quality Management Systems)",
                  "ISO/IEC 27001 (Information Security for Automation Systems)",
                  "Industry-Specific Safety & Control Regulations"
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
              icon: BarChart,
              title: "Operational Efficiency",
              description: "Automate repetitive tasks and optimize workflows to increase productivity and reduce manual effort."
            },
            {
              icon: Cog,
              title: "Real-Time Control",
              description: "Monitor and manage systems—including lighting, access, and infrastructure—through centralized dashboards and intelligent controls."
            },
            {
              icon: TrendingUp,
              title: "Cost Optimization",
              description: "Reduce operational costs through energy-efficient automation, predictive maintenance, and minimized downtime."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transform Your Operations with Automation</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Implement intelligent automation systems—from process control to smart infrastructure—that enhance efficiency, accuracy, and control across your business.
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

export default AutomationSystems;
