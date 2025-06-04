
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, DollarSign, Users, FileText, Star, CheckCircle, Award, Target, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const visaTypes = [
  {
    id: 'canada',
    country: "Canada",
    flag: "🇨🇦",
    visaName: "Permis d'études",
    duration: "Durée du programme + 90 jours",
    processingTime: "4-12 semaines",
    cost: "150 CAD + frais biométriques (85 CAD)",
    successRate: "96%",
    requirements: [
      "Lettre d'acceptation d'un établissement agréé (DLI)",
      "Preuve de fonds suffisants (10 000-12 000 CAD/an + frais scolaires)",
      "Certificat médical (selon pays d'origine)",
      "Certificat de police (casier judiciaire)",
      "Lettre explicative détaillée du projet d'études",
      "Relevés de notes et diplômes traduits et certifiés",
      "Preuve de liens avec le pays d'origine",
      "Test de langue (IELTS/TEF selon le programme)"
    ],
    workRights: "20h/semaine pendant les études, temps plein pendant les vacances",
    advantages: [
      "Possibilité de travailler sur le campus sans permis",
      "Permis de travail post-diplôme (PGWP) disponible",
      "Conjoint peut obtenir un permis de travail ouvert",
      "Chemin vers la résidence permanente via Express Entry",
      "Système de santé accessible dans certaines provinces",
      "Possibilité d'amener les enfants avec visa étudiant"
    ],
    specificTips: [
      "Démontrez vos liens familiaux et économiques avec votre pays",
      "Justifiez le choix du Canada et de l'établissement spécifique",
      "Préparez un plan de retour détaillé post-études",
      "Souscrivez une assurance santé dès l'acceptation"
    ]
  },
  {
    id: 'france',
    country: "France",
    flag: "🇫🇷",
    visaName: "Visa long séjour étudiant",
    duration: "1 an renouvelable",
    processingTime: "2-4 semaines",
    cost: "99 EUR + frais Campus France (selon pays)",
    successRate: "94%",
    requirements: [
      "Inscription via Campus France obligatoire",
      "Attestation d'hébergement ou réservation hôtelière",
      "Justificatifs financiers (615 EUR/mois minimum)",
      "Assurance maladie internationale",
      "Diplômes traduits et légalisés (apostille)",
      "Test de français TCF/DELF/DALF (selon programme)",
      "Motivation académique détaillée",
      "Curriculum vitae en français"
    ],
    workRights: "964h/an maximum (temps partiel autorisé)",
    advantages: [
      "Accès au système de santé français (Sécurité Sociale)",
      "Réductions étudiantes étendues (transport, culture)",
      "Possibilité de changer de statut vers salarié",
      "Accès libre à l'espace Schengen (26 pays)",
      "Frais de scolarité réduits dans le public",
      "Bourses d'excellence disponibles"
    ],
    specificTips: [
      "Maîtrisez le processus Campus France spécifique à votre pays",
      "Préparez l'entretien Campus France avec soin",
      "Choisissez l'hébergement avant la demande de visa",
      "Démontrez votre niveau de français même en programme anglais"
    ]
  },
  {
    id: 'germany',
    country: "Allemagne",
    flag: "🇩🇪",
    visaName: "Visa étudiant national",
    duration: "Durée des études",
    processingTime: "6-12 semaines",
    cost: "75 EUR + frais de dossier",
    successRate: "91%",
    requirements: [
      "Admission universitaire confirmée (Uni-assist si requis)",
      "Compte bloqué (Sperrkonto) de 11 208 EUR/an minimum",
      "Assurance santé obligatoire reconnue en Allemagne",
      "Diplômes certifiés et évalués (base Anabin)",
      "Preuve de compétences linguistiques (allemand/anglais)",
      "CV détaillé (format européen recommandé)",
      "Lettre de motivation en allemand ou anglais",
      "Certificat de naissance traduit"
    ],
    workRights: "120 jours pleins ou 240 demi-journées par an",
    advantages: [
      "Éducation de qualité mondiale à coût très réduit",
      "Visa de recherche d'emploi 18 mois post-diplôme",
      "Économie européenne forte avec opportunités",
      "Multiculturalisme et excellente intégration",
      "Transports publics étudiants gratuits/réduits",
      "Accès aux programmes Erasmus+"
    ],
    specificTips: [
      "Ouvrez le compte bloqué bien avant la demande",
      "Vérifiez la reconnaissance de vos diplômes sur Anabin",
      "Apprenez l'allemand même pour les programmes en anglais",
      "Préparez-vous aux délais consulaires plus longs"
    ]
  },
  {
    id: 'australia',
    country: "Australie",
    flag: "🇦🇺",
    visaName: "Student Visa (subclass 500)",
    duration: "Durée du programme + période supplémentaire",
    processingTime: "4-8 semaines",
    cost: "650 AUD + frais santé",
    successRate: "89%",
    requirements: [
      "Confirmation d'inscription (CoE) d'un établissement CRICOS",
      "Genuine Temporary Entrant (GTE) statement",
      "Preuve de fonds suffisants (21 041 AUD/an + frais)",
      "Couverture santé étudiante obligatoire (OSHC)",
      "Tests d'anglais (IELTS, TOEFL, PTE)",
      "Examens médicaux selon pays d'origine",
      "Assurance voyage internationale",
      "Preuve de liens avec le pays d'origine"
    ],
    workRights: "48h par quinzaine pendant les études",
    advantages: [
      "Possibilité de travailler temps plein pendant les vacances",
      "Visa de travail post-études disponible (2-4 ans)",
      "Qualité de vie exceptionnelle",
      "Système éducatif reconnu mondialement",
      "Conjoint peut travailler avec restrictions",
      "Pathways vers la résidence permanente"
    ],
    specificTips: [
      "Rédigez soigneusement votre déclaration GTE",
      "Souscrivez l'OSHC avant la demande de visa",
      "Préparez-vous aux examens médicaux obligatoires",
      "Démontrez vos intentions temporaires claires"
    ]
  }
];

