import { useEffect } from "react";
import { ArrowLeft, Shield, Activity, Database, Cpu, Lock, FileText, Zap, Camera, AlertTriangle } from "lucide-react";
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

const VigilITMS = () => {
  useEffect(() => {
    document.title = "Vigil ITMS | Smart Traffic Monitoring Platform";
    setMetaTag(
      "description",
      "Vigil ITMS is an intelligent traffic monitoring and violation management platform designed for modern cities and highways. Monitor traffic in real time, detect violations instantly, and manage enforcement operations from a centralized dashboard.",
    );
    setMetaTag("og:title", "Vigil ITMS Smart Traffic Enforcement Platform", true);
    setMetaTag(
      "og:description",
      "Transform traffic operations with AI-powered monitoring, live alerts, centralized visibility, and intelligent enforcement workflows designed for smart mobility ecosystems.",
      true,
    );
  }, []);

  const highlightTiles = [
    {
      icon: Activity,
      title: "Live Visibility",
      description: "Gain complete real-time visibility into traffic activity and violations across all monitored locations.",
      img: "/product_images/ITMS_dashboard.jpeg",
      alt: "Modern traffic operations center with live monitoring screens",
    },
    {
      icon: Camera,
      title: "Intelligent Violation Capture",
      description: "Capture and classify traffic violations instantly using camera-based ANPR and helmet detection.",
      img: "/product_images/1.jpg",
      alt: "Traffic camera view with vehicle detection and violation overlays",
    },
    {
      icon: AlertTriangle,
      title: "Violation Review Dashboard",
      description: "Investigate and manage live violation alerts through a searchable command center interface.",
      img: "/product_images/live_violations.jpeg",
      alt: "Control center dashboard showing camera-detected violations and alerts",
    },
  ];

  const keyComponents = [
    {
      name: "Live Traffic Dashboard",
      icon: Activity,
      short_desc: "Monitor traffic events, violations, and camera activity in real time from a centralized interface.",
    },
    {
      name: "Intelligent Violation Detection",
      icon: Cpu,
      short_desc: "Automatically identify unsafe driving behaviors and traffic violations instantly.",
    },
    {
      name: "Real-Time Alerts",
      icon: Database,
      short_desc: "Receive instant notifications for violations and critical traffic incidents as they occur.",
    },
    {
      name: "Camera Monitoring",
      icon: Shield,
      short_desc: "Track camera health, activity, and operational status across multiple locations.",
    },
    {
      name: "Analytics & Reporting",
      icon: FileText,
      short_desc: "Generate actionable insights through traffic trends, violation statistics, and operational reports.",
    },
    {
      name: "Automated Enforcement Workflow",
      icon: Zap,
      short_desc: "Simplify violation review, challan management, and enforcement operations through streamlined workflows.",
    },
  ];

  const industries = [
    "Smart Cities",
    "Highway & Traffic Authorities",
    "Law Enforcement Agencies",
    "Transportation Infrastructure",
    "Public Safety Departments",
    "Municipal Governance",
  ];

  const standards = [
    "Secure Data Transmission",
    "Encrypted Communication Channels",
    "Centralized Audit Visibility",
    "High Availability System Design",
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
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Vigil ITMS</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Real time AI powered Intelligent Traffic Managent System
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Vigil ITMS is an intelligent traffic management platform designed for real-time traffic monitoring, automated violation detection, and centralized operational control. Built for smart cities, highways, and transportation authorities, it helps teams monitor traffic activity live, respond to incidents faster, and improve road safety through a unified dashboard experience.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The platform can detect violations such as mobile phone usage while driving, seatbelt violations, overspeeding, and unauthorized license plates in real time. Combined with live monitoring, instant alerts, analytics, and streamlined enforcement workflows, Vigil ITMS enables organizations to improve compliance, enhance operational efficiency, and create safer road environments at scale.
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
              <img src={benefit.img} alt={benefit.alt} className="w-full h-60 object-contain bg-muted" />
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

        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transform Traffic Operations with Real-Time AI Intelligence</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Vigil ITMS combines edge AI, secure networking, and real-time operational visibility into a single intelligent traffic management platform. Empower your city, highway, or enforcement infrastructure with scalable traffic intelligence designed for modern smart mobility environments.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VigilITMS;
