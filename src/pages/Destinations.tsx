import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Users, GraduationCap, Star, ArrowRight, DollarSign, Globe, Compass, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Destinations = () => {
  const destinations = [
    {
      country: "Canada",
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
      cities: ["Toronto", "Vancouver", "Montréal", "Ottawa"],
      universities: 45,
      students: 650,
      avgCost: "15,000 - 25,000 CAD/an",
      rating: 4.9,
      highlights: [
        "Système éducatif de classe mondiale",
        "Opportunités d'immigration post-études",
        "Société multiculturelle accueillante",
        "Frais de scolarité abordables"
      ],
      programs: ["Informatique", "Ingénierie", "Commerce", "Médecine", "Arts"],
      description: "Le Canada offre une éducation de qualité supérieure dans un environnement sûr et accueillant. Avec ses politiques d'immigration favorables aux étudiants internationaux, c'est la destination idéale pour construire votre avenir."
    },
    {
      country: "France",
      flag: "🇫🇷", 
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=600&h=400&fit=crop",
      cities: ["Paris", "Lyon", "Toulouse", "Marseille"],
      universities: 38,
      students: 420,
      avgCost: "3,000 - 15,000 EUR/an",
      rating: 4.8,
      highlights: [
        "Frais de scolarité très abordables",
        "Patrimoine culturel exceptionnel",
        "Excellence académique reconnue",
        "Possibilités de travail pendant les études"
      ],
      programs: ["Luxe & Mode", "Cuisine", "Ingénierie", "Business", "Arts"],
      description: "La France combine excellence académique et richesse culturelle. Avec des frais de scolarité parmi les plus bas d'Europe pour une qualité d'enseignement exceptionnelle."
    },
    {
      country: "Allemagne",
      flag: "🇩🇪",
      image: "https://images.unsplash.com/photo-1527264304607-5c4d0bf9ec4c?w=600&h=400&fit=crop",
      cities: ["Berlin", "Munich", "Hambourg", "Cologne"],
      universities: 42,
      students: 380,
      avgCost: "0 - 3,500 EUR/an",
      rating: 4.7,
      highlights: [
        "Éducation gratuite ou très abordable",
        "Leader mondial en ingénierie",
        "Forte économie européenne",
        "Opportunités d'emploi excellentes"
      ],
      programs: ["Ingénierie", "Informatique", "Automobile", "Recherche", "Business"],
      description: "L'Allemagne propose une éducation de qualité mondiale souvent gratuite. Reconnue pour son excellence en ingénierie et ses opportunités d'emploi post-études."
    },
    {
      country: "Royaume-Uni",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
      cities: ["Londres", "Manchester", "Édimbourg", "Birmingham"],
      universities: 35,
      students: 320,
      avgCost: "15,000 - 30,000 GBP/an",
      rating: 4.8,
      highlights: [
        "Universités de renommée mondiale",
        "Programmes courts et intensifs",
        "Centre financier global",
        "Patrimoine académique prestigieux"
      ],
      programs: ["Finance", "Droit", "Médecine", "Arts", "Business"],
      description: "Le Royaume-Uni abrite certaines des universités les plus prestigieuses au monde. Idéal pour une formation d'élite et un réseau international."
    },
    {
      country: "Suisse",
      flag: "🇨🇭",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      cities: ["Zurich", "Genève", "Lausanne", "Bâle"],
      universities: 12,
      students: 85,
      avgCost: "1,500 - 4,000 CHF/an",
      rating: 4.9,
      highlights: [
        "Qualité de vie exceptionnelle",
        "Innovation et recherche de pointe",
        "Salaires post-études élevés",
        "Position centrale en Europe"
      ],
      programs: ["Hôtellerie", "Finance", "Ingénierie", "Recherche", "Luxe"],
      description: "La Suisse offre une éducation d'excellence dans un cadre de vie exceptionnel. Reconnue mondialement pour la qualité de ses programmes et son innovation."
    },
    {
      country: "États-Unis",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
      cities: ["New York", "Los Angeles", "Boston", "San Francisco"],
      universities: 28,
      students: 240,
      avgCost: "25,000 - 55,000 USD/an",
      rating: 4.6,
      highlights: [
        "Universités les plus prestigieuses",
        "Innovation et entrepreneuriat",
        "Diversité des programmes",
        "Réseau alumni mondial"
      ],
      programs: ["Business", "Informatique", "Médecine", "Arts", "Recherche"],
      description: "Les États-Unis abritent les universités les plus prestigieuses au monde. Parfait pour ceux qui visent l'excellence et l'innovation."
    }
  ];

  return (
    <div className="min-h-screen font-open-sans">
      <Header />
      
      {/* Hero Section - Modernized */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-teal-900 via-[#8F1B14] to-indigo-900 overflow-hidden">
        {/* Animated World Map Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'drift 30s linear infinite'
          }}></div>
        </div>

        {/* Floating Destination Cards */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float flex items-center space-x-2">
            <span className="text-2xl">🇨🇦</span>
            <span className="text-white text-sm font-medium">Canada</span>
          </div>
          <div className="absolute top-32 right-20 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float flex items-center space-x-2" style={{ animationDelay: '1s' }}>
            <span className="text-2xl">🇫🇷</span>
            <span className="text-white text-sm font-medium">France</span>
          </div>
          <div className="absolute bottom-40 left-20 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float flex items-center space-x-2" style={{ animationDelay: '2s' }}>
            <span className="text-2xl">🇩🇪</span>
            <span className="text-white text-sm font-medium">Allemagne</span>
          </div>
          <div className="absolute bottom-20 right-10 p-3 bg-white/10 backdrop-blur-sm rounded-xl animate-float flex items-center space-x-2" style={{ animationDelay: '3s' }}>
            <span className="text-2xl">🇬🇧</span>
            <span className="text-white text-sm font-medium">UK</span>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">50+ destinations mondiales</span>
              <Compass className="w-4 h-4 text-green-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
              <span className="text-white">Nos Destinations</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                d'Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Découvrez les meilleures destinations pour vos études supérieures. 
              Chaque pays offre des opportunités uniques pour votre développement académique et professionnel.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
                  <Plane className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">50+</div>
                </div>
                <div className="text-sm text-white/80">Pays</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
                  <GraduationCap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">200+</div>
                </div>
                <div className="text-sm text-white/80">Universités</div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
                  <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2000+</div>
                </div>
                <div className="text-sm text-white/80">Étudiants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 animate-pulse"></div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Choisissez Votre Destination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez nos destinations partenaires et trouvez celle qui correspond à vos ambitions
            </p>
          </div>
          
          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={destination.image}
                      alt={destination.country}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{destination.flag}</span>
                        <h3 className="text-3xl font-bold text-white">{destination.country}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(destination.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 font-semibold text-gray-700">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{destination.country}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{destination.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">Universités</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{destination.universities}</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-900">Étudiants</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{destination.students}</div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-gray-900">Coût/an</span>
                      </div>
                      <div className="text-sm font-bold text-orange-600">{destination.avgCost}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Villes principales :</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.cities.map((city, idx) => (
                        <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Programmes populaires :</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.programs.map((program, idx) => (
                        <span key={idx} className="bg-[#8F1B14]/10 text-[#8F1B14] px-3 py-1 rounded-full text-sm font-medium">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Points forts :</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="w-5 h-5 text-[#8F1B14] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="flex-1">
                      Découvrir {destination.country}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Consulter nos universités
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Besoin d'Aide pour Choisir ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nos conseillers experts vous aident à identifier la destination idéale 
            selon votre profil, vos objectifs et votre budget.
          </p>
          <Button className="px-8 py-4 text-lg font-semibold rounded-full">
            Consultation Gratuite
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
