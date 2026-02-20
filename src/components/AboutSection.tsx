import { Users, Target, CheckCircle, Zap, Trophy } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "CUSTOMER FOCUS",
    description: "Believe in customer satisfaction and long term relationship.",
  },
  {
    icon: Target,
    title: "MEET THE TARGET",
    description: "A fully integrated team capable of working under pressure to complete the works within the target timelines.",
  },
  {
    icon: CheckCircle,
    title: "QUALITY CONTROL",
    description: "Experienced professionals & technicians' team & trusted products with focus on cost effectiveness.",
  },
  {
    icon: Zap,
    title: "INNOVATION",
    description: "We strive for applying smart and innovative thoughts and actions to ensure complete safety of our customers.",
  },
  {
    icon: Trophy,
    title: "PASSION TO WIN",
    description: "Competitive approach at all levels of customer service.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
              Building Tomorrow's Solutions Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              Vigil Everywhere Safety Technologies delivers advanced safety and security solutions designed to build smarter, safer infrastructure across diverse industries. From manufacturing facilities and government projects to healthcare, education, banking, hospitality, and smart city developments, Vigil Everywhere partners with organizations to protect what matters most.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              With a strong presence across Karnataka, Goa, and Maharashtra, we are recognized as a trusted systems integrator and solution provider for complex, large-scale deployments. Our expertise spans design, supply, installation, and commissioning of complete safety and surveillance ecosystems tailored to each client's operational needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              Backed by a skilled network of engineers and technicians across the region, Vigil Everywhere ensures rapid on-site support and seamless project execution. We specialize in delivering innovative solutions within challenging environments—meeting tight timelines without compromising precision, performance, or compliance.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed font-semibold">
              At Vigil Everywhere, safety is not just a service—it is a commitment to building secure, future-ready spaces.
            </p>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group ${value.title === "PASSION TO WIN" ? "sm:col-span-2 max-w-xs mx-auto text-center" : ""
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors ${value.title === "PASSION TO WIN" ? "mx-auto" : ""
                  }`}>
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className={`font-semibold text-foreground mb-2 ${value.title === "PASSION TO WIN" ? "text-center" : ""
                  }`}>{value.title}</h3>
                <p className={`text-sm text-muted-foreground text-justify leading-relaxed ${value.title === "PASSION TO WIN" ? "text-center" : ""
                  }`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
