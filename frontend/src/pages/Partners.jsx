import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FilterSearchComponent from '../components/common/FilterSearchComponent';
import partnersData from '../data/partnersData';
import HeroBanner from '../components/common/HeroBanner';
import QuoteSection from '../components/common/QuoteSection';
import contactImage from '../../assests/slider2.jpg';

// Flatten partners data
const allPartners = [
  ...partnersData.firstColumnPartners,
  ...partnersData.secondColumnPartners,
  ...partnersData.thirdColumnPartners
];

const Partners = () => {
  const [filteredPartners, setFilteredPartners] = useState(allPartners);
  
  const partnerQuoteProps = {
    primaryQuote: "We partner with innovative companies that drive transformational change.",
    secondaryQuote: "Our strategic partnerships are built on shared vision, expertise, and commitment to excellence.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };

  // Handle filtered data from FilterSearchComponent
  const handleFilteredData = (data) => {
    setFilteredPartners(data);
  };

  return (
    <div className="partners-page">
      <div>
        <HeroBanner
          image={contactImage}
          title="Our Partners"
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Partners' }
          ]}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 bg-primary-darker">
        <QuoteSection {...partnerQuoteProps} />

        <div className="max-w-7xl mx-auto">
          {/* FilterSearchComponent */}
          <FilterSearchComponent 
            data={allPartners}
            onFilteredData={handleFilteredData}
          />

          {/* Partners Grid */}
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredPartners.map(partner => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-primary-main rounded-lg shadow mt-8">
              <h2 className="text-2xl font-semibold text-primary-darkest mb-4">
                No Partners Found
              </h2>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PartnerCard = ({ partner }) => {   
  return (     
    <Link
      to={`/partner/${partner.id}`}
      className="group block transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
    >       
      <div className="bg-primary-main rounded-lg overflow-hidden shadow-md border border-primary-accent hover:border-primary-accent h-full flex flex-col">
        {/* Logo Section */}
        <div className="p-6 pb-0 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-primary-darker p-4 flex items-center justify-center">
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
         
        {/* Content Section */}
        <div className="p-6 text-center flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-primary-darkest mb-2">
            {partner.name}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[32px]">
            {partner.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-primary-accent text-primary-darkest px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Introduction */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {partner.introduction}
          </p>
          
          {/* Read More */}
          <div className="text-center mt-auto">
            <span className="text-primary-accent group-hover:text-primary-darkest font-medium flex items-center justify-center">
              Explore Partner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  ); 
};

export default Partners;