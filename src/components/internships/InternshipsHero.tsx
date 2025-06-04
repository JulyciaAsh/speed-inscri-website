
import React from 'react';
import { Briefcase, TrendingUp, Building, Star, MapPin, Users } from 'lucide-react';

const InternshipsHero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-emerald-900 via-[#8F1B14] to-blue-900 overflow-hidden">
      {/* Career Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
          <Briefcase className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="absolute top-32 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
          <TrendingUp className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute bottom-40 left-24 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
          <Building className="w-8 h-8 text-purple-400" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/90">Votre carrière commence ici</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-white">
            Stages & Emploi International
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
            Lancez votre carrière avec une expérience professionnelle internationale. 
            Accédez aux meilleures opportunités dans le monde entier.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Building className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">500+ Entreprises</h3>
              <p className="text-white/80 text-sm">Partenaires recruteurs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">80% de Succès</h3>
              <p className="text-white/80 text-sm">Taux de placement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">25+ Pays</h3>
              <p className="text-white/80 text-sm">Opportunités disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsHero;
