import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-36 lg:pt-48 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-purple/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-16">

        {/* Text Content */}
        <div className="text-center z-20 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple text-xs font-semibold mb-8 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
            Futuro da Tecnologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
          >
            Os seus sonhos <br />
            escritos em linhas de <span className="text-brand-purple inline-block transform hover:scale-105 transition-transform duration-500 cursor-default drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              código
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light"
          >
            Transformamos a sua visão em realidade digital. Na iosync, materializamos ideias inovadoras através de soluções tecnológicas robustas e personalizadas, construindo hoje o futuro do seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Começar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/10 hover:bg-white/5 transition-colors">
              Ver demonstração
            </button>
          </motion.div>
        </div>

        {/* 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center perspective-1000 w-full max-w-4xl"
        >
          {/* Glowing Aura behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-blue-600/20 blur-[80px] rounded-full animate-pulse-slow" />

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-full aspect-square md:aspect-video"
          >
            <img
              src="/assets/gatinho.gif"
              alt="Animação 3D"
              className="w-full h-full object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;