
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const HeaderActions = () => {
  const { t } = useLanguage();

  return (
    <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
      <LanguageSelector />
      <Link to="/start-project">
        <Button className="bg-[#8F1B14] hover:bg-[#8F1B14]/90 text-white px-4 xl:px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 font-open-sans group text-sm xl:text-base">
          <span className="hidden xl:inline">{t('hero.cta')}</span>
          <span className="xl:hidden">Démarrer</span>
          <ArrowRight className="ml-1 xl:ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default HeaderActions;
