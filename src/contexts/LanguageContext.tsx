
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Traductions
const translations = {
  fr: {
    common: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      destinations: "Destinations",
      contact: "Contact",
      faq: "FAQ",
      studiesAbroad: "Études à l'Étranger",
      internships: "Stages",
      accommodation: "Logement",
      studentVisa: "Visa Étudiant",
      getStarted: "Commencer",
      learnMore: "En Savoir Plus",
      contactUs: "Nous Contacter",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse"
    },
    hero: {
      title: "Votre Passerelle vers l'Excellence Académique Mondiale",
      subtitle: "Accompagnement personnalisé pour vos études à l'étranger",
      description: "Plus de 2000 étudiants nous font confiance chaque année pour concrétiser leur rêve d'études internationales.",
      cta: "Commencer Mon Projet",
      consultation: "Consultation Gratuite"
    },
    whatsapp: {
      greeting: "Bonjour !",
      question: "Comment pouvons-nous vous aider avec votre projet d'études à l'étranger ?",
      startConversation: "Démarrer la conversation",
      defaultMessage: "Bonjour ! Je souhaite obtenir des informations sur vos services."
    }
  },
  en: {
    common: {
      home: "Home",
      about: "About",
      services: "Services",
      destinations: "Destinations",
      contact: "Contact",
      faq: "FAQ",
      studiesAbroad: "Studies Abroad",
      internships: "Internships",
      accommodation: "Accommodation",
      studentVisa: "Student Visa",
      getStarted: "Get Started",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      phone: "Phone",
      email: "Email",
      address: "Address"
    },
    hero: {
      title: "Your Gateway to Global Academic Excellence",
      subtitle: "Personalized support for your studies abroad",
      description: "Over 2000 students trust us each year to make their international study dreams come true.",
      cta: "Start My Project",
      consultation: "Free Consultation"
    },
    whatsapp: {
      greeting: "Hello!",
      question: "How can we help you with your study abroad project?",
      startConversation: "Start conversation",
      defaultMessage: "Hello! I would like to get information about your services."
    }
  },
  es: {
    common: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      destinations: "Destinos",
      contact: "Contacto",
      faq: "Preguntas Frecuentes",
      studiesAbroad: "Estudios en el Extranjero",
      internships: "Prácticas",
      accommodation: "Alojamiento",
      studentVisa: "Visa de Estudiante",
      getStarted: "Empezar",
      learnMore: "Saber Más",
      contactUs: "Contáctanos",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección"
    },
    hero: {
      title: "Tu Puerta de Entrada a la Excelencia Académica Mundial",
      subtitle: "Apoyo personalizado para tus estudios en el extranjero",
      description: "Más de 2000 estudiantes confían en nosotros cada año para hacer realidad su sueño de estudios internacionales.",
      cta: "Iniciar Mi Proyecto",
      consultation: "Consulta Gratuita"
    },
    whatsapp: {
      greeting: "¡Hola!",
      question: "¿Cómo podemos ayudarte con tu proyecto de estudios en el extranjero?",
      startConversation: "Iniciar conversación",
      defaultMessage: "¡Hola! Me gustaría obtener información sobre sus servicios."
    }
  }
};
