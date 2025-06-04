
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EspagneHero from '@/components/espagne/EspagneHero';
import WhyEspagne from '@/components/espagne/WhyEspagne';
import FeaturedPrograms from '@/components/espagne/FeaturedPrograms';
import StudentCities from '@/components/espagne/StudentCities';
import TargetAudience from '@/components/espagne/TargetAudience';
import AdmissionProcess from '@/components/espagne/AdmissionProcess';
import CostOfLiving from '@/components/espagne/CostOfLiving';
import EspagneCTA from '@/components/espagne/EspagneCTA';

const Espagne = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <EspagneHero />
      <WhyEspagne />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <EspagneCTA />
      <Footer />
    </div>
  );
};

export default Espagne;
