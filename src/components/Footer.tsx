
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-machgari-700 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MachGari</h3>
            <p className="text-white/80">
              Leading provider of premium seafood and sustainable fishing solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#market-dashboard" className="text-white/80 hover:text-white transition-colors">Market Data</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Wholesale Supply</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Aquaculture Solutions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability Consulting</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Fishing Fleet Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-white/80 not-italic">
              <p>123 Harbor Way</p>
              <p>Seaside, CA 94955</p>
              <p className="mt-2">contact@machgari.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© {currentYear} MachGari Fishing & Aquaculture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
