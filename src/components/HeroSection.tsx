import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Bell, CheckCircle, TrendingUp, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  // Notifications d'inscriptions récentes plus réalistes
  const recentSignups = [
    { message: "Sarah vient de s'inscrire au Sénégal", flag: "🇸🇳" },
    { message: "John vient de s'inscrire en France", flag: "🇫🇷" },
    { message: "Bob vient de s'inscrire en Roumanie", flag: "🇷🇴" },
    { message: "Les sœurs Poult viennent d'être admises à Toronto", flag: "🇨🇦" },
    { message: "Ahmed a obtenu son visa pour l'Australie", flag: "🇦🇺" },
    { message: "Lisa a été acceptée à Londres", flag: "🇬🇧" },
    { message: "Marc démarre ses études au Portugal", flag: "🇵🇹" },
    { message: "Fatima a décroché son stage en Allemagne", flag: "🇩🇪" }
  ];

  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % recentSignups.length);
        setShowNotification(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(143, 27, 20, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16, 17, 37, 0.03) 0%, transparent 50%)`,
          backgroundSize: '300px 300px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Notification Badge - Plus compact avec nouveaux messages */}
            <div className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-[#8F1B14]/20 rounded-full px-3 py-2 shadow-sm transition-all duration-500 ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <Bell className="w-3.5 h-3.5 text-[#8F1B14]" />
              </div>
              <span className="text-xs font-medium text-gray-700">
                {recentSignups[currentNotification].flag} <strong>{recentSignups[currentNotification].message}</strong>
              </span>
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
            </div>

            {/* Main Heading - Optimized size */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101125] leading-[1.1] font-montserrat">
                Transformez vos 
                <span className="block bg-gradient-to-r from-[#8F1B14] to-[#B91C1C] bg-clip-text text-transparent">
                  ambitions internationales
                </span>
                en réalité
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-open-sans max-w-xl">
                Études, stages, formations professionnelles - nous vous accompagnons personnellement vers votre destination de rêve avec une approche sur-mesure et humaine.
              </p>
            </div>

            {/* Value Props - Nouvelle section */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-[#8F1B14]" />
                <span>98% de réussite</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-[#8F1B14]" />
                <span>2000+ étudiants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#8F1B14]" />
                <span>50+ destinations</span>
              </div>
            </div>

            {/* CTA Buttons - Updated with Link */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/start-project">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#8F1B14] to-[#B91C1C] hover:from-[#7A1611] hover:to-[#991B1B] text-white px-8 py-4 text-base rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group font-open-sans shadow-md w-full sm:w-auto"
                >
                  Démarrer mon projet gratuitement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/success-stories">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[#8F1B14] text-[#8F1B14] hover:bg-[#8F1B14] hover:text-white px-8 py-4 text-base rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] group font-open-sans bg-white/50 backdrop-blur-sm w-full sm:w-auto"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Voir nos succès
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <p className="text-sm text-gray-500 pt-2">
              ✓ Consultation gratuite • ✓ Accompagnement personnalisé • ✓ Garantie de résultat
            </p>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-20 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Taux de réussite</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-500">Pays partenaires</div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8F1B14]/10 to-[#101125]/10 rounded-2xl blur-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&crop=center" 
                alt="Étudiants internationaux réussissant leur projet"
                className="relative z-10 w-full h-[420px] object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="white" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
