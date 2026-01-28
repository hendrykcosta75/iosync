import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';

const LandingPage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Features />
    <CTA />
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <main className="bg-black min-h-screen text-white selection:bg-brand-purple selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/precos" element={<PricingPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

