
import React from 'react';
import { BookOpen } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    { 
      title: "Informatique & IA", 
      unis: "University of Toronto, UBC", 
      color: "from-blue-500 to-blue-600",
      description: "Leader mondial en intelligence artificielle et technologie",
      duration: "3-4 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Ingénierie", 
      unis: "McGill, Waterloo, UofT", 
      color: "from-green-500 to-green-600",
      description: "Innovation en ingénierie et technologies avancées",
      duration: "4-5 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Business", 
      unis: "Rotman, Sauder, Desautels", 
      color: "from-red-500 to-red-600",
      description: "Écoles de commerce reconnues internationalement",
      duration: "2-4 ans",
      level: "Bachelor/MBA"
    },
    { 
      title: "Santé & Médecine", 
      unis: "McMaster, UBC, McGill", 
      color: "from-purple-500 to-purple-600",
      description: "Formation médicale de pointe et recherche avancée",
      duration: "4-8 ans",
      level: "Bachelor/Doctorat"
    },
    { 
      title: "Sciences naturelles", 
      unis: "University of Alberta, Dalhousie", 
      color: "from-teal-500 to-teal-600",
      description: "Recherche de classe mondiale en sciences",
      duration: "3-5 ans",
      level: "Bachelor/PhD"
    },
    { 
      title: "Arts & Créativité", 
      unis: "OCAD University, Emily Carr", 
      color: "from-pink-500 to-pink-600",
      description: "Innovation créative et design contemporain",
      duration: "3-4 ans",
      level: "Bachelor/Master"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Programmes phares
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{program.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Durée:</span>
                  <span className="font-medium">{program.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Niveau:</span>
                  <span className="font-medium">{program.level}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm font-medium">{program.unis}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
