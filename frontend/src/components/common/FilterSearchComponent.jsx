import React, { useState, useMemo, useEffect } from 'react';
import { Search, Grid, List, MapPin, Filter as FilterIcon, ChevronDown } from 'lucide-react';

const FilterSearchComponent = ({ data, onFilteredData }) => {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedScopes, setSelectedScopes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  
  // State for filter dropdown visibility
  const [openFilter, setOpenFilter] = useState(null);

  // Expanded list of industries
  const industries = [
    "Aerospace & Defense",
    "Agriculture & Forestry",
    "Automotive",
    "Business & Consumer Services",
    "Chemicals",
    "Construction",
    "Consumer",
    "Corporate Events",
    "Financial Services",
    "Foodservice",
    "Healthcare",
    "Industrial Goods & Machinery",
    "Mining",
    "Networking",
    "Oil & Gas",
    "Packaging",
    "Power & Utilities",
    "Real Estate",
    "Retail & Wholesale",
    "Sport",
    "Team Building",
    "Technology, Media & Telecom",
    "Transport, Infrastructure & Logistics",
    "Travel & Tourism"
  ];

  // Predefined list of languages
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Mandarin",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Russian",
    "Japanese"
  ];

  // Flatten the data if it's an object with multiple arrays
  const flattenedData = useMemo(() => {
    if (Array.isArray(data)) return data;
    return Object.values(data).flat();
  }, [data]);

  // Extract unique filter options from flattened data
  const filterOptions = useMemo(() => {
    return {
      industries: [...new Set([...industries])],
      scopes: [...new Set(flattenedData.map(item => item.scope))].filter(Boolean),
      types: [...new Set(flattenedData.map(item => item.type))].filter(Boolean),
      languages: [...new Set([...languages, ...flattenedData.map(item => item.language)])]
    };
  }, [flattenedData]);

  // Filter and search logic
  const filteredData = useMemo(() => {
    return flattenedData.filter(item => {
      // Search condition
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter conditions
      const matchesScope = selectedScopes.length === 0 || 
        selectedScopes.includes(item.scope);

      // Additional filters
      const matchesIndustry = selectedIndustries.length === 0 || 
        selectedIndustries.includes(item.industry);
      const matchesType = selectedTypes.length === 0 || 
        selectedTypes.includes(item.type);
      const matchesLanguage = selectedLanguages.length === 0 || 
        selectedLanguages.includes(item.language);

      return matchesSearch && 
             matchesScope && 
             matchesIndustry && 
             matchesType && 
             matchesLanguage;
    });
  }, [flattenedData, searchTerm, selectedIndustries, selectedScopes, selectedTypes, selectedLanguages]);

  // Call the callback when filtered data changes
  useEffect(() => {
    if (onFilteredData) {
      onFilteredData(filteredData);
    }
  }, [filteredData, onFilteredData]);

  // Toggle filter selection
  const toggleFilter = (filterState, setFilterState, value) => {
    setFilterState(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // Render filter dropdown
  const renderFilterDropdown = (title, options, selectedOptions, setSelectedOptions) => {
    return (
      <div className="relative ">
        <button 
          onClick={() => setOpenFilter(openFilter === title ? null : title)}
          className="w-full flex justify-between items-center p-3 bg-white/40 border-gray-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c2d37]/20 transition"
        >
          <div className="flex items-center">
            <FilterIcon className="mr-2 text-gray-600" size={20} />
            <span className="font-semibold">{title}</span>
            <span className="ml-2 text-sm text-gray-500">
              {selectedOptions.length > 0 ? `(${selectedOptions.length})` : ''}
            </span>
          </div>
          <ChevronDown className={`transform transition-transform ${openFilter === title ? 'rotate-180' : ''}`} size={20} />
        </button>
        
        {openFilter === title && (
          <div className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border rounded-lg shadow-lg mt-2 p-4">
            {options.map(option => (
              <label key={option} className="flex items-center mb-2 hover:bg-gray-50 p-2 rounded">
                <input 
                  type="checkbox" 
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleFilter(selectedOptions, setSelectedOptions, option)}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white/10 rounded-lg shadow-md p-6">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border bg-white/40 border-gray-300/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c2d37]/20"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      {/* Filter Dropdowns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {renderFilterDropdown("Industry", filterOptions.industries, selectedIndustries, setSelectedIndustries)}
        {renderFilterDropdown("Scope", filterOptions.scopes, selectedScopes, setSelectedScopes)}
        {renderFilterDropdown("Type", filterOptions.types, selectedTypes, setSelectedTypes)}
        {renderFilterDropdown("Language", filterOptions.languages, selectedLanguages, setSelectedLanguages)}
      </div>

      {/* Results Info */}
      <div className="text-sm text-gray-500 mb-4">
        {filteredData.length} results found
      </div>
    </div>
  );
};

export default FilterSearchComponent;