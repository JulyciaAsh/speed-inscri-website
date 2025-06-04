
import React from 'react';
import { Phone, Building, FileText, Plane, Home } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    { step: "1", title: "Évaluation initiale", desc: "Analyse de votre profil et choix de spécialité", icon: Phone },
    { step: "2", title: "Choix université", desc: "Sélection des meilleures universités selon vos critères", icon: Building },
    { step: "3", title: "Dossier candidature", desc: "Préparation complète et optimisation du dossier", icon: FileText },
    { step: "4", title: "Formalités légales", desc: "Visa étudiant et démarches administratives", icon: Plane },
    { step: "5", title: "Installation", desc: "Logement, orientation et intégration locale", icon: Home }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Processus d'admission
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                <step.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
