import { Tv, ArrowLeft, CheckCircle2, Eye, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CommercialDisplays = () => {
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
              <Tv className="h-8 w-8" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold">Commercial Display & Signages</h1>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg max-w-3xl">
            Eye-catching digital displays and signage solutions for retail and corporate environments.
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
                Our commercial display and signage solutions transform spaces with dynamic, eye-catching visuals. We provide cutting-edge digital display technology that captivates audiences and delivers your message with impact.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From retail stores and shopping centers to corporate offices and entertainment venues, our displays are designed to engage, inform, and inspire.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">Display Solutions</h2>
              <div className="space-y-4">
                {[
                  "Ultra high-definition LED displays",
                  "Interactive touchscreen systems",
                  "Video walls and large format displays",
                  "Outdoor weatherproof signages",
                  "Digital menu boards",
                  "Content management systems",
                  "Real-time information displays",
                  "Customizable design and branding"
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
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Use Cases</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Retail Stores",
                  "Shopping Malls",
                  "Restaurants & Cafes",
                  "Airports & Stations",
                  "Corporate Lobbies",
                  "Event Venues"
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
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Eye,
              title: "Attract Attention",
              description: "Capture audience attention with vibrant, dynamic visual content"
            },
            {
              icon: TrendingUp,
              title: "Boost Sales",
              description: "Increase customer engagement and drive sales with compelling displays"
            },
            {
              icon: Zap,
              title: "Flexible Content",
              description: "Easily update content and messaging across multiple displays"
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
