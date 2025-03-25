import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const CurvedLine = ({ className }) => (
  <svg 
    viewBox="0 0 100 50" 
    className={className}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0 50C25 50 75 50 100 0" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      strokeLinecap="round"
    />
  </svg>
);

const CircularRipple = ({ position }) => {
  const rings = [1, 2, 3, 4];
  
  return (
    <div className={`absolute ${position} w-[700px] h-[700px]`}>
      {rings.map((ring) => (
        <motion.div
          key={ring}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 1, 1.2],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: ring * 10,
            ease: "easeOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div 
            className="border border-primary-accent/20 rounded-full"
            style={{
              width: '100%',
              height: '100%',
              filter: 'blur(1px)'
            }}
          />
        </motion.div>
      ))}
      {/* Center point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary-accent rounded-full" />
    </div>
  );
};
const Library = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth animation
      once: true,     // animate only once
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const libraryData = [
    {
      "id": 1,
      "title": "Emphasizes the importance of continuous learning and intellectual",
      "image": "../../assests/slider1.jpg",
      "date": "June 9, 2024",
      "category": "Property",
      "details": "Relar Residence promotes sustainable transportation options, with dedicated spaces. Welcome to Realar Residence, where sustainability meets comfort in every corner. In this blog post, we'll explore the green innovations seamlessly integrated into the fabric of EcoLand, creating a unique...",
      "author": "Realar"
    },
    {
      "id": 2,
      "title": "Modern Housing Solutions for Urban Areas",
      "image": "../../assests/slider1.jpg",
      "date": "May 15, 2024",
      "category": "Modern Houses",
      "details": "Exploring contemporary housing solutions designed for urban environments, with a focus on maximizing space and minimizing environmental impact...",
      "author": "Admin"
    },
    {
      "id": 3,
      "title": "Apartment Living in 2024",
      "image": "../../assests/slider1.jpg",
      "date": "April 22, 2024",
      "category": "Apartment",
      "details": "Discover the latest trends in apartment design and functionality, making the most of limited space while ensuring comfort and style...",
      "author": "Admin"
    },
    {
      "id": 4,
      "title": "Banglow Designs for Suburban Living",
      "image": "../../assests/slider1.jpg",
      "date": "March 10, 2024",
      "category": "Banglow",
      "details": "Explore beautiful banglow designs that combine traditional charm with modern amenities, perfect for comfortable suburban living...",
      "author": "Admin"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'Property', label: 'Property' },
    { id: 'Modern Houses', label: 'Modern Houses' },
    { id: 'Apartment', label: 'Apartment' },
    { id: 'Banglow', label: 'Banglow' }
  ];

  const filteredResources = activeCategory === 'all' 
    ? libraryData 
    : libraryData.filter(resource => resource.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[rgb(28,45,55)] via-[rgb(43,70,85)] to-black relative overflow-hidden">
      {/* Background Elements (from original component) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bottom Left Ripple */}
        <CircularRipple position="-bottom-[300px] -left-[300px]" />
        
        {/* Top Right Ripple */}
        <CircularRipple position="-top-[300px] -right-[300px]" />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-start mb-12">
          <h2 className="font-heading text-5xl text-[#a4b5ba] font-bold mb-4">Library Resources</h2>
          <p className="font-body text-[#c6dae0] text-lg">Explore our latest insights and articles</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-start gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-accent text-white shadow-lg shadow-primary-accent/20'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-right">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                    {resource.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-accent transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {resource.details}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="text-gray-500">{resource.date}</span>
                      <span className="text-gray-500">By {resource.author}</span>
                    </div>
                    <Link 
                      to={`/library/${resource.id}`} 
                      className="text-primary-accent hover:text-primary-darker font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Library