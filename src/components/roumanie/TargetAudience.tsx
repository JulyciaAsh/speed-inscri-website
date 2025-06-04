
import React from 'react';
import { Stethoscope, GraduationCap, Users, Globe } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: Stethoscope,
      title: "Futurs médecins",
      description: "Étudiants visant une formation médicale européenne abordable et reconnue",
      age: "18-25 ans",
      goal: "Médecine/Dentaire"
    },
    {
      icon: GraduationCap,
      title: "Étudiants européens",
      description: "Jeunes EU cherchant excellence académique à coûts réduits",
      age: "18-25 ans", 
      goal: "Bachelor/Master"
    },
    {
      icon: Users,
      title: "Étudiants francophones",
      description: "Étudiants d'Afrique francophone et France attirés par les liens culturels",
      age: "20-30 ans",
      goal: "Études supérieures"
    },
    {
      icon: Globe,
      title: "Étudiants internationaux",
      description: "Étudiants du monde entier cherchant diplôme européen accessible",
      age: "18-28 ans",
      goal: "Diplôme UE"
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
