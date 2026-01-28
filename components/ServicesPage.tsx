import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Shield, Cpu, TrendingUp, MapPin, Lock, Usb } from 'lucide-react';
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

interface PrivacyProduct {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    gradient: string;
    icon: React.ReactNode;
}

interface ServiceItem {
    id: string;
    name: string;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    icon: React.ReactNode;
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
            'Assistente IA - Gatinho'
        ],
        image: '/assets/projetos/PlataformaPlanejamento.png',
        gradient: 'from-blue-500 to-cyan-400'
    },
    {
        id: 'education',
        name: 'Sistema de Cursos',
        title: 'Democratizando o acesso ao Conhecimento',
        description: 'Ferramenta integrada para gestão de cursos, democratizando a oferta de conhecimento para a população.',
        features: [
            'Análise de Inscritos e Matriculados',
            'Envio de E-mail de Confirmação Automático',
            'Assistente IA - Gatinho',
            'Insights e Relatórios Inteligentes'
        ],
        image: '/assets/projetos/SistemaCursos.png',
        gradient: 'from-brand-purple to-pink-500'
    },
    {
        id: 'links',
        name: 'Sistema de Links',
        title: 'Acesso para todos os Serviços da Prefeitura',
        description: 'Sistema de Links que possibilita acesso para todos os serviços da prefeitura de forma rápida e descomplicada',
        features: [
            'Painel Administrativo para Inserção de Links',
            'Ordernação de Links via Drag and Drop',
            'Otimização de Cache para Carregamento Rápido',
            'Integração com Assistente de IA - Gatinho'
        ],
        image: '/assets/projetos/SistemaLinks.png',
        gradient: 'from-brand-purple to-green-500'
    },
    {
        id: 'empregos',
        name: 'Sistema de Empregos',
        title: 'Fomentando Empregos e Desenvolvimento Local',
        description: 'Sistema de Empregos que possibilita a criação de vagas e a busca de empregos na cidade fomentando empregos e desenvolvimento local',
        features: [
            'Criação de Vagas',
            'Busca de Empregos',
            'Relatórios e Dashboards Dinâmicos',
            'Integração com Assistente de IA - Gatinho'
        ],
        image: '/assets/projetos/SistemaEmpregos.png',
        gradient: 'from-blue-500 to-blue-500'
    },
    {
        id: 'participacao',
        name: 'Sistema de Participação Cidadã',
        title: 'Tornando a sua cidade mais democrática',
        description: 'Sistema de Participação Cidadã que possibilita a participação da população na tomada de decisões',
        features: [
            'Criação de Propostas e Votações',
            'Criação de Debates Interativos',
            'Denúncias e Sugestões Anônimas',
            'Relatórios e Dashboards Dinâmicos'
        ],
        image: '/assets/projetos/SistemaParticipacao.png',
        gradient: 'from-brand-purple to-purple-500'
    },
    {
        id: 'turismo',
        name: 'Sistema de Turismo',
        title: 'Colocando a sua cidade no mapa',
        description: 'Website que possibilita a publicação de locais turisticos da cidade',
        features: [
            'Publicação de locais turisticos',
            'Mapa interativo',
            'Recomendações de locais turisticos',
            'Assistente IA de Turismo'
        ],
        image: '/assets/projetos/SistemaTurismo.jpg',
        gradient: 'from-brand-purple to-yellow-500'
    },
    {
        id: 'assistente',
        name: 'Assistente IA',
        title: 'Atendente Virtual Municipal',
        description: 'Assistente IA que possibilita a interação e acesso às informações da cidade com a população da cidade',
        features: [
            'Interação com a população da cidade',
            'Acesso às informações da cidade',
            'Atendimento 24/7',
            'Tirar duvidas'
        ],
        image: '/assets/projetos/assistente.png',
        gradient: 'from-brand-purple to-red-500'
    }
];

