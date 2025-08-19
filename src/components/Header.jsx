import React, { useState } from 'react';
import CyclsLogo from '../assets/images/cycls-logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={CyclsLogo} alt="Cycls" className="h-8 sm:h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('hero')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('the-problem')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              Problem
            </a>
            <a 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              How It Works
            </a>
            <a 
              onClick={() => scrollToSection('for-developers')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              Developers
            </a>
            <a 
              onClick={() => scrollToSection('for-business')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              Business
            </a>
            <a 
              onClick={() => scrollToSection('contact-form')}
              className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-white text-[#091A2E] px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
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
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Home
              </a>
              <a 
                onClick={() => scrollToSection('the-problem')}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Problem
              </a>
              <a 
                onClick={() => scrollToSection('how-it-works')}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
              >
                How It Works
              </a>
              <a 
                onClick={() => scrollToSection('for-developers')}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Developers
              </a>
              <a 
                onClick={() => scrollToSection('for-business')}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
              >
                Business
              </a>
              <a 
                onClick={() => scrollToSection('contact-form')}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors duration-200 py-2"
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
