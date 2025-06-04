
import React from 'react';
import { GraduationCap, Users, DollarSign, Star } from 'lucide-react';

const CanadaHero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-red-900 via-red-800 to-orange-900 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=800&fit=crop"
          alt="Canada - Paysage canadien"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/60"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">🇨🇦</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat">
                Étudier au Canada
              </h1>
              <p className="text-xl text-red-200 mt-2">Qualité de vie exceptionnelle et diplômes reconnus</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <GraduationCap className="w-8 h-8 text-red-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">95+</div>
              <div className="text-sm text-red-200">Universités partenaires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">800+</div>
              <div className="text-sm text-green-200">Étudiants accompagnés</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">15-25k</div>
              <div className="text-sm text-yellow-200">CAD/an</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Star className="w-8 h-8 text-orange-300 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <div className="text-sm text-orange-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanadaHero;
