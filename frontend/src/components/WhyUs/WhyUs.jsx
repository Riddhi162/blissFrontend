import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const bulletPoints = [
    "Nsectetur cing elit.",
    "Suspe ndisse suscipit sagittis leo.",
    "Entum estibulum dignissim posuere.",
    "Donec tristique ante vel sem dictum rhoncus."
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 bg-[#1c2d37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-full max-w-[500px] lg:max-w-[600px] relative z-20">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-[30px] lg:rounded-[90px]"
              />
              
              {/* Decorative dots pattern - Hidden on small screens */}
              <div className="hidden lg:block absolute -left-20 top-1/2 w-60 h-40 opacity-20">
                <div className="grid grid-cols-8 gap-4">
                  {[...Array(88)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#e5cb6b] rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-5 text-center lg:text-left">
            <div className="space-y-4 md:space-y-8">
              {/* Label */}
              <span
                className="inline-block text-sm md:text-base text-[#e5cb6b] px-3 py-1 rounded-full border border-[#e5cb6b]/30"
                data-aos="fade-down"
              >
                GET TO KNOW US
              </span>

              {/* Heading */}
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                data-aos="fade-up"
              >
                Work Together for your Business
              </h2>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-gray-300 pb-6 md:pb-12 border-b-[0.02rem] border-gray-400/30"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur nod adipisicing elit sed do
                eiusmod tempor incididunt ut siply free text ois labore et dolore
                magna aliqua lonm andhn.
              </p>

              {/* Bullet points */}
              <div className="space-y-3 md:space-y-4 text-gray-300">
                {bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start space-x-3"
                    data-aos="fade-right"
                    data-aos-delay={`${index * 200}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-[#e5cb6b] rounded-full" />
                    </div>
                    <span className="text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6'>
                <Link to="/about" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-6 bg-primary-darker text-primary-darkest rounded-full">
                    Let's Collaborate
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-6 border border-primary-darker text-primary-darker rounded-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;