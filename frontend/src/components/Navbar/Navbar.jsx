import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../assests/logolight.png'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [currentLink, setCurrentLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState('ro');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Services data - extracted from your servicesData.json
  const services = [
    { id: 1, title: "Business Matchmaking", to: "/services/1" },
    { id: 2, title: "Commercial Real Estate", to: "/services/2" },
    { id: 3, title: "Residential Real Estate", to: "/services/3" },
    { id: 4, title: "Expatriate Support Services", to: "/services/4" },
    { id: 5, title: "Information and Communications Technology", to: "/services/5" },
    { id: 6, title: "Marketing Consulting Services", to: "/services/6" },
    { id: 7, title: "Financial Services", to: "/services/7" },
    { id: 8, title: "Taxes and Legislation", to: "/services/8" },
    { id: 9, title: "Human Resources", to: "/services/9" },
    { id: 10, title: "Mobility Solutions in Transportation", to: "/services/10" },
    { id: 11, title: "Translation Services for Companies", to: "/services/11" }
  ];

  // Other nav links
  const navLinks = [
    { id: 1, text: 'Marketplace', to: '/markets' },
    { id: 2, text: 'Events', to: '/events' },
    { id: 3, text: 'Library', to: '/library' },
    { id: 4, text: 'News', to: '/news' },
    { id: 5, text: 'About', to: '/about' },
    { id: 6, text: 'Contact', to: '/contact' },
    { id: 7, text: 'Partners', to: '/partners' },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-screen z-50 transition-all duration-300 bg-[#1c2d37] shadow-xl shadow-white/5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white tracking-wider hover:text-primary-main transition-colors">
                <div className="mb-4">
                  <img src={logo} alt="Logo" className="h-16 mt-4 w-auto" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileSidebarOpen(true)}
                className="text-white"
              >
                <FaBars size={24} />
              </button>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden md:block">
              <div className="ml-10">
                <div className="flex items-center">
                  {navLinks.map((link, index) => (
                    <React.Fragment key={link.id}>
                      <div className="relative group">
                        <Link 
                          to={link.to}
                          className="relative px-6 py-2 text-base font-medium text-white hover:text-primary-lighter transition-colors"
                          onMouseEnter={() => setCurrentLink(link.id)}
                          onMouseLeave={() => setCurrentLink(null)}
                        >
                          {link.text}
                          {currentLink === link.id && (
                            <motion.div
                              layoutId="navBall"
                              className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                              style={{ x: '-50%' }}
                              transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            />
                          )}
                        </Link>
                      </div>
                      {index < navLinks.length - 1 && (
                        <div className="h-5 w-[1px] bg-white/20" />
                      )}
                    </React.Fragment>
                  ))}
                  
                  {/* Services Dropdown */}
                  <div className="relative group">
                    <button 
                      className="relative px-6 py-2 text-base font-medium text-white hover:text-primary-lighter transition-colors flex items-center"
                      onMouseEnter={() => {
                        setCurrentLink(8);
                        setIsServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        setCurrentLink(null);
                        setIsServicesOpen(false);
                      }}
                    >
                      Services
                      {isServicesOpen ? (
                        <FaChevronUp className="ml-1" size={14} />
                      ) : (
                        <FaChevronDown className="ml-1" size={14} />
                      )}
                      {currentLink === 8 && (
                        <motion.div
                          layoutId="navBall"
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                          style={{ x: '-50%' }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div 
                        className="absolute left-0 mt-0 w-64 bg-[#1c2d37] shadow-lg rounded-b-lg border-t-2 border-primary-accent z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <Link
        to="/services"
        className="block px-4 py-3 text-primary-accent font-medium hover:bg-white/10 transition-colors border-t border-white/10"
      >
        See All Services
      </Link>

                        <div className="max-h-96 overflow-y-auto">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={service.to}
                              className="block px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setActiveLang('ro')}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all duration-300 ${
                  activeLang === 'ro'
                    ? 'bg-primary-accent text-white shadow-lg shadow-primary-accent/20'
                    : isScrolled
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white/50 text-white hover:bg-white/20'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setActiveLang('eng')}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all duration-300 ${
                  activeLang === 'eng'
                    ? 'bg-primary-accent text-white shadow-lg shadow-primary-accent/20'
                    : isScrolled
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white/50 text-white hover:bg-white/20'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#1c2d37] z-[60] shadow-2xl"
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <button 
                  onClick={closeSidebar}
                  className="text-white"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.id}
                    to={link.to}
                    onClick={closeSidebar}
                    className="block py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <span>Services</span>
                    {isMobileServicesOpen ? (
                      <FaChevronUp size={14} />
                    ) : (
                      <FaChevronDown size={14} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-2 space-y-2 max-h-60 overflow-y-auto">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={service.to}
                              onClick={closeSidebar}
                              className="block py-2 px-4 text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile Language Toggle */}
              <div className="mt-8 flex space-x-2 justify-center">
                <button
                  onClick={() => {
                    setActiveLang('ro');
                    closeSidebar();
                  }}
                  className={`px-4 py-2 rounded transition-all duration-300 ${
                    activeLang === 'ro'
                      ? 'bg-primary-accent text-white'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  RO
                </button>
                <button
                  onClick={() => {
                    setActiveLang('eng');
                    closeSidebar();
                  }}
                  className={`px-4 py-2 rounded transition-all duration-300 ${
                    activeLang === 'eng'
                      ? 'bg-primary-accent text-white'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  ENG
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Overlay */}
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black z-50"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;