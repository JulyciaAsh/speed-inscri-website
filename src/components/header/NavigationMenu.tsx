
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationMenuProps {
  activeDropdown: string | null;
  setActiveDropdown: (item: string | null) => void;
}

const NavigationMenu = ({ activeDropdown, setActiveDropdown }: NavigationMenuProps) => {
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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

  return (
    <nav className="hidden lg:flex items-center space-x-1 flex-shrink-0">
      {menuItems.map((item) => (
        <div 
          key={item.name} 
          className="relative group"
          onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={item.href}
            className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-[#8F1B14] font-open-sans whitespace-nowrap"
          >
            <span>{item.name}</span>
            {item.submenu && <ChevronDown className="w-4 h-4" />}
          </Link>
          
          {item.submenu && activeDropdown === item.name && (
            <div 
              className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.href}
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#8F1B14] transition-colors duration-200 font-open-sans"
                  onClick={() => setActiveDropdown(null)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;
