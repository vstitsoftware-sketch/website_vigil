import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Vijil Core",
    tagline: "Enterprise Resource Planning",
    description: "All-in-one ERP solution for seamless business operations.",
    features: [
      "Financial Management",
      "Inventory Control",
      "HR & Payroll",
      "CRM Integration",
      "Real-time Analytics",
    ],
    popular: false,
  },
  {
    name: "Vijil Analytics",
    tagline: "Business Intelligence Platform",
    description: "Transform data into actionable insights with AI-powered analytics.",
    features: [
      "Custom Dashboards",
      "Predictive Analytics",
      "Automated Reports",
      "Data Visualization",
      "API Integrations",
    ],
    popular: true,
  },
  {
    name: "Vijil Secure",
    tagline: "Cybersecurity Suite",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: [
      "Threat Detection",
      "Compliance Management",
      "Encryption Services",
      "Security Audits",
      "24/7 Monitoring",
    ],
    popular: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Powerful Tools for Modern Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Our suite of products is designed to address the most critical needs
            of today's enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                product.popular
                  ? "bg-hero text-primary-foreground shadow-elevated"
                  : "bg-card shadow-soft hover:shadow-elevated"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-gradient text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold mb-1">{product.name}</h3>
                <p className={`text-sm ${product.popular ? "text-primary-foreground/70" : "text-accent"}`}>
                  {product.tagline}
                </p>
              </div>

              <p className={`mb-6 ${product.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      product.popular ? "bg-accent" : "bg-accent/10"
                    }`}>
                      <Check className={`h-3 w-3 ${product.popular ? "text-accent-foreground" : "text-accent"}`} />
                    </div>
                    <span className={`text-sm ${product.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={product.popular ? "hero" : "outline"}
                className="w-full"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
