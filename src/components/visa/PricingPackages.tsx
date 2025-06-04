
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPackages = [
  {
    name: "Essentiel",
    price: "599€",
    description: "Pour les dossiers standards",
    features: [
      "Évaluation complète du dossier",
      "Traduction de 5 documents",
      "Relecture lettre de motivation",
      "Support email 48h",
      "Guide pays spécifique"
    ],
    popular: false,
    countries: ["France", "Belgique"]
  },
  {
    name: "Premium",
    price: "999€",
    description: "Notre formule la plus demandée",
    features: [
      "Tout de l'offre Essentiel",
      "Coaching entretien consulaire",
      "Rédaction complète des documents",
      "Support WhatsApp prioritaire",
      "Accompagnement jusqu'au visa",
      "Garantie retraitement en cas de refus"
    ],
    popular: true,
    countries: ["Canada", "Allemagne", "Australie"]
  },
  {
    name: "Excellence",
    price: "1599€",
    description: "Pour les dossiers complexes",
    features: [
      "Tout de l'offre Premium",
      "Expert dédié personnel",
      "Accompagnement physique consulat",
      "Support intégration post-visa",
      "Réseau anciens étudiants",
      "Service concierge complet"
    ],
    popular: false,
    countries: ["USA", "UK", "Suisse"]
  }
];

const PricingPackages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 mb-4">Tarifs Transparents</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Nos Formules d'Accompagnement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des tarifs clairs et adaptés à votre destination. Aucun frais caché, paiement en plusieurs fois possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-[#8F1B14] border-2 shadow-xl scale-105' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#8F1B14] text-white">
                  Le Plus Populaire
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-[#8F1B14] mb-2">{pkg.price}</div>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="flex flex-wrap gap-1 justify-center mt-4">
                  {pkg.countries.map((country, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className={`w-full mt-6 ${pkg.popular ? 'bg-[#8F1B14] hover:bg-[#7A1611]' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    Choisir cette formule
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
