
import React from 'react';
import { BookOpen } from 'lucide-react';

const FeaturedPrograms = () => {
  const programs = [
    { 
      title: "Business & Management", 
      unis: "HEC Paris, ESSEC, EDHEC", 
      color: "from-blue-500 to-blue-600",
      description: "Programmes de renommée mondiale en management et business",
      duration: "1-2 ans",
      level: "Master/MBA"
    },
    { 
      title: "Ingénierie", 
      unis: "Polytechnique, Centrale, Mines", 
      color: "from-green-500 to-green-600",
      description: "Excellence française en ingénierie et technologies",
      duration: "3-5 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Arts & Design", 
      unis: "Beaux-Arts, ENSAD, École Boulle", 
      color: "from-purple-500 to-purple-600",
      description: "Créativité et innovation dans les arts appliqués",
      duration: "2-3 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Luxe & Mode", 
      unis: "ESMOD, IFM, ISEM", 
      color: "from-pink-500 to-pink-600",
      description: "Capital mondial de la mode et du luxe",
      duration: "1-2 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Sciences Politiques", 
      unis: "Sciences Po Paris, IEP", 
      color: "from-indigo-500 to-indigo-600",
      description: "Formation d'excellence en sciences politiques",
      duration: "3-5 ans",
      level: "Bachelor/Master"
    },
    { 
      title: "Médecine & Santé", 
      unis: "Sorbonne, Descartes", 
      color: "from-red-500 to-red-600",
      description: "Formation médicale de haut niveau",
      duration: "6-8 ans",
      level: "Doctorat"
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
