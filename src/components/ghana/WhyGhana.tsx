
import React from 'react';
import { Globe, Heart, DollarSign, Shield, Users, Building } from 'lucide-react';

const WhyGhana = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Anglophone",
      description: "Enseignement en anglais dans un environnement africain authentique"
    },
    {
      icon: Heart,
      title: "Stabilité politique",
      description: "Démocratie stable et sécurité pour les étudiants internationaux"
    },
    {
      icon: DollarSign,
      title: "Coûts abordables",
      description: "Frais de scolarité et coût de la vie très compétitifs en Afrique"
    },
    {
      icon: Shield,
      title: "Qualité académique",
      description: "Universités reconnues et programmes accrédités internationalement"
    },
    {
      icon: Users,
      title: "Diversité culturelle",
      description: "Melting-pot culturel avec une riche tradition africaine"
    },
    {
      icon: Building,
      title: "Hub régional",
      description: "Centre économique de l'Afrique de l'Ouest avec de nombreuses opportunités"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir le Ghana ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le Ghana offre une expérience africaine unique alliant stabilité, 
            qualité académique et richesse culturelle dans un environnement anglophone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
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

export default WhyGhana;
