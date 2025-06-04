
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ItalieHero from '@/components/italie/ItalieHero';
import WhyItalie from '@/components/italie/WhyItalie';
import FeaturedPrograms from '@/components/italie/FeaturedPrograms';
import StudentCities from '@/components/italie/StudentCities';
import TargetAudience from '@/components/italie/TargetAudience';
import AdmissionProcess from '@/components/italie/AdmissionProcess';
import CostOfLiving from '@/components/italie/CostOfLiving';
import ItalieCTA from '@/components/italie/ItalieCTA';

const Italie = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <ItalieHero />
      <WhyItalie />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <ItalieCTA />
      <Footer />
    </div>
  );
};

export default Italie;
