import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider3.jpg';
import newsData from '../data/newsData.json';
import QuoteSection from "../components/common/QuoteSection";
import FilterSearchComponent from '../components/common/FilterSearchComponent';
import { useState,useEffect } from "react";
const News = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darker",
    accentColor: "text-primary-accent"
  };
  useEffect(() => {
    setNews(newsData);
    setFilteredNews(newsData);
  }, []);

  // Callback function to update filtered markets
  const handleFilteredData = (data) => {
    setFilteredNews(data);
  };
  return (
    <div className="bg-primary-darkest min-h-screen">
      <HeroBanner
        image={contactImage}
        title="News & Blogs"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News' }
        ]}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <QuoteSection {...serviceQuoteProps} />
        
        {/* Add the FilterSearchComponent */}
        <div className="mb-8">
          <FilterSearchComponent 
            data={news} 
            onFilteredData={handleFilteredData} 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((newsItem) => (
            <Link
              to={`/news/${newsItem.id}`}
              key={newsItem.id}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <div className="relative">
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-accent text-primary-darkest px-3 py-1 rounded-full text-sm">
                    {newsItem.industry}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-accent transition-colors line-clamp-2">
                    {newsItem.title}
                  </h3>
                  <p className="text-primary-main mb-4 line-clamp-3 flex-grow">
                    {newsItem.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-primary-lighter text-sm mt-auto">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {newsItem.name}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {newsItem.date}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;