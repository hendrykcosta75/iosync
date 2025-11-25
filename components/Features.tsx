import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-brand-purple/50 transition-all duration-300 hover:bg-[#0f0f0f] relative overflow-hidden"
  >
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-purple/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all">
        <div className="text-brand-purple">
            {icon}
        </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
        {description}
        </p>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="w-7 h-7" />,
      title: 'Desenvolvimento Ágil',
      description: 'Metodologias modernas para entregas rápidas e eficientes, garantindo flexibilidade total.',
      delay: 0.1,
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: 'Alta Performance',
      description: 'Soluções otimizadas para máxima velocidade e eficiência em qualquer dispositivo.',
      delay: 0.2,
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: 'Segurança Total',
      description: 'Proteção de dados e sistemas com as melhores práticas de cibersegurança do mercado.',
      delay: 0.3,
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: 'Inovação Constante',
      description: 'Tecnologias de ponta para manter você sempre à frente da concorrência.',
      delay: 0.4,
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-black relative">
       {/* Top Lighting Effect */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
       
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Por que escolher a <span className="text-brand-purple">iosync</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Combinamos expertise técnica com inovação para criar soluções que fazem a diferença.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
