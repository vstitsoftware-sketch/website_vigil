import { MapPin, ArrowLeft, CheckCircle2, MapIcon, Zap, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VehicleTracking = () => {
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
              <MapPin className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Vehicle Tracking Systems</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Real-time GPS tracking and fleet management for transportation efficiency.
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
                Our vehicle tracking systems provide real-time GPS location monitoring and comprehensive fleet management solutions. Track your vehicles, optimize routes, and improve operational efficiency with our advanced tracking technology.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether managing a small fleet or a large transportation network, our systems deliver the insights you need to make smarter decisions and reduce costs.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Tracking Features</h2>
              <div className="space-y-4">
                {[
                  "Real-time GPS location tracking",
                  "Historical trip data and reporting",
                  "Route optimization algorithms",
                  "Geofencing and boundary alerts",
                  "Driver behavior monitoring",
                  "Fuel consumption tracking",
                  "Maintenance scheduling",
                  "Mobile and web dashboard access"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Fleet Types</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Delivery Fleets",
                  "Taxi & Rideshare",
                  "Logistics & Trucking",
                  "Public Transportation",
                  "Construction Vehicles",
                  "Field Service Vehicles"
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
              icon: MapIcon,
              title: "Route Optimization",
              description: "Reduce travel time and fuel costs with intelligent route planning"
            },
            {
              icon: Zap,
              title: "Real-time Visibility",
              description: "Monitor fleet location and status with live tracking dashboard"
            },
            {
              icon: BarChart,
              title: "Data Analytics",
              description: "Gain insights into fleet performance and identify improvement areas"
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Optimize Your Fleet Operations</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Implement our vehicle tracking system to improve efficiency and reduce operational costs.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleTracking;
