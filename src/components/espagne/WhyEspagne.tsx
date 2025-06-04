
import React from 'react';
import { Sun, Heart, Briefcase, Palette, Users, Plane } from 'lucide-react';

const WhyEspagne = () => {
  const advantages = [
    {
      icon: Sun,
      title: "Climat méditerranéen",
      description: "Plus de 300 jours de soleil par an et cadre de vie exceptionnel"
    },
    {
      icon: Heart,
      title: "Culture riche",
      description: "Patrimoine artistique et culturel exceptionnel, mode de vie convivial"
    },
    {
      icon: Briefcase,
      title: "Économie dynamique",
      description: "4ème économie européenne avec de nombreuses opportunités d'emploi"
    },
    {
      icon: Palette,
      title: "Innovation & Design",
      description: "Leader en architecture, mode et design avec un écosystème créatif unique"
    },
    {
      icon: Users,
      title: "Langue internationale",
      description: "2ème langue la plus parlée au monde, atout majeur pour votre carrière"
    },
    {
      icon: Plane,
      title: "Accessibilité",
      description: "Facilités pour les étudiants UE et accueil chaleureux des internationaux"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Pourquoi choisir l'Espagne ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Espagne combine excellence académique, qualité de vie exceptionnelle 
            et opportunités professionnelles dans un cadre méditerranéen unique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
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

export default WhyEspagne;
