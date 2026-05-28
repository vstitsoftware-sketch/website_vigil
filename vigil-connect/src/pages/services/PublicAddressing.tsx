import { AlertTriangle, ArrowLeft, CheckCircle2, Volume2, Radio, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";

const PublicAddressing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <ServicePageMenu />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Public Addressing System</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Reliable audio systems for clear announcements and quick communication across your facility.
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
                Our public addressing systems are designed to deliver clear and consistent audio for both daily announcements and emergency situations. Whether it is routine communication or urgent alerts, the system ensures messages are heard across all required areas without confusion.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We design and install PA systems based on your facility layout, coverage needs, and usage type. From offices and campuses to transport hubs and large public spaces, the setup is planned to provide even sound distribution and dependable performance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These systems can also be integrated with fire alarms and safety systems, so important alerts are automatically broadcast when needed.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Multi-Zone Announcement Systems",
                  "High-Quality Speakers and Amplifiers",
                  "Centralized Control Console",
                  "Emergency Override System",
                  "Alarm and Safety System Integration"
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
                  "Airports and Transport Facilities",
                  "Commercial Buildings and Offices",
                  "Schools and Colleges",
                  "Hospitals and Healthcare",
                  "Shopping Malls and Retail Spaces",
                  "Warehouses and Industrial Units"
                ].map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{app}</span>
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
                  "IEC Audio and Safety Standards",
                  "Fire Safety Integration Guidelines",
                  "Local Safety and Building Regulations",
                  "Emergency Communication Compliance"
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
              icon: Volume2,
              title: "Clear Communication",
              description: "Make sure announcements are heard clearly across all areas without distortion or gaps."
            },
            {
              icon: Radio,
              title: "Emergency Ready",
              description: "Deliver instant alerts during emergencies with systems that support priority broadcasting."
            },
            {
              icon: Users,
              title: "Wide Coverage",
              description: "Reach different zones or specific areas with targeted announcements when needed."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Improve Communication Across Your Facility</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Set up a reliable public addressing system for daily use and emergency situations.
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

export default PublicAddressing;
