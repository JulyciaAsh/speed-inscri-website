
import React from 'react';
import { DollarSign, Home, UtensilsCrossed, Bus, Wifi, BookOpen } from 'lucide-react';

const CostOfLiving = () => {
  const costs = [
    { icon: Home, category: "Logement", amount: "300-700", unit: "EUR/mois", desc: "Résidence étudiante ou appartement partagé" },
    { icon: UtensilsCrossed, category: "Alimentation", amount: "200-350", unit: "EUR/mois", desc: "Courses et restaurants étudiants" },
    { icon: Bus, category: "Transport", amount: "30-50", unit: "EUR/mois", desc: "Abonnements transport public" },
    { icon: BookOpen, category: "Études", amount: "800-6000", unit: "EUR/an", desc: "Frais universitaires selon le statut" },
    { icon: Wifi, category: "Internet/Téléphone", amount: "30-50", unit: "EUR/mois", desc: "Forfaits télécommunications" },
    { icon: DollarSign, category: "Loisirs", amount: "150-300", unit: "EUR/mois", desc: "Sorties, culture et voyages" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Coût de la vie en Espagne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'Espagne offre un excellent rapport qualité-prix avec un coût de vie abordable 
            et une qualité de vie exceptionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {costs.map((cost, index) => (
            <div key={index} className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <cost.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cost.category}</h3>
                  <div className="text-lg font-bold text-red-600">{cost.amount} {cost.unit}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{cost.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Budget mensuel moyen</h3>
          <div className="text-4xl font-bold mb-2">800-1,200 EUR</div>
          <p className="text-red-100">Incluant logement, nourriture, transport et loisirs</p>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
