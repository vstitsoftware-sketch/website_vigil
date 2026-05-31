import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const NAVBAR_HEIGHT_PX = 80;

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#e5dcc9_0%,#cabda8_100%)]"
      style={{ minHeight: `100vh`, paddingTop: `${NAVBAR_HEIGHT_PX}px` }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#c68a2a]/45 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f3ce96]/45 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center px-0 py-0 sm:px-0">
        <div className="max-w-5xl mx-auto text-center text-[#2a2218]">
          <img
            src="/Logo-01 (1).png"
            alt="Vigil logo"
            className="h-20 md:h-28 lg:h-40 w-auto mx-auto mb-4 lg:mb-8 animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-[#2a2218] mb-4 lg:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            &ldquo;Empowering Safer, Smarter<span className="text-gradient"> Operations</span>&rdquo;
          </h1>

          <p className="text-base md:text-xl text-[#463726]/80 mb-6 lg:mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Vigil Safety Technologies provides intelligent CCTV systems, real-time video analytics, and enterprise safety solutions designed to strengthen security, reduce risks, and enable rapid decision-making.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-6 lg:mt-8 pt-4 border-t border-[#b4966e]/30 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">5K+</div>
              <div className="text-sm text-[#5a472f]/80">Happy Clients</div>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">95%</div>
              <div className="text-sm text-[#5a472f]/80">Success Rate</div>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">24/7</div>
              <div className="text-sm text-[#5a472f]/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
