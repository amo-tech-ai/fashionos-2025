import React from 'react';

const SHOWCASE_IMAGES = [
  {
    id: 'sc1',
    url: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800',
    title: 'Velvet Noir'
  },
  {
    id: 'sc2',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    title: 'Avant Garde'
  },
  {
    id: 'sc3',
    url: 'https://images.unsplash.com/photo-1550614000-4b9519e02d96?auto=format&fit=crop&q=80&w=800',
    title: 'Studio Red'
  },
  {
    id: 'sc4',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    title: 'Portrait 004'
  }
];

export const Showcase: React.FC = () => {
  return (
    <section className="relative py-24 bg-fashion-black text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="text-fashion-gold text-xs tracking-widest uppercase mb-2 block">Featured Imagery</span>
          <h2 className="font-serif text-4xl md:text-5xl">Every Angle. Every Story.</h2>
        </div>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 gap-8 px-6">
        {SHOWCASE_IMAGES.map((img, index) => (
          <div key={img.id} className="snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[3/4] relative group cursor-pointer">
            <img 
              src={img.url} 
              alt="Showcase" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-serif text-2xl italic text-white">{img.title}</p>
              <p className="text-xs uppercase tracking-widest text-fashion-gold mt-2 border-b border-fashion-gold inline-block pb-1">View Collection</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};