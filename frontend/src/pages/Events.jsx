import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider1.jpg';
import eventData from '../data/eventsData.json';
import QuoteSection from "../components/common/QuoteSection";
import FilterSearchComponent from '../components/common/FilterSearchComponent';

const Events = () => {
  const location = useLocation();
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventType, setEventType] = useState('current');

  const serviceQuoteProps = {
    primaryQuote: "Join us for transformative experiences that inspire and connect.",
    secondaryQuote: "Our events are designed to bring people together for learning, networking, and growth.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };

  // Memoized filter function to prevent unnecessary re-renders
  const filterEventsByType = useCallback((events, type) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events.filter(event => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);

      if (type === 'past') return eventDate < today;
      if (type === 'future') return eventDate > today;
      return eventDate.getTime() === today.getTime();
    });
  }, []);

  // Reset scroll and initialize data
  useEffect(() => {
    window.scrollTo(0, 0);
    setAllEvents(eventData);
    const initialFiltered = filterEventsByType(eventData, 'current');
    setFilteredEvents(initialFiltered);
  }, [location.pathname, filterEventsByType]);

  const handleEventTypeChange = useCallback((type) => {
    setEventType(type);
    const filtered = filterEventsByType(allEvents, type);
    setFilteredEvents(filtered);
  }, [allEvents, filterEventsByType]);

  const handleFilteredData = useCallback((data) => {
    const filtered = filterEventsByType(data, eventType);
    setFilteredEvents(filtered);
  }, [eventType, filterEventsByType]);

  return (
    <div>
      <HeroBanner
        image={contactImage}
        title="Events"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Events' }
        ]}
      />
      
      <div className="container mx-auto px-4 sm:px-20 py-16 bg-primary-darker">
        <QuoteSection {...serviceQuoteProps} />
        
        <div className="mb-8">
          <FilterSearchComponent 
            data={allEvents} 
            onFilteredData={handleFilteredData} 
          />
        </div>
        
        {/* Event type selector buttons */}
        <div className="flex space-x-4 mb-8">
          {['current', 'past', 'future'].map((type) => (
            <button 
              key={type}
              onClick={() => handleEventTypeChange(type)}
              className={`px-4 py-2 rounded ${eventType === type ? 'bg-primary-accent text-white' : 'bg-gray-200'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Events
            </button>
          ))}
        </div>
        
        {/* Events list */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <div className="text-sm text-gray-500">{event.date}</div>
                    <h3 className="text-xl font-bold text-primary-darkest">{event.name}</h3>
                    <div className="text-primary-accent">{event.industry}</div>
                    <div className="text-gray-600">{event.time}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/events/${event.id}`} 
                      className="px-4 py-2 bg-primary-main text-white rounded hover:bg-primary-dark"
                    >
                      Info
                    </Link>
                    <button className="px-4 py-2 bg-secondary-main text-white rounded hover:bg-secondary-dark">
                      Directions
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              No {eventType} events found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;