import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Showcase } from './components/Showcase';
import { Services } from './components/Services';
import { EventSystem } from './components/EventSystem';
import { Commerce } from './components/Commerce';
import { AIFeatures } from './components/AIFeatures';
import { Footer } from './components/Footer';

const HomePage = () => (
  <main className="bg-fashion-cream w-full overflow-x-hidden">
    <Navbar />
    <Hero />
    <Capabilities />
    <Showcase />
    <Services />
    <EventSystem />
    <Commerce />
    <AIFeatures />
    <Footer />
  </main>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div className="h-screen flex items-center justify-center font-serif text-2xl">404 - Page Not Found</div>} />
    </Routes>
  );
};

export default App;