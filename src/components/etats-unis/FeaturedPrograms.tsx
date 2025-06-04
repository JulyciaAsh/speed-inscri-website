
import React from 'react';
import { Cpu, Briefcase, Stethoscope, Palette, Cog, BookOpen } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Cpu,
      title: "Computer Science",
      duration: "4 ans",
      level: "Bachelor/Master",
      description: "Programmation, IA, cybersécurité avec accès aux géants tech de Silicon Valley"
    },
    {
      icon: Briefcase,
      title: "Business Administration",
      duration: "2-4 ans", 
      level: "MBA/Bachelor",
      description: "Gestion, finance, marketing dans les meilleures business schools américaines"
    },
    {
      icon: Stethoscope,
      title: "Medicine & Health",
      duration: "4-8 ans",
      level: "MD/PhD",
      description: "Formation médicale de pointe avec stages dans les hôpitaux de renommée mondiale"
    },
    {
      icon: Cog,
      title: "Engineering",
      duration: "4-6 ans",
      level: "Bachelor/Master",
      description: "Toutes spécialités d'ingénierie avec équipements de dernière génération"
    },
    {
      icon: Palette,
      title: "Arts & Design",
      duration: "4 ans",
      level: "Bachelor/MFA", 
      description: "Beaux-arts, design graphique, cinéma dans les centres créatifs américains"
    },
    {
      icon: BookOpen,
      title: "Liberal Arts",
      duration: "4 ans",
      level: "Bachelor",
      description: "Formation généraliste excellente avec flexibilité de spécialisation"
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
            Découvrez les programmes les plus demandés dans les universités américaines.
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
