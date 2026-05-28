import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/services/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Let's Start a Conversation</h2>
            <p className="text-lg text-muted-foreground mb-10">Have questions about our services or products? Want to discuss how we can help your business? Reach out and our team will get back to you promptly.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <a href="mailto:info@vigiltron.com" className="text-muted-foreground hover:text-accent transition-colors">info@vigiltron.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call Us</div>
                  <a href="tel:0831-2451566" className="text-muted-foreground hover:text-accent transition-colors">0831-2451566</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Website</div>
                  <a href="https://www.vigiltron.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">www.vigiltron.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">Visit Us</div>
                      <p className="text-muted-foreground">1st Floor, Nabbuwale Building, Near S P Office<br />Subhas Nagar, Belagavi - 590010</p>
                    </div>

                    <a href="https://www.google.com/maps/search/?api=1&query=Vigil+Safety+Technologies+VGC9%2BJ8+Belagavi" target="_blank" rel="noopener noreferrer" className="w-48 h-32 rounded-md overflow-hidden border self-start" aria-label="Vigil Safety Technologies location">
                      <iframe title="Vigil Office Location" src="https://www.google.com/maps?q=Vigil+Safety+Technologies+VGC9%2BJ8+Belagavi&output=embed" width="100%" height="100%" className="border-0" loading="lazy" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <Input placeholder="Amit Kumar" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="amit@company.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input placeholder="Subject of your enquiry" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea placeholder="Tell us about your project or inquiry..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>

              <Button variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
