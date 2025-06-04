
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: t('common.home'), href: "/" },
    { name: t('common.services'), href: "/services" },
    { name: t('common.destinations'), href: "/destinations" },
    { name: t('common.about'), href: "/about" },
    { name: t('common.contact'), href: "/contact" },
    { name: t('common.faq'), href: "/faq" }
  ];

  const services = [
    { name: t('common.studiesAbroad'), href: "/studies-abroad" },
    { name: t('common.internships'), href: "/internships" },
    { name: t('common.studentVisa'), href: "/student-visa" },
    { name: t('common.accommodation'), href: "/accommodation" },
    { name: 'Speed-Transit', href: "/services/speed-transit" }
  ];

  return (
    <footer className="bg-[#101125] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/14dca37f-58d5-4681-bf13-62afd76bc377.png" 
                alt="Speed-Inscri Logo" 
                className="h-10 w-auto"
              />
              <div>
                <div className="font-bold text-xl text-white font-montserrat">
                  SPEED-INSCRI
                </div>
                <div className="text-sm text-gray-400 font-open-sans">
                  Votre passeport pour l'international
                </div>
              </div>
            </Link>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-[#8F1B14] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-montserrat">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-[#8F1B14] transition-colors duration-200 font-open-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-montserrat">{t('common.services')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-400 hover:text-[#8F1B14] transition-colors duration-200 font-open-sans"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-montserrat">{t('common.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8F1B14] flex-shrink-0" />
                <div className="text-gray-400 font-open-sans">
                  <div>+33 7 44 93 44 78</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8F1B14] flex-shrink-0" />
                <div className="text-gray-400 font-open-sans">contact@speed-inscri.com</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8F1B14] flex-shrink-0" />
                <div className="text-gray-400 font-open-sans">
                  <div>13 Boulevard Archimède</div>
                  <div>77420 Champs sur Marne, France</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm font-open-sans">
            © 2025 Speed-Inscri. Tous droits réservés.
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0 font-open-sans">
            Développé par <span className="text-[#8F1B14] font-medium">Julycia.O</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
