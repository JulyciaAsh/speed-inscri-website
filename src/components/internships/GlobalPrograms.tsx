
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { internshipTypes, professionalInternships, professionalTraining } from '@/data/internshipsData';

const GlobalPrograms = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Programmes de Stages Internationaux
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous nos programmes de stages pour construire votre expérience internationale
          </p>
        </div>

        {/* Types de Stages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types de Stages Disponibles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {internshipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h4>
                <div className="text-[#8F1B14] font-semibold mb-3">{type.duration}</div>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Secteurs : </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {type.sectors.map((sector, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {type.companies}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stages Professionnels Spécialisés */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Stages Professionnels Spécialisés</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {professionalInternships.map((internship, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{internship.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{internship.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Exemples : </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {internship.examples.slice(0, 3).map((example, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-gray-700">Destinations : </span>
                      <span className="text-gray-600">{internship.destinations}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Durée : </span>
                      <span className="text-gray-600">{internship.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formations Professionnelles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Formations Professionnelles Internationales</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {professionalTraining.map((training, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{training.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{training.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700 text-sm">Institutions : </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {training.examples.slice(0, 3).map((example, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-gray-700">Destinations : </span>
                      <span className="text-gray-600">{training.destinations}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Durée : </span>
                      <span className="text-gray-600">{training.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs">
                    <span className="font-semibold text-[#8F1B14]">Investissement : </span>
                    <span className="text-[#8F1B14]">{training.investment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-[#8F1B14] hover:bg-[#8F1B14]/90">
            Voir toutes les opportunités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;
