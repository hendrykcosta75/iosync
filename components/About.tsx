import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, CheckCircle2 } from 'lucide-react';
import { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl hover:border-brand-purple/50 transition-colors group"
  >
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
      <div className="text-brand-purple group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
        {value}
    </h3>
    <p className="text-sm text-gray-400">{label}</p>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#050505]">
       {/* Background gradient splash */}
       <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-brand-purple">iosync</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Somos uma startup de tecnologia focada em criar soluções inovadoras que
              transformam negócios. Com uma equipe apaixonada por tecnologia e inovação,
              desenvolvemos produtos e serviços que impulsionam o crescimento e a eficiência
              das empresas.
            </p>
            <p>
              Nossa missão é democratizar o acesso à tecnologia de ponta, oferecendo
              soluções acessíveis e escaláveis que atendem desde startups até grandes
              corporações.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
             {['Tecnologia de Ponta', 'Equipe Especializada', 'Suporte 24/7'].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-2 text-sm text-white font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple" />
                    {item}
                 </div>
             ))}
          </div>
        </motion.div>

        {/* Right Side: Stats Grid */}
        <div className="grid gap-4">
          <StatCard
            icon={<TrendingUp />}
            value="100+"
            label="Projetos Entregues"
            delay={0.1}
          />
          <StatCard
            icon={<Users />}
            value="50+"
            label="Clientes Satisfeitos"
            delay={0.2}
          />
          <StatCard
            icon={<Globe />}
            value="15+"
            label="Países Atendidos"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
