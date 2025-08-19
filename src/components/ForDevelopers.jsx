import React from 'react';

const ForDevelopers = () => {
  return (
    <section id="for-developers" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full uppercase tracking-wider shadow-lg">
                For Developers
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#091A2E] leading-tight">
                A Zero-Config{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Dream for Builders.
                </span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Cycls is built by developers, for developers. Our open-source core gives you 
                ultimate flexibility, while our zero-config philosophy removes all the boilerplate.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                The Python SDK is all you need to learn. With perfect dev/prod parity, what you 
                build locally is exactly what scales globally on our serverless infrastructure.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#091A2E] to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Read the Docs</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Code Block */}
            <div className="bg-[#091A2E] rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono">main.py</span>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center space-x-4">
                  <span className="text-purple-400">from</span>
                  <span className="text-blue-400">cycls</span>
                  <span className="text-purple-400">import</span>
                  <span className="text-green-400">agent</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-400">@agent</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-yellow-400">"ai_assistant"</span>
                  <span className="text-gray-300">)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-purple-400">def</span>
                  <span className="text-blue-400">chat_with_ai</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-400">message</span>
                  <span className="text-gray-300">:</span>
                  <span className="text-green-400">str</span>
                  <span className="text-gray-300">):</span>
                </div>
                <div className="flex items-center space-x-4 ml-8">
                  <span className="text-purple-400">return</span>
                  <span className="text-blue-400">ai_response</span>
                  <span className="text-gray-300">(</span>
                  <span className="text-blue-400">message</span>
                  <span className="text-gray-300">)</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#091A2E] mb-2">Zero Configuration</h3>
            <p className="text-gray-600">No setup, no boilerplate, just pure development focus</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#091A2E] mb-2">Open Source</h3>
            <p className="text-gray-600">Full control with our transparent, open-source core</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#091A2E] mb-2">Dev/Prod Parity</h3>
            <p className="text-gray-600">What you build locally scales globally instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;
