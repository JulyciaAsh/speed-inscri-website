
import React from 'react';

const CostOfLiving = () => {
  const budgetItems = [
    { category: "Logement", amount: "150-300€", desc: "Résidence universitaire ou appartement" },
    { category: "Alimentation", amount: "120-200€", desc: "Courses et repas quotidiens" },
    { category: "Transport", amount: "15-25€", desc: "Transports publics urbains" },
    { category: "Loisirs", amount: "60-120€", desc: "Sorties, culture, divertissements" },
    { category: "Divers", amount: "50-80€", desc: "Téléphone, vêtements, fournitures" }
  ];

  const financialAids = [
    "Bourses du gouvernement roumain",
    "Programmes Erasmus+",
    "Bourses d'excellence universitaires",
    "Aide sociale étudiante",
    "Réductions transport et culture",
    "Jobs étudiants autorisés"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Coût de la vie
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget mensuel moyen</h3>
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">{item.category}</h4>
                    <span className="font-bold text-blue-600">{item.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Aides financières</h3>
            <div className="space-y-4">
              {financialAids.map((aid, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">{aid}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-2">💡 Bon à savoir</h4>
              <p className="text-blue-700 text-sm">
                La Roumanie offre le meilleur rapport qualité-prix pour les études médicales 
                en Europe, avec des coûts de vie très abordables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
