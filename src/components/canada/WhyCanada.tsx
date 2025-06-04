
import React from 'react';
import { Award, Globe, Heart, DollarSign } from 'lucide-react';

const WhyCanada = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Pourquoi choisir le Canada ?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
              alt="Campus universitaire canadien"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Système éducatif de classe mondiale</h3>
                <p className="text-gray-600">Universités canadiennes classées parmi les meilleures au monde avec une approche pratique.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Opportunités d'immigration</h3>
                <p className="text-gray-600">Politiques favorables aux étudiants internationaux avec des voies vers la résidence permanente.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Société multiculturelle</h3>
                <p className="text-gray-600">Accueil chaleureux des étudiants internationaux dans une société ouverte et tolérante.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Travail pendant les études</h3>
                <p className="text-gray-600">Autorisation de travail 20h/semaine pendant les études, temps plein pendant les vacances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques supplémentaires */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Le Canada en chiffres</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">2M</div>
              <div className="text-sm text-gray-600">Étudiants au Canada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">642K</div>
              <div className="text-sm text-gray-600">Étudiants internationaux</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">223</div>
              <div className="text-sm text-gray-600">Établissements publics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">26</div>
              <div className="text-sm text-gray-600">Universités dans le top 500 mondial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCanada;
