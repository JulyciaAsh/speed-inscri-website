
import React from 'react';
import { Clock, FileText, DollarSign, BookOpen, Users, Shield } from 'lucide-react';

const ExpertTips = () => {
  const tips = [
    {
      icon: Clock,
      title: "Timing Optimal",
      tip: "Débutez votre demande 4-6 mois avant la rentrée. Les créneaux se remplissent rapidement.",
      category: "Planification"
    },
    {
      icon: FileText,
      title: "Dossier Irréprochable",
      tip: "Chaque document doit être parfait : traductions certifiées, apostilles, et formats requis.",
      category: "Documentation"
    },
    {
      icon: DollarSign,
      title: "Justificatifs Financiers",
      tip: "Présentez 20% de plus que le minimum requis avec des sources de financement diversifiées.",
      category: "Finances"
    },
    {
      icon: BookOpen,
      title: "Projet Cohérent",
      tip: "Démontrez la cohérence entre vos études passées, le programme choisi et vos objectifs futurs.",
      category: "Académique"
    },
    {
      icon: Users,
      title: "Entretien Préparé",
      tip: "Maîtrisez votre projet, connaissez l'établissement et préparez-vous aux questions pièges.",
      category: "Entretien"
    },
    {
      icon: Shield,
      title: "Assurance Complète",
      tip: "Souscrivez une assurance santé couvrant tous les risques dès la confirmation d'admission.",
      category: "Santé"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Conseils d'Experts pour Maximiser vos Chances
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-[#8F1B14] mr-3" />
                  <div>
                    <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{tip.category}</div>
                    <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{tip.tip}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertTips;
