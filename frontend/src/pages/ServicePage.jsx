import React from "react";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider2.jpg';
import services from '../../src/data/serviceData.json';
import { Link } from "react-router-dom";
import QuoteSection from "../components/common/QuoteSection";
const ServicePage = () => {
  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };
  return (
    <div className="service-page">
      <div>
        <HeroBanner
          image={contactImage}
          title="Services"
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Services' }
          ]}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 bg-primary-darker">
      <QuoteSection {...serviceQuoteProps} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-20">
          {services.map((service) => (
              <Link key={service.id} to={`/services/${service.id}`}>
            <div key={service.id} className="group relative service-card rounded-lg overflow-hidden shadow-lg border-b-4 border-primary-accent bg-primary-main">
              
              {/* Card image container with custom curve */}
              <div className="relative w-full border-primary-main border-[15px] overflow-hidden" style={{ height: "400px" }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  style={{ 
                    borderBottomLeftRadius: "50% 100%", 
                    borderBottomRightRadius: "50% 100%", 
                    transform: "scale(1.5, 1)"
                  }}
                />
                
                {/* Mirror shine effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Primary shine strip - thinner but brighter */}
                   
                    
                    {/* Secondary shine strip - follows the primary with delay */}
                    <div className="absolute top-0 left-[-100%] w-[300px] h-full bg-white opacity-20 skew-x-12 transform translate-x-0 group-hover:translate-x-[500%] transition-transform duration-1000 ease-in-out delay-100"></div>
                    
                    {/* Wider softer glow that moves slower */}
                    <div className="absolute top-0 left-[-100%] w-[300px] h-full bg-white opacity-10 skew-x-6 transform translate-x-0 group-hover:translate-x-[300%] transition-transform duration-1200 ease-in-out"></div>
                    
                    {/* Bottom to top angled shine for added dimension */}
                    
                  </div>
              </div>
              
              {/* Card content below the image */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-3 text-primary-darkest">{service.title}</h3>
                <p className="text-md text-gray-600 text-center mb-6">{service.description}</p>

                <div className="flex items-center justify-center">
                    
                  <Link to={`/services/${service.id}`} className="flex px-7 py-3  border-primary-darkest border-[1px] rounded-full">
                    View Details
                    <svg className="w-4 h-4 ml-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
