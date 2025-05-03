
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-purple-dark">
            UGCPro
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-dark hover:bg-purple-light hover:text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-gray-dark hover:text-purple transition-colors">
            Benefits
          </a>
          <a href="#packages" className="text-gray-dark hover:text-purple transition-colors">
            Packages
          </a>
          <a href="#showcase" className="text-gray-dark hover:text-purple transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-gray-dark hover:text-purple transition-colors">
            About
          </a>
          <a href="#faq" className="text-gray-dark hover:text-purple transition-colors">
            FAQ
          </a>
          <a href="#order" className="btn-primary">
            Order Now
          </a>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={cn(
        "md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
      )}>
        <div className="flex flex-col space-y-4 px-4">
          <a href="#benefits" className="text-gray-dark hover:text-purple py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Benefits
          </a>
          <a href="#packages" className="text-gray-dark hover:text-purple py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Packages
          </a>
          <a href="#showcase" className="text-gray-dark hover:text-purple py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#about" className="text-gray-dark hover:text-purple py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#faq" className="text-gray-dark hover:text-purple py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <a href="#order" className="btn-primary text-center my-2" onClick={() => setMobileMenuOpen(false)}>
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
