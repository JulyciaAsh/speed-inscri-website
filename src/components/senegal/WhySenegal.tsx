
import React from 'react';
import { Globe, Heart, TrendingUp, Users, BookOpen, Plane } from 'lucide-react';

const WhySenegal = () => {
  const advantages = [
    {
      icon: Globe,
      title: "Porte d'entrée de l'Afrique",
      description: "Position stratégique pour découvrir le continent africain et ses opportunités économiques"
    },
    {
      icon: Heart,
      title: "Teranga légendaire",
      description: "Hospitalité sénégalaise reconnue mondialement, intégration facilitée pour les étudiants"
    },
    {
      icon: TrendingUp,
      title: "Économie émergente",
      description: "Croissance économique soutenue avec de nombreuses opportunités d'investissement"
    },
    {
      icon: Users,
      title: "Diversité culturelle",
      description: "Mélange harmonieux de cultures africaines et influences occidentales"
    },
    {
      icon: BookOpen,
      title: "Excellence académique",
      description: "Universités de qualité avec des programmes adaptés aux besoins du marché"
    },
    {
      icon: Plane,
      title: "Accessibilité",
      description: "Facilités de visa et coût de la vie abordable pour les étudiants internationaux"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir le Sénégal ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le Sénégal offre une expérience éducative unique alliant qualité académique, 
            richesse culturelle et opportunités de développement en Afrique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
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

export default WhySenegal;
