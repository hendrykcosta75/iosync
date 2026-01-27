import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Server, Box, Shield, ChevronRight, Minus, ShoppingCart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// --- Type Definitions ---

type PaymentType = 'monthly' | 'one-time';

interface PricingItem {
    id: string;
    name: string;
    price: number;
    type: PaymentType;
    category: 'servicos' | 'produtos' | 'privacidade';
}

interface CartItem {
    quantity: number;
}

// --- Data Configuration ---

const pricingItems: PricingItem[] = [
    // Serviços
    { id: 'sec-analysis', name: 'Análise de Segurança', price: 200, type: 'monthly', category: 'servicos' },
    { id: 'tour-engagement', name: 'Engajamento Turístico (IA)', price: 200, type: 'monthly', category: 'servicos' },
    { id: 'poli-presence', name: 'Presença Política Digital (IA)', price: 200, type: 'monthly', category: 'servicos' },

    // Produtos (All 1100/monthly)
    { id: 'sys-planning', name: 'Sistema de Planejamento', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'sys-courses', name: 'Sistema de Cursos', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'sys-links', name: 'Sistema de Links', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'sys-jobs', name: 'Sistema de Empregos', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'sys-citizen', name: 'Sistema de Participação Cidadã', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'sys-tourism', name: 'Sistema de Turismo', price: 1100, type: 'monthly', category: 'produtos' },
    { id: 'virt-attendant', name: 'Atendente Virtual Municipal', price: 1100, type: 'monthly', category: 'produtos' },

    // Privacidade
    { id: 'vpn', name: 'VPN privada e no-logs', price: 0, type: 'monthly', category: 'privacidade' },
    { id: 'cloud', name: 'Cloud Descentralizado', price: 300, type: 'monthly', category: 'privacidade' },
    { id: 'workstation', name: 'Estação de Trabalho', price: 270, type: 'one-time', category: 'privacidade' },
    { id: 'data-blocker', name: 'Data Blockers', price: 20, type: 'one-time', category: 'privacidade' },
    { id: 'rf-detector', name: 'Detector RF', price: 500, type: 'one-time', category: 'privacidade' },
    { id: 'voip', name: 'Números Virtuais e Rede VoiP', price: 200, type: 'monthly', category: 'privacidade' },
    { id: 'gateway', name: 'Gateway Pagamento e SWAP', price: 50, type: 'monthly', category: 'privacidade' },
    { id: 'lora', name: 'Rede LoRA Off-grid', price: 2000, type: 'monthly', category: 'privacidade' },
    { id: 'mobile-priv', name: 'Dispositivo Móvel Privado', price: 6000, type: 'one-time', category: 'privacidade' },
    { id: 'faraday', name: 'Capas de Faraday', price: 49.90, type: 'one-time', category: 'privacidade' },
];

const categories = [
    { id: 'servicos', label: 'Serviços', icon: Server, color: 'text-blue-400', bg: 'bg-blue-400/20', border: 'border-blue-400/50' },
    { id: 'produtos', label: 'Produtos', icon: Box, color: 'text-purple-400', bg: 'bg-purple-400/20', border: 'border-purple-400/50' },
    { id: 'privacidade', label: 'Privacidade', icon: Shield, color: 'text-green-400', bg: 'bg-green-400/20', border: 'border-green-400/50' },
] as const;

// --- Main Component ---

