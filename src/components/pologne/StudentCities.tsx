
import React from 'react';
import { Users, Building } from 'lucide-react';

const StudentCities = () => {
  const cities = [
    {
      city: "Varsovie",
      image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=400&h=300&fit=crop",
      students: "250K",
      unis: "Université de Varsovie, Warsaw School of Economics",
      highlight: "Capitale dynamique et centre économique"
    },
    {
      city: "Cracovie",
      image: "https://images.unsplash.com/photo-1575890656031-2dc5cd59a8f2?w=400&h=300&fit=crop",
      students: "180K",
      unis: "Université Jagellonne, AGH",
      highlight: "Ville historique et culturelle"
    },
    {
      city: "Wrocław",
      image: "https://images.unsplash.com/photo-1565023419580-3b99570a4cb5?w=400&h=300&fit=crop",
      students: "130K",
      unis: "Université de Wrocław, Politechnika",
      highlight: "Hub technologique émergent"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Villes étudiantes principales
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={city.image} alt={city.city} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{city.city}</h3>
                <p className="text-red-600 font-semibold mb-3">{city.highlight}</p>
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
