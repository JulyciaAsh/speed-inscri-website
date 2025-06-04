
import React from 'react';
import { Award, DollarSign, Heart, Globe } from 'lucide-react';

const WhyFrance = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Pourquoi choisir la France ?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop"
              alt="Campus universitaire français"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence académique reconnue</h3>
                <p className="text-gray-600">Système éducatif de renommée mondiale avec des universités classées parmi les meilleures.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frais de scolarité abordables</h3>
                <p className="text-gray-600">170€/an dans le public, des coûts parmi les plus bas d'Europe pour une qualité exceptionnelle.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Art de vivre français</h3>
                <p className="text-gray-600">Culture riche, gastronomie exceptionnelle et patrimoine historique unique.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Porte d'entrée vers l'Europe</h3>
                <p className="text-gray-600">Position centrale en Europe offrant de nombreuses opportunités de voyage et d'échange.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">La France en chiffres</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.5M</div>
              <div className="text-sm text-gray-600">Étudiants en France</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">370K</div>
              <div className="text-sm text-gray-600">Étudiants internationaux</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3 500</div>
              <div className="text-sm text-gray-600">Établissements d'enseignement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">39</div>
              <div className="text-sm text-gray-600">Universités dans le top 500 mondial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFrance;
