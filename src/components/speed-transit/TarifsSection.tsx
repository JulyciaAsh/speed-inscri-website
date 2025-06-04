
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TarifsSection = () => {
  const tarifs = [
    { type: "Carton S", dimensions: "66 x 40 x 50 cm", prix: "100 €" },
    { type: "Carton M", dimensions: "80 x 50 x 50 cm", prix: "130 €" },
    { type: "Carton L", dimensions: "70 x 60 x 60 cm", prix: "140 €" },
    { type: "Carton XL", dimensions: "100 x 50 x 50 cm", prix: "220 €" },
    { type: "Fût 120L-280L", dimensions: "Variable", prix: "Jusqu'à 340 €" },
    { type: "Électroménager", dimensions: "Sur mesure", prix: "Sur devis" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            📊 Nos Tarifs Indicatifs
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Envois vers le Congo (Brazzaville & Pointe-Noire)
          </p>
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            🔖 Remise de -20% sur votre premier envoi !
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-green-700 text-white p-4">
              <div className="grid grid-cols-3 gap-4 font-semibold">
                <div>Type d'envoi</div>
                <div>Dimensions (cm)</div>
                <div>Prix TTC (€)</div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {tarifs.map((tarif, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">{tarif.type}</div>
                  <div className="text-gray-600">{tarif.dimensions}</div>
                  <div className="font-bold text-green-700">{tarif.prix}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">
              Malles & colis spéciaux • Électroménager • Meubles • TV : <strong>Sur devis</strong>
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl">
              Demander un devis personnalisé
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
