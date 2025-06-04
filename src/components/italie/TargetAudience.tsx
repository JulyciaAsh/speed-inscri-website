
import React from 'react';
import { GraduationCap, Palette, Users, Heart } from 'lucide-react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: GraduationCap,
      title: "Étudiants européens",
      description: "Étudiants UE cherchant excellence académique dans un cadre culturel unique",
      age: "18-25 ans",
      goal: "Bachelor/Master"
    },
    {
      icon: Palette,
      title: "Créatifs & Artistes",
      description: "Futurs designers, architectes, artistes attirés par l'héritage italien",
      age: "20-30 ans", 
      goal: "Arts/Design"
    },
    {
      icon: Users,
      title: "Professionnels du business",
      description: "Cadres et entrepreneurs visant les meilleures écoles de commerce européennes",
      age: "25-35 ans",
      goal: "MBA/Master"
    },
    {
      icon: Heart,
      title: "Passionnés de culture",
      description: "Étudiants attirés par l'art, l'histoire et le mode de vie italien",
      age: "18-28 ans",
      goal: "Sciences humaines"
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
