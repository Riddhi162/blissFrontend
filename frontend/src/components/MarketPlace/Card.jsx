import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaChartBar, 
  FaLightbulb, 
  FaShieldAlt, 
  FaHandshake 
} from 'react-icons/fa'

const getTagIcon = (tag) => {
  const icons = {
    'Business Strategy': FaBriefcase,
    'Technology': FaLaptopCode,
    'Consulting': FaHandshake,
    'Analytics': FaChartBar,
    'Innovation': FaLightbulb,
    'Security': FaShieldAlt,
  }
  const IconComponent = icons[tag] || FaBriefcase
  return <IconComponent className="w-12 h-12 text-primary-accent" />
}

const Card = ({ image, date, tag, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-primary-main rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image with hover overlay */}
      <div className="relative h-52 overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay that slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-gray-900/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tag Section */}
        <div className="flex items-center mb-4 pb-4 ">
          {/* Left half - Icon */}
          <div className="w-1/3 flex justify-start pl-2 pr-4 border-r border-slate-300">
            {getTagIcon(tag)}
          </div>
          {/* Right half - Tag name */}
          <div className="w-2/3 pl-6">
            <h4 className="text-2xl font-black text-primary-darkest tracking-wide">{tag}</h4>
          </div>
        </div>

        {/* Date */}
        <div className="text-sm text-gray-500 mb-3">
          {date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-primary-darkest mb-3">
          {title}
        </h3>

        {/* Description with expand/collapse */}
        <div className="relative border-t border-slate-300">
          <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-primary-darker hover:text-primary-darker font-medium flex items-center "
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <svg 
                className={`ml-1 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card 