const PricingPage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [cart, setCart] = useState<Record<string, number>>({});

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setActiveCategory(null); // Close satellites when closing main menu
    };

    const handleCategoryClick = (catId: string) => {
        setActiveCategory(activeCategory === catId ? null : catId);
    };

    const updateQuantity = (itemId: string, delta: number) => {
        setCart(prev => {
            const current = prev[itemId] || 0;
            const next = Math.max(0, current + delta);
            const newCart = { ...prev, [itemId]: next };
            if (next === 0) delete newCart[itemId];
            return newCart;
        });
    };

    const totals = useMemo(() => {
        let monthly = 0;
        let oneTime = 0;

        Object.entries(cart).forEach(([id, quantity]) => {
            const item = pricingItems.find(i => i.id === id);
            if (item) {
                if (item.type === 'monthly') monthly += item.price * quantity;
                else oneTime += item.price * quantity;
            }
        });

        return { monthly, oneTime };
    }, [cart]);

    const activeItems = pricingItems.filter(item => item.category === activeCategory);

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-purple selection:text-white overflow-hidden relative">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <main className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center pt-20">

                {/* Central Node Structure */}
                <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        {isMenuOpen && categories.map((cat, index) => {
                            // Dynamic calculation of satellite positions
                            const angle = (index * (360 / categories.length)) - 90; // Start top (-90 deg)
                            const rad = angle * (Math.PI / 180);
                            const radius = 180; // Distance from center
                            const x2 = 50 + (Math.cos(rad) * (radius / 5)); // Approximate percentage
                            const y2 = 50 + (Math.sin(rad) * (radius / 5)); // Approximate percentage

                            // Hardcoded adjusted positions for cleaner layout in 3-item setup (Triangle)
                            // Top Center, Bottom Right, Bottom Left
                            const positions = [
                                { x: '50%', y: '25%' }, // Top
                                { x: '75%', y: '65%' }, // Bottom Right
                                { x: '25%', y: '65%' }  // Bottom Left
                            ];
                            const pos = positions[index];

                            return (
                                <motion.line
                                    key={cat.id}
                                    x1="50%"
                                    y1="50%"
                                    x2={pos.x}
                                    y2={pos.y}
                                    stroke="currentColor"
                                    className="text-gray-700"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.5 }}
                                    exit={{ pathLength: 0, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            );
                        })}
                    </svg>

                    {/* Central Hub - Total Price */}
                    <motion.div
                        className="relative z-20 flex flex-col items-center"
                        animate={{ scale: isMenuOpen ? 1 : 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`w-48 h-48 rounded-3xl bg-black border border-white/10 flex flex-col items-center justify-center relative shadow-2xl backdrop-blur-md group cursor-default transition-all duration-300 ${isMenuOpen ? 'border-brand-purple/50 shadow-brand-purple/20' : ''}`}>
                            <div className="absolute inset-0 bg-brand-purple/5 rounded-3xl animate-pulse" />

                            <p className="text-gray-400 text-sm uppercase tracking-wider font-medium mb-2">Total Estimado</p>

                            <div className="text-center">
                                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    R$ {totals.monthly.toLocaleString('pt-BR')}
                                </span>
                                <span className="text-xs text-brand-purple block font-medium">/mês</span>
                            </div>

                            {totals.oneTime > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-3 text-center border-t border-white/10 pt-2 w-3/4"
                                >
                                    <span className="text-sm font-semibold text-gray-300">
                                        + R$ {totals.oneTime.toLocaleString('pt-BR')}
                                    </span>
                                    <span className="text-[10px] text-gray-500 block">único</span>
                                </motion.div>
                            )}
                        </div>

                        {/* Toggle Button */}
                        <button
                            onClick={toggleMenu}
                            className={`mt-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 z-30 ${isMenuOpen ? 'bg-red-500/20 text-red-400 border border-red-500/50 rotate-45' : 'bg-white/10 text-white border border-white/20 hover:bg-brand-purple hover:text-white hover:border-brand-purple'}`}
                        >
                            <Plus className="w-6 h-6" />
                        </button>
                    </motion.div>

                    {/* Satellite Nodes (Categories) */}
                    <AnimatePresence>
                        {isMenuOpen && categories.map((cat, index) => {
                            const positions = [
                                { top: '15%', left: '50%', x: '-50%', y: '-50%', originX: 0.5, originY: 1 }, // Top (Moved down to avoid navbar overlap)
                                { top: '70%', left: '80%', x: '-50%', y: '-50%', originX: 0, originY: 0 }, // Bottom Right
                                { top: '70%', left: '20%', x: '-50%', y: '-50%', originX: 1, originY: 0 }  // Bottom Left
                            ];
                            const pos = positions[index];

                            return (
                                <motion.button
                                    key={cat.id}
                                    initial={{ opacity: 0, scale: 0, x: pos.x, y: pos.y }}
                                    animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
                                    exit={{ opacity: 0, scale: 0, x: pos.x, y: pos.y }}
                                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                    className={`absolute flex flex-col items-center gap-3 group z-30 cursor-pointer`}
                                    style={{ top: pos.top, left: pos.left }}
                                    onClick={() => handleCategoryClick(cat.id)}
                                >
                                    <div className={`w-20 h-20 rounded-2xl ${cat.bg} border ${cat.border} backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-lg ${activeCategory === cat.id ? 'ring-2 ring-white scale-110' : 'group-hover:scale-110'}`}>
                                        <cat.icon className={`w-8 h-8 ${cat.color}`} />
                                    </div>
                                    <span className={`text-sm font-medium tracking-wide bg-black/50 px-3 py-1 rounded-full border border-white/10 ${activeCategory === cat.id ? 'text-white border-white/30' : 'text-gray-400'}`}>
                                        {cat.label}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </main>

            {/* Side Panel / Item Selector - Moved outside main for correct z-indexing */}
            <AnimatePresence>
                {activeCategory && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed right-0 top-0 bottom-0 w-full md:w-[450px] bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 p-6 md:p-8 pt-28 overflow-y-auto z-[60] shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">
                                    {categories.find(c => c.id === activeCategory)?.label}
                                </h2>
                                <p className="text-gray-400 text-sm">Selecione os itens desejados</p>
                            </div>
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group"
                            >
                                <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {categories.find(c => c.id === activeCategory) && activeItems.map((item) => {
                                const qty = cart[item.id] || 0;
                                const isSelected = qty > 0;

                                return (
                                    <div
                                        key={item.id}
                                        className={`p-4 rounded-xl border transition-all duration-300 ${isSelected ? 'bg-white/5 border-brand-purple/50' : 'bg-transparent border-white/10 hover:border-white/20'}`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                                    <span>
                                                        {item.price === 0 ? 'Gratuito' : `R$ ${item.price.toLocaleString('pt-BR')}`}
                                                    </span>
                                                    <div className="w-1 h-1 rounded-full bg-gray-600" />
                                                    <span className="uppercase text-[10px] tracking-wider border border-white/10 px-1.5 rounded">
                                                        {item.type === 'monthly' ? 'Mensal' : 'Único'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1 border border-white/5">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className={`p-1.5 rounded-md transition-colors ${qty > 0 ? 'hover:bg-red-500/20 hover:text-red-400 text-gray-400' : 'text-gray-700 cursor-not-allowed'}`}
                                                    disabled={qty === 0}
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-6 text-center font-mono font-medium">{qty}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1.5 rounded-md hover:bg-green-500/20 hover:text-green-400 text-gray-400 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                                <span>Itens nesta categoria:</span>
                                <span className="text-white font-medium">
                                    {activeItems.reduce((acc, item) => acc + (cart[item.id] || 0), 0)}
                                </span>
                            </div>
                            <button
                                onClick={() => setActiveCategory(null)}
                                className="w-full py-4 bg-brand-purple hover:bg-purple-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                            >
                                Confirmar Seleção <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PricingPage;
