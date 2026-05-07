import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const SalesSection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/80 text-sm font-medium mb-6">
            Limited Time Offer
          </span>

          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Get 20% off your first year when you sign up today. Our team is ready
            to help you get started on your journey to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/10">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-accent" />
              <span className="text-primary-foreground/80">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SalesSection;
