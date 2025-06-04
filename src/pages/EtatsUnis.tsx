
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EtatsUnisHero from '@/components/etats-unis/EtatsUnisHero';
import WhyEtatsUnis from '@/components/etats-unis/WhyEtatsUnis';
import FeaturedPrograms from '@/components/etats-unis/FeaturedPrograms';
import StudentCities from '@/components/etats-unis/StudentCities';
import TargetAudience from '@/components/etats-unis/TargetAudience';
import AdmissionProcess from '@/components/etats-unis/AdmissionProcess';
import CostOfLiving from '@/components/etats-unis/CostOfLiving';
import EtatsUnisCTA from '@/components/etats-unis/EtatsUnisCTA';

const EtatsUnis = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <EtatsUnisHero />
      <WhyEtatsUnis />
      <FeaturedPrograms />
      <StudentCities />
      <TargetAudience />
      <AdmissionProcess />
      <CostOfLiving />
      <EtatsUnisCTA />
      <Footer />
    </div>
  );
};

export default EtatsUnis;
