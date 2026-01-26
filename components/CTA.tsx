import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
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
          Entre em contato conosco e descubra como podemos transformar suas ideias em realidade.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-purple hover:bg-brand-accent text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 group">
            <Mail className="w-5 h-5" />
            Enviar email
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contato" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat conosco
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;