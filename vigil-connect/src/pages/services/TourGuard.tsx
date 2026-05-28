import { Footprints, ArrowLeft, CheckCircle2, Users, MapIcon, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";

const TourGuard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <ServicePageMenu />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Footprints className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Tour Guard System</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Automated patrol monitoring to track guard activity and ensure every checkpoint is covered.
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
                Our Tour Guard System helps you monitor and verify security patrols without relying on manual logs. Guards follow predefined routes and scan checkpoints using handheld devices or mobile apps, making it easy to confirm that every round is completed properly.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The system gives you real-time visibility into guard movements, missed checkpoints, and delays. This improves accountability and helps supervisors take quick action if something is not followed as planned.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                It is especially useful for large facilities where regular patrols are critical for safety and security.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Patrol Checkpoint Tags or Sensors",
                  "Handheld or Mobile Checkpoint Readers",
                  "Scheduled Patrol Route Management",
                  "Guard Identification and Tracking",
                  "Reporting and Monitoring Dashboard"
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
                  "Warehouses and Logistics",
                  "Hospitals and Healthcare Facilities",
                  "Residential Complexes",
                  "Shopping Malls and Retail Spaces"
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
                  "Security Operations Guidelines",
                  "Workplace Safety Regulations",
                  "Data Logging and Reporting Standards",
                  "Facility Management Compliance"
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
              icon: Users,
              title: "Better Accountability",
              description: "Make sure guards complete their rounds and follow assigned routes properly."
            },
            {
              icon: MapIcon,
              title: "Real-Time Tracking",
              description: "Monitor patrol activity instantly and identify missed checkpoints or delays."
            },
            {
              icon: BarChart,
              title: "Accurate Records",
              description: "Maintain clear and reliable patrol reports without manual paperwork."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Improve Your Security Patrol System</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Track and manage guard activity more effectively with an automated tour guard system.
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

export default TourGuard;
