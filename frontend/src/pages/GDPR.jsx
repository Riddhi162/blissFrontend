import React from "react";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider3.jpg'; // You can replace with a more appropriate image

const GDPR = () => {
  return (
    <div className="bg-primary-darker">
      <HeroBanner
        image={contactImage}
        title="GDPR Policy"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'GDPR' }
        ]}
      />
      
      <div className="container mx-auto px-20 py-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header section */}
          <div className="p-8 bg-[#1c2d37] text-white">
            <h1 className="text-3xl font-bold mb-2">Protection of Personal Data - GDPR</h1>
            <div className="w-24 h-[2px] bg-primary-accent mb-4"></div>
            <p className="text-gray-200">Last updated: 17 March 2024</p>
          </div>
          
          {/* Content section */}
          <div className="p-8">
            <div className="prose max-w-none">
              <p className="mb-6 text-lg">
                At BLISS Consulting, we take data protection and privacy seriously. This GDPR (General Data Protection Regulation) description outlines how we collect, use, and protect personal data through our website and services. By using our website and services, you consent to the practices described herein.
              </p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Data Collection</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  We collect personal data such as name, email address, phone number, and company information when you voluntarily provide it to us through forms on our website or during communication with our team. Additionally, we may collect non-personal data such as IP addresses, browser information, and device information for analytical and security purposes.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Data Usage</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  Personal data collected is used to communicate with you, fulfill your requests for information or services, and improve our offerings. We may also use your information for marketing purposes, such as sending newsletters or promotional materials, but only if you have provided explicit consent to receive such communications.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Data Sharing</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  We do not sell or rent your personal data to third parties. Personal data may be shared with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Data Security</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  We implement appropriate technical and organizational measures to safeguard your personal data against unauthorized access, alteration, disclosure, or destruction. Despite our best efforts, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your data.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Data Retention</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  We retain personal data for as long as necessary to fulfill the purposes outlined in this GDPR description or as required by law. If you wish to have your personal data removed from our systems, please contact us using the information provided below.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Your Rights</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  You have the right to access, update, or delete your personal data held by us. You may also object to or restrict processing of your data. To exercise these rights or if you have any questions or concerns regarding our data processing practices, please contact us using the information provided below.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1c2d37] mb-3">Contact Information</h2>
                <div className="w-16 h-[2px] bg-primary-accent mb-4"></div>
                <p>
                  For inquiries regarding this GDPR description or our data practices, please contact us at: <a href="mailto:business@blissconsulting.ro" className="text-primary-accent hover:underline">business@blissconsulting.ro</a>
                </p>
              </div>
              
              <p className="text-sm text-gray-600 italic">
                This GDPR description is subject to periodic updates. Please review this page regularly to stay informed about our data processing practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPR;