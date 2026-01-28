import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Shield, Phone, Copy, Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage: React.FC = () => {
    const [copied, setCopied] = React.useState<string | null>(null);

    const contactMethods = [
        {
            name: 'Email',
            value: 'contato@iosync.com.br',
            icon: <Mail className="w-6 h-6" />,
            link: 'mailto:contato@iosync.com.br',
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Envie um email para nossa equipe'
        },
        {
            name: 'WhatsApp',
            value: '+55 82 9676-0775',
            icon: <Phone className="w-6 h-6" />,
            link: 'https://wa.me/558296760775',
            gradient: 'from-green-500 to-emerald-500',
            description: 'Atendimento via WhatsApp'
        },
        {
            name: 'Session',
            value: '05d038e1ee22f023ee74b0482720aedd4f2d98bb7cd08fd52b497e55f73d0fe87a',
            displayValue: '05d038e1ee22f0...d0fe87a',
            icon: <Shield className="w-6 h-6" />,
            link: null,
            gradient: 'from-purple-500 to-violet-500',
            copyable: true,
            description: 'Mensagens criptografadas e anônimas'
        },
        {
            name: 'SimpleXChat',
            value: 'Conectar via SimpleX',
            icon: <MessageSquare className="w-6 h-6" />,
            link: 'https://smp18.simplex.im/a#FgeIRyabsfUGUmJqqLdzymaI6lintYP1GeyjFaWUTd4',
            gradient: 'from-pink-500 to-rose-500',
            description: 'Chat privado e descentralizado'
        },
        {
            name: 'Telegram',
            value: '@iosync1',
            icon: <Send className="w-6 h-6" />,
            link: 'https://t.me/iosync1',
            gradient: 'from-sky-500 to-blue-500',
            description: 'Contato rápido via Telegram'
        }
    ];

    const copyToClipboard = async (text: string, name: string) => {
        await navigator.clipboard.writeText(text);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
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
                            Fale Conosco
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                    >
                        Entre em <span className="text-brand-purple">Contato</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Escolha o canal de comunicação que preferir. Estamos prontos para ajudar você a transformar suas ideias em realidade.
                    </motion.p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {contactMethods.map((method, idx) => (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`
                p-6 rounded-2xl bg-white/5 border border-white/10 
                hover:border-brand-purple/30 transition-all duration-300 
                group relative overflow-hidden
                ${method.link ? 'cursor-pointer' : method.copyable ? '' : 'cursor-default'}
              `}
                            onClick={() => {
                                if (method.link) {
                                    window.open(method.link, '_blank');
                                }
                            }}
                        >
                            {/* Background Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {method.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-purple transition-colors">
                                    {method.name}
                                </h3>

                                <p className="text-sm text-gray-500 mb-3">
                                    {method.description}
                                </p>

                                <div className="flex items-center gap-2">
                                    <p className="text-gray-400 text-sm font-mono truncate flex-1" title={method.value}>
                                        {method.displayValue || method.value}
                                    </p>

                                    {method.copyable && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                copyToClipboard(method.value, method.name);
                                            }}
                                            className="p-2 rounded-lg bg-white/10 hover:bg-brand-purple/20 transition-colors"
                                            title="Copiar"
                                        >
                                            {copied === method.name ? (
                                                <Check className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-gray-400" />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {method.link && (
                                    <p className="text-xs text-brand-purple mt-3">Clique para abrir →</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-transparent border border-brand-purple/20 max-w-2xl mx-auto">
                        <Shield className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Privacidade Garantida</h3>
                        <p className="text-gray-400 text-sm">
                            Oferecemos múltiplos canais de comunicação, incluindo opções de mensagens criptografadas
                            e anônimas como Session e SimpleXChat para máxima privacidade.
                        </p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;
