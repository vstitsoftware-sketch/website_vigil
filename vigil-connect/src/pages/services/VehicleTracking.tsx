import { MapPin, ArrowLeft, CheckCircle2, MapIcon, Zap, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";
import ServiceHero from "@/components/ServiceHero";

const VehicleTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ServiceHero
        title="Vehicle Tracking Systems"
        description="Real-time GPS tracking solutions to monitor vehicles, manage fleets, and improve operational efficiency."
        image="/services_hero_posters/Vehicle_tracking.png"
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
                Our vehicle tracking systems help you monitor your fleet in real time and stay in control of day-to-day operations. Using GPS technology, you can track vehicle locations, view trip history, and ensure everything is running as planned.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The system is designed for businesses of all sizes, whether you manage a few vehicles or a large fleet. It helps improve route planning, reduce unnecessary fuel usage, and keep track of driver activity.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With access through mobile and web dashboards, you can check updates anytime and make quick decisions based on accurate, real-time data.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "GPS-Based Vehicle Tracking Devices",
                  "Real-Time Monitoring Dashboard",
                  "Trip History and Reporting System",
                  "Geofencing and Alert System",
                  "Driver Behavior and Performance Monitoring"
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
                  "Logistics and Transportation",
                  "Delivery and Courier Services",
                  "Construction and Equipment Fleets",
                  "Public Transport Operators",
                  "Corporate Fleet Management",
                  "Field Service Businesses"
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
                  "AIS 140 Compliance (India Vehicle Tracking Standard)",
                  "GPS and Telematics Standards",
                  "Data Security and Privacy Guidelines",
                  "Transport Authority Regulations"
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
              icon: MapPin,
              title: "Live Tracking",
              description: "Know the exact location of your vehicles at any time with real-time updates."
            },
            {
              icon: BarChart,
              title: "Better Fleet Control",
              description: "Monitor routes, driver activity, and usage to improve overall fleet management."
            },
            {
              icon: Zap,
              title: "Cost Savings",
              description: "Reduce fuel costs, avoid misuse, and improve efficiency with better planning."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Take Control of Your Fleet</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Track your vehicles in real time and improve efficiency across your operations.
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

export default VehicleTracking;
