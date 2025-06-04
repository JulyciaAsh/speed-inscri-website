
import React from 'react';
import { Palette, Briefcase, Building, Camera, Utensils, BookOpen } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Palette,
      title: "Arts & Design",
      duration: "3-5 ans",
      level: "Bachelor/Master",
      description: "Beaux-arts, design industriel, mode dans le pays de la Renaissance"
    },
    {
      icon: Briefcase,
      title: "Business & Management",
      duration: "2-4 ans", 
      level: "Master/MBA",
      description: "Programmes de commerce et gestion dans des universités de prestige mondial"
    },
    {
      icon: Building,
      title: "Architecture",
      duration: "5 ans",
      level: "Master",
      description: "Architecture et urbanisme avec l'héritage italien unique"
    },
    {
      icon: Camera,
      title: "Communication & Médias",
      duration: "3 ans",
      level: "Bachelor",
      description: "Journalisme, cinéma et communication dans un contexte culturel riche"
    },
    {
      icon: Utensils,
      title: "Gastronomie & Tourisme",
      duration: "3-4 ans",
      level: "Bachelor/Master", 
      description: "Management hôtelier et gastronomie dans le pays de la haute cuisine"
    },
    {
      icon: BookOpen,
      title: "Sciences Humaines",
      duration: "3-5 ans",
      level: "Bachelor/Master",
      description: "Histoire de l'art, archéologie, littérature dans leur contexte originel"
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
            Découvrez les programmes les plus demandés dans les universités italiennes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-red-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-xl flex items-center justify-center">
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
