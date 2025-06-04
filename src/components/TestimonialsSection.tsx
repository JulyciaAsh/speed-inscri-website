
import React from 'react';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aminata Traoré",
      program: "Master en Informatique",
      university: "Université de Toronto",
      rating: 5,
      text: "Venue du Mali, j'ai toujours rêvé d'étudier l'IA au Canada. Speed-Inscri m'a accompagnée dans toutes les démarches complexes - de la traduction certifiée de mes diplômes à la préparation de l'entretien visa. En 5 mois, j'avais mon permis d'études et j'étais à Toronto ! Leur équipe comprend vraiment les défis spécifiques aux étudiants africains.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
      country: "🇲🇱 → 🇨🇦",
      origin: "Mali"
    },
    {
      name: "Kwame Asante",
      program: "Master en Finance",
      university: "HEC Paris",
      rating: 5,
      text: "Partir du Ghana pour HEC Paris semblait impossible financièrement. Speed-Inscri m'a aidé à identifier et obtenir 3 bourses différentes qui couvrent 80% de mes frais. Leur réseau de partenaires et leur expertise en financement études ont transformé mon rêve en réalité. Je recommande vivement !",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      country: "🇬🇭 → 🇫🇷",
      origin: "Ghana"
    },
    {
      name: "Fatou Ndiaye",
      program: "Doctorat en Médecine",
      university: "Université McGill",
      rating: 5,
      text: "Médecin généraliste au Sénégal, je voulais me spécialiser en cardiologie au Canada. Le processus d'équivalence et d'admission était un labyrinthe. Speed-Inscri a géré chaque étape : validation de mes crédits, préparation aux examens MCCEE, et même la recherche de logement à Montréal. Aujourd'hui, je suis en résidence à McGill !",
      image: "https://images.unsplash.com/photo-1594824475038-d0dff7d819d2?w=400&h=400&fit=crop&crop=face",
      country: "🇸🇳 → 🇨🇦",
      origin: "Sénégal"
    },
    {
      name: "Chidimma Okafor",
      program: "Master en Ingénierie",
      university: "ETH Zurich",
      rating: 5,
      text: "Diplômée en génie civil du Nigeria, ETH Zurich était mon objectif pour me spécialiser en ingénierie durable. Speed-Inscri m'a aidée à naviguer le système suisse très rigoureux : dossier académique, certificats de langue, et surtout la preuve de financement. Leur coaching m'a préparée parfaitement pour l'entretien d'admission.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      country: "🇳🇬 → 🇨🇭",
      origin: "Nigeria"
    },
    {
      name: "Mamadou Camara",
      program: "Master en Économie",
      university: "London School of Economics",
      rating: 5,
      text: "Économiste en Guinée, LSE représentait le summum pour moi. Speed-Inscri a transformé ma candidature : restructuration complète de mon CV, coaching intensif pour les essays, et préparation aux tests GMAT. Résultat : accepté avec une bourse partielle de 15 000£. Une équipe qui fait vraiment la différence !",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      country: "🇬🇳 → 🇬🇧",
      origin: "Guinée"
    },
    {
      name: "Aïcha Benali",
      program: "Master en Architecture",
      university: "TU Berlin",
      rating: 5,
      text: "Architecte au Maroc, je voulais me former aux nouvelles technologies de construction en Allemagne. Speed-Inscri m'a guidée dans l'apprentissage de l'allemand, la constitution du portfolio exigé, et toutes les démarches administratives. Leur suivi personnalisé m'a rassurée tout au long du processus. Je suis maintenant à Berlin !",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      country: "🇲🇦 → 🇩🇪",
      origin: "Maroc"
    },
    {
      name: "Kevin Mboma",
      program: "MBA International",
      university: "INSEAD Fontainebleau",
      rating: 5,
      text: "Manager au Cameroun, je visais un MBA pour évoluer vers les directions générales. INSEAD était mon rêve mais les exigences semblaient énormes. Speed-Inscri m'a accompagné sur 8 mois : amélioration de mon profil GMAT, rédaction des essays, préparation intensive aux entretiens. Accepté et j'ai même obtenu une bourse partielle !",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
      country: "🇨🇲 → 🇫🇷",
      origin: "Cameroun"
    },
    {
      name: "Marie Dubois",
      program: "Master en Marketing Digital",
      university: "University of British Columbia",
      rating: 5,
      text: "Française en reconversion professionnelle, je voulais me spécialiser dans le marketing digital au Canada. Speed-Inscri m'a aidée à valoriser mon expérience professionnelle antérieure et à structurer un dossier convaincant. Leur connaissance du système canadien et leur réseau m'ont ouvert les portes de UBC avec un processus fluide.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      country: "🇫🇷 → 🇨🇦",
      origin: "France"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-gray-700 font-medium">Témoignages Authentiques</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            ILS ONT RÉUSSI AVEC
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              SPEED-INSCRI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les parcours inspirants de nos étudiants africains et internationaux
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                      {/* Badge pays */}
                      <div className="absolute top-4 right-4 text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 rounded-full px-2 py-1">
                        {testimonial.country}
                      </div>
                      
                      {/* Quote icon décoratif */}
                      <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        <Quote className="w-6 h-6 text-blue-500 transform -rotate-12" />
                      </div>

                      {/* En-tête avec image et infos */}
                      <div className="flex items-start space-x-4 mb-4 relative z-10">
                        <div className="relative">
                          <img 
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-semibold text-sm mb-1">{testimonial.program}</p>
                          <p className="text-gray-500 text-sm font-medium">{testimonial.university}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4 space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300" 
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                      </div>

                      {/* Témoignage */}
                      <blockquote className="text-gray-700 leading-relaxed text-sm flex-1 relative mb-4">
                        <p className="relative z-10">
                          {testimonial.text}
                        </p>
                      </blockquote>

                      {/* Badge de succès */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            ✓ Visa obtenu
                          </span>
                          <span className="text-xs text-gray-400 font-medium">
                            Étudiant {testimonial.origin}
                          </span>
                        </div>
                      </div>

                      {/* Effet de lueur au survol */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-400 via-transparent to-red-400 rounded-3xl"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Boutons de navigation personnalisés */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        {/* Section CTA en bas */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-3 font-semibold text-gray-700">4.9/5 sur 2000+ avis</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Prêt à écrire votre propre success story ?
            </h3>
            <p className="text-gray-600 mb-4">
              Rejoignez les milliers d'étudiants africains qui ont fait confiance à Speed-Inscri
            </p>
            <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Commencer mon parcours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
