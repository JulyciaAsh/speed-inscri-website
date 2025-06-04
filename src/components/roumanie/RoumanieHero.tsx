
import React from 'react';
import { GraduationCap, Users, DollarSign, Star } from 'lucide-react';

const RoumanieHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-yellow-600 to-red-800 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1555021692-0ad0a3ce0f65?w=1200&h=800&fit=crop"
          alt="Roumanie - Château de Bran"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/60"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">🇷🇴</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat">
                Étudier en Roumanie
              </h1>
              <p className="text-xl text-blue-200 mt-2">Tradition académique et modernité européenne</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-sm text-blue-200">Universités partenaires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">320+</div>
              <div className="text-sm text-yellow-200">Étudiants accompagnés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">2-5k</div>
              <div className="text-sm text-red-200">EUR/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">4.5/5</div>
              <div className="text-sm text-blue-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoumanieHero;
