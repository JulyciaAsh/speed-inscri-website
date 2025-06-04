
import React from 'react';
import { GraduationCap, Users, DollarSign, Star } from 'lucide-react';

const EspagneHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-red-900 via-yellow-800 to-red-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&h=800&fit=crop"
          alt="Espagne - Paysage espagnol"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-yellow-900/60"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">🇪🇸</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat">
                Étudier en Espagne
              </h1>
              <p className="text-xl text-yellow-200 mt-2">Innovation et art de vivre méditerranéen</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">75+</div>
              <div className="text-sm text-yellow-200">Universités partenaires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">400+</div>
              <div className="text-sm text-red-200">Étudiants accompagnés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-orange-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">800-6k</div>
              <div className="text-sm text-orange-200">EUR/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspagneHero;
