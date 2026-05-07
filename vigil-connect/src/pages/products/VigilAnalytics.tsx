import { useEffect } from "react";
import {
  ArrowLeft,
  MonitorPlay,
  CheckCircle2,
  Shield,
  Activity,
  FileText,
  BookOpen,
  Camera,
  Lock,
  Search,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const setMetaTag = (name: string, content: string, property = false) => {
  const key = property ? "property" : "name";
  let tag = document.querySelector(`meta[${key}='${name}']`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const VigilVMS = () => {
  useEffect(() => {
    document.title = "Vigil VMS | Enterprise Video Management System";
    setMetaTag("description", "Secure enterprise-grade video management system for surveillance, monitoring, compliance, and air-gapped deployments.");
    setMetaTag("og:title", "Vigil VMS Enterprise Surveillance Platform", true);
    setMetaTag(
      "og:description",
      "Advanced VMS platform with secure monitoring, audit logging, camera health analytics, and offline enterprise deployment support.",
      true,
    );
  }, []);

  const highlightTiles = [
    {
      icon: Shield,
      title: "Air-Gapped Security",
      description: "Designed for fully offline and high-security surveillance environments.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      alt: "Secure offline surveillance control center dashboard",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Monitor camera health, alerts, and incidents from one platform.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      alt: "Enterprise surveillance monitoring interface with live camera feeds",
    },
    {
      icon: FileText,
      title: "Compliance Ready Operations",
      description: "Detailed audit trails and operator accountability for secure investigations.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      alt: "Audit logs and incident investigation workflow screen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Link to="/#products" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <MonitorPlay className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Vigil VMS</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Enterprise-grade video management built for secure and mission-critical surveillance operations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Vigil VMS provides a unified surveillance ecosystem for managing live video feeds, recording operations,
                incident tracking, operator activity, and infrastructure health across enterprise deployments. The platform
                is engineered to support high-security environments where uptime, auditability, and operational accountability are critical.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Designed with an air-gapped architecture and server-authoritative security model, Vigil VMS enables organizations
                to maintain complete control over surveillance infrastructure while ensuring compliance, tamper resistance,
                and long-term operational stability.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Central Monitoring Console",
                    icon: Camera,
                    short_desc: "Unified dashboard for live monitoring, playback, alerts, and surveillance operations.",
                  },
                  {
                    name: "License Management Engine",
                    icon: Lock,
                    short_desc: "Secure offline licensing with tamper detection, grace-period handling, and entitlement enforcement.",
                  },
                  {
                    name: "Camera Health Analytics",
                    icon: Activity,
                    short_desc: "Real-time monitoring of camera connectivity, bitrate, recording status, and stream performance.",
                  },
                  {
                    name: "Audit & Activity Logging",
                    icon: FileText,
                    short_desc: "Comprehensive operator and system event tracking for compliance and forensic investigations.",
                  },
                  {
                    name: "Incident Bookmarking",
                    icon: BookOpen,
                    short_desc: "Timeline-based event tagging and incident annotation for rapid investigation workflows.",
                  },
                  {
                    name: "Security Enforcement Gateway",
                    icon: Shield,
                    short_desc: "Server-side access control and policy enforcement across all surveillance operations.",
                  },
                ].map((feature) => (
                  <div key={feature.name} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-foreground text-lg font-semibold">{feature.name}</h3>
                      <p className="text-muted-foreground">{feature.short_desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-accent/10 rounded-2xl p-8 mb-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Government Facilities",
                  "Smart Cities",
                  "Transportation",
                  "Manufacturing",
                  "Critical Infrastructure",
                  "Enterprise Campuses",
                  "Utilities",
                  "Defense Operations",
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{industry}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-muted-foreground mb-4">Deploy secure and scalable surveillance infrastructure with Vigil VMS.</p>
                <Link to="/contact">
                  <Button variant="accent" size="lg" className="w-full">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "ONVIF Compatibility",
                  "Audit Logging Standards",
                  "VAPT Ready Architecture",
                  "Secure Offline Deployment",
                  "Role-Based Access Control",
                  "Tamper Detection Compliance",
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlightTiles.map((benefit) => (
            <div key={benefit.title} className="bg-card rounded-2xl shadow-soft overflow-hidden flex flex-col">
              <img src={benefit.img} alt={benefit.alt} className="w-full h-60 object-cover" />
              <div className="p-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <benefit.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Product Demo</h3>
          <div className="mx-auto max-w-2xl">
            <div className="aspect-video">
              <video controls className="w-full h-full rounded-lg bg-black">
                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-muted-foreground mt-4 text-center">
            Explore centralized monitoring, incident management, and secure surveillance workflows in Vigil VMS.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 mb-12 shadow-soft">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Downloads</h3>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Vigil_VMS_Brochure.pdf — Product overview and deployment capabilities",
              "Vigil_VMS_Security_Overview.pdf — Security architecture and compliance features",
              "Vigil_VMS_Deployment_Guide.pdf — Enterprise deployment and infrastructure guidelines",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ClipboardList className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Modernize Your Surveillance Operations</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Empower your organization with a secure, scalable, and enterprise-ready video management platform built for mission-critical environments. Connect with our team to explore deployment options and live product demonstrations.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VigilVMS;
