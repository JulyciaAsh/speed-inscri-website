
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQRedirectSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-red-800 to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
            Des Questions ?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed font-open-sans">
            Retrouvez toutes les réponses à vos questions sur nos services, 
            nos destinations, et notre accompagnement personnalisé.
          </p>
          
          <Link to="/faq">
            <Button className="bg-white text-[#8F1B14] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full group transition-all duration-300 hover:scale-105">
              Consulter la FAQ
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQRedirectSection;
