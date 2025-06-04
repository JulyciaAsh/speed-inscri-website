
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plane, CheckCircle, Shield, Users, TrendingUp, Target, Phone, MessageCircle, Globe, GraduationCap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import VisaExplorer from '@/components/visa/VisaExplorer';
import ProcessSteps from '@/components/visa/ProcessSteps';
import PricingPackages from '@/components/visa/PricingPackages';
import SuccessStories from '@/components/visa/SuccessStories';
import CommonMistakes from '@/components/visa/CommonMistakes';
import ExpertTips from '@/components/visa/ExpertTips';
import QuickFAQ from '@/components/visa/QuickFAQ';

const StudentVisa = () => {
  const statsData = [
    {
      number: "2,847",
      label: "Étudiants accompagnés en 2024",
      icon: Users,
      color: "text-blue-600"
    },
    {
      number: "98.3%",
      label: "Taux de réussite visa",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      number: "4.2 sem",
      label: "Délai moyen d'obtention",
      icon: Target,
      color: "text-purple-600"
    },
    {
      number: "15+",
      label: "Pays de destination",
      icon: Globe,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section Enhanced */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-indigo-900 via-[#8F1B14] to-green-900 overflow-hidden">
        {/* Enhanced Travel Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <Plane className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-32 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <GraduationCap className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-24 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <div className="absolute top-1/2 right-12 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '0.5s' }}>
            <Building className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-white/90">Expert Visa depuis 2018 - Plus de 2800 étudiants accompagnés</span>
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat text-white leading-tight">
              Visa Étudiant<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400">
                Expertise Garantie
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto">
              <strong>98.3% de taux de réussite</strong> grâce à notre méthode éprouvée. 
              Plus de 2800 étudiants nous font confiance pour concrétiser leur rêve d'études à l'étranger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full group">
                  <Target className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Évaluation Gratuite 24h
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#8F1B14] px-8 py-4 text-lg font-semibold rounded-full group">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Consultation Express
              </Button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <h3 className="text-white font-bold text-2xl mb-2">{stat.number}</h3>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <VisaExplorer />
      <ProcessSteps />
      <PricingPackages />
      <SuccessStories />
      <CommonMistakes />
      <ExpertTips />
      <QuickFAQ />

      <section className="py-16 bg-gradient-to-br from-[#8F1B14] via-indigo-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Commencez Votre Demande de Visa Maintenant
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Évaluation gratuite de votre dossier par nos experts. 
            Plus de 2000 étudiants nous font confiance chaque année.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full group">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Évaluation Gratuite
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#8F1B14] px-8 py-4 text-lg font-semibold rounded-full group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Chat en Direct
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Consultation gratuite</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>98% de réussite</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentVisa;
