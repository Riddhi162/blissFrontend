import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import MarketPlace from '../../components/MarketPlace/MarketPlace'
import Services from '../../components/Services/Services'
import Partners from '../../components/Partners/Partners'
import WhyUs from '../../components/WhyUs/WhyUs'
import Events from '../../components/Events/Events'
import Library from '../../components/Library/Library'
import NewsBlog from '../../components/NewsBlog/NewsBlog'
import Footer from '../../components/Footer/Footer'
import { motion } from 'framer-motion'

const HomePage = () => {
  const [isRevealed, setIsRevealed] = useState(true);
  const logoText = "BLISS CONSULTING";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  if (isRevealed) {
    return (
      <div className="relative min-h-screen bg-primary-darkest flex items-center justify-center overflow-hidden">
        {/* Top Right Grid Texture */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-primary-accent/10 grid grid-cols-8 grid-rows-8 gap-1">
            {[...Array(64)].map((_, index) => (
              <div
                key={index}
                className="bg-primary-accent/5 border-[0.5px] border-primary-accent/10"
              />
            ))}
          </div>
        </div>
        
        {/* Bottom Left Grid Texture */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary-accent/10 grid grid-cols-8 grid-rows-8 gap-1">
            {[...Array(64)].map((_, index) => (
              <div
                key={index}
                className="bg-primary-accent/5 border-[0.5px] border-primary-accent/10"
              />
            ))}
          </div>
        </div>
        
        {/* Logo Container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex items-center z-10 relative"
        >
          {logoText.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-primary-accent text-8xl font-bold"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Subtle Background Shimmer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.05, 0],
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-accent/5 to-transparent"
        />
      </div>
    );
  }

  return (
   // Change this line in your return statement
<div className="min-h-screen overflow-x-hidden">
     
      <main>
      <Navbar />
        <HeroSection />
        <Services />
        <WhyUs />
        <MarketPlace />
        
        {/* <Events /> */}
        <Library />
        <NewsBlog />
        <Partners />
      </main>
    </div>
  )
}

export default HomePage