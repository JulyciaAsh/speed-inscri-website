
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 hover:bg-gray-100"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm hidden sm:inline">{currentLanguage?.name}</span>
      </Button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-gray-100 font-medium' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
