import React from 'react';
import { SERVICE_HIGHLIGHTS } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="font-serif text-4xl mb-4">Creative Services</h2>
          <p className="text-gray-500 font-sans">High-fidelity imagery optimized for global fashion calendars.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_HIGHLIGHTS.map((service) => (
            <div key={service.id} className="group relative overflow-hidden aspect-[3/4] cursor-pointer bg-gray-100">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-widest text-fashion-gold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {service.category}
                </span>
                <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                <span className="text-xs uppercase tracking-widest border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline">View All Services</Button>
        </div>
      </div>
    </section>
  );
};