
import React from 'react';
import { Palette, Building, Sun, Heart, Users, MapPin } from 'lucide-react';

const WhyItalie = () => {
  const advantages = [
    {
      icon: Palette,
      title: "Berceau de la Renaissance",
      description: "Art, architecture et histoire dans un cadre universitaire d'exception"
    },
    {
      icon: Building,
      title: "Universités prestigieuses",
      description: "Bocconi, Università Cattolica, Politecnico di Milano parmi les meilleures d'Europe"
    },
    {
      icon: Sun,
      title: "Cadre de vie exceptionnel",
      description: "Climat méditerranéen, paysages magnifiques et qualité de vie italienne"
    },
    {
      icon: Heart,
      title: "Culture et gastronomie",
      description: "Immersion dans la culture italienne authentique et sa gastronomie renommée"
    },
    {
      icon: Users,
      title: "Communauté internationale",
      description: "Nombreux programmes en anglais et communauté étudiante multiculturelle"
    },
    {
      icon: MapPin,
      title: "Position stratégique",
      description: "Au cœur de l'Europe avec un accès facile à toute la Méditerranée"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir l'Italie ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Italie offre une expérience académique unique alliant excellence éducative, 
            richesse culturelle et art de vivre méditerranéen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
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

export default WhyItalie;
