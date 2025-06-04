
import React from 'react';

const CostOfLiving = () => {
  const tuitionFees = [
    { program: "Bachelor (premier cycle)", amount: "15-25K CAD", desc: "Programmes de premier cycle" },
    { program: "Master", amount: "20-35K CAD", desc: "Programmes de deuxième cycle" },
    { program: "MBA", amount: "40-80K CAD", desc: "Master of Business Administration" },
    { program: "PhD", amount: "10-20K CAD", desc: "Programmes de doctorat (souvent financés)" }
  ];

  const livingCosts = [
    { category: "Logement", amount: "800-1500 CAD", desc: "Résidence ou appartement partagé" },
    { category: "Alimentation", amount: "300-500 CAD", desc: "Courses et repas" },
    { category: "Transport", amount: "100-150 CAD", desc: "Transports en commun" },
    { category: "Assurance santé", amount: "80-120 CAD", desc: "Assurance médicale obligatoire" },
    { category: "Divers", amount: "200-300 CAD", desc: "Loisirs, vêtements, téléphone" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Coût de la vie et des études
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frais de scolarité annuels (CAD)</h3>
            <div className="space-y-4">
              {tuitionFees.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">{item.program}</h4>
                    <span className="font-bold text-red-600">{item.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget mensuel de vie (CAD)</h3>
            <div className="space-y-4">
              {livingCosts.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-gray-900">{item.category}</h4>
                    <span className="font-bold text-red-600">{item.amount}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h4 className="font-bold text-green-800 mb-2">💰 Financement</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Travail 20h/semaine pendant les études</li>
                <li>• Programmes co-op rémunérés</li>
                <li>• Bourses gouvernementales et universitaires</li>
                <li>• Assistanat de recherche et d'enseignement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
