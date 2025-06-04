
import React from 'react';
import { TrendingUp, Users, Star, Building } from 'lucide-react';
import { benefits } from '@/data/internshipsData';

const iconMap = {
  TrendingUp,
  Users,
  Star,
  Building
};

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Pourquoi Choisir un Stage International ?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-[#8F1B14]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-[#8F1B14]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
