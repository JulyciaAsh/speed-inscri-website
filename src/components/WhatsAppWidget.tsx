
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Numéro WhatsApp de Speed-Inscri (remplacez par le vrai numéro)
  const whatsappNumber = "+242066958459";
  const message = t('whatsapp.defaultMessage');

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Widget flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Bulle d'information */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-100 animate-scale-in">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-montserrat">Speed-Inscri</h3>
                  <p className="text-sm text-green-500 font-open-sans">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 font-open-sans mb-2">
                {t('whatsapp.greeting')} 👋
              </p>
              <p className="text-sm text-gray-600 font-open-sans">
                {t('whatsapp.question')}
              </p>
            </div>
            
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors font-open-sans"
            >
              {t('whatsapp.startConversation')}
            </button>
          </div>
        )}

        {/* Bouton principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contacter via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Indicateur en ligne */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
