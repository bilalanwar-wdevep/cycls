import Header from './components/Header'
import Hero from './components/Hero'
import TheProblem from './components/TheProblem'
import HowItWorks from './components/HowItWorks'
import ForDevelopers from './components/ForDevelopers'
import ForBusiness from './components/ForBusiness'
import FinalCTA from './components/FinalCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <Hero />
      <TheProblem />
      <HowItWorks />
      <ForDevelopers />
      <ForBusiness />
      <FinalCTA />
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
