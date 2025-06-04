
import React from 'react';
import { GraduationCap, Building, Globe } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Pour qui ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Étudiants internationaux</h3>
            <p className="text-gray-600 mb-6">Bachelor, Master, PhD avec possibilité de permis de travail post-diplôme jusqu'à 3 ans.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• PGWP (Post-Graduate Work Permit)</li>
              <li>• Bourses du gouvernement canadien</li>
              <li>• Programmes co-op rémunérés</li>
              <li>• Voie vers la résidence permanente</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionnels en transition</h3>
            <p className="text-gray-600 mb-6">Formations pour immigrer au Canada et développer une carrière dans un marché dynamique.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• MBA et formations professionnelles</li>
              <li>• Programmes d'immigration</li>
              <li>• Reconnaissance des acquis</li>
              <li>• Networking professionnel</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Futurs immigrants</h3>
            <p className="text-gray-600 mb-6">Étudiants visant la résidence permanente via le système Express Entry ou PNP.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• Express Entry (CEC)</li>
              <li>• Programme des Candidats des Provinces</li>
              <li>• Points CRS optimisés</li>
              <li>• Expérience canadienne valorisée</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
