
import React from 'react';
import { GraduationCap, Users, Briefcase, Trophy } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: GraduationCap,
      title: "Étudiants d'excellence",
      description: "Bacheliers avec d'excellents résultats visant les meilleures universités mondiales",
      age: "17-22 ans",
      goal: "Bachelor/Master"
    },
    {
      icon: Users,
      title: "Étudiants internationaux",
      description: "Jeunes ambitieux cherchant une expérience académique de classe mondiale",
      age: "18-25 ans", 
      goal: "Études complètes"
    },
    {
      icon: Briefcase,
      title: "Professionnels confirmés",
      description: "Cadres souhaitant un MBA ou une spécialisation dans les top business schools",
      age: "25-35 ans",
      goal: "MBA/Executive"
    },
    {
      icon: Trophy,
      title: "Chercheurs & Doctorants",
      description: "Recherche de pointe avec accès aux laboratoires les plus avancés",
      age: "25-40 ans",
      goal: "PhD/PostDoc"
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <profile.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">{profile.title}</h3>
              <p className="text-gray-600 mb-4">{profile.description}</p>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-sm text-blue-600 font-semibold">{profile.age}</div>
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
