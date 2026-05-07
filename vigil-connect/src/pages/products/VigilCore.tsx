import { ArrowLeft, Server, CheckCircle2, AlertTriangle, Activity, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VigilCore = () => {
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
              <Server className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Vigil Core — ERP Suite</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            A modular ERP platform that unifies finance, inventory, HR, and CRM.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Overview */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Vigil Core is a placeholder overview for the ERP suite. This section mirrors the services layout and contains dummy content and image placeholders where product visuals will be added later.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The real product page will include detailed modules, deployment options, and case studies. For now, this area is for layout testing and review.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "Core Accounting Engine",
                  "Inventory & Order Management",
                  "HR & Payroll Modules",
                  "Reporting & Analytics",
                  "APIs & Integrations"
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
            <div className="mb-6">
              <div className="bg-accent/10 rounded-2xl p-8 mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "SMBs",
                    "E-commerce",
                    "Manufacturing",
                    "Logistics",
                    "Healthcare"
                  ].map((industry) => (
                    <li key={industry} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-accent rounded-full" />
                      <span className="text-foreground">{industry}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link to="/#contact">
                    <Button variant="accent" size="lg" className="w-full">Contact Sales</Button>
                  </Link>
                </div>
              </div>

              <div className="bg-accent/10 rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
                <ul className="space-y-3">
                  {[
                    "ISO-ready integrations",
                    "GDPR-friendly data handling",
                    "SOC-type controls",
                    "Custom SLAs"
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
        </div>

        {/* Benefits with image placeholders above each tile */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: AlertTriangle,
              title: "Scalable Architecture",
              description: "Designed to scale with your business needs and transaction volume.",
              img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
            },
            {
              icon: Activity,
              title: "Reliable Operations",
              description: "High-availability deployments and monitoring ensure uptime.",
              img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            },
            {
              icon: Shield,
              title: "Secure by Design",
              description: "Built-in security controls and best-practice compliance features.",
              img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
            }
          ].map((benefit) => (
            <div key={benefit.title} className="bg-card rounded-2xl shadow-soft overflow-hidden flex flex-col">
              <img src={benefit.img} alt={benefit.title} className="w-full h-60 object-cover" />
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

        {/* Video Demo Placeholder */}
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
        </div>

        {/* CTA Section */}
        <div className="bg-accent/10 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Explore Vigil Core for Your Organization</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            This is placeholder content. Replace with product details and customer stories when available.
          </p>
          <Link to="/#contact">
            <Button variant="accent" size="lg">Request a Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VigilCore;
