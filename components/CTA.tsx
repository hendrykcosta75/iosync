import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, Shield, Phone, Check } from 'lucide-react';

const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const contactMethods = [
    {
      name: 'Email',
      value: 'contato@iosync.com.br',
      icon: <Mail className="w-5 h-5" />,
      link: 'mailto:contato@iosync.com.br',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'WhatsApp',
      value: '+55 82 9676-0775',
      icon: <Phone className="w-5 h-5" />,
      link: 'https://wa.me/558296760775',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Session',
      value: '05d038e1ee22f0...d0fe87a',
      fullValue: '05d038e1ee22f023ee74b0482720aedd4f2d98bb7cd08fd52b497e55f73d0fe87a',
      icon: <Shield className="w-5 h-5" />,
      link: null,
      gradient: 'from-purple-500 to-violet-500',
      copyable: true
    },
    {
      name: 'SimpleXChat',
      value: 'Conectar',
      icon: <MessageSquare className="w-5 h-5" />,
      link: 'https://smp18.simplex.im/a#FgeIRyabsfUGUmJqqLdzymaI6lintYP1GeyjFaWUTd4',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Telegram',
      value: '@iosync1',
      icon: <Send className="w-5 h-5" />,
      link: 'https://t.me/iosync1',
      gradient: 'from-sky-500 to-blue-500'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-black">
      {/* Background with radial gradient */}
      <div className="absolute inset-0 bg-radial-fade opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center mb-10">
          {/* Expanding Light Beam */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "300px", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-transparent via-brand-purple to-transparent shadow-[0_0_25px_rgba(168,85,247,0.8)] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 bg-brand-purple/20 blur-[40px] rounded-[100%]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mt-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
          >
            Pronto para <span className="text-brand-purple">inovar</span>?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
        >
          Entre em contato conosco através de qualquer um dos canais abaixo.
        </motion.p>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {contactMethods.map((method, idx) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={`
                p-4 rounded-xl bg-white/5 border transition-all duration-300 
                group ${method.link ? 'cursor-pointer border-white/10 hover:border-brand-purple/30' : method.copyable ? 'cursor-copy' : 'cursor-default border-white/10 hover:border-brand-purple/30'}
                ${method.copyable && copied ? 'border-green-500 bg-green-500/10' : 'border-white/10 hover:border-brand-purple/30'}
              `}
              onClick={() => {
                if (method.link) {
                  window.open(method.link, '_blank');
                } else if (method.copyable && method.fullValue) {
                  copyToClipboard(method.fullValue);
                }
              }}
            >
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${method.copyable && copied ? 'from-green-500 to-emerald-500' : method.gradient} mb-3 group-hover:scale-110 transition-all duration-300`}>
                {method.copyable && copied ? <Check className="w-5 h-5" /> : method.icon}
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">{method.name}</h4>
              <p className="text-xs text-gray-400 truncate" title={method.fullValue || method.value}>
                {method.copyable && copied ? 'Copiado!' : method.value}
              </p>
              {method.copyable && !copied && (
                <p className="text-[10px] text-brand-purple mt-1">Clique para copiar</p>
              )}
              {method.copyable && copied && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-[10px] text-green-500 mt-1 font-semibold"
                >
                  ✓ ID copiado com sucesso!
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;