
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useLanguage();

  const menuItems = [
    { name: t('common.home'), href: '/' },
    { 
      name: t('common.services'), 
      href: '/services',
      submenu: [
        { name: t('common.studiesAbroad'), href: '/studies-abroad' },
        { name: t('common.internships'), href: '/internships' },
        { name: t('common.accommodation'), href: '/accommodation' },
        { name: t('common.studentVisa'), href: '/student-visa' },
        { name: 'Formations', href: '/services/formations' },
        { name: 'Voyages d\'affaires', href: '/services/voyages-affaires' },
        { name: 'Speed-Transit', href: '/services/speed-transit' }
      ]
    },
    { name: t('common.destinations'), href: '/destinations' },
    { name: t('common.about'), href: '/about' },
    { name: t('common.contact'), href: '/contact' },
    { name: t('common.faq'), href: '/faq' },
  ];

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 py-4 rounded-b-2xl">
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <Link
              to={item.href}
              className="px-4 py-3 text-gray-700 hover:text-[#8F1B14] hover:bg-gray-50 rounded-xl transition-colors duration-200 font-open-sans block"
              onClick={onClose}
            >
              {item.name}
            </Link>
            {item.submenu && (
              <div className="ml-4 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-[#8F1B14] hover:bg-gray-50 rounded-lg transition-colors duration-200 font-open-sans"
                    onClick={onClose}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="px-4 pt-4 space-y-3">
          <div className="flex justify-center">
            <LanguageSelector />
          </div>
          <Link to="/start-project">
            <Button className="w-full bg-[#8F1B14] hover:bg-[#8F1B14]/90 text-white py-3 rounded-full font-medium font-open-sans">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
