
import React from 'react';
import { GraduationCap, Users, DollarSign, Star } from 'lucide-react';

const FranceHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=800&fit=crop"
          alt="France - Tour Eiffel"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">🇫🇷</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat">
                Étudier en France
              </h1>
              <p className="text-xl text-blue-200 mt-2">Excellence académique au cœur de l'Europe</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">85+</div>
              <div className="text-sm text-blue-200">Universités partenaires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-green-200">Étudiants accompagnés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">170€</div>
              <div className="text-sm text-yellow-200">Frais/an (public)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-purple-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranceHero;
