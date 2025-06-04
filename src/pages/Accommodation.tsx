import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccommodationSearchForm from '@/components/AccommodationSearchForm';
import { Home, MapPin, DollarSign, Users, Wifi, Car, Shield, CheckCircle, ArrowRight, Star, Clock, Award, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Accommodation = () => {
  const accommodationTypes = [
    {
      title: "Résidence Universitaire",
      price: "300-800€/mois",
      description: "Logement sur campus avec services intégrés",
      features: ["Wifi inclus", "Sécurité 24h/24", "Activités sociales", "Proximité cours"],
      pros: ["Intégration facile", "Tout inclus", "Communauté étudiante"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop"
    },
    {
      title: "Appartement Partagé",
      price: "400-1200€/mois",
      description: "Colocation avec d'autres étudiants internationaux",
      features: ["Cuisine équipée", "Espaces communs", "Chambres privées", "Flexibilité"],
      pros: ["Plus d'indépendance", "Expérience multiculturelle", "Coût partagé"],
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
    },
    {
      title: "Famille d'Accueil",
      price: "500-1000€/mois",
      description: "Immersion totale dans une famille locale",
      features: ["Repas inclus", "Pratique de la langue", "Support familial", "Culture locale"],
      pros: ["Intégration culturelle", "Soutien personnel", "Sécurité"],
      image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=300&fit=crop"
    }
  ];

  const services = [
    {
      icon: MapPin,
      title: "Recherche Personnalisée",
      description: "Nous trouvons le logement idéal selon vos critères et budget"
    },
    {
      icon: Shield,
      title: "Vérification Sécurisée",
      description: "Tous nos logements sont vérifiés et sécurisés"
    },
    {
      icon: Users,
      title: "Support 24/7",
      description: "Assistance continue pendant votre séjour"
    },
    {
      icon: Star,
      title: "Garantie Satisfaction",
      description: "Solution de relogement si le logement ne convient pas"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expertise de 10 ans",
      description: "Plus de 5,000 étudiants logés avec succès chaque année"
    },
    {
      icon: Clock,
      title: "Réactivité garantie",
      description: "Réponse sous 24h et traitement express de votre dossier"
    },
    {
      icon: HeartHandshake,
      title: "Accompagnement humain",
      description: "Un conseiller dédié vous accompagne de A à Z"
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-orange-900 via-[#8F1B14] to-yellow-900 overflow-hidden">
        {/* Home Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <Home className="w-8 h-8 text-orange-400" />
          </div>
          <div className="absolute top-32 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-24 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <Users className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Home className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white/90">Votre chez-vous à l'étranger</span>
              <Shield className="w-4 h-4 text-green-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat text-white">
              Logement Étudiant
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Trouvez le logement parfait pour vos études à l'étranger. 
              Sécurisé, confortable et adapté à votre budget.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Home className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">1000+ Logements</h3>
                <p className="text-white/80 text-sm">Vérifiés et sécurisés</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">100% Sécurisé</h3>
                <p className="text-white/80 text-sm">Garantie de qualité</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Support 24/7</h3>
                <p className="text-white/80 text-sm">Assistance continue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Recherchez Votre Logement Idéal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilisez notre moteur de recherche avancé pour trouver le logement qui correspond parfaitement à vos besoins
            </p>
          </div>
          
          <AccommodationSearchForm />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speed-Inscri, votre partenaire de confiance pour trouver le logement étudiant parfait
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                  <div className="bg-[#8F1B14]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#8F1B14]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-orange-600 to-[#8F1B14] text-white rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic mb-4">
              "Grâce à Speed-Inscri, j'ai trouvé mon logement à Londres en seulement 3 jours ! 
              Le service était parfait et l'accompagnement exceptionnel."
            </blockquote>
            <cite className="font-semibold">— Marie L., Étudiante en Master à UCL</cite>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Types de Logements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le logement qui correspond le mieux à vos besoins et votre style de vie
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {accommodationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={type.image}
                  alt={type.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    <div className="text-[#8F1B14] font-bold text-lg">{type.price}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques :</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                    <ul className="space-y-1">
                      {type.pros.map((pro, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    Voir les disponibilités
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Services Logement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour votre recherche et installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                  <div className="bg-[#8F1B14]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-[#8F1B14]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
              Comment Ça Marche ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Définition de vos besoins et budget" },
              { step: "02", title: "Recherche", desc: "Sélection personnalisée de logements" },
              { step: "03", title: "Visite", desc: "Visite virtuelle ou physique" },
              { step: "04", title: "Réservation", desc: "Signature et installation" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8F1B14] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-[#8F1B14]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Trouvez Votre Logement Idéal
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Commencez votre recherche dès maintenant et sécurisez votre logement avant votre arrivée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Commencer ma Recherche
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full">
              Voir nos logements
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;
