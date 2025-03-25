import React from "react";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider3.jpg'; // Replace with an appropriate image

const TermsAndConditions = () => {
  return (
    <div className="bg-primary-darker">
      <HeroBanner
        image={contactImage}
        title="Terms and Conditions"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms and Conditions' }
        ]}
      />
      
      <div className="container mx-auto px-20 py-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header section */}
          <div className="p-8 bg-[#1c2d37] text-white">
            <h1 className="text-3xl font-bold mb-2">BLISS Consulting Website Terms and Conditions</h1>
            <div className="w-24 h-[2px] bg-primary-accent mb-4"></div>
            <p className="text-gray-200">Last updated: 17 March 2024</p>
          </div>
          
          {/* Content section */}
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="mb-6 text-lg">
                These terms and conditions outline the rules and regulations for the use of the BLISS Consulting website, located at https://www.blissconsulting.ro/.
              </p>
              
              <p className="mb-4">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use BLISS Consulting's website if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Terminology</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>"Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions.</li>
                  <li>"The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.</li>
                  <li>"Party", "Parties", or "Us", refers to both the Client and ourselves.</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Cookies Policy</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  This Cookies Policy is intended to provide you with clear and comprehensive information about the cookies we use and the purposes for using them on the BLISS Consulting website, in compliance with the latest guidance provided by EU Supervisory Authorities.
                </p>
                <h3 className="font-semibold mt-4 mb-2">What are cookies?</h3>
                <p>
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work or improve the efficiency of a website, as well as to provide reporting information and assist with personalized advertising.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Types of cookies we use:</h3>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as page navigation and access to secure areas of the website.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> These cookies allow us to analyze how visitors use our website, using Google Analytics to track usage trends and gather demographic information.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> These cookies track visitors across websites to display relevant and engaging ads.
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">License</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  Unless otherwise stated, BLISS Consulting and/or its licensors own the intellectual property rights for all material on BLISS Consulting. All intellectual property rights are reserved.
                </p>
                <h3 className="font-semibold mt-4 mb-2">Restrictions:</h3>
                <ul className="list-disc pl-6">
                  <li>Republish material from BLISS Consulting</li>
                  <li>Sell, rent or sub-license material from BLISS Consulting</li>
                  <li>Reproduce, duplicate or copy material from BLISS Consulting</li>
                  <li>Redistribute content from BLISS Consulting</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Hyperlinking to Our Content</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  The following organizations may link to our Website without prior written approval:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Government agencies</li>
                  <li>Search engines</li>
                  <li>News organizations</li>
                  <li>Online directory distributors</li>
                  <li>System wide Accredited Businesses</li>
                </ul>
                <p className="mt-4">
                  Links must: (a) not be deceptive; (b) not falsely imply sponsorship or endorsement; (c) fit within the context of the linking party's site.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Content Liability</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims arising on your Website. No links should appear that may be interpreted as libelous, obscene, criminal, or violating third-party rights.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Disclaimer</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and its use. As long as the website and services are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Contact Information</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  For any questions regarding these terms and conditions, please contact us at: 
                  <a 
                    href="mailto:business@blissconsulting.ro" 
                    className="text-primary-accent hover:underline ml-2"
                  >
                    business@blissconsulting.ro
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;