import React from 'react'
import { Link } from 'react-router-dom'
import marketsData from '../../data/marketData.json' // Adjust the import path as needed
import Card from "./Card"


const MarketPlace = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#a4b5ba]">
      {/* Top Inner Shadow */}
      <div 
        className="absolute inset-x-0 top-0 h-96 z-10 pointer-events-none" 
        style={{ 
          boxShadow: 'inset 0 160px 150px -80px rgba(28,45,55,1)',
          background: 'linear-gradient(to bottom, rgba(28,45,55, 1) 0%, rgba(28,45,55, 0.7) 30%, rgba(28,45,55,0.2) 60%, transparent 100%)'
        }} 
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.09]">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M0 50 Q 25 25, 50 50 T 100 50 T 150 50 T 200 50"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-900"
              />
              <path 
                d="M-50 75 Q -25 50, 0 75 T 50 75 T 100 75 T 150 75"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-gray-900"
              />
            </pattern>
            <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-900" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative pt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(28,45,55)] mb-4">
            Marketplace
          </h2>
          <p className="text-xl text-[rgb(43,68,83)] max-w-3xl mx-auto">
            Discover our comprehensive range of business solutions and services designed to help your organization thrive in the digital age.
          </p>
        </div>

        

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {marketsData.map((market) => (
            <Link to={`/market-details/${market.id}`} key={market.id} className="block h-full">
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
      </div>
    </section>
  )
}

export default MarketPlace