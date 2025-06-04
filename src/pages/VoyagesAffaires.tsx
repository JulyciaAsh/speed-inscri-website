
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Globe,
  Car,
  Building,
  CreditCard,
  Headphones,
  Star,
  Briefcase,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const VoyagesAffaires = () => {
  const services = [
    {
      icon: Plane,
      title: "Billets d'Avion Business",
      description: "Réservation de vols aux meilleurs tarifs avec flexibilité maximale",
      features: [
        "Tarifs négociés avec les compagnies",
        "Modifications sans frais",
        "Sélection des sièges",
        "Enregistrement prioritaire"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building,
      title: "Hôtels de Prestige",
      description: "Sélection d'hôtels 4-5 étoiles adaptés aux voyages d'affaires",
      features: [
        "Centres d'affaires équipés",
        "WiFi haut débit gratuit",
        "Salles de réunion disponibles",
        "Service de conciergerie"
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Car,
      title: "Transport & Transferts",
      description: "Solutions de transport premium pour tous vos déplacements",
      features: [
        "Transferts aéroport VIP",
        "Véhicules avec chauffeur",
        "Location de voitures de luxe",
        "Transport inter-villes"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Organisations d'Événements",
      description: "Planification complète de vos événements corporate",
      features: [
        "Séminaires et conférences",
        "Team building international",
        "Dîners d'affaires",
        "Événements de networking"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: FileText,
      title: "Support Administratif",
      description: "Assistance pour toutes vos démarches administratives",
      features: [
        "Demandes de visa d'affaires",
        "Assurances voyage",
        "Invitations officielles",
        "Documentation légale"
      ],
      color: "from-[#8F1B14] to-red-700"
    },
    {
      icon: Headphones,
      title: "Assistance 24/7",
      description: "Support client disponible à tout moment pendant votre voyage",
      features: [
        "Hotline d'urgence",
        "Modifications en temps réel",
        "Support multilingue",
        "Résolution de problèmes"
      ],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const packages = [
    {
      name: "Essential Business",
      price: "Sur mesure",
      description: "Pour les voyages d'affaires standards",
      features: [
        "Réservation vols + hôtel",
        "Transferts aéroport",
        "Assistance basique",
        "Modifications limitées"
      ],
      popular: false
    },
    {
      name: "Premium Corporate",
      price: "Sur mesure",
      description: "Pour les executives et délégations",
      features: [
        "Vols business class",
        "Hôtels 5 étoiles",
        "Véhicule avec chauffeur",
        "Assistance prioritaire",
        "Modifications illimitées",
        "Conciergerie dédiée"
      ],
      popular: true
    },
    {
      name: "VIP Experience",
      price: "Sur mesure",
      description: "Service ultra-premium personnalisé",
      features: [
        "Jet privé disponible",
        "Suites présidentielles",
        "Butler personnel",
        "Sécurité privée",
        "Organisation complète",
        "Manager dédié 24/7"
      ],
      popular: false
    }
  ];

  const destinations = [
    { name: "Paris", description: "Centre économique européen" },
    { name: "Londres", description: "Hub financier mondial" },
    { name: "New York", description: "Capital des affaires" },
    { name: "Tokyo", description: "Porte d'entrée asiatique" },
    { name: "Dubaï", description: "Carrefour international" },
    { name: "Singapour", description: "Centre technologique" }
  ];

  const stats = [
    { number: "2000+", label: "Voyages organisés" },
    { number: "98%", label: "Satisfaction client" },
    { number: "45", label: "Destinations" },
    { number: "24/7", label: "Support disponible" }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243L8.2 0H5.373zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.242 0h3.414zM22.344 0l-9.315 9.314 1.415 1.414L25.758 0h-3.414zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float">
            <Plane className="w-8 h-8 text-blue-400" />
          </div>
          <div className="absolute top-40 right-20 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
            <Building className="w-8 h-8 text-green-400" />
          </div>
          <div className="absolute bottom-40 left-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
            <Globe className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute bottom-20 right-32 p-4 bg-white/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '3s' }}>
            <Briefcase className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Service Premium</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="text-white">Voyages</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                d'Affaires
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Organisation complète de vos déplacements professionnels. 
              Service premium pour maximiser l'efficacité de vos voyages d'affaires.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full mt-8 group">
              Planifier mon voyage
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Services Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche complète pour vos voyages d'affaires
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 font-montserrat">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
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

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Nos Formules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond à vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-[#8F1B14] scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#8F1B14] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Populaire
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-[#8F1B14] my-4">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-[#8F1B14] hover:bg-[#8F1B14]/90' : ''}`}>
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Destinations Privilégiées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principales places d'affaires mondiales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#8F1B14]" />
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F1B14] to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Planifiez Votre Prochain Voyage d'Affaires
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Laissez nos experts organiser votre voyage pour que vous puissiez vous concentrer 
            sur vos objectifs business. Devis personnalisé gratuit en 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#8F1B14] px-8 py-4 text-lg font-semibold rounded-full">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VoyagesAffaires;