const privacyProducts: PrivacyProduct[] = [
    {
        id: 'data-blocker',
        name: 'Data Blocker',
        title: 'Proteção no Carregamento',
        description: 'Dispositivo para segurança de carregamento de dispositivos, funcionando como um preservativo digital. Bloqueia a transferência de dados enquanto permite apenas o carregamento.',
        image: '/assets/privacidade/dataBlockers.png',
        gradient: 'from-red-500 to-orange-400',
        icon: <Usb className="w-6 h-6" />
    },
    {
        id: 'estacao-trabalho',
        name: 'Estação de Trabalho Privada',
        title: 'Sistema Operacional Portátil Seguro',
        description: 'Pendrive configurado com sistema operacional seguro, permitindo o boot em qualquer computador, com emails privados, VPN gratuita e no-logs, carteira de cripto, dentre outros aplicativos.',
        image: '/assets/privacidade/EstacaoTrabalho.png',
        gradient: 'from-emerald-500 to-teal-400',
        icon: <Cpu className="w-6 h-6" />
    },
    {
        id: 'capa-faraday',
        name: 'Capa de Faraday',
        title: 'Blindagem Eletromagnética',
        description: 'Proteção de Cartão de Crédito, celular e outros dispositivos eletrônicos contra leitura não autorizada e rastreamento. Bloqueia sinais RFID, NFC, WiFi e celular.',
        image: '/assets/privacidade/capaFaraday.png',
        gradient: 'from-violet-500 to-purple-400',
        icon: <Shield className="w-6 h-6" />
    }
];

const services: ServiceItem[] = [
    {
        id: 'security-analysis',
        name: 'Análises de Segurança',
        title: 'Análises de Segurança e Ataques Controlados',
        description: 'Realizamos análises de Plataformas tanto SAST (análise interna de código etc) quanto DAST (realizando um ataque real). Atacamos diretamente todos os seus serviços, incluindo ataques mais sofisticados usando múltiplos servidores simultaneamente para testes de estresse.',
        features: [
            'Análise SAST (Static Application Security Testing)',
            'Análise DAST (Dynamic Application Security Testing)',
            'Testes de Penetração Avançados',
            'Testes de Estresse com Múltiplos Servidores'
        ],
        gradient: 'from-red-500 to-orange-500',
        icon: <Lock className="w-8 h-8" />
    },

    {
        id: 'political-presence',
        name: 'Fortalecimento da Presença Política',
        title: 'Presença Política Digital',
        description: 'Análise e previsões de opiniões públicas com IA tanto fisicamente, como online, no Instagram, mídia e outras plataformas. Entenda o sentimento público e antecipe movimentos políticos.',
        features: [
            'Análise de Opiniões Públicas e Planejamento Estratégico',
            'Monitoramento de Mídia Digital e Sentimento Social',
            'Previsões de Opinião Pública e Movimentos Políticos',
            'Relatórios de Decisões via Inteligência Artificial a serem tomadas para potencializar a vitória política'
        ],
        gradient: 'from-purple-500 to-pink-500',
        icon: <TrendingUp className="w-8 h-8" />
    },

    {
        id: 'tourism-ai',
        name: 'Engajamento Turístico IA',
        title: 'Engajamento Turístico Inteligente com IA',
        description: 'Assistente de turismo inteligente para indicar locais, localização, cardápios e muito mais. Transforme a experiência turística da sua cidade com tecnologia de ponta.',
        features: [
            'Assistente Virtual de Turismo',
            'Indicação de Locais e Pontos Turísticos',
            'Cardápios e Informações de Restaurantes',
            'Navegação Inteligente e Rotas'
        ],
        gradient: 'from-cyan-500 to-blue-500',
        icon: <MapPin className="w-8 h-8" />
    }
];

const ServicesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'servicos' | 'produtos' | 'privacidade'>('produtos');
    const [selectedProductIndex, setSelectedProductIndex] = useState(0);
    const [selectedPrivacyIndex, setSelectedPrivacyIndex] = useState(0);

    const product = products[selectedProductIndex];
    const privacyProduct = privacyProducts[selectedPrivacyIndex];

    const handleNextProduct = () => {
        setSelectedProductIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrevProduct = () => {
        setSelectedProductIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const handleNextPrivacy = () => {
        setSelectedPrivacyIndex((prev) => (prev + 1) % privacyProducts.length);
    };

    const handlePrevPrivacy = () => {
        setSelectedPrivacyIndex((prev) => (prev - 1 + privacyProducts.length) % privacyProducts.length);
    };

    const getActiveTitle = () => {
        if (activeTab === 'produtos') return product.title;
        if (activeTab === 'privacidade') return privacyProduct.title;
        return 'Nossos Serviços Especializados';
    };

    const getActiveDescription = () => {
        if (activeTab === 'produtos') return product.description;
        if (activeTab === 'privacidade') return privacyProduct.description;
        return 'Oferecemos serviços de alta qualidade para segurança, turismo e presença digital.';
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
                        key={getActiveTitle()}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        {getActiveTitle()}
                    </motion.h1>

                    <motion.p
                        key={getActiveDescription()}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        {getActiveDescription()}
                    </motion.p>
                </div>

                {/* Toggle Controls */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 border border-white/10 p-1 rounded-full flex gap-1 flex-wrap justify-center">
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
                        <button
                            onClick={() => setActiveTab('privacidade')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'privacidade' ? 'bg-brand-purple text-white shadow-lg' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Privacidade
                        </button>
                    </div>
                </div>

                {/* Content Showcase */}
                <AnimatePresence mode="wait">
                    {/* Products Tab */}
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
                                            rx="16"
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

                    {/* Privacy Tab */}
                    {activeTab === 'privacidade' && (
                        <motion.div
                            key={privacyProduct.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >

                            {/* Left Content: Product Info */}
                            <div className="order-2 lg:order-1 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <button
                                            onClick={handlePrevPrivacy}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            ←
                                        </button>
                                        <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                                            {privacyProduct.name}
                                        </span>
                                        <button
                                            onClick={handleNextPrivacy}
                                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            →
                                        </button>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">Proteção de Privacidade</h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-transparent rounded-full" />
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 overflow-visible">
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${privacyProduct.gradient} mb-4`}>
                                        {privacyProduct.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 leading-relaxed">{privacyProduct.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{privacyProduct.description}</p>
                                </div>

                                {/* Privacy Products Grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    {privacyProducts.map((item, idx) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setSelectedPrivacyIndex(idx)}
                                            className={`p-3 rounded-xl border transition-all duration-300 ${selectedPrivacyIndex === idx
                                                ? 'bg-brand-purple/20 border-brand-purple'
                                                : 'bg-white/5 border-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${item.gradient} mb-2`}>
                                                {item.icon}
                                            </div>
                                            <p className="text-xs text-gray-400 truncate">{item.name}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Right Content: Image */}
                            <div className="order-1 lg:order-2 relative">
                                {/* Background Glow */}
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr ${privacyProduct.gradient} opacity-20 blur-[100px] -z-10`} />

                                <div className="relative rounded-2xl p-[2px] overflow-hidden group">
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" style={{ overflow: 'visible' }}>
                                        <defs>
                                            <linearGradient id="glowGradientPrivacy" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="transparent" />
                                                <stop offset="50%" stopColor="#fff" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                        <rect
                                            x="2"
                                            y="2"
                                            width="calc(100% - 4px)"
                                            height="calc(100% - 4px)"
                                            rx="16"
                                            fill="none"
                                            stroke="url(#glowGradientPrivacy)"
                                            strokeWidth="2"
                                            strokeDasharray="300 3000"
                                            className="animate-border-travel"
                                            filter="url(#glow)"
                                        />
                                    </svg>

                                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={privacyProduct.image}
                                            alt={privacyProduct.title}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-8 -right-8 bg-brand-surface p-4 rounded-xl border border-white/10 shadow-xl z-30 hidden md:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Privacidade</p>
                                            <p className="font-bold text-purple-500">Garantida</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* Services Tab */}
                    {activeTab === 'servicos' && (
                        <motion.div
                            key="servicos"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="py-8"
                        >
                            <div className="text-center mb-12">
                                <div className="inline-flex p-4 rounded-full bg-white/5 mb-6">
                                    <Zap className="w-8 h-8 text-brand-purple" />
                                </div>
                                <p className="text-gray-400 max-w-xl mx-auto">
                                    Além de produtos, oferecemos consultoria técnica, desenvolvimento sob medida e suporte contínuo.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {services.map((service, idx) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-purple/30 transition-all duration-300 group"
                                    >
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">{service.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fidx) => (
                                                <li key={fidx} className="flex items-center gap-2 text-sm text-gray-500">
                                                    <CheckCircle2 className="w-4 h-4 text-brand-purple flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <button onClick={() => setActiveTab('produtos')} className="text-brand-purple hover:text-white transition-colors underline underline-offset-4">
                                    Ver nossos produtos
                                </button>
                            </div>
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
