import React from 'react';
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider3.jpg';
import QuoteSection from "../components/common/QuoteSection";
const Contact = () => {
  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };
  return (
    <div className='flex flex-col bg-primary-darker'>
      <div>
        <HeroBanner
          image={contactImage}
          title="Contact Us"
          breadcrumbs={[
            { label: 'Home', to: '/' },
            { label: 'Contact' }
          ]}
        />
      </div>
      
      {/* Main Content Container */}
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
               <QuoteSection {...serviceQuoteProps} />
            
     
        {/* Header Section */}
        

        {/* Three Column Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Contact Form Column */}
          <div className='lg:col-span-2 bg-white/40 p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-[#1c2d37] mb-4'>CONTACT US</h3>
            <form>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter Name*" 
                    className='w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#e5cb6b]'
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter E-Mail*" 
                    className='w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#e5cb6b]'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <select className='w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#e5cb6b] text-gray-500'>
                    <option>Your Subject</option>
                    <option>Support</option>
                    <option>Inquiry</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Enter Number*" 
                    className='w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#e5cb6b]'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <textarea 
                  placeholder="Write a short meassage..." 
                  rows={6} 
                  className='w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-[#e5cb6b]'
                ></textarea>
              </div>
              <div className='mb-4 flex items-center'>
                <input type="checkbox" id="terms" className='mr-2' />
                <label htmlFor="terms" className='text-sm text-gray-500'>I accept all terms & conditions.</label>
              </div>
              <button 
                type="submit" 
                className='bg-[#1c2d37] text-white py-3 px-6 rounded-md hover:bg-[#e5cb6b] transition duration-300'
              >
                Submit Now
              </button>
            </form>
          </div>
          
          {/* Contact Info Column */}
          <div className='bg-[#1c2d37] text-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-8'>GET IN TOUCH</h3>
            <div className='space-y-8'>
              <div className='flex'>
                <div className='bg-[#e5cb6b] p-4 rounded-full w-12 h-12 flex items-center justify-center mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-medium'>Call us Anytime</h4>
                  <p className='text-[#a4b5ba]'>+123 - (4567) - 890</p>
                </div>
              </div>
              
              <div className='flex'>
                <div className='bg-[#e5cb6b] p-4 rounded-full w-12 h-12 flex items-center justify-center mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-medium'>E-Mail us</h4>
                  <p className='text-[#a4b5ba]'>example@gmail.com</p>
                </div>
              </div>
              
              <div className='flex'>
                <div className='bg-[#e5cb6b] p-4 rounded-full w-12 h-12 flex items-center justify-center mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className='text-lg font-medium'>Our Location</h4>
                  <p className='text-[#a4b5ba]'>123 Business Avenue, NYC</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className='mt-12'>
                <h4 className='text-lg font-medium mb-4'>Follow Us</h4>
                <div className='flex space-x-3'>
                  <a href="#" className='bg-[#a4b5ba] hover:bg-[#e5cb6b] transition-colors duration-300 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1c2d37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className='bg-[#a4b5ba] hover:bg-[#e5cb6b] transition-colors duration-300 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1c2d37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className='bg-[#a4b5ba] hover:bg-[#e5cb6b] transition-colors duration-300 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1c2d37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className='bg-[#a4b5ba] hover:bg-[#e5cb6b] transition-colors duration-300 p-2 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1c2d37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className='mt-12'>
          <div className='w-full h-96 bg-gray-300 rounded-lg overflow-hidden'>
            {/* Replace with actual Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30599544424!2d-74.25986818595156!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647881282706!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border: 0}}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;