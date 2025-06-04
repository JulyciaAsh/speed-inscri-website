
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GhanaHero from '@/components/ghana/GhanaHero';
import WhyGhana from '@/components/ghana/WhyGhana';
import FeaturedPrograms from '@/components/ghana/FeaturedPrograms';
import StudentCities from '@/components/ghana/StudentCities';
import TargetAudience from '@/components/ghana/TargetAudience';
import AdmissionProcess from '@/components/ghana/AdmissionProcess';
import CostOfLiving from '@/components/ghana/CostOfLiving';
import GhanaCTA from '@/components/ghana/GhanaCTA';

const Ghana = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <GhanaHero />
      <WhyGhana />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <GhanaCTA />
      <Footer />
    </div>
  );
};

export default Ghana;
