import React from 'react';
import Chat from '../interactive/Chat';

const FinalCTA = ({ isChatOpen, setIsChatOpen, onGetStartedClick }) => {
  return (
    <section id="final-cta" className="w-full py-32 relative overflow-hidden bg-gradient-to-br from-[#091A2E] via-blue-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Glowing Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full uppercase tracking-wider border border-white/20 shadow-2xl">
            🚀 Final Call to Action
          </div>
          
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              Ready to Launch Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                AI Business?
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Join thousands of developers who've already transformed their AI ideas into profitable businesses. 
              Start building, deploying, and monetizing in minutes, not months.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button 
              onClick={onGetStartedClick}
              className="group relative inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-6 rounded-3xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Get Started for Free</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Animated Background - Fixed positioning */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Glow Effect - Fixed positioning */}
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <p className="text-white/70">Active Developers</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">$2M+</div>
              <p className="text-white/70">Revenue Generated</p>
            </div>
            
            <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <p className="text-white/70">Uptime Guarantee</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="pt-8">
            <p className="text-white/60 text-lg">
              No credit card required • Setup in under 5 minutes • Free forever tier available
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer group"
      >
        <svg className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Chat Component */}
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
};

export default FinalCTA;
