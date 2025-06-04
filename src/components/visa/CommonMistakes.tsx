
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, FileText, AlertCircle } from 'lucide-react';

const commonMistakes = [
  {
    icon: Clock,
    mistake: "Délais Insuffisants",
    consequence: "Demande précipitée et dossier incomplet",
    solution: "Commencer 4-6 mois avant la rentrée académique",
    frequency: "67% des refus",
    realExample: "Étudiante refusée pour le Canada car demande 2 semaines avant le départ"
  },
  {
    icon: DollarSign,
    mistake: "Preuves Financières Inadéquates",
    consequence: "Refus automatique du consulat",
    solution: "Justificatifs récents et 20% au-dessus du minimum",
    frequency: "43% des refus",
    realExample: "Visa France refusé pour relevés bancaires de plus de 3 mois"
  },
  {
    icon: FileText,
    mistake: "Documents Non Conformes",
    consequence: "Dossier rejeté pour non-conformité technique",
    solution: "Traduction certifiée et apostille obligatoires",
    frequency: "38% des refus",
    realExample: "Allemagne : diplôme non reconnu sur base Anabin"
  },
  {
    icon: AlertCircle,
    mistake: "Projet d'Études Incohérent",
    consequence: "Doute sur la sincérité de la demande",
    solution: "Cohérence parfaite entre parcours et objectifs",
    frequency: "52% des refus",
    realExample: "Refus Canada : projet mal justifié vs parcours antérieur"
  }
];

const CommonMistakes = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-red-100 text-red-800 mb-4">Analyse des Refus</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Les 4 Principales Causes de Refus de Visa
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Basées sur l'analyse de plus de 5000 dossiers traités et notre expertise consulaire de 6 ans
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {commonMistakes.map((mistake, index) => {
            const IconComponent = mistake.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{mistake.mistake}</h3>
                      <Badge className="bg-red-100 text-red-700 text-xs">
                        {mistake.frequency}
                      </Badge>
                    </div>
                    <p className="text-red-600 font-medium mb-3">{mistake.consequence}</p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-green-700 font-medium mb-2">✓ Notre Solution :</p>
                      <p className="text-green-700 text-sm">{mistake.solution}</p>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-blue-700 text-xs font-medium">💡 Exemple réel :</p>
                      <p className="text-blue-700 text-xs mt-1">{mistake.realExample}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonMistakes;
