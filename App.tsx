import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chat from './components/Chat';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <main className="bg-black min-h-screen text-white selection:bg-brand-purple selection:text-white">
      <Navbar />

      {!isChatOpen && (
        <>
          <Hero onChatOpen={handleChatOpen} />
          <About />
          <Features />
          <CTA />
          <Footer />
        </>
      )}

      <AnimatePresence>
        {isChatOpen && <Chat onClose={handleChatClose} />}
      </AnimatePresence>
    </main>
  );
};

export default App;
