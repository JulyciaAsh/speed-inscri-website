
import React from 'react';

const CostOfLiving = () => {
  const budgetItems = [
    { category: "Logement", amount: "400-800€", desc: "Résidence universitaire ou appartement" },
    { category: "Alimentation", amount: "200-300€", desc: "Courses et repas au restaurant" },
    { category: "Transport", amount: "50-75€", desc: "Abonnement transports en commun" },
    { category: "Loisirs", amount: "100-200€", desc: "Sorties, culture, sport" },
    { category: "Divers", amount: "100-150€", desc: "Téléphone, vêtements, etc." }
  ];

  const financialAids = [
    "Bourses Eiffel Excellence (1 181€/mois)",
    "Bourses du gouvernement français",
    "Bourses d'établissements",
    "Aide au logement (CAF)",
    "Tarifs réduits étudiants",
    "Jobs étudiants autorisés (964h/an)"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Coût de la vie
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget mensuel moyen</h3>
            <div className="space-y-4">
              {budgetItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
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
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{aid}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-800 mb-2">💡 Bon à savoir</h4>
              <p className="text-green-700 text-sm">
                Les étudiants internationaux bénéficient des mêmes tarifs que les étudiants français 
                dans les universités publiques et ont accès aux mêmes aides sociales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
