
import React from 'react';
import { Briefcase, Cpu, Stethoscope, Building2, Palette, Gavel } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Briefcase,
      title: "Commerce International",
      duration: "3-5 ans",
      level: "Licence/Master",
      description: "Formation en commerce, économie et relations internationales avec focus Afrique"
    },
    {
      icon: Cpu,
      title: "Informatique & TIC",
      duration: "3-5 ans", 
      level: "Licence/Master",
      description: "Programmes en développement logiciel, réseaux et nouvelles technologies"
    },
    {
      icon: Stethoscope,
      title: "Médecine & Santé",
      duration: "6-8 ans",
      level: "Doctorat",
      description: "Formation médicale complète avec stages dans les hôpitaux partenaires"
    },
    {
      icon: Building2,
      title: "Ingénierie",
      duration: "5 ans",
      level: "Master",
      description: "Spécialisations en génie civil, électrique et mécanique"
    },
    {
      icon: Palette,
      title: "Arts & Culture",
      duration: "3-5 ans",
      level: "Licence/Master", 
      description: "Études des arts africains, musique traditionnelle et arts visuels"
    },
    {
      icon: Gavel,
      title: "Droit Africain",
      duration: "4-5 ans",
      level: "Master",
      description: "Droit des affaires, droit international et législations africaines"
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
            Découvrez nos programmes phares adaptés aux besoins du marché africain et international.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-yellow-600 rounded-xl flex items-center justify-center">
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
