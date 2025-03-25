import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import Card from "../components/MarketPlace/Card";
import contactImage from '../../assests/slider3.jpg';
import marketData from '../data/marketData.json';
import QuoteSection from "../components/common/QuoteSection";
import FilterSearchComponent from '../components/common/FilterSearchComponent';

const Markets = () => {
  const [markets, setMarkets] = useState([]);
  const [filteredMarkets, setFilteredMarkets] = useState([]);

  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };

  useEffect(() => {
    setMarkets(marketData);
    setFilteredMarkets(marketData);
  }, []);

  const handleFilteredData = (data) => {
    setFilteredMarkets(data);
  };

  return (
    <div className="min-h-screen">
      <HeroBanner
        image={contactImage}
        title="Marketplace"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Marketplace' }
        ]}
      />
      
      <div className="w-full bg-primary-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <QuoteSection {...serviceQuoteProps} />
          
          {/* Filter Section */}
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-0">
            <FilterSearchComponent 
              data={markets} 
              onFilteredData={handleFilteredData} 
            />
          </div>
          
          {/* Marketplace Grid */}
          {filteredMarkets.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
              {filteredMarkets.map((market) => (
                <Link 
                  to={`/market-details/${market.id}`} 
                  key={market.id} 
                  className="block h-full transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Card
                    image={market.image}
                    date={market.date}
                    tag={market.industry}
                    title={market.title}
                    description={market.description}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-white">
              <p className="text-lg md:text-xl">No markets found matching your criteria.</p>
              <button 
                onClick={() => setFilteredMarkets(markets)}
                className="mt-4 px-6 py-2 bg-primary-accent text-white rounded-lg hover:bg-primary-accent/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Markets;