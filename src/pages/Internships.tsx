
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RealJobOffers from '@/components/RealJobOffers';
import InternshipsHero from '@/components/internships/InternshipsHero';
import InternshipTypes from '@/components/internships/InternshipTypes';
import ProfessionalInternships from '@/components/internships/ProfessionalInternships';
import ProfessionalTraining from '@/components/internships/ProfessionalTraining';
import ProfessionalOpportunities from '@/components/internships/ProfessionalOpportunities';
import FinancingOptions from '@/components/internships/FinancingOptions';
import GlobalPrograms from '@/components/internships/GlobalPrograms';
import BenefitsSection from '@/components/internships/BenefitsSection';
import InternshipsCTA from '@/components/internships/InternshipsCTA';

const Internships = () => {
  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      <InternshipsHero />
      <InternshipTypes />
      <RealJobOffers />
      <ProfessionalInternships />
      <ProfessionalTraining />
      <ProfessionalOpportunities />
      <FinancingOptions />
      <GlobalPrograms />
      <BenefitsSection />
      <InternshipsCTA />
      <Footer />
    </div>
  );
};

export default Internships;
