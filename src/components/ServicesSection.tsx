import { Cog, TrendingUp, Shield, Zap, BarChart, Flame, Wifi, AlertTriangle, Clock, Tv, MapPin, Building2, Lock, Scan, Footprints, Key, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    icon: Camera,
    title: "AI Enabled CCTV Surveillance System",
    description: "Advanced surveillance solutions for manufacturing, government, healthcare, education, banking, hospitality, and more.",
    link: "/services/cctv-surveillance",
  },
  {
    icon: Flame,
    title: "Fire Fighting Systems",
    description: "Comprehensive fire safety and suppression systems to protect lives and assets.",
    link: "/services/firefighting",
  },
  {
    icon: Wifi,
    title: "Telecom Solutions",
    description: "Modern telecommunications infrastructure for seamless connectivity and communication.",
    link: "/services/telecom-solutions",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Smart automation solutions to streamline operations and increase efficiency.",
    link: "/services/automation-systems",
  },
  {
    icon: Clock,
    title: "Time Attendance & Payroll Solutions",
    description: "Streamlined workforce management and automated payroll processing.",
    link: "/services/time-attendance",
  },
  {
    icon: AlertTriangle,
    title: "Public Addressing System",
    description: "Reliable communication solutions for public announcements and emergency alerts.",
    link: "/services/public-addressing",
  },
  {
    icon: Tv,
    title: "Commercial Display & Signages",
    description: "Eye-catching digital displays and signage solutions for retail and corporate environments.",
    link: "/services/commercial-displays",
  },
  {
    icon: MapPin,
    title: "Vehicle Tracking Systems",
    description: "Real-time GPS tracking and fleet management for transportation efficiency.",
    link: "/services/vehicle-tracking",
  },
  {
    icon: Building2,
    title: "Building Management & ELV Systems",
    description: "Integrated building automation and extra-low voltage systems for smart facilities.",
    link: "/services/building-management",
  },
  {
    icon: AlertTriangle,
    title: "Intrusion Detection & Alarm Systems",
    description: "Advanced perimeter security and intrusion detection for complete protection.",
    link: "/services/intrusion-detection",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    description: "Smart access management for secure and controlled entry to facilities.",
    link: "/services/access-control",
  },
  {
    icon: Scan,
    title: "Entrance Security Systems",
    description: "Comprehensive security solutions for building entrances and checkpoints.",
    link: "/services/entrance-security",
  },
  {
    icon: Footprints,
    title: "Tour Guard System",
    description: "Automated patrol monitoring and verification system for security personnel.",
    link: "/services/tour-guard",
  },
  {
    icon: Key,
    title: "Key Management Systems",
    description: "Secure tracking and management of keys and access credentials for facilities.",
    link: "/services/key-management",
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Solutions for Every Challenge
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we provide end-to-end services that help
            businesses thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Link
              key={service.title}
              to={service.link || "#contact"}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="text-accent font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="accent" 
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less Services" : "View All Services"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
