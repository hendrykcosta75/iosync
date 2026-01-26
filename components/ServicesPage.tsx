import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ServiceProduct {
    id: string;
    name: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    gradient: string;
}

const products: ServiceProduct[] = [
    {
        id: 'planning',
        name: 'Sistema de Planejamento',
        title: 'Gestão Inteligente e Transparente',
        description: 'Uma plataforma completa com todas as ferramentas necessárias para gerenciar o orçamento público, acompanhar projetos e tomar decisões baseadas em dados com total transparência.',
        features: [
            'Gestão Orçamentária Completa',
            'Acompanhamento de Projetos em Tempo Real',
            'Relatórios e Dashboards Dinâmicos',
            'Assistente IA - Plaguinha'
        ],
        image: '/assets/projetos/PlataformaPlanejamento.png',
        gradient: 'from-blue-500 to-cyan-400'
    },
    {
        id: 'education',
        name: 'Sistema de Educação',
        title: 'Transformando o Futuro Escolar',
        description: 'Ferramenta integrada para gestão escolar, conectando alunos, professores e administração em um único ambiente digital intuitivo.',
        features: [
            'Diário de Classe Digital',
            'Controle de Frequência e Notas',
            'Portal do Aluno e Responsável',
            'Gestão de Matrículas Online'
        ],
        // Placeholder image as user only provided one for planning, reverting to same or gatinho if needed, but keeping logic generic
        image: '/assets/gatinho.gif',
        gradient: 'from-brand-purple to-pink-500'
    }
];

const ServicesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'servicos' | 'produtos'>('produtos');
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);

    const product = products[selectedProductIndex];

    const handleNextProduct = () => {
        setSelectedProductIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrevProduct = () => {
        setSelectedProductIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-purple selection:text-white overflow-x-hidden">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-6"
                    >
                        <span className="py-1 px-3 border border-white/10 rounded-full bg-white/5 text-sm font-medium text-brand-purple">
                            Nossas Soluções
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        {product.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        {product.description}
                    </motion.p>
                </div>

                {/* Toggle Controls */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 border border-white/10 p-1 rounded-full flex gap-1">
                        <button
                            onClick={() => setActiveTab('servicos')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'servicos' ? 'bg-brand-purple text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Serviços
                        </button>
                        <button
                            onClick={() => setActiveTab('produtos')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'produtos' ? 'bg-brand-purple text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Produtos
                        </button>
                    </div>
                </div>

                {/* Product Showcase */}
                <AnimatePresence mode="wait">
                    {activeTab === 'produtos' && (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >

                            {/* Left Content: Features */}
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <button
                                            onClick={handlePrevProduct}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            ←
                                        </button>
                                        <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                                            {product.name}
                                        </span>
                                        <button
                                            onClick={handleNextProduct}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            →
                                        </button>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">Principais Recursos</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-transparent rounded-full" />
                                </div>

                                <div className="grid gap-4">
                                    {product.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-purple/30 transition-colors group flex items-start gap-3"
                                        >
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${product.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                                <CheckCircle2 className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white group-hover:text-brand-purple transition-colors">{feature}</h4>
                                                <p className="text-sm text-gray-500 mt-1">Recurso integrado e otimizado para gestão pública.</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content: Image with Animations */}
                            <div className="order-1 lg:order-2 relative">
                                {/* Background Glow */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr ${product.gradient} opacity-20 blur-[100px] -z-10`} />

                                <div className="relative rounded-2xl p-[2px] overflow-hidden group">
                                    {/* Animated Border SVG */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ overflow: 'visible' }}>
                                        <defs>
                                            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="#fff" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                                <feMerge>
                                                    <feMergeNode in="coloredBlur" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <rect
                                            x="2"
                                            y="2"
                                            width="calc(100% - 4px)"
                                            height="calc(100% - 4px)"
                                            rx="16" // Matches rounded-2xl approx
                                            fill="none"
                                            stroke="url(#glowGradient)"
                                            strokeWidth="2"
                                            strokeDasharray="300 3000"
                                            className="animate-border-travel"
                                            filter="url(#glow)"
                                        />
                                    </svg>

                                    <div className="relative z-10 rounded-2xl overflow-hidden bg-brand-dark shadow-2xl">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Overlay Reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Floating Elements / Decoration */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-8 -right-8 bg-brand-surface p-4 rounded-xl border border-white/10 shadow-xl z-30 hidden md:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Status do Sistema</p>
                                            <p className="font-bold text-green-500">100% Operacional</p>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'servicos' && (
                        <motion.div
                            key="servicos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center py-20"
                        >
                            <div className="inline-flex p-4 rounded-full bg-white/5 mb-6">
                                <Zap className="w-8 h-8 text-brand-purple" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Nossos Serviços Especializados</h3>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Além de produtos, oferecemos consultoria técnica, desenvolvimento sob medida e suporte contínuo para modernização da gestão pública.
                            </p>
                            <button onClick={() => setActiveTab('produtos')} className="mt-8 text-brand-purple hover:text-white transition-colors underline underline-offset-4">
                                Ver nossos produtos
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes border-travel-rect {
            0% { stroke-dashoffset: 3300; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-border-travel {
            animation: border-travel-rect 8s linear infinite;
          }
        `
            }} />
        </div>
    );
};

export default ServicesPage;
