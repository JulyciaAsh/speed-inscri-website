
import React from 'react';
import { Heart, Globe, Shield, Lightbulb, Target, Award, BookOpen } from 'lucide-react';
import { professionalInternships } from '@/data/internshipsData';

const iconMap = {
  Heart,
  Globe,
  Shield,
  Lightbulb,
  Target,
  Award,
  BookOpen
};

const ProfessionalInternships = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Stages Professionnels Spécialisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez des secteurs spécialisés et construisez une expérience unique
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {professionalInternships.map((internship, index) => {
            const IconComponent = iconMap[internship.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#8F1B14]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#8F1B14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{internship.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Exemples d'organisations :</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.examples.map((example, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Destinations : </span>
                      <span className="text-gray-600">{internship.destinations}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Durée : </span>
                      <span className="text-gray-600">{internship.duration}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Avantages :</h4>
                    <p className="text-gray-600 text-sm">{internship.benefits}</p>
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

export default ProfessionalInternships;
