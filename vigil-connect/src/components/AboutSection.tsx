import { Eye, Target } from "lucide-react";

const trustedPartners = [
  { name: "Government of Karnataka", logo: "/partners/karnataka-govt.jpg" },
  { name: "Indian Army", logo: "/partners/indian-army.png" },
  { name: "Karnataka State Police", logo: "/partners/karnataka-police.jpg" },
  { name: "The Times of India", logo: "/partners/times-of-india.png" },
  { name: "Hospaccx", logo: "/partners/hospaccx.png" },
  { name: "Tata Motors", logo: "/partners/tata-motors.jpg" },
  { name: "OYO", logo: "/partners/oyo.png" },
  { name: "Aditya Birla Group", logo: "/partners/aditya-birla-group.jpg" },
  { name: "Aequs", logo: "/partners/aequs.png" },
  { name: "Aster Aadhar Hospital", logo: "/partners/aster-aadhar-hospital.png" },
  { name: "Bajaj Electricals Ltd.", logo: "/partners/bajaj-electricals.png" },
  { name: "Indian Oil Corporation", logo: "/partners/indian-oil.png" },
  { name: "Olam", logo: "/partners/olam.jpg" },
  { name: "Toyota", logo: "/partners/toyota.jpg" },
  { name: "GeM (Govt. e Marketplace)", logo: "/partners/gem.webp" },
  { name: "Bharat Petroleum", logo: "/partners/bharat-petroleum.jpg" },
  { name: "Lakeview Hospital", logo: "/partners/lakeview-hospital.jpg" },
  { name: "Hotel Eefa", logo: "/partners/hotel-eefa.png" },
  { name: "KLE Society", logo: "/partners/kle-society.png" },
  { name: "KLES Dr. Prabhakar Kore Hospital", logo: "/partners/kles-hospital.jpg" },
  { name: "Noorani Corbel", logo: "/partners/noorani-corbel.jpg" },
  { name: "Niyaaz", logo: "/partners/niyaaz.png" },
  { name: "Prince Pipes", logo: "/partners/prince-pipes.webp" },
  { name: "Regenta Hotels & Resorts", logo: "/partners/regenta-hotels.png" },
  { name: "Anjuman-E-Islamia", logo: "/partners/anjuman-e-islamia.jpg" },
  { name: "St. Paul's P.U. College", logo: "/partners/st-pauls-college.png" },
  { name: "Karnataka Law Society", logo: "/partners/karnataka-law-society.png" },
  { name: "Indus Altum Learning Centre", logo: "/partners/indus-altum.webp" },
  { name: "Jinabakul Forge", logo: "/partners/jinabakul-forge.png" },
  { name: "Belagavi Smart City", logo: "/partners/smart-city-belagavi.png" },
  { name: "Roquette India Pvt. Ltd.", logo: "/partners/roquette.png" },
];

const TrustedPartnerCard = ({ partner }: { partner: { name: string; logo: string } }) => (
  <div className="flex flex-col items-center justify-center p-2 transition-all group flex-shrink-0" style={{ width: "200px" }}>
    <div className="w-24 h-24 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
    </div>
    <h3 className="font-semibold text-foreground text-center text-sm">{partner.name}</h3>
  </div>
);

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
            <h4 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
              Building Tomorrow's Solutions Today
            </h4>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              Vigil Safety Technologies builds intelligent security, safety, and traffic management ecosystems powered by advanced AI. By seamlessly integrating hardware and software, we enable real-time visibility, faster decision-making, and enhanced operational performance.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              Our portfolio covers CCTV surveillance, access control, biometric attendance, fire and intrusion detection, as well as communication and public addressing systems. We bring deep expertise in Video Management Systems, Intelligent Traffic Management Systems, Adaptive Traffic Control Systems, facial recognition, and PPE-driven safety solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed">
              We develop scalable, customized solutions, ranging from intelligent surveillance networks to city-wide traffic management platforms, serving government, commercial, healthcare, hospitality, and industrial sectors with reliable, future-ready technologies.
            </p>
          </div>

          {/* Right Content - Vision & Mission */}
          <div className="relative w-full h-full min-h-[500px] flex flex-col justify-center gap-8 pt-10 lg:pt-0 z-10">
            {/* Abstract Background Orbs */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Vision Card */}
            <div className="relative w-full sm:w-[90%] self-start group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex min-h-[260px] flex-col sm:flex-row items-start sm:items-center p-8 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Large Background Icon */}
                <Eye className="absolute -right-6 -bottom-6 w-48 h-48 text-accent/5 -z-10 rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-300 mb-6 sm:mb-0 sm:mr-8 text-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <Eye className="h-10 w-10 relative z-10" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-3">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify relative z-10">
                    We share your safety & security concerns and so we are determined to wipe out the fear factor.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative w-full sm:w-[90%] self-end group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex min-h-[260px] flex-col sm:flex-row items-start sm:items-center p-8 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Large Background Icon */}
                <Target className="absolute -left-6 -bottom-6 w-48 h-48 text-accent/5 -z-10 rotate-[15deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 mb-6 sm:mb-0 sm:mr-8 text-white relative overflow-hidden order-first sm:order-last sm:ml-8 sm:mr-0 z-10">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <Target className="h-10 w-10 relative z-10" />
                </div>
                <div className="sm:text-right w-full z-10 flex-1">
                  <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-foreground/70 to-foreground bg-clip-text text-transparent mb-3">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed sm:text-right text-justify relative z-10">
                    To be the major company in providing innovative and impassable safety & security solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-20 overflow-hidden">
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
                animation: `about-scroll ${trustedPartners.length * 3}s linear infinite`,
                width: "max-content",
              }}
            >
              {trustedPartners.map((partner, index) => (
                <TrustedPartnerCard key={`about-set1-${index}`} partner={partner} />
              ))}
              {trustedPartners.map((partner, index) => (
                <TrustedPartnerCard key={`about-set2-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes about-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
