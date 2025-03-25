import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBalanceScale, 
  FaGavel, 
  FaHome, 
  FaSearch, 
  FaChartLine, 
  FaShieldAlt, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCoins 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the services data
import servicesData from '../../data/serviceData.json'; // Adjust the import path as needed

// Mapping of icons to services
const serviceIcons = {
  'Investment Strategies': <FaChartLine size={40} />,
  'Financial Planning': <FaCoins size={40} />,
  'Retirement Planning': <FaHome size={40} />,
  'Estate Planning': <FaBalanceScale size={40} />,
  'Tax Planning': <FaGavel size={40} />,
  'Risk Management': <FaShieldAlt size={40} />,
  'Education Funding': <FaGraduationCap size={40} />,
  'Business Consultation': <FaBriefcase size={40} />,
  'Wealth Management': <FaCoins size={40} />
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#1c2d37]">
      <div className='max-w-[1400px] flex justify-center items-center bg-[#a4b5ba] h-[150px] 
        mx-auto px-4 sm:px-6 lg:px-8 
        rounded-b-[100px] sm:rounded-b-[100px] md:rounded-b-[100px] lg:rounded-b-[100px]
        max-sm:rounded-b-none'>
        <div className="flex items-center justify-center border-2 w-[62.3%] bg-white rounded-full shadow-lg overflow-hidden">
          <div className="bg-[#1c2d37] text-white px-6 py-4 rounded-l-full font-bold">
            Property Search
          </div>

          <div className="flex items-center px-4">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-gray-700"
            />
          </div>

          <div className="flex items-center px-4 border-l border-gray-300">
            <span className="text-gray-700">Category</span>
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          <div className="flex items-center px-4 border-l border-gray-300">
            <span className="text-gray-700">Location</span>
            <FaSearch className="text-gray-500 ml-2" />
          </div>

          <button className="bg-[#1c2d37] text-white px-6 py-4 rounded-r-full flex items-center">
            <FaSearch className="mr-2" />
            Search Property
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl text-[#e5cb6b] mb-2 pt-32">OUR SERVICES</h2>
        <h3 className="text-xl text-white mb-12">
          We're committed to discovering the perfect property for you
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id}
              className="no-underline"
            >
              <div
                className="border-[0.01rem] border-gray-300/40 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 hover:bg-gray-800/50 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-[#e5cb6b] mb-4 border-[1px] p-4 rounded-full transition-transform duration-500 hover:transform hover:scale-x-[-1]">
                  {serviceIcons[service.title] || <FaHome size={40} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 hover:text-[#e5cb6b]">
                  {service.title}
                </h4>
                <p className="text-gray-300 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;