import { Camera, ArrowLeft, CheckCircle2, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const CCTVSurveillance = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(scrollNext, 3000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  const backgroundImages = [
    "/cctv-slide-1.jpg",
    "/cctv-slide-2.png",
    "/cctv-slide-3.jpg"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Slider */}
      <div className="relative text-white overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {backgroundImages.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                  <img
                    src={src}
                    alt={`Surveillance Background ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <Link to="/#services" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity text-white/90">
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">AI Enabled CCTV<br />Surveillance System</h1>
            </div>
          </div>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
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
                Our CCTV surveillance systems provide comprehensive video monitoring and recording solutions designed to enhance security and safety across various sectors. Whether you're managing a large manufacturing facility, government building, healthcare institution, or retail environment, our systems deliver reliable, high-definition surveillance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We integrate cutting-edge camera technology with intelligent storage and management systems to give you complete visibility and control over your premises.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Features</h2>
              <div className="space-y-4">
                {[
                  "High-definition video recording (4K, Full HD)",
                  "24/7 continuous monitoring capabilities",
                  "Remote access and mobile viewing",
                  "Intelligent motion detection and alerts",
                  "Cloud and local storage options",
                  "Advanced analytics and pattern recognition",
                  "Scalable system architecture",
                  "Integration with access control systems"
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
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Enhanced Security",
              description: "Deter criminal activity and monitor suspicious behavior in real-time"
            },
            {
              icon: Users,
              title: "Operational Monitoring",
              description: "Track employee activity, customer behavior, and facility operations"
            },
            {
              icon: Zap,
              title: "Rapid Response",
              description: "Enable quick response to incidents with instant video access and alerts"
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
