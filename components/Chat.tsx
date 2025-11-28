import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
    id: number;
    id_usuario: number;
    type: 'human' | 'ia';
    content: string;
    created_at: string;
}

interface ChatProps {
    onClose: () => void;
}

const API_BASE_URL = 'https://apiseplag.smcmais.com.br';
const WEBHOOK_URL = 'https://n8n.smcmais.com.br/webhook/444b59b6-ef47-48fe-8fc5-391cfe8fa51d';
const API_KEY = 'PRFTuAIM#%4234';
const USER_ID = '3';

const Chat: React.FC<ChatProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingMessages, setIsFetchingMessages] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const suggestedQuestions = [
        'Quais os principais projetos da iosync?',
        'Como funciona o processo de desenvolvimento?',
        'Quais tecnologias vocês utilizam?'
    ];

    // Fetch messages on mount
    useEffect(() => {
        fetchMessages();
    }, []);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Cleanup polling on unmount
    useEffect(() => {
        return () => {
            if (pollingIntervalRef.current) {
                clearInterval(pollingIntervalRef.current);
            }
        };
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fetchMessages = async () => {
        try {
            setIsFetchingMessages(true);
            const response = await fetch(`${API_BASE_URL}/plaguinha/messages/${USER_ID}`, {
                headers: {
                    'X-Api-Key': API_KEY,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setIsFetchingMessages(false);
        }
    };

    const startPolling = (expectedMinimumMessages: number) => {
        // Clear any existing polling interval
        if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
        }

        pollingIntervalRef.current = setInterval(async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/plaguinha/messages/${USER_ID}`, {
                    headers: {
                        'X-Api-Key': API_KEY,
                    },
                });

                if (response.ok) {
                    const data = await response.json();

                    // Check if we have a new AI message
                    if (data.length > expectedMinimumMessages) {
                        const lastMessage = data[data.length - 1];

                        // If the last message is from IA, we got the response
                        if (lastMessage.type === 'ia') {
                            setMessages(data);
                            setIsLoading(false);

                            // Stop polling
                            if (pollingIntervalRef.current) {
                                clearInterval(pollingIntervalRef.current);
                                pollingIntervalRef.current = null;
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Error polling messages:', error);
            }
        }, 2000); // Poll every 2 seconds
    };

    const sendMessage = async (content: string) => {
        if (!content.trim()) return;

        const currentMessageCount = messages.length;

        // Add user message immediately
        const userMessage: Message = {
            id: Date.now(),
            id_usuario: parseInt(USER_ID),
            type: 'human',
            content: content.trim(),
            created_at: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id_usuario: USER_ID,
                    content: content.trim(),
                }),
            });

            if (response.ok) {
                // Start polling for new AI message
                startPolling(currentMessageCount + 1); // +1 for the user message we just added
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    const handleSuggestedQuestion = (question: string) => {
        sendMessage(question);
    };

    const clearChat = async () => {
        try {
            // Call DELETE endpoint to clear messages on server
            const response = await fetch(`${API_BASE_URL}/plaguinha/messages/${USER_ID}`, {
                method: 'DELETE',
                headers: {
                    'X-Api-Key': API_KEY,
                },
            });

            if (response.ok) {
                // Clear local messages
                setMessages([]);
            }
        } catch (error) {
            console.error('Error clearing chat:', error);
            // Clear local messages even if API call fails
            setMessages([]);
        }

        // Stop any ongoing polling
        if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
        }
        setIsLoading(false);
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl h-[80vh] bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                            <img
                                src="/assets/iosyncAI.png"
                                alt="iosync AI"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">Miau Sync</h2>
                            <p className="text-xs text-gray-400">Assistente virtual</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={clearChat}
                            className="px-4 py-2 text-xs font-semibold text-white bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-full transition-colors"
                        >
                            LIMPAR CHAT
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                    {isFetchingMessages ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-brand-purple border-t-transparent" />
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-16 h-16 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                                <span className="text-3xl">👋</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Olá! Sou o assistente virtual da iosync
                            </h3>
                            <p className="text-gray-400 max-w-md">
                                Posso te auxiliar com informações sobre nossos projetos, tecnologias e serviços. Como posso ajudá-lo hoje?
                            </p>
                        </div>
                    ) : (
                        <>
                            {messages.map((message, index) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`flex ${message.type === 'human' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${message.type === 'human'
                                                ? 'bg-brand-purple text-white'
                                                : 'bg-white/5 text-white border border-white/10'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                        <p
                                            className={`text-xs mt-1 ${message.type === 'human' ? 'text-purple-200' : 'text-gray-500'
                                                }`}
                                        >
                                            {formatTime(message.created_at)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-2">
                                        <span className="text-sm text-gray-400">IA digitando</span>
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </>
                    )}
                </div>

                {/* Suggested Questions */}
                {messages.length === 0 && !isFetchingMessages && (
                    <div className="px-6 pb-4">
                        <div className="flex flex-wrap gap-2">
                            {suggestedQuestions.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSuggestedQuestion(question)}
                                    className="px-4 py-2 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input */}
                <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-white/10 bg-black/50 backdrop-blur-sm">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Digite sua pergunta..."
                            disabled={isLoading}
                            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="p-3 bg-brand-purple hover:bg-purple-600 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-full transition-colors"
                        >
                            <Send className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Chat;
