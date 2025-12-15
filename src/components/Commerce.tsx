import React from 'react';
import { Button } from './Button';

export const Commerce: React.FC = () => {
  return (
    <section id="commerce" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
               <img 
                  src="https://images.unsplash.com/photo-1550614000-4b9519e02d96?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-[300px] object-cover" 
                  alt="Fashion Editorial Model" 
               />
               <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-[300px] object-cover mt-12" 
                  alt="High Fashion Product" 
               />
             </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="font-serif text-4xl mb-6">From Creative Assets<br/>to Commerce Outcomes.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Seamlessly push your high-fidelity assets directly to your storefronts. 
              Our integrated pipeline supports Shopify B2B, DTC, and wholesale tagging 
              without leaving the platform.
            </p>
            <ul className="space-y-4 mb-10 font-sans text-sm tracking-wide text-gray-800">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-fashion-gold rounded-full"></span>
                Direct Shopify B2B + DTC Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-fashion-gold rounded-full"></span>
                Automated SKU Tagging & Metadata
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-fashion-gold rounded-full"></span>
                Social Commerce Distribution Plan
              </li>
            </ul>
            <Button>Explore Commerce Features</Button>
          </div>
        </div>
      </div>
    </section>
  );
};