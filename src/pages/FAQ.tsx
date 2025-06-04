import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, HelpCircle, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
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
    },
    {
      question: "Quels sont les tarifs des services Speed-Inscri ?",
      answer: "Nos tarifs varient selon le type de service et la destination choisie. Nous proposons des formules adaptées à tous les budgets. Contactez-nous pour un devis personnalisé et gratuit."
    },
    {
      question: "Dans quels pays Speed-Inscri peut-il m'accompagner ?",
      answer: "Nous travaillons avec des partenaires dans plus de 50 pays à travers le monde : Europe, Amérique du Nord, Australie, Asie, et bien d'autres destinations. Chaque destination a ses spécificités que nous maîtrisons parfaitement."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-open-sans">
      <Header />
      
      {/* Hero Section - Modernized */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-violet-900 via-[#8F1B14] to-orange-900 overflow-hidden">
        {/* Question Mark Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white text-6xl font-bold animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              ?
            </div>
          ))}
        </div>

        {/* Floating Help Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-24 left-16 p-4 bg-white/10 backdrop-blur-sm rounded-full animate-float">
            <HelpCircle className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-32 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: '1s' }}>
            <BookOpen className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-24 p-4 bg-white/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: '2s' }}>
            <Lightbulb className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Toutes vos réponses ici</span>
              <Lightbulb className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-montserrat">
              Questions Fréquentes
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-open-sans max-w-2xl mx-auto">
              Trouvez toutes les réponses à vos questions sur nos services d'accompagnement international
            </p>

            {/* Quick Access */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Guide complet</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <HelpCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Support direct</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Conseils experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <button
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4 font-montserrat">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-[#8F1B14] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#8F1B14] flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed pt-4 font-open-sans">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-gray-600 mb-6 font-open-sans">
                Notre équipe est là pour vous accompagner dans votre projet
              </p>
              <Link to="/#contact">
                <Button className="px-8 py-3 text-lg font-semibold">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
