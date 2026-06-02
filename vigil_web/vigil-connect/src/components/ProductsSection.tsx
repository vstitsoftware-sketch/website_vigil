import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Vigil ITMS",
    tagline: "Real time AI powered Intelligent Traffic Managent System",
    description:
      "AI-powered traffic monitoring and violation enforcement for smart cities, highways, and law enforcement.",
    features: [
      "OPS Edge AI Node",
      "Real-Time Command Dashboard",
      "Secure OpenVPN Tunnel",
      "Automated Violation Workflow",
    ],
    popular: false,
  },
  {
    name: "Vigil VMS",
    tagline: "Enterprise Video Management System",
    description: "Secure enterprise-grade video management for surveillance, compliance, and offline deployments.",
    features: [
      "Central Monitoring Console",
      "Camera Health Analytics",
      "Audit Logging",
      "Incident Bookmarking",
      "Offline Licensing",
    ],
    popular: true,
  },
  {
    name: "Vigil Secure",
    tagline: "More Coming Soon",
    description: "More information will be available soon.",
    comingSoon: true,
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
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  const ld = {
    "@context": "https://schema.org",
    "@graph": products
      .filter((p) => !p.comingSoon)
      .map((p) => ({
        "@type": "Product",
        name: p.name,
        description: p.description,
        url: `${origin}/products/${p.name.toLowerCase().replace(/\s+/g, "-")}`,
      })),
  };

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
          {products.map((product) => {
            const cardClasses = `group block relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 h-full ${
              product.popular ? "bg-hero text-primary-foreground shadow-elevated" : "bg-card shadow-soft hover:shadow-elevated"
            }`;

            if (product.comingSoon) {
              return (
                <div key={product.name} className={`${cardClasses} flex items-center justify-center`}>
                  <span className="text-2xl font-semibold text-accent">More Coming Soon</span>
                </div>
              );
            }

            return (
              <article
                key={product.name}
                className={cardClasses}
                title={`Learn more about ${product.name}`}
                aria-label={`Learn more about ${product.name}`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent-gradient text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-1" itemProp="name">{product.name}</h3>
                  <p className={`text-sm ${product.popular ? "text-primary-foreground/70" : "text-accent"}`} itemProp="alternateName">
                    {product.tagline}
                  </p>
                </div>

                <p
                  className={`mb-6 min-h-[72px] ${product.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  itemProp="description"
                >
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3" itemProp="featureList">
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

                <div className="mt-4">
                  <Button asChild variant={product.popular ? "hero" : "outline"} className="w-full">
                    <Link itemProp="url" to={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
                  </Button>
                </div>
              </article>
            );
          })}
          {/* JSON-LD structured data to assist search engines */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
