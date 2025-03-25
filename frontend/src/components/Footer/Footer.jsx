import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logolight.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-darkest text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="mr-3">
                <img src={logo} alt="BLISS Consulting" className="h-24 w-auto" />
              </div>
              
            </div>
            <p className="text-gray-300 mb-2">Management Services BLISS SRL</p>
            <p className="text-gray-300 mb-2">075100 Otopeni</p>
            <p className="text-gray-300 mb-2">Ilfov Romania</p>
            <p className="text-gray-300 mb-2">RO18268740</p>
            <p className="text-gray-300 mb-4">J23/6511/2023</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#e5cb6b]/20 flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#e5cb6b]/20  flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#e5cb6b]/20  flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#e5cb6b]/20  flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Menu */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Menu</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home Page</Link></li>
              <li><Link to="/markets" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/library" className="text-gray-300 hover:text-white transition-colors">Library</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">News & Blog</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Explore & Newsletter */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 mb-10">
              <li><Link to="/gdpr" className="text-gray-300 hover:text-white transition-colors">GDPR</Link></li>
              <li><Link to="/tnc" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
            
            {/* Newsletter */}
            <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-6">Stay up to date with our latest news and products.</p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter Your Mail" 
                  className="w-full px-4 py-3 bg-[#d9d9d9]/20 border border-gray-700 rounded-md focus:outline-none focus:border-white"
                />
              </div>
              
              <div className="flex items-center">
                <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key">
                  {/* This is a placeholder for reCAPTCHA. You'll need to implement actual reCAPTCHA functionality */}
                  <div className="border border-gray-600 p-4 mb-4 flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-300">I'm not a robot</span>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-orange-500 text-white font-medium py-3 px-6 rounded-md hover:bg-orange-600 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="w-16 h-16 rounded-full bg-[#d9d9d9]/10 flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;