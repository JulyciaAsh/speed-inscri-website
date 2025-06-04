
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, FileText, Users, HeartHandshake } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Évaluation Gratuite Personnalisée",
    description: "Analyse complète de votre profil académique et de vos objectifs",
    duration: "24-48 heures",
    details: [
      "Étude approfondie de votre dossier académique et professionnel",
      "Évaluation de vos chances de succès par destination",
      "Recommandations personnalisées d'établissements",
      "Devis détaillé et transparent sans frais cachés",
      "Planning personnalisé avec jalons clés"
    ],
    icon: Target
  },
  {
    step: "02",
    title: "Constitution du Dossier Expert",
    description: "Préparation méticuleuse de tous les documents requis",
    duration: "2-3 semaines",
    details: [
      "Traduction certifiée par traducteurs assermentés",
      "Rédaction professionnelle de la lettre de motivation",
      "Optimisation des preuves financières selon pays",
      "Préparation aux tests linguistiques requis",
      "Révision complète par nos experts visa"
    ],
    icon: FileText
  },
  {
    step: "03",
    title: "Accompagnement Consulaire Premium",
    description: "Support complet jusqu'à l'obtention du visa",
    duration: "Variable selon pays",
    details: [
      "Prise de rendez-vous consulaire en priorité",
      "Coaching intensif pour l'entretien consulaire",
      "Simulation d'entretien avec questions réelles",
      "Accompagnement physique le jour J (si possible)",
      "Gestion des recours en cas de problème"
    ],
    icon: Users
  },
  {
    step: "04",
    title: "Suivi Post-Visa & Intégration",
    description: "Support continu jusqu'à votre installation",
    duration: "Jusqu'à 6 mois post-arrivée",
    details: [
      "Suivi en temps réel de votre demande",
      "Assistance pour les formalités pré-départ",
      "Guide d'intégration dans le pays de destination",
      "Support logement et ouverture compte bancaire",
      "Réseau d'anciens étudiants pour l'intégration"
    ],
    icon: HeartHandshake
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Méthode Speed-Inscri</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Notre Processus d'Accompagnement Certifié
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Une méthode structurée et éprouvée depuis 2018, perfectionnée avec plus de 2800 dossiers traités
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-l-4 border-[#8F1B14]">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#8F1B14] to-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <IconComponent className="w-6 h-6 text-[#8F1B14]" />
                      </div>
                      <CardDescription className="text-[#8F1B14] font-semibold text-lg">{step.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 font-medium">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
