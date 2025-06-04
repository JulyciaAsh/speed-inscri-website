
import React from 'react';
import { Phone, Building, FileText, Plane, Globe } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    { step: "1", title: "Évaluation du profil", desc: "Test de langue, évaluation des diplômes et expérience", icon: Phone },
    { step: "2", title: "Sélection des programmes", desc: "Choix stratégique des universités et programmes", icon: Building },
    { step: "3", title: "Applications universitaires", desc: "Soumission des candidatures aux établissements", icon: FileText },
    { step: "4", title: "Permis d'études", desc: "Demande de permis d'études auprès d'IRCC", icon: Plane },
    { step: "5", title: "Préparation à l'immigration", desc: "PGWP, Express Entry et résidence permanente", icon: Globe }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Processus d'admission et d'immigration
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                <step.icon className="w-8 h-8 text-red-600 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
