
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qui peut bénéficier des services de Speed-Inscri ?",
      answer: "Nos services s'adressent à tous les étudiants, professionnels et particuliers souhaitant réaliser un projet à l'international. Que vous soyez lycéen, étudiant, jeune diplômé ou professionnel expérimenté, nous adaptons notre accompagnement à votre profil et vos objectifs."
    },
    {
      question: "Speed-Inscri peut-il m'aider à choisir mon école ou mon université ?",
      answer: "Absolument ! Nous analysons votre profil académique, vos objectifs de carrière et vos préférences personnelles pour vous orienter vers les établissements les mieux adaptés. Notre réseau de partenaires nous permet de vous proposer des options dans plus de 50 pays."
    },
    {
      question: "Quelles sont les démarches que Speed-Inscri prend en charge ?",
      answer: "Nous nous occupons de toutes les étapes : constitution du dossier d'admission, traduction de documents, demandes de visa, recherche de logement, inscription aux cours, assistance pour l'ouverture de compte bancaire, et bien plus encore."
    },
    {
      question: "Combien de temps prend le processus d'inscription ?",
      answer: "Le délai varie selon la destination et le type de programme. En général, comptez entre 3 et 6 mois pour une inscription universitaire, et 1 à 3 mois pour un stage ou une formation courte. Nous vous accompagnons dès le début pour respecter tous les délais."
    },
    {
      question: "Speed-Inscri peut-il garantir mon admission ?",
      answer: "Bien que nous ne puissions garantir à 100% une admission, notre taux de réussite de 98% témoigne de notre expertise. Nous préparons minutieusement votre dossier et vous accompagnons dans toutes les étapes pour maximiser vos chances de succès."
    },
    {
      question: "Comment Speed-Inscri m'accompagne-t-il après l'admission ?",
      answer: "Notre accompagnement ne s'arrête pas à l'admission. Nous restons à vos côtés pour les démarches de visa, la recherche de logement, l'intégration dans votre nouveau pays, et nous maintenons un suivi régulier tout au long de votre parcours."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-red-800 to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">F.A.Q.</h2>
          <h3 className="text-2xl lg:text-3xl text-white/90 mb-6 underline decoration-red-400">
            Speed-Inscri : Tout Ce Que Tu Dois Savoir !
          </h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
