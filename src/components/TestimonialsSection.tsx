import { Star, Quote } from "lucide-react";

const collaborations = [
  { name: "Samsung", logo: "/collaborators/samsung.webp" },
  { name: "Bosch", logo: "/collaborators/bosch.jpg" },
  { name: "Honeywell", logo: "/collaborators/honeywell.webp" },
  { name: "Dahua", logo: "/collaborators/dahua.jpg" },
  { name: "Hikvision", logo: "/collaborators/hikvision.webp" },
  { name: "GST", logo: "/collaborators/GST.jpg" },
  { name: "Johnson Controls", logo: "/collaborators/Johnson.webp" },
  { name: "HID", logo: "/collaborators/hid.webp" },
  { name: "Texecom", logo: "/collaborators/Texecom_logo.jpg" },
  { name: "Agni", logo: "/collaborators/agni.png" },
  { name: "eSSL", logo: "/collaborators/essl.jpg" },
  { name: "Matrix", logo: "/collaborators/matrix.png" },
  { name: "Securus", logo: "/collaborators/securus.png" },
  { name: "Wisenet", logo: "/collaborators/wisenet.jpg" },
  { name: "eGlu", logo: "/collaborators/eglu.png" },
  { name: "LivFuture", logo: "/collaborators/livfuture.webp" },
  { name: "Godrej", logo: "/collaborators/godrej.jpg" },
  { name: "Optex", logo: "/collaborators/optex.png" },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechVision Inc.",
    content: "Vigil transformed our operations completely. Their team's expertise and dedication exceeded all our expectations. Revenue increased by 40% in the first year.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "COO, Global Logistics",
    content: "Vigil's analytics platform gave us insights we never had before. Decision-making is now data-driven and our efficiency has improved dramatically.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "CTO, HealthCare Plus",
    content: "Security was our biggest concern. Vigil not only protected our data but also helped us achieve compliance ahead of schedule.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Director, FinanceFirst",
    content: "The ROI from implementing Vigil's solutions was visible within months. Their support team is responsive and truly understands our business needs.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Client Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our clients about how Vigil has helped them achieve their
            business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-semibold text-accent">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaborators Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground/80">Our Clients</h3>
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div
              className="flex gap-6 py-4"
              style={{
                animation: `testimonials-scroll-reverse ${collaborations.length * 5}s linear infinite`,
                width: "max-content",
              }}
            >
              {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                <div
                  key={`collab-a-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0"
                  style={{ width: "200px" }}
                >
                  <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                    <img src={collab.logo} alt={collab.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-semibold text-foreground text-center">{collab.name}</h4>
                </div>
              ))}
              {[...collaborations, ...collaborations, ...collaborations].map((collab, index) => (
                <div
                  key={`collab-b-${index}`}
                  className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all group flex-shrink-0"
                  style={{ width: "200px" }}
                >
                  <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform overflow-hidden">
                    <img src={collab.logo} alt={collab.name} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-semibold text-foreground text-center">{collab.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes testimonials-scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
