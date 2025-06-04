
import React from 'react';
import { DollarSign, Stethoscope, Globe, MapPin, Users, Trophy } from 'lucide-react';

const WhyRoumanie = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Très abordable",
      description: "Coûts d'études et de vie parmi les plus bas d'Europe avec qualité préservée"
    },
    {
      icon: Stethoscope,
      title: "Excellence médicale",
      description: "Formation médicale reconnue dans toute l'UE avec standards européens"
    },
    {
      icon: Globe,
      title: "Programmes internationaux",
      description: "Large offre de formations en anglais et français"
    },
    {
      icon: MapPin,
      title: "Localisation stratégique",
      description: "Porte d'entrée vers l'Europe de l'Est et les Balkans"
    },
    {
      icon: Users,
      title: "Accueil chaleureux",
      description: "Population francophone et accueillante pour les étudiants internationaux"
    },
    {
      icon: Trophy,
      title: "Diplômes reconnus UE",
      description: "Reconnaissance automatique dans tous les pays de l'Union européenne"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir la Roumanie ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Roumanie offre une formation européenne de qualité à des coûts 
            exceptionnellement abordables, particulièrement pour les études médicales.
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

export default WhyRoumanie;
