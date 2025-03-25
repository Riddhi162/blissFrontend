import React, { useState } from "react";
import HeroBanner from '../components/common/HeroBanner';
import contactImage from '../../assests/slider1.jpg';
import blogsData from "../data/libraryData.json";
import { Link } from "react-router-dom";
import QuoteSection from "../components/common/QuoteSection";

const Library = () => {
  const serviceQuoteProps = {
    primaryQuote: "We don't just provide services, we deliver experiences that exceed expectations.",
    secondaryQuote: "Each solution is crafted with precision, expertise, and a deep understanding of your needs.",
    bgColor: "bg-primary-main",
    textColor: "text-primary-darkest",
    accentColor: "text-primary-accent"
  };

  // Normalize blog data
  const normalizedBlogs = blogsData.map(blog => ({
    id: blog.id,
    title: blog.title || blog.name || "Untitled Blog",
    image: blog.image,
    date: blog.date,
    category: blog.category,
    details: blog.details,
    author: blog.author || "Admin"
  }));

  const [blogs] = useState(normalizedBlogs);
  const categories = [
    { name: "Apartment", count: 1 },
    { name: "Banglow", count: 2 },
    { name: "Modern Houses", count: 3 },
    { name: "Property", count: 5 },
    { name: "Real Estate", count: 5 }
  ];

  // State for filter and search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  // Handler functions remain the same
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategorySelect = (category) => setSelectedCategory(category === selectedCategory ? "" : category);
  const handleSortChange = () => setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSortOrder("desc");
  };
  const isFilterActive = searchTerm !== "" || selectedCategory !== "";

  // Filter and sort blogs
  const filteredBlogs = blogs
    .filter(blog => 
      (selectedCategory === "" || blog.category === selectedCategory) &&
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       blog.details.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen">
      <HeroBanner
        image={contactImage}
        title="Library"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Library' }
        ]}
      />
      
      <div className="w-full bg-primary-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          <QuoteSection {...serviceQuoteProps} />
          
          {/* Filter Section - Moved to top */}
          <div className="mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search and Sort Bar */}
              <div className="w-full lg:w-2/3 bg-primary-darkest rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Search blogs..." 
                      className="w-full bg-gray-700 text-white p-3 sm:p-4 pr-10 rounded-lg"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handleSortChange}
                      className="text-white text-sm whitespace-nowrap flex items-center px-4 py-2 bg-gray-700 rounded-lg"
                    >
                      Sort: {sortOrder === "desc" ? "Newest" : "Oldest"} 
                      <i className={`ml-2 fas fa-arrow-${sortOrder === "desc" ? "down" : "up"}`}></i>
                    </button>
                    {isFilterActive && (
                      <button 
                        onClick={clearFilters}
                        className="text-blue-300 text-sm hover:text-blue-200 whitespace-nowrap"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Categories Dropdown */}
              <div className="w-full lg:w-1/3 bg-primary-darkest rounded-xl p-4 sm:p-6">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategorySelect(e.target.value)}
                    className="w-full bg-gray-700 text-white p-3 sm:p-4 rounded-lg appearance-none"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.name}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => (
                <Link 
                  key={blog.id} 
                  to={`/library/${blog.id}`}
                  className="block h-full transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/600x400?text=Blog+Image";
                        }}
                      />
                    </div>
                    <div className="p-4 sm:p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="mr-3">
                          <i className="fas fa-user mr-1"></i> {blog.author}
                        </span>
                        <span>
                          <i className="far fa-calendar mr-1"></i> {blog.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                      <p className="text-gray-700 mb-4 line-clamp-2">{blog.details}</p>
                      <div className="mt-auto">
                        <button className="px-6 py-2 border border-primary-darkest text-primary-darkest rounded-full hover:bg-primary-darkest hover:text-white transition-colors">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-gray-100 rounded-lg">
                <p className="text-lg text-gray-600 mb-4">No blog posts found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className="px-6 py-2 bg-primary-accent text-white rounded-lg hover:bg-primary-accent/90"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;