import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import { ChevronLeft } from "lucide-react";
import partnersData from '../data/partnersData';
import contactImage from '../../assests/slider3.jpg';

const PartnerDetails = () => {
  const { partnerId } = useParams();
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the partner from our data
    const id = parseInt(partnerId);
    const allPartners = [
      ...partnersData.firstColumnPartners,
      ...partnersData.secondColumnPartners,
      ...partnersData.thirdColumnPartners
    ];
    
    const foundPartner = allPartners.find(p => p.id === id);
    
    if (foundPartner) {
      setPartner(foundPartner);
    }
    
    setLoading(false);
  }, [partnerId]);

  if (loading) {
    return (
      <div className="bg-primary-darker min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary-darkest text-2xl">Loading...</div>
      </div>
    );
  }

  if (!partner) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-darkest">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-primary-darkest">Partner not found!</h2>
          <Link to="/partners" className="mt-4 inline-block text-primary-accent hover:underline">
            Return to Partners
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-darkest min-h-screen">
      <HeroBanner
        image={contactImage}
        title={partner.name}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Partners', to: '/partners' },
          { label: partner.name }
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Decorative element */}
        <div className="relative mb-10">
          <div className="absolute -top-6 left-0 w-24 h-2 bg-primary-accent rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-2">{partner.name}</h2>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {partner.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm bg-primary-lighter text-primary-darkest px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="mt-4 text-xl text-primary-main italic">{partner.introduction}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full bg-white p-3 shadow-lg">
              <div className="w-full h-full rounded-full bg-primary-main p-2 flex items-center justify-center overflow-hidden">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Partner details with decorative elements */}
          <div className="space-y-12">
            {partner.details.map((detail, index) => (
              <div key={index} className="relative">
                {/* Decorative vector */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest font-bold">
                  {index + 1}
                </div>
                
                <div className="ml-8 border-l-2 border-primary-accent pl-6 pb-2">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{detail.subtitle}</h3>
                  <div className="relative">
                    <p className="text-primary-main leading-relaxed">{detail.subheading}</p>
                  </div>
                </div>
                
                {index < partner.details.length - 1 && (
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
              <h4 className="text-xl font-semibold text-primary-lighter mb-4">Ready to connect with {partner.name}?</h4>
              <div className="inline-block">
                <Link to="/contact" className="px-8 py-3 bg-primary-accent text-primary-darkest font-bold rounded-lg hover:bg-primary-lighter transition-colors duration-300">
                  Contact Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back navigation with decoration */}
        <div className="mt-10">
          <Link to="/partners" className="inline-flex items-center group">
            <span className="w-8 h-8 rounded-full bg-primary-accent text-primary-darkest flex items-center justify-center mr-2 group-hover:bg-primary-lighter transition-colors duration-300">
              <ChevronLeft size={16} />
            </span>
            <span className="text-primary-main group-hover:text-primary-lighter transition-colors duration-300">Back to Partners</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;