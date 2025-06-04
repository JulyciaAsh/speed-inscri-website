
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PologneHero from '@/components/pologne/PologneHero';
import WhyPologne from '@/components/pologne/WhyPologne';
import FeaturedPrograms from '@/components/pologne/FeaturedPrograms';
import StudentCities from '@/components/pologne/StudentCities';
import TargetAudience from '@/components/pologne/TargetAudience';
import AdmissionProcess from '@/components/pologne/AdmissionProcess';
import CostOfLiving from '@/components/pologne/CostOfLiving';
import PologneCTA from '@/components/pologne/PologneCTA';

const Pologne = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <PologneHero />
      <WhyPologne />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <PologneCTA />
      <Footer />
    </div>
  );
};

export default Pologne;
