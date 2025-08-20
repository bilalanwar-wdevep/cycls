import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group bg-indigo-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 hover:bg-indigo-700"
          aria-label="Back to top"
        >
          {/* Arrow Icon */}
          <svg 
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Floating Particles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping delay-150"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-300"></div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
