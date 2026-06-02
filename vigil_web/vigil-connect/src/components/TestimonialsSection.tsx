import { ExternalLink, MapPin, Quote, Star } from "lucide-react";

const collaborations = [
  { name: "Samsung", logo: "/collaborators/samsung.webp" },
  { name: "Bosch", logo: "/collaborators/bosch.jpg" },
  { name: "Honeywell", logo: "/collaborators/honeywell.webp" },
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

const reviews = [
  {
    name: "Customer",
    role: "Verified customer",
    content: "Professional execution, quick response times, and strong support throughout the project. The team handled the deployment smoothly.",
    rating: 5,
    location: "Bengaluru",
  },
  {
    name: "Customer",
    role: "Verified customer",
    content: "The security solution was tailored to our needs and the on-site coordination was excellent from start to finish.",
    rating: 5,
    location: "Mysuru",
  },
  {
    name: "Customer",
    role: "Verified customer",
    content: "Reliable products, thoughtful consultation, and a polished installation process. Definitely a team we would work with again.",
    rating: 5,
    location: "Hubballi",
  },
  {
    name: "Customer",
    role: "Verified customer",
    content: "Clear communication and professional follow-through made the entire engagement easy to trust and manage.",
    rating: 5,
    location: "Bengaluru",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-background px-4 py-2 text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            <Star className="h-4 w-4 fill-accent text-accent" />
            Testimonials
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Genuine customer testimonials from recent projects and engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.slice(0, 4).map((review) => (
            <div
              key={`${review.name}-${review.location}`}
              className="group p-8 bg-card rounded-3xl shadow-soft hover:shadow-elevated transition-all duration-300 relative border border-border/50"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />

              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {review.location}
                </div>
              </div>

              <p className="text-foreground text-lg mb-8 leading-relaxed">
                “{review.content}”
              </p>

              <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-semibold text-accent">G</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Collaborators Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground/80">Brands we Integrate</h3>
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
