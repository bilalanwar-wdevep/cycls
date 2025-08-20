import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import WhyCycls from './components/sections/WhyCycls'
import HowItWorks from './components/sections/HowItWorks'
import ForDevelopers from './components/sections/ForDevelopers'
import ForBusiness from './components/sections/ForBusiness'
import FinalCTA from './components/sections/FinalCTA'
import ContactForm from './components/ui/ContactForm'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import './App.css'
import { useState } from 'react'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Global function to handle Get Started button clicks
  const handleGetStartedClick = () => {
    // Scroll to FinalCTA section
    const finalCTASection = document.getElementById('final-cta');
    if (finalCTASection) {
      finalCTASection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Open chat after a short delay to allow scroll to complete
    setTimeout(() => {
      setIsChatOpen(true);
    }, 800);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header onGetStartedClick={handleGetStartedClick} />
      <Hero onGetStartedClick={handleGetStartedClick} />
      <WhyCycls onGetStartedClick={handleGetStartedClick} />
      <HowItWorks onGetStartedClick={handleGetStartedClick} />
      <ForDevelopers />
      <ForBusiness />
      <FinalCTA isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
      <ContactForm />
      <Footer />
      <BackToTop />
      
      {/* Main Body */}
      <main className="flex-grow">
        {/* Other content sections go here */}
      </main>
    </div>
  )
}

export default App
