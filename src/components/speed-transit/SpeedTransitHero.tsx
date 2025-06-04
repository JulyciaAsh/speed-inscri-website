
import React from 'react';
import { Ship, Package, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SpeedTransitHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-green-900 to-red-700 overflow-hidden">
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-24 w-40 h-40 border border-white/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
          <Ship className="w-8 h-8 text-green-300" />
        </div>
        <div className="absolute bottom-40 left-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
          <Package className="w-8 h-8 text-red-300" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Speed-Transit */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/7e1391db-1152-4efd-8889-f7d6f66785ff.png" 
              alt="Speed-Transit Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Ship className="w-5 h-5 text-green-300" />
            <span className="text-white/90 font-medium">Filiale de Speed-Inscri</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat text-white">
            L'expertise du fret maritime
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
            au service de la diaspora
          </p>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Speed-Transit, la branche logistique de Speed-Inscri, vous propose un service complet 
            d'expédition de colis de la France vers le Congo Brazzaville et Pointe-Noire (242).
          </p>

          {/* Promotion Banner */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-8 mx-auto max-w-md">
            <div className="text-white text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xl font-bold mb-2">Offre de lancement</p>
              <p className="text-3xl font-bold">-20%</p>
              <p className="text-sm">sur votre premier envoi !</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-800 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
              <Package className="mr-2 w-5 h-5" />
              Demander un devis
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg font-semibold rounded-xl">
              <Phone className="mr-2 w-5 h-5" />
              +33 7 44 93 44 78
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedTransitHero;
