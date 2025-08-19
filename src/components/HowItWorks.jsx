import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
                     {/* Left Column - Headline and Description */}
           <div className="space-y-8">
             <div className="space-y-4">
               <div className="inline-flex items-center px-4 py-2 bg-[#091A2E] text-white text-sm font-medium rounded-full uppercase tracking-wider">
                 How It Works
               </div>
               <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#091A2E] leading-tight">
                 From Code to Customer in{' '}
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                   Three Steps.
                 </span>
               </h2>
             </div>
             
             {/* Additional Fruitful Content */}
             <div className="space-y-6">
               <p className="text-xl text-gray-700 leading-relaxed">
                 Transform your AI ideas into profitable businesses with our streamlined platform. 
                 No more months of infrastructure setup, frontend development, or payment integrations.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                   <p className="text-gray-600 leading-relaxed">
                     <strong>Focus on Innovation:</strong> Write your agent's core logic while we handle everything else
                   </p>
                 </div>
                 
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                   <p className="text-gray-600 leading-relaxed">
                     <strong>Instant Deployment:</strong> Go from code to live application in seconds, not weeks
                   </p>
                 </div>
                 
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                   <p className="text-gray-600 leading-relaxed">
                     <strong>Built-in Revenue:</strong> Start earning from day one with our managed monetization system
                   </p>
                 </div>
               </div>
               
               <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                 <h4 className="text-lg font-semibold text-[#091A2E] mb-3">
                   Why Choose Cycls?
                 </h4>
                 <p className="text-gray-700 leading-relaxed text-sm">
                   We've built the platform we wish existed when we started our AI businesses. 
                   By eliminating the 80% of work that doesn't add value, you can focus on the 20% that does - 
                   creating amazing AI experiences that customers love and pay for.
                 </p>
               </div>
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
                    Cycls automatically packages your agent into a full-stack, serverless application with a pre-built frontend and API.
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
                    Our managed platform comes with a built-in user pool and monetization, allowing you to charge for your agent with a simple take-rate model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 bg-[#091A2E] text-white px-10 py-5 rounded-full shadow-2xl">
            <span className="text-xl font-bold">Ready to build your AI business?</span>
            <button className="bg-white text-[#091A2E] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Start Building →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
