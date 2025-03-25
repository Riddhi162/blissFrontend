import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import FilterSearchComponent from '../components/common/FilterSearchComponent';
import contactImage from '../../assests/slider3.jpg';
import partnersData from '../data/partnersData';
import QuoteSection from "../components/common/QuoteSection";
const Partners = () => {
  const firstColumnRef = useRef(null);
  const secondColumnRef = useRef(null);
  const thirdColumnRef = useRef(null);
  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };
  const { firstColumnPartners, secondColumnPartners, thirdColumnPartners } = partnersData;

  // Combine partners from all columns
  const allPartners = [
    ...firstColumnPartners,
    ...secondColumnPartners,
    ...thirdColumnPartners
  ];

  // State to manage filtered partners and filtered view
  const [filteredPartners, setFilteredPartners] = useState(allPartners);
  const [isFiltered, setIsFiltered] = useState(false);

  // Prepare data for FilterSearchComponent with correct mapping
  const filterData = allPartners.map(partner => ({
    ...partner,
    industry: partner.tags, // Use tags as industries
    scope: partner.name,    // Use name as scope for demonstration
    type: 'Partner',        // Static type
    language: 'English'     // Static language
  }));

  // Modify the filtering logic to handle empty filter scenarios
  const handleFilteredData = (filteredResults) => {
    // If no results, fall back to original data
    const results = filteredResults.length > 0 ? filteredResults : allPartners;
    
    // Set filtered state 
    setIsFiltered(filteredResults.length !== allPartners.length);
    
    setFilteredPartners(results);
  };

  // Scroll animation effect
  useEffect(() => {
    // If filtered or refs aren't loaded, exit
    if (isFiltered || !firstColumnRef.current || !secondColumnRef.current || !thirdColumnRef.current) {
      return;
    }

    // Get the height of a single card by measuring the first card
    const cardHeight = firstColumnRef.current.querySelector('.partner-card')?.clientHeight || 180;
    const gapHeight = 24; // mb-6 = 1.5rem = 24px
    const fullCardHeight = cardHeight + gapHeight;
    const totalHeight = fullCardHeight * 5; // 5 cards per column
    
    // Initialize the second column starting position
    secondColumnRef.current.style.transform = `translateY(-${totalHeight}px)`;
    
    let animationFrameId;
    let offset1 = 0;
    let offset2 = -totalHeight; // Start from negative total height for second column
    let offset3 = 0;

    const animate = () => {
      // First column scrolls up
      offset1 -= 0.5;
      if (Math.abs(offset1) >= totalHeight) {
        offset1 = 0;
      }
      firstColumnRef.current.style.transform = `translateY(${offset1}px)`;
      
      // Second column scrolls down
      offset2 += 0.5;
      if (offset2 >= 0) {
        offset2 = -totalHeight;
      }
      secondColumnRef.current.style.transform = `translateY(${offset2}px)`;
      
      // Third column scrolls up at a different speed
      offset3 -= 0.7;
      if (Math.abs(offset3) >= totalHeight) {
        offset3 = 0;
      }
      thirdColumnRef.current.style.transform = `translateY(${offset3}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFiltered]);

  return (
    <div className="bg-primary-darker">
      <HeroBanner
        image={contactImage}
        title="Our Partners"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Partners' }
        ]}
      />
      
      <div className="container mx-auto px-20 py-16">
          <QuoteSection {...serviceQuoteProps} />
       

        {/* Filter Search Component */}
        <FilterSearchComponent 
          data={filterData}
          onFilteredData={handleFilteredData}
        />

        {isFiltered ? (
          // Filtered View - Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {filteredPartners.map(partner => (
              <PartnerCard key={`filtered-${partner.id}`} partner={partner} />
            ))}
          </div>
        ) : (
          // Scrolling View
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 shadow-2xl relative mt-8"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent 100%)'
            }}
          >
            {/* First Column - Scrolling Up */}
            <div className="h-[700px] overflow-hidden relative">
              <div className="absolute inset-0" ref={firstColumnRef}>
                {filteredPartners.slice(0, 5).map(partner => (
                  <PartnerCard key={`first-${partner.id}`} partner={partner} />
                ))}
                {filteredPartners.slice(0, 5).map(partner => (
                  <PartnerCard key={`first-duplicate-${partner.id}`} partner={partner} />
                ))}
              </div>
            </div>

            {/* Second Column - Scrolling Down */}
            <div className="h-[700px] overflow-hidden relative">
              <div className="absolute inset-0" ref={secondColumnRef}>
                {filteredPartners.slice(5, 10).map(partner => (
                  <PartnerCard key={`second-duplicate-top-${partner.id}`} partner={partner} />
                ))}
                {filteredPartners.slice(5, 10).map(partner => (
                  <PartnerCard key={`second-original-${partner.id}`} partner={partner} />
                ))}
                {filteredPartners.slice(5, 10).map(partner => (
                  <PartnerCard key={`second-duplicate-bottom-${partner.id}`} partner={partner} />
                ))}
              </div>
            </div>
            
            {/* Third Column - Scrolling Up */}
            <div className="h-[700px] overflow-hidden relative">
              <div className="absolute inset-0" ref={thirdColumnRef}>
                {filteredPartners.slice(10, 15).map(partner => (
                  <PartnerCard key={`third-${partner.id}`} partner={partner} />
                ))}
                {filteredPartners.slice(10, 15).map(partner => (
                  <PartnerCard key={`third-duplicate-${partner.id}`} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredPartners.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-primary-darkest">
              No partners found matching your search criteria.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

// PartnerCard component remains the same as in the previous version
const PartnerCard = ({ partner }) => {
  return (
    <Link to={`/partner/${partner.id}`} className="block partner-card mb-6 group">
      <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#1c2d37]/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
        {/* Accent top border */}
        <div className="h-2 bg-[#1c2d37]/60"></div>
        
        <div className="p-6">
          {/* Logo - Increased size */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full bg-primary-main p-2 flex items-center justify-center border-2 border-primary-lighter overflow-hidden">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary-darkest mb-2">{partner.name}</h3>
            <div className="w-12 h-0.5 bg-primary-accent mx-auto mb-3"></div>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {partner.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-primary-lighter text-primary-darkest px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Introduction */}
          <div className="mt-4 pt-4 border-t border-primary-lighter">
            <p className="text-sm text-primary-darkest text-center line-clamp-2">
              {partner.introduction}
            </p>
            <div className="text-center mt-2">
              <span className="text-primary-accent hover:text-primary-darker transition-colors text-sm font-medium">
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Partners;