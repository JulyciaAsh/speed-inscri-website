
import React from 'react';

const CostOfLiving = () => {
  const budgetItems = [
    { category: "Logement", amount: "300-600€", desc: "Résidence universitaire ou appartement partagé" },
    { category: "Alimentation", amount: "200-350€", desc: "Courses et repas, cuisine italienne" },
    { category: "Transport", amount: "35-50€", desc: "Abonnement transports urbains" },
    { category: "Loisirs", amount: "100-200€", desc: "Culture, sorties, voyages" },
    { category: "Divers", amount: "80-120€", desc: "Téléphone, vêtements, fournitures" }
  ];

  const financialAids = [
    "Bourses du gouvernement italien",
    "Bourses d'établissements",
    "Programmes Erasmus+",
    "Bourses régionales",
    "Aide au logement pour étudiants",
    "Jobs étudiants autorisés (20h/semaine)"
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
                    <span className="font-bold text-green-600">{item.amount}</span>
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
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{aid}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-800 mb-2">💡 Bon à savoir</h4>
              <p className="text-green-700 text-sm">
                Les frais de scolarité en Italie sont parmi les plus abordables d'Europe, 
                et de nombreuses bourses sont disponibles pour les étudiants méritants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
