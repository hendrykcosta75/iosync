import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-brand-purple selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;
