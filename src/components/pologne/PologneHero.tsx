
import React from 'react';
import { GraduationCap, Users, DollarSign, Star } from 'lucide-react';

const PologneHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-red-900 via-white to-red-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&h=800&fit=crop"
          alt="Pologne - Cracovie"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-gray-900/60"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">🇵🇱</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat">
                Étudier en Pologne
              </h1>
              <p className="text-xl text-red-200 mt-2">Excellence académique au cœur de l'Europe centrale</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">130+</div>
              <div className="text-sm text-red-200">Universités partenaires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">280+</div>
              <div className="text-sm text-gray-200">Étudiants accompagnés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">2-6k</div>
              <div className="text-sm text-yellow-200">EUR/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">4.6/5</div>
              <div className="text-sm text-red-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PologneHero;
