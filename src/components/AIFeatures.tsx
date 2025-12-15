import React from 'react';
import { AI_FEATURES } from '../constants';
import { Button } from './Button';

export const AIFeatures: React.FC = () => {
  return (
    <section id="ai" className="py-24 bg-fashion-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl mb-4">Intelligence Built In</h2>
          <p className="text-gray-400">Powered by Gemini models to accelerate workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {AI_FEATURES.map((feat) => (
            <div key={feat.id} className="text-center p-6 border border-gray-800 hover:border-fashion-gold transition-colors duration-300">
              <div className="mb-6 flex justify-center">
                <feat.icon className="w-8 h-8 text-fashion-gold" />
              </div>
              <h3 className="font-serif text-lg mb-3">{feat.title}</h3>
              <p className="text-sm text-gray-500">{feat.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
           <Button variant="outline" className="text-white border-white hover:border-fashion-gold">
             See AI in Action
           </Button>
        </div>
      </div>
    </section>
  );
};