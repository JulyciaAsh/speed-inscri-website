
import React from 'react';

const QuickFAQ = () => {
  const faqs = [
    {
      question: "Combien de temps faut-il pour obtenir un visa étudiant ?",
      answer: "Les délais varient selon le pays : 2-4 semaines pour la France, 4-12 semaines pour le Canada, 6-12 semaines pour l'Allemagne. Nous optimisons ces délais grâce à notre expertise."
    },
    {
      question: "Que se passe-t-il si mon visa est refusé ?",
      answer: "Avec notre taux de réussite de 98%, les refus sont rares. En cas de refus, nous analysons les causes, préparons un nouveau dossier renforcé et vous accompagnons dans une nouvelle demande."
    },
    {
      question: "Puis-je travailler avec un visa étudiant ?",
      answer: "Oui, la plupart des visas étudiants permettent de travailler à temps partiel. Les conditions varient : 20h/semaine au Canada, 964h/an en France, 120 jours complets en Allemagne."
    },
    {
      question: "Combien coûte votre accompagnement ?",
      answer: "Nos tarifs varient selon la destination et les services. Nous proposons des packages complets de 500€ à 2000€. Demandez votre devis personnalisé gratuit."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Questions Fréquentes
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFAQ;
