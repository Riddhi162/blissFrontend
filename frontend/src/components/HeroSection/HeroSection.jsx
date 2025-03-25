import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from '../../../assests/slider1.jpg';
import image2 from '../../../assests/slider2.jpg';
import image3 from '../../../assests/slider3.jpg';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';

const slides = [
  {
    image: image1,
    title: 'Find Your Dream Home Before Rates Rise',
    description:
      'Real single Properties stands for exceptional luxury properties and single properties in the most sought-after districts of the city',
  },
  {
    image: image2,
    title: 'Your Dream Home Awaits Rates Rise',
    description:
      'Real single Properties stands for exceptional luxury properties and single properties in the most sought-after districts of the city',
  },
  {
    image: image3,
    title: 'Luxury Living Redefined Rates Rise',
    description:
      'Experience the pinnacle of luxury living with our premium properties in prime locations.',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS after slide changes
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="relative min-h-screen bg-[rgb(28,45,55)] flex items-center justify-center">
        <div className="bg-[#a4b5ba] h-screen pt-32 pb-10 md:pt-40">
        <div className="max-w-[1400px] h-full mx-auto px-4 sm:px-6 lg:px-8 
          grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 
          items-center justify-center">
          
          {/* Text Section - Now explicitly first in mobile view */}
          <div
            key={currentSlide}
            className="space-y-4 md:space-y-8 text-[#1c2d37] text-center md:text-left
              order-1 px-4 md:px-0"
            data-aos="fade-right"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
              md:pl-10 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg md:pl-10 
              max-w-prose mx-auto md:mx-0">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 
              sm:space-x-4 justify-center md:justify-start md:pl-10 pt-4">
              <a href="#why-us" className="no-underline w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-6 
                  bg-[#1c2d37] text-white rounded-full">
                  We are Bliss Consulting
                </button>
              </a>

              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-6 
                  border border-black text-black rounded-full">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section - Now explicitly second in mobile view */}
          <div
            key={`image-${currentSlide}`}
            className="relative flex flex-col items-center 
              order-2 md:order-2 px-4 md:px-0"
            data-aos="fade-left"
          >
            <div className="relative w-full max-w-[500px]">
              <img
                src={slides[currentSlide].image}
                alt="Property"
                className="w-full h-[250px] sm:h-[350px] md:h-[480px] 
                  rounded-[30px] object-cover"
              />

              {/* Circular Badge - Hidden on small screens */}
             

              {/* Arrows */}
              <div className="flex absolute bottom-5 left-1/2 transform -translate-x-1/2 
                space-x-6 mt-4">
                <button
                  onClick={prevSlide}
                  className="p-3 md:p-4 bg-white rounded-full shadow-md 
                    hover:bg-gray-200 transition"
                >
                  <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 md:p-4 bg-white rounded-full shadow-md 
                    hover:bg-gray-200 transition"
                >
                  <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;