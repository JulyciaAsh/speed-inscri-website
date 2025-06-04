
import React from 'react';
import { MapPin, Users, CheckCircle, Ship } from 'lucide-react';

const ZonesSection = () => {
  const zones = [
    "Oise", "Le Mans", "Seine-et-Marne", "Île-de-France", 
    "Lyon", "Marseille", "Nantes", "Bordeaux", "Toulouse"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            📍 Nos Zones de Ramassage
          </h2>
          <p className="text-xl text-gray-600">
            Nous intervenons partout où la diaspora congolaise est présente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Zones principales</h3>
            <div className="grid grid-cols-2 gap-4">
              {zones.map((zone, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-700" />
                  <span className="text-gray-700">{zone}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Et nous développons notre réseau dans toutes les grandes villes de France
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-red-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">🤝 Pourquoi Speed-Transit ?</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-300" />
                <span>Entreprise familiale franco-congolaise</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-red-300" />
                <span>Accompagnement personnalisé</span>
              </li>
              <li className="flex items-center space-x-3">
                <Ship className="w-5 h-5 text-green-300" />
                <span>Logistique adaptée au terrain</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-300" />
                <span>Passerelle directe France-Congo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;
