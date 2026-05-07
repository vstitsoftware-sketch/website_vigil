import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type HeroSlide =
  | {
      type: "brand";
    }
  | {
      type: "poster";
      src: string;
      alt: string;
    };

const NAVBAR_HEIGHT_PX = 80;

const heroSlides: HeroSlide[] = [
  {
    type: "brand",
  },
  {
    type: "poster",
    src: "/dashboard_posters/01.jpg",
    alt: "Vigil redesigned poster 1",
  },
  {
    type: "poster",
    src: "/dashboard_posters/02.jpeg",
    alt: "Vigil redesigned poster 2",
  },
  {
    type: "poster",
    src: "/dashboard_posters/03.jpeg",
    alt: "Vigil redesigned poster 3",
  },
  {
    type: "poster",
    src: "/dashboard_posters/04.jpeg",
    alt: "Vigil redesigned poster 4",
  },
  {
    type: "poster",
    src: "/dashboard_posters/05.jpg",
    alt: "Vigil redesigned poster 5",
  },
];

const HeroCopyDesktop = () => (
  <div className="max-w-4xl mx-auto text-center text-[#2a2218]">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 lg:mb-8 animate-fade-up bg-white/55 border border-[#b4966e]/25">
      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
      <span className="text-sm text-[#463726]">Trusted by 500+ companies worldwide</span>
    </div>

    <img
      src="/Logo-01 (1).png"
      alt="Vigil logo"
      className="h-20 md:h-28 lg:h-40 w-auto mx-auto mb-4 lg:mb-8 animate-fade-up"
      style={{ animationDelay: "0.05s" }}
    />

    <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-[#2a2218] mb-4 lg:mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
      &ldquo;Empowering Your <span className="text-gradient">Business Growth</span>&rdquo;
    </h1>

    <p className="text-base md:text-xl text-[#463726]/80 mb-6 lg:mb-10 max-w-2xl mx-auto animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.2s" }}>
      Vigil Safety Technologies delivers innovative solutions that transform the way you work.
      We combine cutting-edge technology with strategic expertise to drive measurable results.
    </p>

    <div className="flex flex-row gap-3 md:gap-4 justify-center animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.3s" }}>
      <Button variant="hero" size="lg" className="text-sm md:text-base">
        Start Your Journey
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button variant="heroOutline" size="lg" className="text-sm md:text-base">
        <Play className="mr-2 h-5 w-5" />
        Watch Demo
      </Button>
    </div>

    <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-6 lg:mt-8 pt-4 border-t border-[#b4966e]/30 animate-fade-up px-2 sm:px-0" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">500+</div>
        <div className="text-sm text-[#5a472f]/80">Happy Clients</div>
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">99%</div>
        <div className="text-sm text-[#5a472f]/80">Success Rate</div>
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl lg:text-4xl font-bold text-[#2a2218]">24/7</div>
        <div className="text-sm text-[#5a472f]/80">Support</div>
      </div>
    </div>
  </div>
);

const HeroCopyMobile = () => (
  <div className="max-w-xs mx-auto text-center text-[#2a2218] px-2">
    <img
      src="/Logo-01 (1).png"
      alt="Vigil logo"
      className="h-12 w-auto mx-auto mb-2 animate-fade-up"
      style={{ animationDelay: "0.05s" }}
    />

    <h1
      className="font-serif text-xl leading-tight font-black tracking-tight text-[#2a2218] mb-2 animate-fade-up"
      style={{ animationDelay: "0.1s" }}
    >
      &ldquo;Empowering Your <span className="text-gradient">Business Growth</span>&rdquo;
    </h1>

    <p
      className="text-[11px] leading-snug text-[#463726]/80 mb-2 max-w-[260px] mx-auto animate-fade-up"
      style={{ animationDelay: "0.2s" }}
    >
      Vigil Safety Technologies delivers innovative solutions that transform the way you work.
    </p>

    <div
      className="flex flex-row gap-2 justify-center items-center w-full max-w-[300px] mx-auto animate-fade-up"
      style={{ animationDelay: "0.3s" }}
    >
      <Button variant="hero" size="sm" className="flex-1 min-w-0 text-[10px] px-2">
        Start Your Journey
        <ArrowRight className="ml-1 h-3 w-3" />
      </Button>
      <Button variant="heroOutline" size="sm" className="flex-1 min-w-0 text-[10px] px-2">
        <Play className="mr-1 h-3 w-3" />
        Watch Demo
      </Button>
    </div>
  </div>
);

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (isHovered) {
      return;
    }

    const interval = setInterval(scrollNext, 4000);
    return () => clearInterval(interval);
  }, [isHovered, scrollNext]);

  return (
    <section className="relative pt-20 pb-4 bg-[radial-gradient(circle_at_18%_10%,#f7f4ee_0%,#ece6da_72%)]">
      <div
        className="group relative mx-auto aspect-[16/9] overflow-hidden rounded-[20px] border border-[#b4966e]/25 bg-white/60 shadow-[0_18px_40px_rgba(70,48,24,0.14)] backdrop-blur-sm"
        style={{
          width: `min(96vw, calc((100vh - ${NAVBAR_HEIGHT_PX}px - 1rem) * 16 / 9), 1920px)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {heroSlides.map((slide, index) => (
              <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                {slide.type === "brand" ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#e5dcc9_0%,#cabda8_100%)]">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-20 right-20 w-72 h-72 bg-[#c68a2a]/45 rounded-full blur-3xl" />
                      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f3ce96]/45 rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10 w-full px-2 sm:px-4 py-2 sm:py-6 sm:py-8 md:py-32 flex items-center justify-center min-h-full">
                      <div className="sm:hidden w-full">
                        <HeroCopyMobile />
                      </div>
                      <div className="hidden sm:block w-full">
                        <HeroCopyDesktop />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full w-full bg-[#f8f1e3]">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="pointer-events-none absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#5d452a]/75 p-2 text-[#fff7ea] opacity-0 backdrop-blur transition hover:bg-[#5d452a]/90 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-[#5d452a]/75 p-2 text-[#fff7ea] opacity-0 backdrop-blur transition hover:bg-[#5d452a]/90 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={`${slide.type}-${index}`}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={selectedIndex === index}
            className={[
              "h-3 w-3 rounded-full border transition-all duration-300",
              selectedIndex === index
                ? "border-[#c68a2a] bg-[#c68a2a] shadow-[0_0_0_4px_rgba(198,138,42,0.26)]"
                : "border-[#b89c78]/60 bg-[#f2eadc] hover:bg-[#ecd8b7] hover:border-[#c68a2a]/70",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
