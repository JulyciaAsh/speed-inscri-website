
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RoumanieHero from '@/components/roumanie/RoumanieHero';
import WhyRoumanie from '@/components/roumanie/WhyRoumanie';
import FeaturedPrograms from '@/components/roumanie/FeaturedPrograms';
import StudentCities from '@/components/roumanie/StudentCities';
import TargetAudience from '@/components/roumanie/TargetAudience';
import AdmissionProcess from '@/components/roumanie/AdmissionProcess';
import CostOfLiving from '@/components/roumanie/CostOfLiving';
import RoumanieCTA from '@/components/roumanie/RoumanieCTA';

const Roumanie = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <RoumanieHero />
      <WhyRoumanie />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <RoumanieCTA />
      <Footer />
    </div>
  );
};

export default Roumanie;
