
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FranceHero from '@/components/france/FranceHero';
import WhyFrance from '@/components/france/WhyFrance';
import FeaturedPrograms from '@/components/france/FeaturedPrograms';
import StudentCities from '@/components/france/StudentCities';
import TargetAudience from '@/components/france/TargetAudience';
import AdmissionProcess from '@/components/france/AdmissionProcess';
import CostOfLiving from '@/components/france/CostOfLiving';
import FranceCTA from '@/components/france/FranceCTA';

const France = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <FranceHero />
      <WhyFrance />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <FranceCTA />
      <Footer />
    </div>
  );
};

export default France;
