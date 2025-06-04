
import React from 'react';
import { DollarSign, Home, UtensilsCrossed, Bus, Wifi, BookOpen } from 'lucide-react';

const CostOfLiving = () => {
  const costs = [
    { icon: Home, category: "Logement", amount: "800-2000", unit: "USD/mois", desc: "Campus ou appartement selon la ville" },
    { icon: UtensilsCrossed, category: "Alimentation", amount: "300-600", unit: "USD/mois", desc: "Meal plans campus ou courses" },
    { icon: Bus, category: "Transport", amount: "100-200", unit: "USD/mois", desc: "Transport public et déplacements" },
    { icon: BookOpen, category: "Études", amount: "25000-55000", unit: "USD/an", desc: "Frais de scolarité variables" },
    { icon: Wifi, category: "Internet/Téléphone", amount: "50-100", unit: "USD/mois", desc: "Forfaits télécommunications" },
    { icon: DollarSign, category: "Assurance santé", amount: "1500-3000", unit: "USD/an", desc: "Assurance obligatoire pour étudiants" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Coût de la vie aux États-Unis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les États-Unis offrent un investissement éducatif de qualité avec des coûts variables selon les villes et universités.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {costs.map((cost, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <cost.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{cost.category}</h3>
                  <div className="text-lg font-bold text-blue-600">{cost.amount} {cost.unit}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{cost.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Budget annuel moyen</h3>
          <div className="text-4xl font-bold mb-2">50,000-80,000 USD</div>
          <p className="text-blue-100">Incluant scolarité, logement, et frais de vie</p>
        </div>
      </div>
    </section>
  );
};

export default CostOfLiving;
