
import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EngagementsSection = () => {
  const engagements = [
    {
      icon: CheckCircle,
      title: "Simplicité",
      description: "Prise en charge complète de votre envoi, du ramassage à la livraison"
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Stockage sécurisé, manutention soignée et traçabilité des colis"
    },
    {
      icon: Clock,
      title: "Transparence",
      description: "Tarifs clairs, communication fluide, suivi en temps réel"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Service dans toute la France, siège à Champs-sur-Marne"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            🎯 Nos Engagements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution fiable, humaine et professionnelle pour vos envois vers l'Afrique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.map((engagement, index) => {
            const IconComponent = engagement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    ✅ {engagement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{engagement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
