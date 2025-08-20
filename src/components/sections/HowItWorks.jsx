import React from 'react';

const HowItWorks = ({ onGetStartedClick }) => {
  return (
    <section id="how-it-works" className="w-full py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#091A2E] to-blue-600"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#091A2E]/10 text-[#091A2E] text-sm font-medium rounded-full mb-6 border border-[#091A2E]/20">
            <span className="w-2 h-2 bg-[#091A2E] rounded-full mr-2"></span>
            Simple Process
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-[#091A2E] leading-tight mb-8">
            From Code to Customer in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#091A2E] to-blue-600">
              Three Steps
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transform your Python function into a full-stack, monetizable business with our guided process. 
            No complex setup, no infrastructure headaches - just pure innovation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Descriptive Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#091A2E]">
                Focus on what you do best
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform eliminates the complexity of building commercial AI applications. 
                You write the core logic, we handle everything else - from deployment to monetization.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-[#091A2E]">Why Choose Cycls?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Zero configuration required</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Built-in user management and payments</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Automatic scaling and monitoring</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-600">Professional frontend included</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
              <h5 className="font-semibold text-[#091A2E] mb-2">💡 Pro Tip</h5>
              <p className="text-gray-600 text-sm">
                Our guided meta-agent can help you get started even faster, turning your ideas into working code 
                and helping you understand best practices for AI agent development.
              </p>
            </div>
          </div>

          {/* Right Column - Three Feature Cards */}
          <div className="space-y-6">
            {/* Card 1: Write Your Agent */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#091A2E] mb-3">1. Write Your Agent</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Focus on what you do best. Write your agent's logic in a simple Python function.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our guided meta-agent can even help you get started, turning ideas into code even faster. 
                    No need to worry about complex architecture - just focus on your AI logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Deploy Instantly */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#091A2E] mb-3">2. Deploy Instantly</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Add our @cycls.agent decorator to your function. That's it.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Cycls automatically packages your agent into a full-stack, serverless application with a 
                    pre-built frontend and API. No deployment scripts, no server configuration needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Monetize Immediately */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#091A2E] mb-3">3. Monetize Immediately</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Launch your subscription business in minutes.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our managed platform comes with a built-in user pool and monetization, allowing you to 
                    charge for your agent with a simple take-rate model. Start earning from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-[#091A2E] text-white px-10 py-5 rounded-full shadow-2xl">
            <span className="text-xl font-bold">Ready to build your AI business?</span>
            <button 
              onClick={onGetStartedClick}
              className="bg-white text-[#091A2E] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Start Building →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
