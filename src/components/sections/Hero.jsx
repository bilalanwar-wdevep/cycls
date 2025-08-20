import React from 'react';
import ai from '../../assets/images/cycls-agent.png';

const Hero = ({ onGetStartedClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ai} 
          alt="AI Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Transparent Overlay with Get Started Button Color */}
      <div className="absolute inset-0 bg-[#091A2E]/80"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* Main Content Container */}
          <div className="mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-8 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              AI Platform • Open Source • Enterprise Ready
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Go from AI Agent to{' '}
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  AI Business
                </span>
              </span>
              <span className="text-yellow-300">
                Instantly.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Cycls is the definitive platform for commercial AI agents. Our{' '}
              <span className="font-semibold text-white">opensource framework</span> and{' '}
              <span className="font-semibold text-white">managed cloud</span> transform your Python code into a scalable, monetizable business with a single decorator.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={onGetStartedClick}
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              >
                Start Building for Free
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl border-2 border-white/50 hover:border-white transition-all duration-300 backdrop-blur-sm">
                View Documentation →
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free forever
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Open source
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
