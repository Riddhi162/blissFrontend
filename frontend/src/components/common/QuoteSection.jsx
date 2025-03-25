import React from 'react';
import PropTypes from 'prop-types';

const QuoteSection = ({ 
  primaryQuote,
  secondaryQuote,
  bgColor,
  textColor,
  accentColor
}) => {
  return (
    <div className={`relative py-16 `}>
      {/* Left decorative quote mark */}
      <div className="absolute top-6 left-1/2 transform -translate-x-36 md:-translate-x-64 -translate-y-1/2">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${accentColor} opacity-40`}>
          <path d="M10 11H6.5C4.5 11 4.5 9 4.5 9C4.5 7 6.5 7 6.5 7H8.5V5H6.5C3.5 5 2.5 8 2.5 9C2.5 10 2.5 13 6.5 13H10V11Z" fill="currentColor"/>
          <path d="M21.5 9C21.5 8 21.5 5 17.5 5H14V7H16C16 7 18 7 18 9C18 11 16 11 16 11H14V19H16V13C16 13 21.5 13 21.5 9Z" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Right decorative quote mark */}
      <div className="absolute bottom-6 right-1/2 transform translate-x-36 md:translate-x-64 translate-y-1/2 rotate-180">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${accentColor} opacity-40`}>
          <path d="M10 11H6.5C4.5 11 4.5 9 4.5 9C4.5 7 6.5 7 6.5 7H8.5V5H6.5C3.5 5 2.5 8 2.5 9C2.5 10 2.5 13 6.5 13H10V11Z" fill="currentColor"/>
          <path d="M21.5 9C21.5 8 21.5 5 17.5 5H14V7H16C16 7 18 7 18 9C18 11 16 11 16 11H14V19H16V13C16 13 21.5 13 21.5 9Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        {/* Decorative line */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 ${accentColor.replace('text-', 'bg-')}`}></div>
        
        <blockquote className="mt-8">
          <p className={`text-2xl md:text-3xl font-serif italic ${textColor} leading-relaxed`}>
            {primaryQuote}
          </p>
          {secondaryQuote && (
            <p className={`mt-4 text-xl md:text-2xl font-serif italic ${textColor}`}>
              {secondaryQuote}
            </p>
          )}
        </blockquote>
        
        {/* Decorative line */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 ${accentColor.replace('text-', 'bg-')}`}></div>
      </div>
    </div>
  );
};

// Default props
QuoteSection.defaultProps = {
  primaryQuote: "Excellence is not a skill. It's an attitude that transforms ordinary services into extraordinary experiences.",
  secondaryQuote: "Our commitment is to exceed your expectations, every step of the way.",
  bgColor: "bg-primary-main",
  textColor: "text-primary-darkest",
  accentColor: "text-primary-accent"
};

// PropTypes for better documentation and type checking
QuoteSection.propTypes = {
  primaryQuote: PropTypes.string,
  secondaryQuote: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  accentColor: PropTypes.string
};

export default QuoteSection;