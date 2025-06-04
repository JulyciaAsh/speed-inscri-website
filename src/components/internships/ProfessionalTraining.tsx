
import React from 'react';
import { Award, Lightbulb, Building, Globe, Heart, Target } from 'lucide-react';
import { professionalTraining } from '@/data/internshipsData';

const iconMap = {
  Award,
  Lightbulb,
  Building,
  Globe,
  Heart,
  Target
};

const ProfessionalTraining = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Formations Professionnelles Internationales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences avec les meilleures formations pour professionnels expérimentés
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {professionalTraining.map((training, index) => {
            const IconComponent = iconMap[training.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-emerald-600/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{training.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{training.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Institutions reconnues :</h4>
                    <div className="flex flex-wrap gap-2">
                      {training.examples.map((example, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Destinations : </span>
                      <span className="text-gray-600">{training.destinations}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Durée : </span>
                      <span className="text-gray-600">{training.duration}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-3">
                      <span className="font-semibold text-gray-900">Investissement : </span>
                      <span className="text-[#8F1B14] font-semibold">{training.investment}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Compétences développées :</h4>
                    <p className="text-gray-600 text-sm">{training.benefits}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTraining;
