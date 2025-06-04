
import React from 'react';
import { Users, Building } from 'lucide-react';

const StudentCities = () => {
  const cities = [
    {
      city: "Accra",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      students: "80K",
      unis: "University of Ghana, Ghana Institute of Management",
      highlight: "Capitale économique et culturelle"
    },
    {
      city: "Kumasi",
      image: "https://images.unsplash.com/photo-1578318222293-1b8676aae881?w=400&h=300&fit=crop",
      students: "45K",
      unis: "KNUST, University of Education",
      highlight: "Centre de l'artisanat et de la technologie"
    },
    {
      city: "Cape Coast",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
      students: "25K",
      unis: "University of Cape Coast",
      highlight: "Patrimoine historique et côte atlantique"
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
