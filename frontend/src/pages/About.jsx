import React from "react";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider4.jpg';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col">
        {/* Hero Banner */}
        <div>
          <HeroBanner
            image={contactImage}
            title="About Us"
            breadcrumbs={[
              { label: 'Home', to: '/' },
              { label: 'About' }
            ]}
          />
        </div>

        {/* Feature Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full bg-[#a4b5ba]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left side - Images */}
            <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
              {/* Main image */}
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working" 
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 z-20 hidden sm:block">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team" 
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
              
              {/* Circular badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 z-30 bg-white rounded-full p-1 shadow-lg">
                <div className="bg-[#1c2d37] rounded-full w-full h-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right side - Text Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-3">
                <span className="text-[#1c2d37] uppercase text-sm font-semibold tracking-wider">FINANCE CONSULTING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                The Best Finance Consulting In Town Since 2007
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                Globally engage cross-media leadership skills before cross-media innovation develop standardized platforms without robust applications. Conveniently go forward collaboration and idea-sharing.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2d37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Business Planning & Technologist"
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1c2d37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Human Services and Consulting"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                    <div className="bg-teal-50 p-2 rounded-full flex-shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-[#1c2d37] text-sm sm:text-base">{feature.title}</h3>
                  </div>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="bg-[#1c2d37] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center justify-center gap-2 hover:bg-[#1c2d37]/90 transition-colors text-sm sm:text-base">
                  Get Started now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a href="#" className="text-gray-800 py-2 px-4 sm:py-3 sm:px-6 inline-flex items-center justify-center gap-2 border-2 border-[#1c2d37] rounded-full hover:bg-[#1c2d37]/10 transition-colors text-sm sm:text-base">
                  Our Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-darkest text-white">
          <div className="max-w-7xl mx-auto">
            {/* Top section with heading and contact button */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 md:mb-16">
              <div className="lg:max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Why Choose Us?</h2>
                <p className="text-primary-lighter text-base md:text-lg">
                  We are a real estate firm with over 20 years of expertise, and our main 
                  goal is to provide amazing locations to our partners and clients. Within the 
                  luxury real estate market, our agency offers customized solutions.
                </p>
              </div>
              
              <div className="flex items-center w-full lg:w-auto">
                <a href="/contact" className="group border border-white rounded-full py-2 px-4 sm:py-3 sm:px-6 inline-flex items-center hover:bg-white hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Services section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0-2.08.402-2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Our Mission",
                  description: "All living, dining, kitchen and play areas were devised by attached to the home."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Our Vision",
                  description: "Creating sustainable communities with innovative architectural solutions."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Our Values",
                  description: "Integrity, innovation, and client satisfaction at our core."
                }
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-start p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-16 h-16 mb-4 bg-transparent border border-gray-500 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Property card images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { id: 1, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Modern house" },
                { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Contemporary home" },
                { id: 3, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Luxury interior" }
              ].map(property => (
                <div key={property.id} className="rounded-lg overflow-hidden group">
                  <div className="relative aspect-[4/3]">
                    <img 
                      src={property.image}
                      alt={property.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">View Property</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Back to top button */}
            <div className="flex justify-center md:justify-end mt-8 md:mt-12">
              <button 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg hover:bg-primary-accent hover:text-white transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;