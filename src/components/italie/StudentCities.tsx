
import React from 'react';
import { Users, Building } from 'lucide-react';

const StudentCities = () => {
  const cities = [
    {
      city: "Rome",
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop",
      students: "200K",
      unis: "La Sapienza, LUISS, Università Roma Tre",
      highlight: "Capitale éternelle et centre culturel"
    },
    {
      city: "Milan",
      image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&h=300&fit=crop",
      students: "190K",
      unis: "Bocconi, Cattolica, Politecnico",
      highlight: "Capital économique et de la mode"
    },
    {
      city: "Florence",
      image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop",
      students: "60K",
      unis: "Università di Firenze, Polimoda",
      highlight: "Berceau de la Renaissance"
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
                <p className="text-green-600 font-semibold mb-3">{city.highlight}</p>
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
