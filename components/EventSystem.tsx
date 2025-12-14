import React from 'react';
import { Button } from './Button';
import { Calendar, Users, MapPin, Bell } from 'lucide-react';

export const EventSystem: React.FC = () => {
  return (
    <section className="py-24 bg-fashion-cream border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-fashion-gold text-xs tracking-widest uppercase mb-4 block">Command Center</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Orchestrate Fashion Events with Precision.
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: Calendar, text: "AI-Powered Task Planning & Scheduling" },
                { icon: Bell, text: "Real-time Timeline & Risk Alerts" },
                { icon: Users, text: "Sponsor & VIP CRM Integration" },
                { icon: MapPin, text: "Global Venue Discovery & Booking" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-fashion-black" />
                  </div>
                  <span className="font-sans text-lg text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            <Button>Plan Your Event</Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-sm overflow-hidden shadow-2xl bg-white aspect-[4/3]">
              {/* Abstract UI representation */}
              <div className="absolute inset-0 bg-fashion-black p-8 flex flex-col">
                 <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                    <div className="h-3 w-24 bg-gray-700 rounded"></div>
                    <div className="flex gap-2">
                       <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                       <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                       <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                 </div>
                 <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gray-900 rounded border border-gray-800 p-4">
                        <div className="h-2 w-12 bg-gray-700 mb-4 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-8 w-full bg-gray-800 rounded"></div>
                            <div className="h-8 w-full bg-gray-800 rounded"></div>
                            <div className="h-8 w-full bg-gray-800 rounded"></div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-gray-900 rounded border border-gray-800 p-4 flex items-center justify-center">
                         <div className="text-center">
                            <div className="h-20 w-20 rounded-full border-4 border-fashion-gold mx-auto mb-4 flex items-center justify-center text-white font-serif text-xl">
                                85%
                            </div>
                            <div className="text-gray-500 text-xs uppercase tracking-widest">Event Readiness</div>
                         </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};