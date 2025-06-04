
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanadaHero from '@/components/canada/CanadaHero';
import WhyCanada from '@/components/canada/WhyCanada';
import FeaturedPrograms from '@/components/canada/FeaturedPrograms';
import StudentCities from '@/components/canada/StudentCities';
import TargetAudience from '@/components/canada/TargetAudience';
import AdmissionProcess from '@/components/canada/AdmissionProcess';
import CostOfLiving from '@/components/canada/CostOfLiving';
import CanadaCTA from '@/components/canada/CanadaCTA';

const Canada = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <CanadaHero />
      <WhyCanada />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <CanadaCTA />
      <Footer />
    </div>
  );
};

export default Canada;
