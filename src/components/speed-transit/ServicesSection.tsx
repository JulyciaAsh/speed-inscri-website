
import React from 'react';
import { Ship, Package, Truck, Shield, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Ramassage à domicile",
      description: "Prise en charge de vos colis partout en France"
    },
    {
      icon: Shield,
      title: "Stockage sécurisé",
      description: "Entrepôt de 30 m² en Île-de-France avec surveillance"
    },
    {
      icon: Ship,
      title: "Expédition maritime",
      description: "Transport par conteneur 20 pieds vers le Congo"
    },
    {
      icon: Package,
      title: "Livraison à destination",
      description: "Service de livraison à Brazzaville et Pointe-Noire"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            📦 Nos Services
          </h2>
          <p className="text-xl text-gray-600">
            Un accompagnement complet de A à Z
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Services détaillés */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Services inclus :</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Ramassage à domicile dans toute la France</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Stockage sécurisé dans un entrepôt de 30 m²</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Expédition par conteneur maritime 20 pieds</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Livraison possible à destination</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Service client réactif et humain</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Suivi WhatsApp, téléphone et e-mail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
