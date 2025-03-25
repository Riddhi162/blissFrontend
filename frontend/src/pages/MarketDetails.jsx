import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import marketData from '../data/marketData.json';
import { ChevronLeft } from "lucide-react";

const MarketDetails = () => {
  const { id } = useParams();
  const [marketDetail, setMarketDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundMarket = marketData.find(market => market.id === parseInt(id));
    if (foundMarket) {
      setMarketDetail(foundMarket);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-darkest text-white">
        Loading...
      </div>
    );
  }

  if (!marketDetail) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-darkest">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-primary-darkest">Market not found!</h2>
          <Link to="/markets" className="mt-4 inline-block text-primary-accent hover:underline">
            Return to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-darkest min-h-screen">
      
      <HeroBanner
        image={marketDetail.image}
        title={marketDetail.name}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Marketplace', to: '/markets' },
          { label: marketDetail.name }
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Decorative heading */}
        <div className="relative mb-10">
          <div className="absolute -top-6 left-0 w-24 h-2 bg-primary-accent rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-2">{marketDetail.title}</h2>
          <p className="text-xl text-primary-main italic">
            {marketDetail.industry} | Published on {marketDetail.date}
          </p>
        </div>

        {/* Main description */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20">
          <div className="relative mb-10 p-6 rounded-lg bg-white/5">
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-primary-accent"></div>
            <p className="text-lg text-white leading-relaxed">{marketDetail.description}</p>
          </div>

          {/* Market details list */}
          <div className="space-y-12">
            {marketDetail.details.map((detail, index) => (
              <div key={index} className="relative">
                {/* Decorative number */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest font-bold">
                  {index + 1}
                </div>

                <div className="ml-8 border-l-2 border-primary-accent pl-6 pb-2">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{detail.subheading}</h3>
                  <p className="text-primary-main leading-relaxed">{detail.subdetails}</p>
                </div>

                {index < marketDetail.details.length - 1 && (
                  <div className="absolute left-0 bottom-0 w-2 h-8 bg-gradient-to-b from-primary-accent to-transparent"></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-6 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-primary-darkest border-4 border-primary-accent flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-accent rounded-full"></div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-lighter mb-4">Ready to transform your business?</h4>
              <div className="inline-block">
                <Link to="/contact" className="px-8 py-3 bg-primary-accent text-primary-darkest font-bold rounded-lg hover:bg-primary-lighter transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="mt-10">
          <Link to="/markets" className="inline-flex items-center group">
            <span className="w-8 h-8 rounded-full bg-primary-accent text-primary-darkest flex items-center justify-center mr-2 group-hover:bg-primary-lighter transition-colors duration-300">
              <ChevronLeft size={16} />
            </span>
            <span className="text-primary-main group-hover:text-primary-lighter transition-colors duration-300">Back to Marketplace</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MarketDetails; 