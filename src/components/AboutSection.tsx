import { Eye, Target } from "lucide-react";

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
              Vigil Safety Technologies delivers advanced safety and security solutions designed to build smarter, safer infrastructure across diverse industries. From manufacturing facilities and government projects to healthcare, education, banking, hospitality, and smart city developments, Vigil Safety Technologies partners with organizations to protect what matters most.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed">
              With a strong presence across Karnataka, Goa, and Maharashtra, we are recognized as a trusted systems integrator and solution provider for complex, large-scale deployments. Our expertise spans design, supply, installation, and commissioning of complete safety and surveillance ecosystems tailored to each client's operational needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-justify leading-relaxed font-semibold">
              At Vigil Safety Technologies, safety is not just a service, it is a commitment to building secure, future-ready spaces.
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
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center p-8 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Large Background Icon */}
                <Eye className="absolute -right-6 -bottom-6 w-48 h-48 text-accent/5 -z-10 rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-all duration-300 mb-6 sm:mb-0 sm:mr-8 text-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <Eye className="h-10 w-10 relative z-10" />
                </div>
                <div>
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
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center p-8 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Large Background Icon */}
                <Target className="absolute -left-6 -bottom-6 w-48 h-48 text-accent/5 -z-10 rotate-[15deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-accent rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 mb-6 sm:mb-0 sm:mr-8 text-white relative overflow-hidden order-first sm:order-last sm:ml-8 sm:mr-0 z-10">
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                   <Target className="h-10 w-10 relative z-10" />
                </div>
                <div className="sm:text-right w-full z-10">
                  <h3 className="font-serif text-3xl font-bold bg-gradient-to-r from-foreground/70 to-foreground bg-clip-text text-transparent mb-3">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed sm:text-right text-justify relative z-10">
                    To be the major company in providing innovative and impassable safety & security solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
