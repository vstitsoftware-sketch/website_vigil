import { Cog, TrendingUp, Shield, Zap, BarChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cog,
    title: "Digital Transformation",
    description: "Modernize your operations with our comprehensive digital solutions that streamline processes and boost efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Data-driven strategies that align with your goals and position your business for sustainable growth.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your assets with enterprise-grade security solutions and proactive threat management.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to save time and reduce operational costs.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive informed decision-making.",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure that grows with your business and ensures reliability.",
  },
];

const ServicesSection = () => {
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
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a
                href="#contact"
                className="text-accent font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
