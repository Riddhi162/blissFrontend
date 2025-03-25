// components/HeroBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = ({ image, title, breadcrumbs }) => {
  return (
    <div className="relative w-full h-[600px]  flex items-center justify-center">
      
    {/* Background Image */}
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-[100%] object-cover"
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#072031]/30 via-[#1c2d37]/80 to-black/100" />
  
    {/* Content */}
    <div className="relative z-10 text-center text-white px-4">
      <nav className="mb-2 text-sm md:text-base flex justify-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {crumb.to ? (
              <Link to={crumb.to} className="hover:underline">{crumb.label}</Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </nav>
  
      <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
    </div>
  
  </div>
  
  );
};

export default HeroBanner;
