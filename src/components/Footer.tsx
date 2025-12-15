import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fashion-cream pt-24 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="font-serif text-2xl font-bold tracking-tighter mb-6">F/OS.</div>
            <p className="text-gray-500 max-w-xs text-sm">
              The operating system for the modern fashion house. 
              Elevating creative workflows through intelligence and design.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="font-serif text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-fashion-black">About</a></li>
                <li><a href="#" className="hover:text-fashion-black">Careers</a></li>
                <li><a href="#" className="hover:text-fashion-black">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-fashion-black">Events</a></li>
                <li><a href="#" className="hover:text-fashion-black">Studio</a></li>
                <li><a href="#" className="hover:text-fashion-black">Intelligence</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><a href="#" className="hover:text-fashion-black">Instagram</a></li>
                <li><a href="#" className="hover:text-fashion-black">LinkedIn</a></li>
                <li><a href="#" className="hover:text-fashion-black">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          <p>&copy; 2024 FashionOS Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};