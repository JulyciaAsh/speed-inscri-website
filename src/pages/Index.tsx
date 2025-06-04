
import React, { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DestinationsSection from '@/components/DestinationsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQRedirectSection from '@/components/FAQRedirectSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQRedirectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
