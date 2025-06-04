
import React from 'react';
import { GraduationCap, Building, Clock } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Pour qui ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Étudiants</h3>
            <p className="text-gray-600 mb-6">Licence, Master, Doctorat dans toutes les disciplines. Bourses disponibles pour les étudiants méritants.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• Bourses Eiffel Excellence</li>
              <li>• Bourses du gouvernement français</li>
              <li>• Bourses d'établissements</li>
              <li>• Programmes d'échange</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionnels</h3>
            <p className="text-gray-600 mb-6">Formations continues, MBA, programmes exécutifs pour développer vos compétences.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• MBA en école de commerce</li>
              <li>• Formation continue</li>
              <li>• Programmes exécutifs</li>
              <li>• Reconversion professionnelle</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Programmes courts</h3>
            <p className="text-gray-600 mb-6">Stages, formations courtes, programmes d'échange pour une expérience enrichissante.</p>
            <ul className="text-left text-sm text-gray-600 space-y-2">
              <li>• Summer schools</li>
              <li>• Stages en entreprise</li>
              <li>• Programmes d'immersion</li>
              <li>• Formations spécialisées</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
