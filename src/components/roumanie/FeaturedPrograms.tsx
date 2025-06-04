
import React from 'react';
import { Stethoscope, Syringe, Briefcase, Cog, BookOpen, Users } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Stethoscope,
      title: "Médecine générale",
      duration: "6 ans",
      level: "Doctorat",
      description: "Formation médicale complète reconnue dans toute l'UE"
    },
    {
      icon: Syringe,
      title: "Médecine dentaire",
      duration: "6 ans", 
      level: "Doctorat",
      description: "Dentisterie avec équipements modernes et stages pratiques"
    },
    {
      icon: Users,
      title: "Médecine vétérinaire",
      duration: "6 ans",
      level: "Doctorat",
      description: "Formation vétérinaire complète avec cliniques d'application"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      duration: "3-4 ans",
      level: "Bachelor/Master",
      description: "Gestion d'entreprise et commerce international"
    },
    {
      icon: Cog,
      title: "Ingénierie",
      duration: "4-5 ans",
      level: "Bachelor/Master",
      description: "Toutes spécialités techniques avec focus sur l'innovation"
    },
    {
      icon: BookOpen,
      title: "Sciences Humaines",
      duration: "3-5 ans",
      level: "Bachelor/Master",
      description: "Psychologie, sociologie, sciences politiques"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Programmes d'études populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les programmes les plus demandés dans les universités roumaines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl flex items-center justify-center">
                  <program.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-montserrat">{program.title}</h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span>{program.level}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
