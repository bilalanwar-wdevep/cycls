import React from 'react';

const WhyCycls = ({ onGetStartedClick }) => {
  return (
    <section id="why-cycls" className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - Left Aligned */}
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#091A2E] text-white text-sm font-medium rounded-full mb-6 border border-[#091A2E] shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            The Challenge
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#091A2E] mb-8 leading-tight max-w-4xl">
            The Gap Between a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Brilliant Agent
            </span>{' '}
            and a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Viable Business
            </span>{' '}
            is{' '}
            <span className="text-red-600">Immense.</span>
          </h2>
        </div>

        {/* Problem Description - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Problem Statement */}
          <div className="relative">
            {/* Creative accent line */}
            <div className="absolute -left-6 top-0 w-1 h-full">
              <div className="w-full h-full bg-gradient-to-b from-blue-500 via-blue-600 to-red-500 rounded-full opacity-60"></div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            
            <p className="text-xl md:text-2xl text-[#091A2E]/80 leading-relaxed mb-6 relative z-10">
              You've built a powerful AI agent. But turning it into a real, commercial product is a{' '}
              <span className="font-bold text-[#091A2E]">maze of infrastructure</span>,{' '}
              <span className="font-bold text-[#091A2E]">frontend boilerplate</span>,{' '}
              <span className="font-bold text-[#091A2E]">authentication</span>, and{' '}
              <span className="font-bold text-[#091A2E]">payment integrations</span>.
            </p>
            
            <div className="bg-[#091A2E] text-white p-6 rounded-r-lg shadow-lg relative z-10">
              <p className="text-lg md:text-xl font-semibold">
                This friction kills <span className="text-red-300">speed</span> and{' '}
                <span className="text-red-300">innovation</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Solution Statement */}
          <div className="bg-gradient-to-br from-[#091A2E] to-blue-800 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            {/* Creative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="w-full h-full border-2 border-white/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-2 border-2 border-white/30 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                <svg className="w-10 h-10 text-[#091A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="absolute inset-0 bg-gray-300 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Cycls is the platform designed to close that gap{' '}
                <span className="text-blue-300">instantly</span>.
              </h3>
              <p className="text-gray-200 text-lg">
                Transform your Python code into a scalable, monetizable business with a single decorator.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Problem Representation - Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Infrastructure Complexity */}
          <div className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative">
                <svg className="w-8 h-8 text-white animate-pulse drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#091A2E] mb-3">Infrastructure Maze</h4>
              <p className="text-gray-600 leading-relaxed">Complex deployment, scaling, monitoring, and DevOps setup that takes months to configure properly.</p>
            </div>
          </div>

          {/* Frontend Boilerplate */}
          <div className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative">
                <svg className="w-8 h-8 text-white animate-pulse drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#091A2E] mb-3">Frontend Boilerplate</h4>
              <p className="text-gray-600 leading-relaxed">Repetitive UI components, user experience code, and design systems that slow down development.</p>
            </div>
          </div>

          {/* Authentication & Payments */}
          <div className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#091A2E]/10 to-[#091A2E]/5 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#091A2E] to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative">
                <svg className="w-8 h-8 text-white animate-pulse drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#091A2E] mb-3">Auth & Payments</h4>
              <p className="text-gray-600 leading-relaxed">Complex user management, security, and monetization setup that requires months of integration work.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center relative">
          <div className="inline-flex items-center space-x-4 bg-[#091A2E] text-white px-8 py-4 rounded-full shadow-xl relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/20 animate-pulse"></div>
            <span className="text-lg font-semibold relative z-10">Ready to eliminate the friction?</span>
            <button 
              onClick={onGetStartedClick}
              className="bg-white text-[#091A2E] px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors relative z-10"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCycls;
