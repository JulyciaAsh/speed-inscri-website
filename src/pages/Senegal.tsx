
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SenegalHero from '@/components/senegal/SenegalHero';
import WhySenegal from '@/components/senegal/WhySenegal';
import FeaturedPrograms from '@/components/senegal/FeaturedPrograms';
import StudentCities from '@/components/senegal/StudentCities';
import TargetAudience from '@/components/senegal/TargetAudience';
import AdmissionProcess from '@/components/senegal/AdmissionProcess';
import CostOfLiving from '@/components/senegal/CostOfLiving';
import SenegalCTA from '@/components/senegal/SenegalCTA';

const Senegal = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <SenegalHero />
      <WhySenegal />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <SenegalCTA />
      <Footer />
    </div>
  );
};

export default Senegal;
