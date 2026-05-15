import { Camera, ArrowLeft, CheckCircle2, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CCTVSurveillance = () => {
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
              <Camera className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">AI Enabled CCTV Surveillance System</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Advanced surveillance solutions tailored for manufacturing, government, healthcare, education, banking, hospitality, and more.
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
                AI-enabled surveillance cameras use artificial intelligence to analyze video in real time. They can detect objects, recognize faces, and identify unusual behavior, reducing the need for constant human monitoring.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These systems improve security and safety  by sending instant alerts of specific  events and offering features like facial recognition, license plate recognition and traffic Violations . They are widely used in residentials , businesses, and public spaces.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "AI Enabled Cameras",
                  "Video Monitoring System (VMS)",
                  "Network Video Recorders",
                  "Video Management Servers",
                  "Video Analytics Engine"
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
            <div className="bg-accent/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Manufacturing",
                  "Government Facilities",
                  "Healthcare Institutions",
                  "Educational Institutions",
                  "Banking & Finance",
                  "Hospitality"
                ].map((industry) => (
                  <li key={industry} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{industry}</span>
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
            <div className="bg-accent/10 rounded-2xl p-8 mt-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Standards and Compliances</h3>
              <ul className="space-y-3">
                {[
                  "ISO 2009-2015",
                  "VAPT Tested solutions",
                  "We Integrate EN, UL, BIS and STQC certified products",
                  "MSME"
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "AI-Powered Analysis",
              description: "Real-time video analysis using artificial intelligence."
            },
            {
              icon: Users,
              title: "Advanced Detection",
              description: "Object detection, classification and facial recognition (people, vehicles, animals)."
            },
            {
              icon: Zap,
              title: "Instant Alerts",
              description: "Instant alerts for suspicious or unusual activities."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ready to Secure Your Premises?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contact our expert team for a consultation and customized CCTV surveillance solution.
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

export default CCTVSurveillance;
