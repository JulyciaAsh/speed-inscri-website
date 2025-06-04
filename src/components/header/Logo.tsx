
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
      <img 
        src="/lovable-uploads/14dca37f-58d5-4681-bf13-62afd76bc377.png" 
        alt="Speed-Inscri Logo" 
        className="h-8 w-auto sm:h-10"
      />
      <div className="hidden sm:flex flex-col min-w-0">
        <span className="font-bold text-base sm:text-lg leading-tight text-[#101125] font-montserrat truncate">
          SPEED-INSCRI
        </span>
        <span className="text-xs leading-tight text-gray-500 font-open-sans truncate">
          Votre passeport pour réussir à l'international
        </span>
      </div>
      {/* Version mobile du nom seulement */}
      <div className="sm:hidden flex flex-col min-w-0">
        <span className="font-bold text-sm leading-tight text-[#101125] font-montserrat">
          SPEED-INSCRI
        </span>
      </div>
    </Link>
  );
};

export default Logo;
