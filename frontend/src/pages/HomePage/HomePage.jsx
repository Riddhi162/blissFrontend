import React, { useState, useEffect } from 'react'
import { X } from 'react-feather'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import MarketPlace from '../../components/MarketPlace/MarketPlace'
import Services from '../../components/Services/Services'
import Partners from '../../components/Partners/Partners'
import WhyUs from '../../components/WhyUs/WhyUs'
import Library from '../../components/Library/Library'
import NewsBlog from '../../components/NewsBlog/NewsBlog'
import contactImage from "../../../assests/slider1.jpg"

const WelcomeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg">
      <div className="relative w-11/12 max-w-4xl p-4">
        <div className="bg-white/30 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-2 max-h-[600px]">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-primary-darkest bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all duration-300"
          >
            <X size={24} />
          </button>

          {/* Text Content */}
          <div className="p-6 flex flex-col justify-center text-primary-darkest overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Bliss Consulting
            </h2>
            <p className="text-sm mb-3 leading-relaxed">
              At Bliss Consulting, we are more than just a consulting firm – we are your strategic partners in navigating the complex landscape of modern business. Our team of expert consultants brings together cutting-edge strategies, innovative thinking, and deep industry insights to transform your challenges into remarkable opportunities.
            </p>
            <p className="text-sm mb-4 leading-relaxed">
              We pride ourselves on delivering tailored solutions that are not just effective, but transformative. Whether you're a startup looking to disrupt the market or an established enterprise seeking to optimize your operations, our comprehensive approach ensures that we meet your unique business needs with precision and creativity.
            </p>
            <div>
              <button 
                onClick={onClose}
                className="bg-primary-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-darkest/20 to-primary-accent/20 opacity-50"></div>
            <img 
              src={contactImage}
              alt="Bliss Consulting" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleCloseModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Welcome Modal - Conditionally Rendered */}
      {showWelcomeModal && <WelcomeModal onClose={handleCloseModal} />}
      
      <main>
        <Navbar />
        <HeroSection />
        <Services />
        <WhyUs />
        <MarketPlace />
        <Library />
        <NewsBlog />
        <Partners />
      </main>
    </div>
  )
}

export default HomePage 