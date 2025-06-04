
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Index from "./pages/Index";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import StudiesAbroad from "./pages/StudiesAbroad";
import Internships from "./pages/Internships";
import Accommodation from "./pages/Accommodation";
import StudentVisa from "./pages/StudentVisa";
import StartProject from "./pages/StartProject";
import SuccessStories from "./pages/SuccessStories";
import France from "./pages/France";
import Canada from "./pages/Canada";
import Senegal from "./pages/Senegal";
import EtatsUnis from "./pages/EtatsUnis";
import Espagne from "./pages/Espagne";
import Italie from "./pages/Italie";
import Pologne from "./pages/Pologne";
import Roumanie from "./pages/Roumanie";
import Ghana from "./pages/Ghana";
import Formations from "./pages/Formations";
import VoyagesAffaires from "./pages/VoyagesAffaires";
import SpeedTransit from "./pages/SpeedTransit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/formations" element={<Formations />} />
            <Route path="/services/voyages-affaires" element={<VoyagesAffaires />} />
            <Route path="/services/speed-transit" element={<SpeedTransit />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/france" element={<France />} />
            <Route path="/destinations/canada" element={<Canada />} />
            <Route path="/destinations/senegal" element={<Senegal />} />
            <Route path="/destinations/etats-unis" element={<EtatsUnis />} />
            <Route path="/destinations/espagne" element={<Espagne />} />
            <Route path="/destinations/italie" element={<Italie />} />
            <Route path="/destinations/pologne" element={<Pologne />} />
            <Route path="/destinations/roumanie" element={<Roumanie />} />
            <Route path="/destinations/ghana" element={<Ghana />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/studies-abroad" element={<StudiesAbroad />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/student-visa" element={<StudentVisa />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppWidget />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
