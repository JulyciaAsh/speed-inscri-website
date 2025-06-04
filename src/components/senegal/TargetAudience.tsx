
import React from 'react';
import { GraduationCap, Users, Briefcase, Globe } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: GraduationCap,
      title: "Bacheliers africains",
      description: "Jeunes diplômés souhaitant poursuivre leurs études dans un environnement africain moderne",
      age: "18-22 ans",
      goal: "Licence/Master"
    },
    {
      icon: Users,
      title: "Étudiants en échange",
      description: "Programmes d'échange universitaire pour découvrir l'Afrique de l'Ouest",
      age: "20-25 ans", 
      goal: "Semestre/Année"
    },
    {
      icon: Briefcase,
      title: "Professionnels",
      description: "Formation continue et spécialisations pour le marché africain",
      age: "25-40 ans",
      goal: "Certification/MBA"
    },
    {
      icon: Globe,
      title: "Chercheurs",
      description: "Recherche en développement, anthropologie et études africaines",
      age: "25-35 ans",
      goal: "Doctorat/Recherche"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          À qui s'adresse cette destination ?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <profile.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{profile.title}</h3>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-sm text-green-600 font-semibold">{profile.age}</div>
                <div className="text-sm text-gray-600">{profile.goal}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
