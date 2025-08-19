import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-form" className="w-full py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#091A2E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#091A2E] to-blue-600 text-white text-sm font-semibold rounded-full uppercase tracking-wider shadow-lg mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Connect
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#091A2E] via-blue-600 to-purple-600">
              Transform
            </span>{' '}
            Your Business?
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how Cycls can help you build, deploy, and monetize your AI business. 
            Our team is here to answer your questions and get you started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#091A2E] via-blue-600 to-purple-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-2xl">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#091A2E] to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Journey</h3>
                <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white ${
                        focusedField === 'name' 
                          ? 'border-[#091A2E] shadow-lg shadow-[#091A2E]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-[#091A2E] scale-110' : 'text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white ${
                        focusedField === 'email' 
                          ? 'border-[#091A2E] shadow-lg shadow-[#091A2E]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'email' ? 'text-[#091A2E] scale-110' : 'text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                    Company
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white ${
                        focusedField === 'company' 
                          ? 'border-[#091A2E] shadow-lg shadow-[#091A2E]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your company name (optional)"
                    />
                    <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'company' ? 'text-[#091A2E] scale-110' : 'text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      required
                      rows={5}
                      className={`w-full px-5 py-4 border-2 rounded-xl transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white resize-none ${
                        focusedField === 'message' 
                          ? 'border-[#091A2E] shadow-lg shadow-[#091A2E]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us about your project and how we can help..."
                    />
                    <div className={`absolute right-4 top-4 transition-all duration-300 ${
                      focusedField === 'message' ? 'text-[#091A2E] scale-110' : 'text-gray-400'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-[#091A2E] via-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-[#091A2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a startup looking to launch your first AI product or an enterprise 
                seeking to scale your AI capabilities, we have the solutions you need.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-[#091A2E] font-semibold">hello@cycls.ai</p>
                  <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Live Chat</h4>
                  <p className="text-[#091A2E] font-semibold">Available 24/7</p>
                  <p className="text-gray-500 text-sm">Get instant answers to your questions</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                  <p className="text-[#091A2E] font-semibold">Dammam, Saudi Arabia</p>
                  <p className="text-gray-500 text-sm">Sovereign cloud infrastructure</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">Trusted by leading companies worldwide</p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <span className="text-gray-400 font-bold text-xs">LOGO</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <span className="text-gray-400 font-bold text-xs">LOGO</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <span className="text-gray-400 font-bold text-xs">LOGO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
