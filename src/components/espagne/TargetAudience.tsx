
import React from 'react';
import { GraduationCap, Users, Briefcase, Heart } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: GraduationCap,
      title: "Étudiants européens",
      description: "Jeunes UE recherchant excellence académique et qualité de vie méditerranéenne",
      age: "18-23 ans",
      goal: "Bachelor/Master"
    },
    {
      icon: Users,
      title: "Apprenants d'espagnol",
      description: "Étudiants souhaitant maîtriser la 2ème langue mondiale dans son contexte",
      age: "18-25 ans", 
      goal: "Immersion/Études"
    },
    {
      icon: Briefcase,
      title: "Professionnels créatifs",
      description: "Spécialistes en design, mode, architecture cherchant l'inspiration espagnole",
      age: "22-35 ans",
      goal: "Master/Spécialisation"
    },
    {
      icon: Heart,
      title: "Amoureux de la culture",
      description: "Étudiants passionnés par l'art, l'histoire et la culture hispanique",
      age: "20-30 ans",
      goal: "Arts/Lettres"
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
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <profile.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{profile.title}</h3>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="bg-red-50 rounded-xl p-4">
                <div className="text-sm text-red-600 font-semibold">{profile.age}</div>
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
