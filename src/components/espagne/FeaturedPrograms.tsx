
import React from 'react';
import { Briefcase, Palette, Building2, Users, Stethoscope, Globe } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Business & Management",
      duration: "4 ans",
      level: "Bachelor/Master",
      description: "Commerce international, marketing et gestion dans les top business schools"
    },
    {
      icon: Palette,
      title: "Arts & Design",
      duration: "4 ans", 
      level: "Bachelor/Master",
      description: "Mode, design graphique, architecture dans un pays leader créatif"
    },
    {
      icon: Building2,
      title: "Architecture",
      duration: "5 ans",
      level: "Master",
      description: "Formation d'excellence dans le pays de Gaudí et de l'innovation architecturale"
    },
    {
      icon: Users,
      title: "Tourisme & Hôtellerie",
      duration: "3-4 ans",
      level: "Bachelor/Master",
      description: "Secteur phare espagnol avec stages dans les meilleurs établissements"
    },
    {
      icon: Stethoscope,
      title: "Médecine",
      duration: "6 ans",
      level: "Doctorat", 
      description: "Formation médicale reconnue avec système de santé de qualité"
    },
    {
      icon: Globe,
      title: "Relations Internationales",
      duration: "4-5 ans",
      level: "Bachelor/Master",
      description: "Diplomatie, coopération internationale et études européennes"
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
            Découvrez les spécialités espagnoles et les programmes d'excellence reconnus internationalement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl flex items-center justify-center">
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
