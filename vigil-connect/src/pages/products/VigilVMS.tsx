import { useEffect } from "react";
import { ArrowLeft, Shield, Activity, Database, Cpu, Lock, FileText, ClipboardList, Zap, Download, Camera, MonitorPlay } from "lucide-react";
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
    setMetaTag(
      "description",
      "Vigil VMS is an enterprise-grade video management system for centralized surveillance monitoring, recording, playback, AI analytics, and event management through a unified platform.",
    );
    setMetaTag("og:title", "Vigil VMS Enterprise Video Management System", true);
    setMetaTag(
      "og:description",
      "Secure enterprise-grade video management for surveillance, compliance, and offline deployments with multi-site monitoring and role-based access control.",
      true,
    );
  }, []);

  const highlightTiles = [
    {
      icon: MonitorPlay,
      title: "Live Monitoring",
      description: "Monitor multiple cameras simultaneously with real-time live view and instant alert notifications.",
      img: "/product_images/VMS_dashboard.jpeg",
      alt: "Live video monitoring dashboard with multiple camera feeds",
    },
    {
      icon: Cpu,
      title: "AI Analytics",
      description: "Detect persons, vehicles, animals, fire detection, and zone intrusions with intelligent AI analytics.",
      img: "/product_images/AI_analytics (2).jpeg",
      alt: "AI-powered analytics and threat detection",
    },
    {
      icon: Camera,
      title: "Playback & Incident Management",
      description: "Intuitive interface for reviewing footage, bookmarking incidents, and generating reports.",
      img: "/product_images/playback.jpeg",
      alt: "Playback interface for reviewing recorded surveillance footage",
    },
  ];

  const keyComponents = [
    {
      name: "Camera Discovery & Onboarding",
      icon: Activity,
      short_desc: "Automatic network scanning and bulk camera import for quick and easy deployment.",
    },
    {
      name: "Recording & Playback",
      icon: Database,
      short_desc: "Multiple recording modes including manual, scheduled, continuous, and priority-based recording.",
    },
    {
      name: "AI Analytics",
      icon: Cpu,
      short_desc: "Person detection, vehicle detection, animal detection, fire detection, and zone intrusion detection.",
    },
    {
      name: "Event Management",
      icon: Zap,
      short_desc: "Automated event detection with intelligent alerting and bookmark capabilities for investigations.",
    },
    {
      name: "Role-Based Access Control",
      icon: Lock,
      short_desc: "Granular user permissions with administrator, operator, and viewer roles for secure access.",
    },
    {
      name: "Cloud Backup Integration",
      icon: Shield,
      short_desc: "Amazon S3 and S3-compatible storage support for remote backup and disaster recovery.",
    },
  ];

  const industries = [
    "Commercial Enterprises",
    "Financial Institutions",
    "Healthcare Facilities",
    "Retail & Logistics",
    "Government & Public Sector",
    "Manufacturing & Industrial",
  ];

  const standards = [
    "Secure Authentication",
    "Role-Based Access Control",
    "Encrypted Data Transmission",
    "Multi-Site Monitoring Capability",
  ];

  const downloads = [
    {
      filename: "Vigil_VMS_User_Manual.pdf",
      desc: "Complete user manual covering system setup, configuration, and operation.",
      icon: Download,
      url: "/downloads/Vigil_VMS_User_Manual.pdf",
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
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Vigil VMS</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Enterprise Video Management System
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Vigil VMS is an intelligent Video Management System designed to provide centralized surveillance monitoring, recording, playback, AI-powered analytics, and event management through a unified platform. Built for commercial enterprises, financial institutions, and government organizations, it enables secure surveillance with role-based access control and comprehensive audit logging.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The platform supports IP cameras, NVRs, RTSP streams, cloud backup integration, multi-site monitoring, and advanced AI analytics. Combined with flexible storage options, intelligent alerting, and offline licensing capabilities, Vigil VMS delivers enterprise-grade surveillance solution designed for organizations of all sizes seeking secure, scalable video management.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {keyComponents.map((feature) => (
                  <div key={feature.name} className="flex items-start gap-4">
                    <feature.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
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
                {industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{industry}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
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
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{s}</span>
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

        <div className="bg-card rounded-2xl p-8 mb-12 shadow-soft">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Downloads</h3>
          <div className="space-y-4">
            {downloads.map((d) => (
              <div key={d.filename} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors">
                <div className="flex items-start gap-3">
                  <d.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">{d.filename}</p>
                    <p className="text-muted-foreground text-sm">{d.desc}</p>
                  </div>
                </div>
                <a href={d.url} download target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transform Your Surveillance Operations</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Vigil VMS combines enterprise-grade security, AI-powered analytics, flexible storage, and comprehensive management into a single intelligent surveillance platform. Empower your organization with scalable video management designed for modern security requirements.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VigilVMS;