const VisaExplorer = () => {
  const [selectedCountry, setSelectedCountry] = useState('canada');
  const selectedVisa = visaTypes.find(visa => visa.id === selectedCountry);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-[#8F1B14] text-white mb-4">Guide Complet 2024</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Visa Étudiant par Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Découvrez les spécificités, coûts, délais et conseils d'experts pour chaque pays. 
            Informations mises à jour en temps réel par nos spécialistes.
          </p>
        </div>
        
        {/* Country Selector Enhanced */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-2 rounded-2xl flex flex-wrap gap-2">
            {visaTypes.map((visa) => (
              <button
                key={visa.id}
                onClick={() => setSelectedCountry(visa.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCountry === visa.id
                    ? 'bg-[#8F1B14] text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:bg-white hover:shadow-md'
                }`}
              >
                {visa.flag} {visa.country}
                <Badge className="ml-2 text-xs" variant="outline">
                  {visa.successRate}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Visa Details Enhanced */}
        {selectedVisa && (
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{selectedVisa.flag}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedVisa.country}</h3>
                      <div className="text-[#8F1B14] font-semibold text-lg">{selectedVisa.visaName}</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
                    {selectedVisa.successRate} réussite
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border-l-4 border-blue-500">
                    <Calendar className="w-6 h-6 text-blue-500 mb-2" />
                    <div className="font-semibold text-gray-900">Durée</div>
                    <div className="text-gray-600 text-sm">{selectedVisa.duration}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-green-500">
                    <Clock className="w-6 h-6 text-green-500 mb-2" />
                    <div className="font-semibold text-gray-900">Traitement</div>
                    <div className="text-gray-600 text-sm">{selectedVisa.processingTime}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-yellow-500">
                    <DollarSign className="w-6 h-6 text-yellow-500 mb-2" />
                    <div className="font-semibold text-gray-900">Coût Total</div>
                    <div className="text-gray-600 text-sm">{selectedVisa.cost}</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border-l-4 border-purple-500">
                    <Users className="w-6 h-6 text-purple-500 mb-2" />
                    <div className="font-semibold text-gray-900">Droit au Travail</div>
                    <div className="text-gray-600 text-sm">{selectedVisa.workRights}</div>
                  </div>
                </div>

                {/* Conseils Spécifiques */}
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                    Conseils d'Expert pour {selectedVisa.country}
                  </h4>
                  <ul className="space-y-2">
                    {selectedVisa.specificTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Target className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-[#8F1B14]" />
                    Documents Requis ({selectedVisa.requirements.length} éléments)
                  </h4>
                  <ul className="space-y-3">
                    {selectedVisa.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-[#8F1B14]" />
                    Avantages Exclusifs
                  </h4>
                  <ul className="space-y-3">
                    {selectedVisa.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button className="bg-[#8F1B14] hover:bg-[#7A1611] px-8 py-4 text-lg font-semibold rounded-full">
                  Obtenir ce Visa - Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisaExplorer;
