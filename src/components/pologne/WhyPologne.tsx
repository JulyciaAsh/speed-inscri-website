
import React from 'react';
import { DollarSign, Globe, Trophy, Users, Building, MapPin } from 'lucide-react';

const WhyPologne = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Coûts abordables",
      description: "Frais de scolarité et coût de la vie parmi les plus bas d'Europe"
    },
    {
      icon: Trophy,
      title: "Qualité académique",
      description: "Universités reconnues internationalement avec d'excellents classements"
    },
    {
      icon: Globe,
      title: "Programmes internationaux",
      description: "Large choix de programmes enseignés en anglais"
    },
    {
      icon: Users,
      title: "Communauté accueillante",
      description: "Population chaleureuse et communauté étudiante internationale active"
    },
    {
      icon: Building,
      title: "Infrastructure moderne",
      description: "Campus modernes et équipements de pointe dans les universités"
    },
    {
      icon: MapPin,
      title: "Position centrale",
      description: "Au cœur de l'Europe avec un accès facile à toutes les capitales"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir la Pologne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La Pologne combine excellence académique, coûts abordables et 
            position stratégique au cœur de l'Europe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
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

export default WhyPologne;
