
import React from 'react';
import { Users, Building } from 'lucide-react';

const StudentCities = () => {
  const cities = [
    {
      city: "Paris",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      students: "700K",
      unis: "Sorbonne, Sciences Po, HEC",
      highlight: "Capitale culturelle mondiale"
    },
    {
      city: "Lyon",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      students: "150K",
      unis: "École Centrale, EMLYON",
      highlight: "Gastronomie et innovation"
    },
    {
      city: "Toulouse",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      students: "120K",
      unis: "INSA, Toulouse Business School",
      highlight: "Capitale européenne de l'aéronautique"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Villes étudiantes populaires
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={city.image} alt={city.city} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.city}</h3>
                <p className="text-blue-600 font-semibold mb-3">{city.highlight}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{city.students} étudiants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{city.unis}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCities;
