import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import StartProject from './components/StartProject'
import './App.css'

const HomePage = () => (
  <div className="w-screen min-h-screen m-0 p-0">
    <HeroSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
    </Router>
  )
}

export default App
