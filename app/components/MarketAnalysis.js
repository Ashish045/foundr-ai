'use client';

import { useState } from 'react';

export default function MarketAnalysis() {
  const [selectedIndustry, setSelectedIndustry] = useState('technology');
  const [selectedRegion, setSelectedRegion] = useState('india');

  // Mock market data
  const marketData = {
    technology: {
      name: 'Technology',
      growth: 12.5,
      marketSize: '₹15.2T',
      keyTrends: [
        'AI and Machine Learning adoption increasing',
        'Cloud computing services growing rapidly',
        'Cybersecurity demand rising',
        'Digital transformation accelerating'
      ],
      opportunities: [
        'SaaS solutions for SMEs',
        'AI-powered business tools',
        'Cybersecurity services',
        'Digital consulting'
      ],
      challenges: [
        'High competition from established players',
        'Rapid technology changes',
        'Talent shortage',
        'Regulatory compliance'
      ]
    },
    manufacturing: {
      name: 'Manufacturing',
      growth: 8.2,
      marketSize: '₹22.8T',
      keyTrends: [
        'Industry 4.0 adoption',
        'Automation and robotics',
        'Sustainable manufacturing',
        'Supply chain digitization'
      ],
      opportunities: [
        'Smart manufacturing solutions',
        'Quality control automation',
        'Supply chain optimization',
        'Green manufacturing'
      ],
      challenges: [
        'High initial investment',
        'Skilled labor shortage',
        'Global competition',
        'Regulatory requirements'
      ]
    },
    healthcare: {
      name: 'Healthcare',
      growth: 15.8,
      marketSize: '₹8.9T',
      keyTrends: [
        'Telemedicine adoption',
        'Digital health platforms',
        'AI in diagnostics',
        'Preventive healthcare'
      ],
      opportunities: [
        'Digital health solutions',
        'Telemedicine platforms',
        'Health analytics',
        'Medical device innovation'
      ],
      challenges: [
        'Regulatory compliance',
        'Data privacy concerns',
        'High development costs',
        'Long approval cycles'
      ]
    },
    retail: {
      name: 'Retail',
      growth: 6.4,
      marketSize: '₹12.3T',
      keyTrends: [
        'E-commerce growth',
        'Omnichannel retail',
        'Personalization',
        'Contactless payments'
      ],
      opportunities: [
        'E-commerce platforms',
        'Retail analytics',
        'Customer experience tools',
        'Supply chain solutions'
      ],
      challenges: [
        'Intense competition',
        'Rapid consumer behavior changes',
        'Logistics complexity',
        'Technology integration'
      ]
    }
  };

  const regions = {
    india: { name: 'India', gdp: '₹3.4T', growth: '7.2%' },
    global: { name: 'Global', gdp: '$105T', growth: '3.1%' },
    asia: { name: 'Asia Pacific', gdp: '$39T', growth: '4.8%' }
  };

  const currentData = marketData[selectedIndustry];
  const currentRegion = regions[selectedRegion];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Market Analysis</h2>
        <p className="text-gray-600">Get insights into market trends, opportunities, and industry analysis</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="technology">Technology</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
        </select>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="india">India</option>
          <option value="global">Global</option>
          <option value="asia">Asia Pacific</option>
        </select>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Market Growth</h3>
          <p className="text-3xl font-bold text-blue-600">{currentData.growth}%</p>
          <p className="text-sm text-blue-700">Annual growth rate</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Market Size</h3>
          <p className="text-3xl font-bold text-green-600">{currentData.marketSize}</p>
          <p className="text-sm text-green-700">Total market value</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Regional GDP</h3>
          <p className="text-3xl font-bold text-purple-600">{currentRegion.gdp}</p>
          <p className="text-sm text-purple-700">GDP growth: {currentRegion.growth}</p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Key Trends */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Market Trends</h3>
          <ul className="space-y-3">
            {currentData.keyTrends.map((trend, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{trend}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Opportunities</h3>
          <ul className="space-y-3">
            {currentData.opportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Challenges</h3>
          <ul className="space-y-3">
            {currentData.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Short-term (6-12 months)</h4>
              <p className="text-blue-700 text-sm">Focus on digital transformation and customer experience improvement</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Medium-term (1-2 years)</h4>
              <p className="text-green-700 text-sm">Expand into new markets and develop innovative products</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Long-term (3-5 years)</h4>
              <p className="text-purple-700 text-sm">Establish market leadership and sustainable competitive advantages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          Generate Detailed Report
        </button>
        <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors">
          Export Analysis
        </button>
        <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
} 