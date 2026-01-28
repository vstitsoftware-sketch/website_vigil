import { Target, Users, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to delivering results that matter to your business.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We build lasting partnerships.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead with cutting-edge solutions and methodologies.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Uncompromising quality in every project we undertake.",
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Building Tomorrow's Solutions Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2015, Vijil has grown from a small startup to a leading
              provider of innovative business solutions. Our team of experts brings
              together decades of experience across multiple industries.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe in creating meaningful impact through technology and
              strategic thinking. Our approach combines deep industry knowledge
              with cutting-edge tools to deliver exceptional results.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">100+ Team Members</div>
                <div className="text-sm text-muted-foreground">Working globally</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
