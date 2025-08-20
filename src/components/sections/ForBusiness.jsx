import React from 'react';

const ForBusiness = () => {
  return (
    <section id="for-business" className="w-full py-24 relative overflow-hidden">
              {/* Background Image with Foggy Overlay */}
        <div className="absolute inset-0 bg-[url('/src/assets/images/business.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Foggy Overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#091A2E]/20 via-[#091A2E]/15 to-[#091A2E]/25"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full uppercase tracking-wider border border-white/30 shadow-lg">
                For Business & Enterprise
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                A Complete{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Commercial Engine.
                </span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed drop-shadow-lg">
                Cycls is more than a tool; it's an economic engine. For startups, we provide a 
                complete business-in-a-box, handling users, payments, and infrastructure so you 
                can focus on your product.
              </p>
              
              <p className="text-lg text-white/80 leading-relaxed drop-shadow-lg">
                For enterprises, our sovereign managed cloud, hosted in Dammam, offers a flexible, 
                enterprise-ready platform to build foundational AI capabilities within the Kingdom.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center space-x-3 bg-white text-[#091A2E] px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Contact Sales</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Hover Background - Fixed positioning */}
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Interactive Business Cards */}
          <div className="space-y-6">
            {/* Startup Card */}
            <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Startups</h3>
                    <p className="text-white/80 text-sm">Business-in-a-Box Solution</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/90">Complete user management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/90">Built-in payment processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white/90">Infrastructure automation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div className="group relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-white/80 text-sm">Sovereign Cloud Platform</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/90">Dammam-based hosting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/90">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white/90">Kingdom compliance ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <p className="text-white/80">Uptime Guarantee</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/80">Support Available</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <p className="text-white/80">Data Sovereignty</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <p className="text-white/80">Enterprise Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
