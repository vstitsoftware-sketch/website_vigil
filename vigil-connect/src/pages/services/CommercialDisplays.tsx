import { Tv, ArrowLeft, CheckCircle2, Eye, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServicePageMenu from "@/components/ServicePageMenu";
import ServiceHero from "@/components/ServiceHero";

const CommercialDisplays = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ServiceHero
        title="Commercial Display and Signages"
        description="Digital display solutions that help you present information clearly and attract attention in any space."
        image="/services_hero_posters/commecial-signages.png"
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
                Our commercial display and signage solutions help businesses communicate better using clear and engaging visual content. Whether you want to promote products, share information, or improve customer experience, digital displays make your messaging more effective.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We provide a range of display options based on your space and usage. This includes indoor screens for offices and retail stores, as well as outdoor signages that can handle different weather conditions. Each setup is planned to ensure good visibility, easy control, and long-term reliability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With simple content management tools, you can update and control what is displayed at any time, without depending on manual changes or printed materials.
              </p>
            </div>

            {/* Key Components */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Key Components</h2>
              <div className="space-y-4">
                {[
                  "LED and Ultra HD Display Screens",
                  "Interactive Touchscreen Displays",
                  "Video Walls and Large Format Displays",
                  "Outdoor and Weatherproof Signages",
                  "Content Management System (CMS)"
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
                  "Retail Stores and Showrooms",
                  "Shopping Malls",
                  "Corporate Offices",
                  "Hotels and Hospitality",
                  "Hospitals and Clinics",
                  "Entertainment and Event Spaces"
                ].map((useCase) => (
                  <li key={useCase} className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span className="text-foreground">{useCase}</span>
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
                  "BIS and Electrical Safety Standards",
                  "Energy Efficiency Guidelines",
                  "Display and Installation Safety Norms",
                  "Local Signage and Advertising Regulations"
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
              icon: Eye,
              title: "Better Visibility",
              description: "Display content clearly and attract attention in high-traffic areas."
            },
            {
              icon: Zap,
              title: "Easy Content Updates",
              description: "Change and manage content anytime using simple digital tools."
            },
            {
              icon: TrendingUp,
              title: "Stronger Engagement",
              description: "Use visuals and interactive displays to connect better with your audience."
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transform Your Space with Digital Signage</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover how our commercial displays can enhance your environment and engage your audience.
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

export default CommercialDisplays;
