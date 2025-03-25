import React from "react";
import { useParams, Link } from "react-router-dom";
import serviceData from "../data/serviceData.json";
import HeroBanner from '../components/common/HeroBanner';
import { ChevronLeft } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData.find(item => item.id === parseInt(id));

  if (!service) {
    return <div className="flex items-center justify-center min-h-screen bg-primary-darkest">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-primary-darkest">Service not found!</h2>
        <Link to="/services" className="mt-4 inline-block text-primary-accent hover:underline">
          Return to Services
        </Link>
      </div>
    </div>;
  }

  return (
    <div className="bg-primary-darkest min-h-screen">
      
      <HeroBanner
        image={service.image}
        title={service.title}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title }
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Decorative element */}
        <div className="relative mb-10">
          <div className="absolute -top-6 left-0 w-24 h-2 bg-primary-accent rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
          <p className="text-xl text-primary-main italic">{service.subtitle || "Excellence in service"}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20">
          {/* Main description with decorative element */}
          <div className="relative mb-10 p-6 rounded-lg bg-white/5">
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-primary-accent"></div>
            <p className="text-lg text-white leading-relaxed">{service.description}</p>
          </div>
          
          {/* Service details with decorative elements */}
          <div className="space-y-12">
            {service.details.map((detail, index) => (
              <div key={index} className="relative">
                {/* Decorative vector */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest font-bold">
                  {index + 1}
                </div>
                
                <div className="ml-8 border-l-2 border-primary-accent pl-6 pb-2">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{detail.subtitle}</h3>
                  <div className="relative">
                  
                    <p className="text-primary-main leading-relaxed">{detail.subdetails}</p>
                  </div>
                </div>
                
                {index < service.details.length - 1 && (
                  <div className="absolute left-0 bottom-0 w-2 h-8 bg-gradient-to-b from-primary-accent to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA section with decoration */}
          <div className="mt-12 pt-6 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-primary-darkest border-4 border-primary-accent flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-accent rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-lighter mb-4">Ready to experience our exceptional service?</h4>
              <div className="inline-block">
                <Link to="/contact" className="px-8 py-3 bg-primary-accent text-primary-darkest font-bold rounded-lg hover:bg-primary-lighter transition-colors duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back navigation with decoration */}
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center group">
            <span className="w-8 h-8 rounded-full bg-primary-accent text-primary-darkest flex items-center justify-center mr-2 group-hover:bg-primary-lighter transition-colors duration-300">
              <ChevronLeft size={16} />
            </span>
            <span className="text-primary-main group-hover:text-primary-lighter transition-colors duration-300">Back to Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;