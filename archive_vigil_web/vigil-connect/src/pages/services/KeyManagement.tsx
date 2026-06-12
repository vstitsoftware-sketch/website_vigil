import { Key, ArrowLeft, CheckCircle2, Lock, Shield, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";
import ServiceHero from "@/components/ServiceHero";

const KeyManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ServiceHero
        title="Key Management Systems"
        description="Secure and organized control of keys and access credentials across your facility."
        image="/services_hero_posters/key-management.png"
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
                Our key management systems help you keep track of all physical keys and control who can access them. Instead of manual registers or unsecured storage, keys are stored in secure cabinets with controlled access.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The system records every key issue and return, so you always know who has taken a key and when it was used. This improves accountability and reduces the risk of loss or misuse.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                It is especially useful for facilities with multiple access points, shared equipment, or high-security areas where proper key control is important.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Secure Key Storage Cabinets",
                  "Automated Key Issue and Return System",
                  "Access Control and Authorization Settings",
                  "Key Usage Logs and Audit Trails",
                  "Monitoring and Reporting Dashboard"
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
                  "Industrial and Manufacturing Units",
                  "Commercial Buildings and Offices",
                  "Hotels and Hospitality",
                  "Hospitals and Healthcare Facilities",
                  "Warehouses and Logistics",
                  "Government and High-Security Facilities"
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
                  "Security Management Guidelines",
                  "Access Control and Audit Standards",
                  "Data Logging and Reporting Requirements",
                  "Facility Safety Regulations"
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
              icon: Lock,
              title: "Better Control",
              description: "Know exactly who has access to each key and avoid unauthorized usage."
            },
            {
              icon: Shield,
              title: "Improved Security",
              description: "Reduce the risk of lost or misused keys with secure storage and tracking."
            },
            {
              icon: BarChart,
              title: "Clear Records",
              description: "Maintain complete logs of key usage for audits and internal tracking."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Take Control of Your Key Management</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Manage keys securely and improve accountability across your facility.
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

export default KeyManagement;
