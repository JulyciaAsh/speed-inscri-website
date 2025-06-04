
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { internshipTypes } from '@/data/internshipsData';

const InternshipTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Types de Stages Proposés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des opportunités adaptées à chaque niveau et objectif de carrière
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {internshipTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-[#8F1B14]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                  <div className="text-[#8F1B14] font-semibold">{type.duration}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Secteurs :</h4>
                <div className="flex flex-wrap gap-2">
                  {type.sectors.map((sector, idx) => (
                    <span key={idx} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="text-sm text-gray-500 mb-4">Entreprises : {type.companies}</div>
                <Button className="w-full">
                  Découvrir les offres
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipTypes;
