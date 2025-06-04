
import React from 'react';
import { Briefcase, Stethoscope, Cog, BookOpen, Leaf, Users } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Business & Management",
      duration: "3-4 ans",
      level: "Bachelor/Master",
      description: "Commerce, gestion et entrepreneuriat dans le contexte africain"
    },
    {
      icon: Stethoscope,
      title: "Médecine & Santé",
      duration: "6 ans", 
      level: "MBBS",
      description: "Formation médicale avec focus sur les maladies tropicales"
    },
    {
      icon: Cog,
      title: "Ingénierie",
      duration: "4 ans",
      level: "Bachelor",
      description: "Génie civil, électrique, mécanique pour le développement africain"
    },
    {
      icon: Leaf,
      title: "Agriculture & Environnement",
      duration: "4 ans",
      level: "Bachelor",
      description: "Agriculture durable et gestion des ressources naturelles"
    },
    {
      icon: BookOpen,
      title: "Sciences Sociales",
      duration: "3-4 ans",
      level: "Bachelor/Master",
      description: "Sociologie, relations internationales, développement"
    },
    {
      icon: Users,
      title: "Communication",
      duration: "3 ans",
      level: "Bachelor",
      description: "Journalisme, relations publiques, médias africains"
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
            Découvrez les programmes les plus demandés dans les universités ghanéennes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-green-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-green-600 rounded-xl flex items-center justify-center">
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
