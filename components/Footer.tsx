import React from 'react';
import { Mail, Phone, Shield, MessageSquare, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const contactLinks = [
    { icon: Mail, href: 'mailto:contato@iosync.com.br', title: 'Email' },
    { icon: Phone, href: 'https://wa.me/558296760775', title: 'WhatsApp' },
    { icon: Shield, href: '#', title: 'Session', copyValue: '05d038e1ee22f023ee74b0482720aedd4f2d98bb7cd08fd52b497e55f73d0fe87a' },
    { icon: MessageSquare, href: 'https://smp18.simplex.im/a#FgeIRyabsfUGUmJqqLdzymaI6lintYP1GeyjFaWUTd4', title: 'SimpleXChat' },
    { icon: Send, href: 'https://t.me/iosync1', title: 'Telegram' },
  ];

  const handleClick = (link: typeof contactLinks[0], e: React.MouseEvent) => {
    if (link.copyValue) {
      e.preventDefault();
      navigator.clipboard.writeText(link.copyValue);
      alert('Session ID copiado!');
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Logo height="h-16" src="/assets/Logo (1).png" />

          <div className="flex items-center gap-4">
            {contactLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.copyValue ? undefined : '_blank'}
                rel={link.copyValue ? undefined : 'noopener noreferrer'}
                onClick={(e) => handleClick(link, e)}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-brand-purple/20 transition-all duration-200 hover:scale-110"
                title={link.title}
              >
                <link.icon className="w-5 h-5" />
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