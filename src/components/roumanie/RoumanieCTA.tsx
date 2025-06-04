
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RoumanieCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
          Votre future carrière commence ici !
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Découvrez comment la Roumanie peut être le tremplin vers votre réussite 
          professionnelle. Consultation gratuite avec nos experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/start-project">
            <Button className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg rounded-full font-semibold">
              Consultation gratuite
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full font-semibold">
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoumanieCTA;
