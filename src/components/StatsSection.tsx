
import React from 'react';
import { TrendingUp, Award, Globe, Users, Heart, Target, Star, CheckCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2,052",
      label: "Étudiants accompagnés depuis 2021",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      trend: "+23%"
    },
    {
      icon: Award,
      number: "1,034",
      label: "Visas obtenus avec succès",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      trend: "+18%"
    },
    {
      icon: Globe,
      number: "213",
      label: "Partenaires dans le monde",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      trend: "+31%"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Taux de satisfaction client",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      trend: "+5%"
    }
  ];

  const achievements = [
    "🏆 Meilleure agence d'accompagnement 2024",
    "⭐ Note moyenne de 4.9/5 sur Trustpilot",
    "🌟 Plus de 50 témoignages positifs ce mois-ci"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-blue-50 border border-gray-200 rounded-full px-6 py-3 mb-8">
            <Target className="w-5 h-5 text-red-500" />
            <span className="text-gray-700 font-medium">Résultats Concrets</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            NOS RÉUSSITES EN
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              CHIFFRES
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Des résultats qui témoignent de notre engagement et de la qualité de notre accompagnement
          </p>

          {/* Badges d'achievement */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                {achievement}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className={`text-center group hover:scale-105 transition-all duration-300 ${stat.bgColor} ${stat.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl relative overflow-hidden`}
              >
                {/* Badge de tendance */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                  <ArrowUp className="w-3 h-3" />
                  <span>{stat.trend}</span>
                </div>

                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg ${stat.borderColor} border-2 relative`}>
                    <IconComponent className={`w-10 h-10 ${stat.color}`} />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className={`text-4xl lg:text-5xl font-black ${stat.color} mb-4 group-hover:scale-110 transition-all duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 text-sm lg:text-base font-medium leading-relaxed">
                  {stat.label}
                </div>

                {/* Effet de survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-gray-900 to-transparent rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Section CTA améliorée */}
        <div className="text-center mt-20">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border-2 border-gray-200 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Plus qu'une agence, 
              <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                un partenaire de confiance
              </span>
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Depuis notre création, nous nous engageons à offrir un accompagnement personnalisé et humain. 
              Chaque chiffre représente une histoire, un rêve réalisé, une vie transformée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-0">
                <Heart className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Rejoignez nos success stories
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300">
                <TrendingUp className="mr-3 w-5 h-5" />
                Voir tous nos résultats
              </Button>
            </div>

            {/* Témoignage rapide */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl border border-gray-200">
              <p className="text-gray-700 italic mb-3">
                "Grâce à Speed-Inscri, j'ai pu réaliser mon rêve d'étudier au Canada. Un accompagnement exceptionnel !"
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-gray-900">Marie D.</div>
                  <div className="text-sm text-gray-600">Étudiante à Toronto</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
