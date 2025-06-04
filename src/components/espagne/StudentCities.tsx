
import React from 'react';
import { Users, Building } from 'lucide-react';

const StudentCities = () => {
  const cities = [
    {
      city: "Madrid",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop",
      students: "280K",
      unis: "Universidad Complutense, IE Business School",
      highlight: "Capitale dynamique et culturelle"
    },
    {
      city: "Barcelone",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      students: "200K",
      unis: "UPF, ESADE, UB",
      highlight: "Innovation et design méditerranéen"
    },
    {
      city: "Valence",
      image: "https://images.unsplash.com/photo-1530841344095-6a2ca9e94283?w=400&h=300&fit=crop",
      students: "65K",
      unis: "Universitat de València, UPV",
      highlight: "Sciences et technologies de pointe"
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
