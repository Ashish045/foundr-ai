'use client';

import { useState } from 'react';

export default function VendorSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Mock vendor data
  const vendors = [
    {
      id: 1,
      name: 'ABC Manufacturing Co.',
      category: 'manufacturing',
      location: 'Mumbai',
      rating: 4.5,
      verified: true,
      description: 'Leading manufacturer of industrial equipment and machinery parts.',
      contact: '+91-98765-43210',
      email: 'info@abcmanufacturing.com',
      responseTime: '2-4 hours'
    },
    {
      id: 2,
      name: 'Tech Solutions Ltd.',
      category: 'technology',
      location: 'Bangalore',
      rating: 4.8,
      verified: true,
      description: 'IT solutions and software development services.',
      contact: '+91-98765-43211',
      email: 'contact@techsolutions.com',
      responseTime: '1-2 hours'
    },
    {
      id: 3,
      name: 'Green Energy Suppliers',
      category: 'energy',
      location: 'Delhi',
      rating: 4.2,
      verified: false,
      description: 'Renewable energy solutions and solar panel suppliers.',
      contact: '+91-98765-43212',
      email: 'sales@greenenergy.com',
      responseTime: '4-6 hours'
    },
    {
      id: 4,
      name: 'Quality Textiles',
      category: 'textiles',
      location: 'Chennai',
      rating: 4.6,
      verified: true,
      description: 'Premium textile manufacturing and wholesale suppliers.',
      contact: '+91-98765-43213',
      email: 'info@qualitytextiles.com',
      responseTime: '3-5 hours'
    },
    {
      id: 5,
      name: 'Digital Marketing Pro',
      category: 'marketing',
      location: 'Hyderabad',
      rating: 4.7,
      verified: true,
      description: 'Digital marketing and SEO services for businesses.',
      contact: '+91-98765-43214',
      email: 'hello@digitalmarketingpro.com',
      responseTime: '1-3 hours'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology' },
    { value: 'energy', label: 'Energy' },
    { value: 'textiles', label: 'Textiles' },
    { value: 'marketing', label: 'Marketing' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Hyderabad', label: 'Hyderabad' }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || vendor.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleContactVendor = (vendor) => {
    alert(`Contacting ${vendor.name}...\nPhone: ${vendor.contact}\nEmail: ${vendor.email}`);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Vendor Search</h2>
        <p className="text-gray-600">Find reliable suppliers and vendors for your business needs</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search vendors by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {locations.map(location => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Found {filteredVendors.length} vendors
          </h3>
        </div>

        {filteredVendors.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No vendors found matching your criteria.</p>
            <p className="text-sm mt-2">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map(vendor => (
              <div key={vendor.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">{vendor.name}</h4>
                  {vendor.verified && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{vendor.rating}</span>
                </div>

                <p className="text-gray-600 text-sm mb-3">{vendor.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div>📍 {vendor.location}</div>
                  <div>⏱️ Response: {vendor.responseTime}</div>
                </div>

                <button
                  onClick={() => handleContactVendor(vendor)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Contact Vendor
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 