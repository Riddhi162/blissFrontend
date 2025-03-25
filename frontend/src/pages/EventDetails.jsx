import React from "react";
import { useParams, Link } from "react-router-dom";
import eventData from "../data/eventsData.json";
import HeroBanner from '../components/common/HeroBanner';
import { ChevronLeft, MapPin, Calendar, Clock, Users, ArrowRight } from "lucide-react";
import contactImage from '../../assests/slider1.jpg';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventData.find(item => item.id === parseInt(id));

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-darkest">
        <div className="text-center p-10 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-primary-darkest">Event not found!</h2>
          <Link to="/events" className="mt-4 inline-block text-primary-accent hover:underline">
            Return to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-darkest min-h-screen">
      <HeroBanner
        image={contactImage} // Using the default contactImage since event.image isn't in your data
        title={event.name}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Events', to: '/events' },
          { label: event.name }
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Decorative element */}
        <div className="relative mb-10">
          <div className="absolute -top-6 left-0 w-24 h-2 bg-primary-accent rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-2">{event.name}</h2>
          <p className="text-xl text-primary-main italic">{event.industry}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20">
          {/* Event metadata */}
          <div className="relative mb-10 p-6 rounded-lg bg-white/5">
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-primary-accent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-primary-main">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-lighter">Date</p>
                  <p>{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-lighter">Time</p>
                  <p>{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-primary-lighter">Location</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event details sections */}
          <div className="space-y-12">
            {event.details.map((detail, index) => (
              <div key={index} className="relative">
                {/* Decorative vector */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest font-bold">
                  {index + 1}
                </div>
                
                <div className="ml-8 border-l-2 border-primary-accent pl-6 pb-6">
                  <h3 className="text-2xl font-bold text-primary-lighter mb-4">{detail.subheading}</h3>
                  <p className="text-primary-main leading-relaxed">{detail.subdetails}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="mt-12 pt-6 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-primary-darkest border-4 border-primary-accent flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-primary-accent" />
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-lighter mb-4">Interested in attending this event?</h4>
              <div className="inline-block">
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-primary-accent text-primary-darkest font-bold rounded-lg hover:bg-primary-lighter transition-colors duration-300 inline-flex items-center"
                >
                  Register Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back navigation */}
        <div className="mt-10">
          <Link 
            to="/events" 
            className="inline-flex items-center group text-primary-main hover:text-primary-lighter transition-colors duration-300"
          >
            <span className="w-8 h-8 rounded-full bg-primary-accent text-primary-darkest flex items-center justify-center mr-2 group-hover:bg-primary-lighter transition-colors duration-300">
              <ChevronLeft size={16} />
            </span>
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;