
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InternshipsCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-[#8F1B14]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
          Prêt à Booster Votre Carrière ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Rejoignez nos programmes de stages et emplois internationaux
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
              Postuler Maintenant
            </Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-full">
            Voir les offres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipsCTA;
