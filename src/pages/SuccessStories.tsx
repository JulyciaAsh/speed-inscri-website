
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Play, MapPin, Calendar, Award, Users } from 'lucide-react';

const SuccessStories = () => {
  const videoTestimonials = [
    {
      id: 1,
      name: "Aminata Traoré",
      destination: "Canada",
      program: "Master IA - Université de Toronto",
      thumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&fit=crop&crop=face",
      duration: "3:24",
      story: "De Bamako à Toronto : mon parcours vers l'intelligence artificielle"
    },
    {
      id: 2,
      name: "Jean-Baptiste Kouassi",
      destination: "France",
      program: "MBA - HEC Paris",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      duration: "4:12",
      story: "Comment j'ai obtenu une bourse complète pour HEC Paris"
    },
    {
      id: 3,
      name: "Fatou Ndiaye",
      destination: "Allemagne",
      program: "Doctorat Médecine - Charité Berlin",
      thumbnail: "https://images.unsplash.com/photo-1594824475038-d0dff7d819d2?w=400&h=300&fit=crop&crop=face",
      duration: "5:08",
      story: "De médecin généraliste à spécialiste en Allemagne"
    },
    {
      id: 4,
      name: "Ahmed Ben Salem",
      destination: "Australie",
      program: "Master Ingénierie - University of Melbourne",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      duration: "3:45",
      story: "Mon aventure australienne : études et opportunités"
    }
  ];

  const writtenTestimonials = [
    {
      name: "Khadija El Mansouri",
      country: "🇲🇦 → 🇨🇦",
      destination: "Canada",
      program: "Master en Informatique",
      university: "Université McGill",
      year: "2024",
      rating: 5,
      story: "Grâce à Speed-Inscri, j'ai pu naviguer le système complexe d'immigration canadienne. Leur équipe m'a accompagnée depuis la traduction de mes diplômes jusqu'à l'obtention de mon permis d'études. Aujourd'hui, je suis à Montréal et je vis mon rêve !",
      timeline: "6 mois",
      scholarship: "Bourse d'excellence 12 000 CAD"
    },
    {
      name: "Ibrahim Diallo",
      country: "🇸🇳 → 🇫🇷",
      destination: "France",
      program: "Master Finance",
      university: "ESSEC Business School",
      year: "2023",
      rating: 5,
      story: "Process Campus France rendu simple ! L'équipe a géré tous mes documents, m'a préparé pour l'entretien consulaire et m'a même aidé à trouver un logement étudiant. Service exceptionnel du début à la fin.",
      timeline: "4 mois",
      internship: "Stage Goldman Sachs obtenu"
    },
    {
      name: "Grace Okonkwo",
      country: "🇳🇬 → 🇬🇧",
      destination: "Royaume-Uni",
      program: "PhD Computer Science",
      university: "Imperial College London",
      year: "2024",
      rating: 5,
      story: "Doctorat à Imperial College semblait impossible depuis Lagos. Speed-Inscri m'a aidée à structurer ma proposition de recherche, connectée avec des superviseurs potentiels et guidée dans toutes les démarches visa. Résultat : acceptance avec funding complet !",
      timeline: "8 mois",
      funding: "Bourse complète 4 ans"
    },
    {
      name: "Mohamed Benali",
      country: "🇩🇿 → 🇩🇪",
      destination: "Allemagne",
      program: "Master Ingénierie Mécanique",
      university: "TU Munich",
      year: "2023",
      rating: 5,
      story: "L'Allemagne et ses processus rigoureux me faisaient peur. L'équipe m'a rassuré, aidé avec l'apprentissage de l'allemand, la constitution du dossier uni-assist et même la recherche de logement à Munich. Aujourd'hui en stage chez BMW !",
      timeline: "7 mois",
      internship: "Stage BMW Munich"
    }
  ];

  const successStats = [
    { icon: Users, number: "2,847", label: "Étudiants accompagnés" },
    { icon: Award, number: "98%", label: "Taux de réussite" },
    { icon: MapPin, number: "50+", label: "Pays de destination" },
    { icon: Calendar, number: "5", label: "Années d'expérience" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#8F1B14] to-[#B91C1C] text-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Témoignages Authentiques
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat">
            Nos Success Stories
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            Découvrez les parcours inspirants de nos étudiants qui ont réalisé leurs rêves d'études à l'étranger
          </p>
          
          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-red-100 text-red-800 mb-4">Témoignages Vidéo</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Ils Racontent Leur Parcours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Écoutez directement nos étudiants partager leur expérience et leurs conseils
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#8F1B14] ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{video.name}</CardTitle>
                  <CardDescription className="text-[#8F1B14] font-semibold">
                    {video.destination} • {video.program}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{video.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Témoignages Écrits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Parcours Détaillés de Nos Étudiants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des récits complets de transformation et de réussite académique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription className="text-[#8F1B14] font-semibold text-base">
                        {testimonial.country} {testimonial.program}
                      </CardDescription>
                      <div className="text-sm text-gray-500 mt-1">{testimonial.university} • {testimonial.year}</div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <blockquote className="text-gray-700 leading-relaxed italic">
                      "{testimonial.story}"
                    </blockquote>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        ⏱️ {testimonial.timeline}
                      </Badge>
                      {testimonial.scholarship && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          🎓 {testimonial.scholarship}
                        </Badge>
                      )}
                      {testimonial.internship && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          💼 {testimonial.internship}
                        </Badge>
                      )}
                      {testimonial.funding && (
                        <Badge className="bg-purple-100 text-purple-800 text-xs">
                          💰 {testimonial.funding}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8F1B14] to-[#B91C1C] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Prêt à Écrire Votre Propre Success Story ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers d'étudiants qui ont fait confiance à Speed-Inscri pour réaliser leurs rêves
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#8F1B14] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Commencer Mon Projet Gratuitement
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#8F1B14] transition-all duration-300">
              Parler à Un Conseiller
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
