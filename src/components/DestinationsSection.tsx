
import React from 'react';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DestinationsSection = () => {
  const destinations = [
    {
      name: "France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      students: "500+",
      rating: 4.9,
      universities: "Sorbonne, Sciences Po, HEC Paris",
      description: "Excellence académique et richesse culturelle au cœur de l'Europe",
      flag: "🇫🇷",
      slug: "france"
    },
    {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
      students: "800+",
      rating: 4.8,
      universities: "McGill, Toronto, UBC",
      description: "Qualité de vie exceptionnelle et diplômes reconnus mondialement",
      flag: "🇨🇦",
      slug: "canada"
    },
    {
      name: "Sénégal",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      students: "300+",
      rating: 4.7,
      universities: "Université Cheikh Anta Diop",
      description: "Hub éducatif de l'Afrique de l'Ouest avec des programmes innovants",
      flag: "🇸🇳",
      slug: "senegal"
    },
    {
      name: "États-Unis",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
      students: "600+",
      rating: 4.8,
      universities: "Harvard, MIT, Stanford",
      description: "Innovation et excellence académique dans les universités les plus prestigieuses",
      flag: "🇺🇸",
      slug: "etats-unis"
    },
    {
      name: "Espagne",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop",
      students: "400+",
      rating: 4.8,
      universities: "Universidad Complutense, IE Business School",
      description: "Innovation, entrepreneuriat et art de vivre méditerranéen",
      flag: "🇪🇸",
      slug: "espagne"
    },
    {
      name: "Italie",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
      students: "350+",
      rating: 4.7,
      universities: "Bocconi, Sapienza, Politecnico Milano",
      description: "Patrimoine historique exceptionnel et excellence en design et mode",
      flag: "🇮🇹",
      slug: "italie"
    },
    {
      name: "Pologne",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      students: "200+",
      rating: 4.6,
      universities: "Université de Varsovie, Cracovie",
      description: "Éducation de qualité européenne à coût abordable",
      flag: "🇵🇱",
      slug: "pologne"
    },
    {
      name: "Roumanie",
      image: "https://images.unsplash.com/photo-1555634538-5fa7ab825469?w=400&h=300&fit=crop",
      students: "150+",
      rating: 4.5,
      universities: "Université de Bucarest",
      description: "Programmes médicaux et d'ingénierie de renommée internationale",
      flag: "🇷🇴",
      slug: "roumanie"
    },
    {
      name: "Ghana",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&h=300&fit=crop",
      students: "120+",
      rating: 4.4,
      universities: "University of Ghana, KNUST",
      description: "Porte d'entrée vers l'Afrique avec des programmes d'excellence",
      flag: "🇬🇭",
      slug: "ghana"
    }
  ];

  return (
    <section id="destinations" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-[#8F1B14]" />
            <span className="text-sm font-medium text-gray-700 font-open-sans">Destinations favorites</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#101125] mb-6 font-montserrat">
            Votre prochaine
            <span className="block bg-gradient-to-r from-[#8F1B14] to-[#101125] bg-clip-text text-transparent">
              destination
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-open-sans">
            Découvrez nos destinations phares où plus de 2000 étudiants ont déjà réalisé leurs rêves académiques et professionnels.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                  <span className="text-2xl">{destination.flag}</span>
                  <span className="font-semibold text-[#101125] font-montserrat">{destination.name}</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-[#101125]">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="font-medium font-open-sans">{destination.students} étudiants</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 font-open-sans">
                  {destination.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#101125] mb-2 font-montserrat">Universités partenaires</h4>
                  <p className="text-sm text-gray-600 font-open-sans">{destination.universities}</p>
                </div>

                <Link to={`/destinations/${destination.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-[#8F1B14] to-[#101125] hover:from-[#8F1B14]/90 hover:to-[#101125]/90 text-white rounded-full font-semibold group/btn transition-all duration-300 font-open-sans">
                    Découvrir {destination.name}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6 font-open-sans">
            Votre destination idéale n'est pas dans la liste ?
          </p>
          <Link to="/destinations">
            <Button variant="outline" className="border-2 border-[#8F1B14] text-[#8F1B14] hover:bg-[#8F1B14] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 font-open-sans">
              Voir toutes les destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
