
import React from 'react';
import { Phone, Building, FileText, Plane, Home } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    { step: "1", title: "Consultation gratuite", desc: "Évaluation de votre profil et définition de votre projet", icon: Phone },
    { step: "2", title: "Sélection des établissements", desc: "Choix des universités et programmes adaptés", icon: Building },
    { step: "3", title: "Préparation du dossier", desc: "Constitution complète de votre candidature", icon: FileText },
    { step: "4", title: "Demande de visa", desc: "Accompagnement pour l'obtention du visa étudiant", icon: Plane },
    { step: "5", title: "Préparation au départ", desc: "Logement, assurance, formalités administratives", icon: Home }
  ];

  return (
    <section className="py-16 bg-white">
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
