
import React from 'react';
import { Button } from '@/components/ui/button';
import { financingOptions } from '@/data/internshipsData';

const FinancingOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Options de Financement pour Professionnels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverses solutions pour financer votre développement professionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {financingOptions.map((option, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{option.type}</h3>
              <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              
              <div className="space-y-2">
                <div className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg text-center">
                  <span className="font-semibold">{option.coverage}</span>
                </div>
                <p className="text-xs text-gray-500">{option.conditions}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-[#8F1B14] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Conseil Personnalisé</h3>
          <p className="text-lg mb-6">
            Nos experts vous accompagnent dans le choix du financement optimal pour votre projet
          </p>
          <Button className="bg-white text-emerald-600 hover:bg-gray-100">
            Demander un conseil gratuit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinancingOptions;
