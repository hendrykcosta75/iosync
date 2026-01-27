import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Logo height="h-16" src="https://i.ibb.co/C3mc4ytY/Logo-2.png" />
          
          <div className="flex items-center gap-6">
            {[Github, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a 
                key={idx} 
                href="/" 
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} iosync Inc. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-white transition-colors">Privacidade</a>
            <a href="/" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;