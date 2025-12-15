import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] border border-gray-100 rounded-full z-0 opacity-60 pointer-events-none"
        style={{ 
          transform: `translate(30%, -30%) translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s linear'
        }}
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start z-10 order-2 lg:order-1 pt-8">
             <span className="text-xs font-sans tracking-[0.2em] text-gray-500 uppercase mb-6 font-semibold animate-slide-up">
               FashionOS
             </span>
             <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-fashion-black mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
               The Operating <br />
               System for <br/>
               <span className="bg-gradient-to-r from-fuchsia-700 to-pink-500 bg-clip-text text-transparent">
                 Fashion <br />
                 Intelligence
               </span>
             </h1>
             <p className="font-sans text-lg text-gray-600 leading-relaxed mb-10 max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
               Runway to Retail • Creative to Commerce • AI-Driven features
             </p>

             <div className="flex flex-wrap gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
               <Button className="bg-fashion-black text-white px-10 py-4 rounded-none hover:bg-gray-800 text-xs border-none tracking-[0.15em]">
                 SIGN UP
               </Button>
             </div>

             <div className="border-t border-gray-200 pt-8 mt-4 animate-slide-up w-full max-w-md" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-serif text-xl text-fashion-black mb-2 font-bold">Events & Runway</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  Seamless orchestration for global fashion weeks and private showings.
                </p>
             </div>
          </div>

          {/* Right Visuals - 3-Image Premium Collage */}
          <div className="relative h-[700px] w-full hidden lg:block order-1 lg:order-2 perspective-1000">
             
             {/* Image 1: The Anchor (Background Right) - Tall Portrait */}
             <div 
                className="absolute top-0 right-0 w-[55%] h-[80%] z-0 shadow-xl overflow-hidden bg-gray-100 will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                 <img 
                   src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800"
                   alt="Editorial Portrait"
                   className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
             </div>

             {/* Image 2: The Context (Bottom Left) - Runway/Movement */}
             <div 
                className="absolute bottom-12 left-8 w-[50%] h-[45%] z-10 border-[8px] border-white shadow-2xl overflow-hidden bg-gray-100 will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * -0.04}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                 <img 
                   src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
                   alt="Runway Motion"
                   className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
             </div>

             {/* Image 3: The Detail (Floating Overlap) - High Contrast */}
             <div 
                className="absolute top-[25%] left-[15%] w-[35%] aspect-[3/4] z-20 border-[8px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-gray-900 overflow-hidden will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * -0.08}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                 <img 
                   src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=800"
                   alt="High Fashion Detail"
                   className="w-full h-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-110"
                />
             </div>
             
          </div>

        </div>
      </div>
    </section>
  );
};