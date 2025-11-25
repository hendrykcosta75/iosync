import React from 'react';

interface LogoProps {
  className?: string;
  height?: string;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  height = "h-16 md:h-24",
  src = "https://i.ibb.co/hJjZ09dx/Logo-1.png"
}) => {
  return (
    <div className={`relative flex items-center group select-none ${className}`}>
         {/* Glow effect on hover */}
         <div className="absolute -inset-4 bg-brand-purple/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
         
         <img 
           src={src} 
           alt="iosync" 
           className={`${height} w-auto object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-105`}
         />
    </div>
  );
};

export default Logo;