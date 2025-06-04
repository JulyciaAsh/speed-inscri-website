
import React from 'react';
import { GraduationCap, Briefcase, Home, FileCheck, BookOpen, Plane, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Études à l'étranger",
      description: "Accompagnement complet pour vos études internationales, de l'admission à l'installation.",
      features: ["Choix de l'université", "Dossier d'admission", "Bourses d'études"],
      color: "from-blue-500 to-blue-600",
      link: "/studies-abroad"
    },
    {
      icon: Briefcase,
      title: "Stages & Emploi",
      description: "Décrochez le stage ou l'emploi de vos rêves à l'international.",
      features: ["Recherche d'opportunités", "Préparation CV", "Entretiens"],
      color: "from-green-500 to-green-600",
      link: "/internships"
    },
    {
      icon: Home,
      title: "Logement",
      description: "Solutions d'hébergement adaptées à votre budget et vos besoins.",
      features: ["Résidences étudiantes", "Appartements privés", "Familles d'accueil"],
      color: "from-purple-500 to-purple-600",
      link: "/accommodation"
    },
    {
      icon: FileCheck,
      title: "Visa & Documents",
      description: "Assistance complète pour toutes vos démarches administratives.",
      features: ["Demande de visa", "Traduction documents", "Légalisation"],
      color: "from-[#8F1B14] to-red-600",
      link: "/student-visa"
    },
    {
      icon: BookOpen,
      title: "Formations",
      description: "Formations professionnelles et certifications internationales.",
      features: ["Cours de langues", "Certifications", "Formations courtes"],
      color: "from-orange-500 to-orange-600",
      link: "/services/formations"
    },
    {
      icon: Plane,
      title: "Voyages d'affaires",
      description: "Organisation complète de vos déplacements professionnels.",
      features: ["Billets d'avion", "Réservations hôtels", "Itinéraires"],
      color: "from-[#101125] to-gray-700",
      link: "/services/voyages-affaires"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#8F1B14]/10 to-[#101125]/10 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700 font-open-sans">Nos services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#101125] mb-6 font-montserrat">
            Des solutions
            <span className="block bg-gradient-to-r from-[#8F1B14] to-[#101125] bg-clip-text text-transparent">
              sur-mesure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
            Chaque projet international est unique. Nous adaptons nos services à vos besoins spécifiques pour garantir votre réussite.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link to={service.link} key={index} className="block group">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#101125] mb-4 font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-open-sans leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 font-open-sans">
                        <div className="w-1.5 h-1.5 bg-[#8F1B14] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="ghost" className="group/btn text-[#8F1B14] hover:text-[#8F1B14] hover:bg-[#8F1B14]/10 p-0 h-auto font-semibold font-open-sans">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#8F1B14] to-[#101125] rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-montserrat">
            Prêt à commencer votre aventure ?
          </h3>
          <p className="text-xl mb-8 text-white/90 font-open-sans">
            Parlons de votre projet et créons ensemble votre parcours international sur-mesure.
          </p>
          <Link to="/start-project">
            <Button className="bg-white text-[#8F1B14] hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 font-open-sans">
              Consultation gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
