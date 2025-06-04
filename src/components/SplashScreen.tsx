
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-all duration-800 opacity-0 scale-110">
        <div className="animate-scale-out">
          <img 
            src="/lovable-uploads/14dca37f-58d5-4681-bf13-62afd76bc377.png" 
            alt="Speed-Inscri Logo" 
            className="h-24 w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(143, 27, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(143, 27, 20, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Logo with modern animation */}
        <div className="relative mb-16">
          <div className="relative">
            {/* Subtle background circle */}
            <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#8F1B14]/5 to-[#101125]/5 rounded-full blur-2xl animate-pulse"></div>
            
            <img 
              src="/lovable-uploads/14dca37f-58d5-4681-bf13-62afd76bc377.png" 
              alt="Speed-Inscri Logo" 
              className="h-32 w-auto relative z-10 animate-fade-in"
            />
          </div>
        </div>

        {/* Modern text */}
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-[#101125] mb-4 font-montserrat tracking-tight">
            SPEED-INSCRI
          </h1>
          <p className="text-xl text-gray-600 font-open-sans font-light">
            Votre passeport pour l'international
          </p>
        </div>

        {/* Modern progress bar */}
        <div className="w-96 max-w-sm animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#8F1B14] to-[#101125] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500 font-open-sans">Chargement...</span>
            <span className="text-sm font-semibold text-[#8F1B14] font-montserrat">{progress}%</span>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8F1B14]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#101125]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-[#8F1B14]/40 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
