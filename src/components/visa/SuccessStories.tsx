
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Clock } from 'lucide-react';

const successStories = [
  {
    name: "Marie K.",
    destination: "Canada",
    program: "MBA - Université de Toronto",
    story: "Refusée 2 fois en solo, Speed-Inscri a identifié les failles de mon dossier. Visa obtenu en 6 semaines avec leur méthode !",
    rating: 5,
    timeline: "6 semaines",
    year: "2024",
    initialRejections: 2
  },
  {
    name: "Ahmed B.",
    destination: "France",
    program: "Master Ingénierie - École Centrale Paris",
    story: "Campus France semblait impossible à naviguer. L'équipe m'a guidé étape par étape. Aujourd'hui en 2ème année !",
    rating: 5,
    timeline: "3 semaines",
    year: "2023",
    scholarship: "Bourse d'excellence 8000€"
  },
  {
    name: "Sarah L.",
    destination: "Allemagne",
    program: "Doctorat - TU Munich",
    story: "Dossier complexe avec compte bloqué et Anabin. Process rendu simple avec un suivi exceptionnel.",
    rating: 5,
    timeline: "8 semaines",
    year: "2024",
    specialty: "Recherche IA"
  },
  {
    name: "David M.",
    destination: "Australie",
    program: "Master Computer Science - University of Melbourne",
    story: "GTE statement était un mystère. Grâce à leur expertise, visa obtenu du premier coup malgré un profil atypique.",
    rating: 5,
    timeline: "5 semaines",
    year: "2024",
    workExperience: "5 ans IT"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 mb-4">Témoignages Vérifiés</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Histoires de Réussite Authentiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 2800 étudiants ont réalisé leur rêve. Découvrez leurs parcours et leurs conseils.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <CardDescription className="text-[#8F1B14] font-semibold">{story.destination} • {story.year}</CardDescription>
                  </div>
                  <div className="flex">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">{story.program}</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {story.timeline}
                    </div>
                    {story.initialRejections && (
                      <Badge variant="outline" className="text-xs bg-red-50 text-red-700">
                        {story.initialRejections} refus initial
                      </Badge>
                    )}
                  </div>
                  {story.scholarship && (
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs mb-2">
                      {story.scholarship}
                    </Badge>
                  )}
                  {story.specialty && (
                    <Badge variant="outline" className="text-xs mb-2">
                      {story.specialty}
                    </Badge>
                  )}
                  {story.workExperience && (
                    <Badge variant="outline" className="text-xs mb-2">
                      {story.workExperience}
                    </Badge>
                  )}
                </div>
                <blockquote className="text-gray-700 italic text-sm leading-relaxed">"{story.story}"</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
