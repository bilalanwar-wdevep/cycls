import React, { useState } from 'react';
import CyclsLogo from '../../assets/images/cycls-logo.png';

const Header = ({ onGetStartedClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-12xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={CyclsLogo} alt="Cycls Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8  ">
            <a 
              onClick={() => scrollToSection('hero')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('why-cycls')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Why Cycls
            </a>
            <a 
              onClick={() => scrollToSection('how-it-works')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              How It Works
            </a>
            <a 
              onClick={() => scrollToSection('for-developers')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Developers
            </a>
            <a 
              onClick={() => scrollToSection('for-business')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Business
            </a>
            <a 
              onClick={() => scrollToSection('contact-form')}
              className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={onGetStartedClick}
              className="bg-white text-[#091A2E] px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection('hero')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('why-cycls')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Why Cycls
              </a>
              <a 
                onClick={() => scrollToSection('how-it-works')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                How It Works
              </a>
              <a 
                onClick={() => scrollToSection('for-developers')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Developers
              </a>
              <a 
                onClick={() => scrollToSection('for-business')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Business
              </a>
              <a 
                onClick={() => scrollToSection('contact-form')}
                className="relative text-white cursor-pointer px-3 py-2 rounded-lg transition-all duration-500 ease-out hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
