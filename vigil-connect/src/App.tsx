import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import CCTVSurveillance from "./pages/services/CCTVSurveillance";
import FireFighting from "./pages/services/FireFighting";
import TelecomSolutions from "./pages/services/TelecomSolutions";
import AutomationSystems from "./pages/services/AutomationSystems";
import TimeAttendance from "./pages/services/TimeAttendance";
import PublicAddressing from "./pages/services/PublicAddressing";
import CommercialDisplays from "./pages/services/CommercialDisplays";
import VehicleTracking from "./pages/services/VehicleTracking";
import BuildingManagement from "./pages/services/BuildingManagement";
import IntrusionDetection from "./pages/services/IntrusionDetection";
import AccessControl from "./pages/services/AccessControl";
import EntranceSecurity from "./pages/services/EntranceSecurity";
import TourGuard from "./pages/services/TourGuard";
import KeyManagement from "./pages/services/KeyManagement";
import CareersPage from "./pages/CareersPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import HRPortal from "./pages/HRPortal";
import VigilCore from "./pages/products/VigilCore";
import VigilAnalytics from "./pages/products/VigilAnalytics";
import VigilSecure from "./pages/products/VigilSecure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/cctv-surveillance" element={<CCTVSurveillance />} />
          <Route path="/services/firefighting" element={<FireFighting />} />
          <Route path="/services/telecom-solutions" element={<TelecomSolutions />} />
          <Route path="/services/automation-systems" element={<AutomationSystems />} />
          <Route path="/services/time-attendance" element={<TimeAttendance />} />
          <Route path="/services/public-addressing" element={<PublicAddressing />} />
          <Route path="/services/commercial-displays" element={<CommercialDisplays />} />
          <Route path="/services/vehicle-tracking" element={<VehicleTracking />} />
          <Route path="/services/building-management" element={<BuildingManagement />} />
          <Route path="/services/intrusion-detection" element={<IntrusionDetection />} />
          <Route path="/services/access-control" element={<AccessControl />} />
          <Route path="/services/entrance-security" element={<EntranceSecurity />} />
          <Route path="/services/tour-guard" element={<TourGuard />} />
          <Route path="/services/key-management" element={<KeyManagement />} />
          <Route path="/products/vigil-core" element={<VigilCore />} />
          <Route path="/products/vigil-vms" element={<VigilAnalytics />} />
          <Route path="/products/vigil-analytics" element={<VigilAnalytics />} />
          <Route path="/products/vigil-secure" element={<VigilSecure />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:id" element={<JobDetailsPage />} />
          <Route path="/hr-portal" element={<HRPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
