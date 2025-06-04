
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, FileText, Home, Plane, CreditCard, Users, CheckCircle, ArrowRight, Zap, Shield, Star, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: GraduationCap,
      title: "Orientation Académique",
      description: "Conseil personnalisé pour choisir la formation et l'université qui correspondent à votre profil",
      features: [
        "Analyse de votre profil académique et professionnel",
        "Recherche d'universités partenaires",
        "Conseils sur les programmes d'études",
        "Évaluation des pré-requis"
      ],
      price: "Gratuit",
      duration: "2-3 semaines"
    },
    {
      icon: FileText,
      title: "Constitution de Dossier",
      description: "Accompagnement complet pour préparer un dossier d'admission solide et convaincant",
      features: [
        "Rédaction de lettres de motivation",
        "Préparation du CV académique",
        "Traduction certifiée des documents",
        "Optimisation du dossier candidature"
      ],
      price: "À partir de 150€",
      duration: "4-6 semaines"
    },
    {
      icon: Plane,
      title: "Visa & Immigration",
      description: "Assistance complète pour obtenir votre visa étudiant dans les meilleures conditions",
      features: [
        "Préparation du dossier visa",
        "Accompagnement aux entretiens",
        "Suivi de la demande",
        "Conseils post-arrivée"
      ],
      price: "À partir de 200€",
      duration: "6-8 semaines"
    },
    {
      icon: Home,
      title: "Logement",
      description: "Aide à la recherche et à la réservation de logement étudiant dans votre ville d'études",
      features: [
        "Recherche de logements adaptés",
        "Visite virtuelle des résidences",
        "Aide aux démarches administratives",
        "Support d'installation"
      ],
      price: "À partir de 100€",
      duration: "2-4 semaines"
    },
    {
      icon: CreditCard,
      title: "Financement",
      description: "Recherche de bourses et aide au financement de vos études à l'étranger",
      features: [
        "Identification des bourses disponibles",
        "Aide à la constitution des dossiers",
        "Conseils en financement alternatif",
        "Négociation avec les universités"
      ],
      price: "Sur devis",
      duration: "Variable"
    },
    {
      icon: Users,
      title: "Accompagnement Premium",
      description: "Service VIP avec accompagnement personnalisé de A à Z par un conseiller dédié",
      features: [
        "Conseiller personnel dédié",
        "Suivi prioritaire",
        "Assistance 7j/7",
        "Garantie réussite"
      ],
      price: "À partir de 800€",
      duration: "3-6 mois"
    }
  ];

  const specializedServices = [
    {
      icon: BookOpen,
      title: "Formations Professionnelles",
      description: "Développez vos compétences avec nos formations spécialisées",
      link: "/services/formations",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Briefcase,
      title: "Voyages d'Affaires",
      description: "Organisation complète de vos déplacements professionnels",
      link: "/services/voyages-affaires",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation Gratuite",
      description: "Évaluation de votre profil et définition de vos objectifs"
    },
    {
      step: "02",
      title: "Plan Personnalisé",
      description: "Élaboration d'une stratégie sur mesure pour votre projet"
    },
    {
      step: "03",
      title: "Mise en Œuvre",
      description: "Accompagnement dans toutes les démarches nécessaires"
    },
    {
      step: "04",
      title: "Suivi & Support",
      description: "Assistance continue jusqu'à votre installation"
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section - Modernized */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-indigo-900 via-[#8F1B14] to-purple-900 overflow-hidden">
        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'drift 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-40 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <Plane className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <FileText className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute bottom-20 right-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '3s' }}>
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Solutions complètes</span>
              <Shield className="w-4 h-4 text-green-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="text-white">Nos Services</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complets
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              De l'orientation à l'installation, nous vous accompagnons à chaque étape 
              de votre parcours vers l'excellence académique internationale.
            </p>

            {/* Service Categories */}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Académique</h3>
                <p className="text-white/80 text-sm">Orientation & Inscription</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Administratif</h3>
                <p className="text-white/80 text-sm">Visa & Immigration</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Personnel</h3>
                <p className="text-white/80 text-sm">Accompagnement VIP</p>
              </div>
            </div>

            <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full mt-8 group">
              Consultation Gratuite
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Services Spécialisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos services premium pour vos besoins spécifiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {specializedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} to={service.link} className="group">
                  <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <Button variant="ghost" className="group/btn text-[#8F1B14] hover:text-[#8F1B14] hover:bg-[#8F1B14]/10 p-0 h-auto font-semibold font-open-sans">
                      Découvrir
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Services Détaillés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes adaptées à vos besoins spécifiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="bg-[#8F1B14] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Inclus dans ce service :</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-[#8F1B14]">{service.price}</div>
                        <div className="text-sm text-gray-500">Durée : {service.duration}</div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthode éprouvée pour maximiser vos chances de réussite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8F1B14] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F1B14] to-[#1e40af]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Prêt à Commencer Votre Aventure ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nous pouvons vous aider à atteindre vos objectifs académiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
              Consultation Gratuite
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#8F1B14] px-8 py-4 text-lg font-semibold rounded-full">
              Voir nos destinations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
