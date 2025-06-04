
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpeedTransitHero from '@/components/speed-transit/SpeedTransitHero';
import EngagementsSection from '@/components/speed-transit/EngagementsSection';
import ServicesSection from '@/components/speed-transit/ServicesSection';
import TarifsSection from '@/components/speed-transit/TarifsSection';
import ZonesSection from '@/components/speed-transit/ZonesSection';
import ContactSection from '@/components/speed-transit/ContactSection';

const SpeedTransit = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <SpeedTransitHero />
      <EngagementsSection />
      <ServicesSection />
      <TarifsSection />
      <ZonesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SpeedTransit;
