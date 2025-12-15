import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-gray-100' : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="font-serif text-2xl font-bold tracking-tight text-fashion-black">
          FashionOS.
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
               <a 
                href={item.href}
                className="text-xs font-medium tracking-widest uppercase text-gray-500 hover:text-fashion-black transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.label === 'Services' && <ChevronDown className="w-3 h-3" />}
              </a>
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-xs font-bold uppercase tracking-widest text-fashion-black hover:text-gray-600 transition-colors px-4">
            Log In
          </button>
          <Button variant="primary" className="bg-black text-white px-6 py-2.5 text-xs h-auto rounded-none hover:bg-gray-800 border-none">
            Sign Up
          </Button>
          <Button variant="primary" className="bg-black text-white px-6 py-2.5 text-xs h-auto rounded-none hover:bg-gray-800 border-none">
            Book a Shoot
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-fashion-black" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 lg:hidden flex flex-col gap-6 animate-fade-in shadow-xl h-screen">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-fashion-black text-lg font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="h-px bg-gray-100 w-full my-2"></div>
          <div className="flex flex-col gap-4">
            <button className="text-left font-sans text-sm font-bold uppercase tracking-widest">Log In</button>
            <Button className="w-full">Sign Up</Button>
            <Button className="w-full">Book a Shoot</Button>
          </div>
        </div>
      )}
    </nav>
  );
};