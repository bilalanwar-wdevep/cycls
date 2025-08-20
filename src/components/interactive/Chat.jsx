import React, { useState } from 'react';

const Chat = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [chatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi there! 👋 I\'m your Cycls AI assistant. How can I help you launch your AI business today?',
      timestamp: '2:30 PM'
    },
    {
      id: 2,
      type: 'user',
      message: 'I want to build an AI agent for customer support. How do I get started?',
      timestamp: '2:31 PM'
    },
    {
      id: 3,
      type: 'bot',
      message: 'Great choice! 🚀 With Cycls, you can build a customer support AI agent in just 3 simple steps:\n\n1. Write your agent logic in Python\n2. Add our @cycls.agent decorator\n3. Deploy and monetize instantly!\n\nWould you like me to show you a code example?',
      timestamp: '2:32 PM'
    },
    {
      id: 4,
      type: 'user',
      message: 'Yes, please show me the code!',
      timestamp: '2:33 PM'
    },
    {
      id: 5,
      type: 'bot',
      message: 'Perfect! Here\'s a simple example:\n\n```python\nfrom cycls import agent\n\n@agent\ndef customer_support_agent(query: str):\n    # Your AI logic here\n    response = process_customer_query(query)\n    return response\n```\n\nThat\'s it! Cycls handles the rest - frontend, API, payments, and scaling. Ready to try it?',
      timestamp: '2:34 PM'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you'd send this message to your backend
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-[420px] h-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 overflow-hidden backdrop-blur-sm flex flex-col">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-6 shadow-lg flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Cycls AI Assistant</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-white/90 font-medium">Online • Ready to help</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors duration-200 p-2"
            title="Close chat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white min-h-0">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
                msg.type === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-800 border border-gray-100 shadow-md'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
              <p className={`text-xs mt-3 font-medium ${
                msg.type === 'user' ? 'text-white/70' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-6 bg-white border-t border-gray-100 shadow-lg flex-shrink-0">
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full px-5 py-4 pr-12 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 font-medium"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            disabled={!message.trim()}
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        
        {/* Quick Actions */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
          <span>Press Enter to send</span>
          <span>Cycls AI • Always learning</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
