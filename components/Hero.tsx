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
          <div className="flex flex-col items-start z-10 order-2 lg:order-1">
             <span className="text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mb-6 font-semibold animate-slide-up">
               FashionOS Studio
             </span>
             <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl leading-[1.1] text-fashion-black mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
               Exceptional <br /> fashion imagery. <br/>
               <span className="bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent italic pr-2">
                 Every time.
               </span>
             </h1>
             <p className="font-sans text-lg text-gray-600 leading-relaxed mb-8 max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
               Runway, campaigns, ecommerce, and editorial — we help fashion brands look as premium as they feel.
             </p>

             <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
               <Button className="bg-fashion-black text-white px-8 py-4 rounded-none hover:bg-gray-800 text-xs border-none tracking-[0.15em]">
                 BOOK A DISCOVERY CALL
               </Button>
               <Button variant="outline" className="px-8 py-4 border-gray-200 text-gray-900 hover:border-fashion-black text-xs tracking-[0.15em]">
                 EXPLORE DIRECTORY
               </Button>
             </div>

             <ul className="space-y-3 text-sm text-gray-500 font-sans animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {[
                  "Runway & backstage coverage",
                  "Ecommerce & lookbooks",
                  "Campaigns, video & social content"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                     {item}
                  </li>
                ))}
             </ul>
          </div>

          {/* Right Visuals - Collage with Parallax */}
          <div className="relative h-[650px] w-full hidden lg:block order-1 lg:order-2 perspective-1000">
             
             {/* Layer 1: Background (Deepest) - Moves down to create distance */}
             <div 
                className="absolute top-[12%] left-0 w-[55%] h-[65%] z-0 shadow-lg will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * 0.12}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                <img 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                   alt="B&W Portrait"
                   className="w-full h-full object-cover grayscale opacity-90"
                />
             </div>

             {/* Layer 2: Main Hero (Middle) - Moves slightly down/stable */}
             <div 
                className="absolute top-0 right-4 w-[60%] h-[80%] z-10 shadow-2xl overflow-hidden bg-gray-100 will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * 0.04}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                 <img 
                   src="https://images.unsplash.com/photo-1552698621-e8d195f27170?auto=format&fit=crop&q=80&w=800"
                   alt="Editorial Fashion"
                   className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105 cursor-pointer"
                />
             </div>

             {/* Layer 3: Foreground Detail (Front) - Moves UP to appear closer */}
             <div 
                className="absolute bottom-[8%] left-[10%] w-[42%] h-[45%] z-20 border-[12px] border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-white will-change-transform"
                style={{ 
                  transform: `translateY(${scrollY * -0.08}px)`,
                  transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
                }}
             >
                 <img 
                   src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
                   alt="Lifestyle Detail"
                   className="w-full h-full object-cover"
                />
             </div>
             
          </div>

        </div>
      </div>
    </section>
  );
};
