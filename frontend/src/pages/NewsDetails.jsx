import React from "react";
import { useParams, Link } from "react-router-dom";
import newsData from '../data/newsData.json';
import HeroBanner from '../components/common/HeroBanner';
import { ChevronLeft } from "lucide-react";

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find(article => article.id === parseInt(id));
  if (!news) {
    return <div className="flex items-center justify-center min-h-screen bg-primary-darkest">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-primary-darkest">News article not found!</h2>
        <Link to="/news" className="mt-4 inline-block text-primary-accent hover:underline">
          Return to News
        </Link>
      </div>
    </div>;
  }

  return (
    <div className="bg-primary-darkest min-h-screen">
      <HeroBanner
        image={news.image}
        title={news.title}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: news.title }
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Decorative element */}
        <div className="relative mb-10">
          <div className="absolute -top-6 left-0 w-24 h-2 bg-primary-accent rounded-full"></div>
          <h2 className="text-4xl font-bold text-white mb-2">{news.title}</h2>
          <p className="text-xl text-primary-main italic">{news.industry}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/20">
          {/* News metadata with decorative element */}
          <div className="relative mb-10 p-6 rounded-lg bg-white/5">
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-primary-accent"></div>
            
            <div className="flex flex-wrap items-center gap-8 text-primary-main">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>{news.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>{news.date}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-3l-4 4-4-4H5a2 2 0 01-2-2V5z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>{news.language}</span>
              </div>
            </div>
          </div>
          
          {/* Main content with decorative elements */}
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary-accent flex items-center justify-center text-primary-darkest font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                </svg>
              </div>
              
              <div className="ml-8 border-l-2 border-primary-accent pl-6 pb-2">
                <div className="prose prose-invert max-w-none">
                  <p className="text-primary-main leading-relaxed mb-6">{news.description}</p>
                  
                  {news.details.map((detail, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-2xl font-semibold text-white mb-3">{detail.subtitle}</h3>
                      <p className="text-primary-main leading-relaxed">{detail.subdetails}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA section with decoration */}
          <div className="mt-12 pt-6 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 rounded-full bg-primary-darkest border-4 border-primary-accent flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-accent rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-primary-lighter mb-4">Want to explore more news?</h4>
              <div className="inline-block">
                <Link to="/contact" className="px-8 py-3 bg-primary-accent text-primary-darkest font-bold rounded-lg hover:bg-primary-lighter transition-colors duration-300">
                  Subscribe to Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back navigation with decoration */}
        <div className="mt-10">
          <Link to="/news" className="inline-flex items-center group">
            <span className="w-8 h-8 rounded-full bg-primary-accent text-primary-darkest flex items-center justify-center mr-2 group-hover:bg-primary-lighter transition-colors duration-300">
              <ChevronLeft size={16} />
            </span>
            <span className="text-primary-main group-hover:text-primary-lighter transition-colors duration-300">Back to News</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;