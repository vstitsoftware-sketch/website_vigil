import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const serviceLinks = [
  { title: "CCTV", link: "/services/cctv-surveillance" },
  { title: "Fire Fighting", link: "/services/firefighting" },
  { title: "Telecom", link: "/services/telecom-solutions" },
  { title: "Automation", link: "/services/automation-systems" },
  { title: "Time Attendance", link: "/services/time-attendance" },
  { title: "Public Address", link: "/services/public-addressing" },
  { title: "Commercial Displays", link: "/services/commercial-displays" },
  { title: "Vehicle Tracking", link: "/services/vehicle-tracking" },
  { title: "Building Management", link: "/services/building-management" },
  { title: "Intrusion Detection", link: "/services/intrusion-detection" },
  { title: "Access Control", link: "/services/access-control" },
  { title: "Entrance Security", link: "/services/entrance-security" },
  { title: "Tour Guard", link: "/services/tour-guard" },
  { title: "Key Management", link: "/services/key-management" },
];

const ServicePageMenu = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav aria-label="Service navigation" className="bg-transparent relative pt-10 md:pt-12">
      <div className="absolute left-0 top-0 z-50">
        <Button
          variant="ghost"
          size="lg"
          className="inline-flex items-center gap-3 text-white text-base md:text-lg hover:bg-transparent hover:text-white p-2"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-7 w-7 text-white" />
          <span className="hidden sm:inline">Services</span>
        </Button>
      </div>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-start">

          {/* Overlay */}
          {open && <div onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/40" />}

          {/* Sidebar */}
          {/* Sidebar */}
          <aside
            role="dialog"
            aria-modal={open}
            className={`fixed inset-y-0 left-0 z-50 w-80 transform bg-primary text-white border-r transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="text-2xl md:text-3xl font-extrabold text-white leading-tight">Our Services:</div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)} className="text-white">
                <X className="h-5 w-5 text-white" />
              </Button>
            </div>

            <div className="p-4 space-y-1">
                {serviceLinks.map((service) => {
                const isActive = pathname === service.link;
                return (
                  <Link
                    key={service.link}
                    to={service.link}
                    onClick={() => setOpen(false)}
                    className={isActive ? "block w-full rounded px-3 py-2 bg-white/20 text-white" : "block w-full rounded px-3 py-2 text-white hover:bg-white/10"}
                  >
                    {service.title}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto p-4">
              <Link to="/#services" onClick={() => setOpen(false)}>
                <Button variant="accent" size="sm" className="w-full inline-flex items-center justify-center gap-2 hover:bg-amber-500">
                  <ArrowLeft className="h-4 w-4" />
                  Back to services
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </nav>
  );
};

export default ServicePageMenu;
