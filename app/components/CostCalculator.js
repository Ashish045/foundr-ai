'use client';

import { useState } from 'react';

export default function CostCalculator() {
  const [costs, setCosts] = useState({
    materials: '',
    labor: '',
    overhead: '',
    marketing: '',
    utilities: '',
    rent: ''
  });
  const [total, setTotal] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCosts(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const values = Object.values(costs).map(val => parseFloat(val) || 0);
    const totalCost = values.reduce((sum, val) => sum + val, 0);
    setTotal(totalCost);
    setShowBreakdown(true);
  };

  const resetCalculator = () => {
    setCosts({
      materials: '',
      labor: '',
      overhead: '',
      marketing: '',
      utilities: '',
      rent: ''
    });
    setTotal(0);
    setShowBreakdown(false);
  };

  const getCostItems = () => {
    return [
      { key: 'materials', label: 'Materials & Supplies', value: costs.materials, icon: '🏗️', color: 'from-blue-500 to-blue-600' },
      { key: 'labor', label: 'Labor & Wages', value: costs.labor, icon: '👷', color: 'from-green-500 to-green-600' },
      { key: 'overhead', label: 'Overhead Costs', value: costs.overhead, icon: '📊', color: 'from-purple-500 to-purple-600' },
      { key: 'marketing', label: 'Marketing & Advertising', value: costs.marketing, icon: '📢', color: 'from-orange-500 to-orange-600' },
      { key: 'utilities', label: 'Utilities & Services', value: costs.utilities, icon: '⚡', color: 'from-yellow-500 to-yellow-600' },
      { key: 'rent', label: 'Rent & Facilities', value: costs.rent, icon: '🏢', color: 'from-red-500 to-red-600' }
    ];
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">Cost Calculator</h2>
          <p className="text-gray-600">Calculate your business costs and get detailed breakdowns</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Your Costs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getCostItems().map((item) => (
                <div key={item.key} className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {item.label}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name={item.key}
                      value={item.value}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:border-gray-300"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                onClick={calculateTotal}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Calculate Total
              </button>
              <button
                onClick={resetCalculator}
                className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-xl font-medium hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
            
            {showBreakdown ? (
              <div className="space-y-4">
                {getCostItems().map((item) => (
                  <div key={item.key} className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl border border-gray-200/50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white text-sm font-medium`}>
                        {item.icon}
                      </div>
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </div>
                    <span className="font-bold text-gray-900">₹{parseFloat(item.value) || 0}</span>
                  </div>
                ))}
                
                <div className="border-t-2 border-gray-200 my-6"></div>
                
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200/50">
                  <span className="text-xl font-bold text-gray-900">Total Cost</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹{total.toFixed(2)}</span>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cost Analysis
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-white/60 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        {((parseFloat(costs.materials) || 0) / total * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Materials</div>
                    </div>
                    <div className="text-center p-3 bg-white/60 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        {((parseFloat(costs.labor) || 0) / total * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Labor</div>
                    </div>
                    <div className="text-center p-3 bg-white/60 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">
                        {((parseFloat(costs.overhead) || 0) / total * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">Overhead</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-gray-500">Enter your costs and click &quot;Calculate Total&quot; to see the breakdown</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 