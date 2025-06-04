
import React from 'react';
import { Lightbulb, Trophy, Globe2, Rocket, Users, TrendingUp } from 'lucide-react';

const WhyEtatsUnis = () => {
  const advantages = [
    {
      icon: Trophy,
      title: "Universités prestigieuses",
      description: "Accès aux meilleures universités mondiales : Harvard, MIT, Stanford, Princeton..."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Recherche",
      description: "Leader mondial en recherche et développement, Silicon Valley et écosystème startup"
    },
    {
      icon: Globe2,
      title: "Diversité culturelle",
      description: "Société multiculturelle avec des étudiants du monde entier"
    },
    {
      icon: Rocket,
      title: "Opportunités de carrière",
      description: "Marché du travail dynamique avec les plus grandes entreprises mondiales"
    },
    {
      icon: Users,
      title: "Réseau professionnel",
      description: "Alumni networks influents et connexions internationales durables"
    },
    {
      icon: TrendingUp,
      title: "Excellence académique",
      description: "Système éducatif flexible et programmes de classe mondiale"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir les États-Unis ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les États-Unis offrent les meilleures opportunités éducatives et professionnelles 
            au monde avec un système d'enseignement supérieur sans égal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEtatsUnis;
