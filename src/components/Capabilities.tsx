import React from 'react';
import { CAPABILITIES } from '../constants';

export const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-fashion-cream text-fashion-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id} className="group cursor-pointer">
              <div className="mb-6 inline-block p-4 rounded-full bg-white border border-gray-200 group-hover:border-fashion-gold transition-colors duration-300">
                <cap.icon className="w-6 h-6 text-fashion-black group-hover:text-fashion-gold transition-colors" />
              </div>
              <h3 className="font-serif text-xl mb-3">{cap.title}</h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed group-hover:text-fashion-black transition-colors">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};