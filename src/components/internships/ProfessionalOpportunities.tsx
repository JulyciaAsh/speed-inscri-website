
import React from 'react';
import { professionalOpportunities } from '@/data/internshipsData';

const ProfessionalOpportunities = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Opportunités Professionnelles Internationales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accélérez votre carrière avec des opportunités uniques à l'international
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {professionalOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.category}</h3>
              <p className="text-gray-600 mb-6">{opportunity.description}</p>
              
              <div className="space-y-6">
                {opportunity.programs.map((program, idx) => (
                  <div key={idx} className="border-l-4 border-[#8F1B14] pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">{program.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Organisations : </span>
                        <span className="text-gray-600">{program.companies}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Durée : </span>
                        <span className="text-gray-600">{program.duration}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Avantages : </span>
                        <span className="text-gray-600">{program.benefits}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalOpportunities;
