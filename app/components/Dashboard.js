'use client';

import { useState } from 'react';
import { getAIResponse } from '../lib/ai';
import CostCalculator from './CostCalculator';
import VendorSearch from './VendorSearch';
import MarketAnalysis from './MarketAnalysis';
import FinancialPlanning from './FinancialPlanning';

export default function Dashboard() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useState({ name: 'Business Owner', email: 'user@foundr.ai' });
  const [activeComponent, setActiveComponent] = useState('ai-chat');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');

    try {
      const aiResponse = await getAIResponse(query);
      setResponse(aiResponse);
    } catch (error) {
      setResponse('Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // In a real app, this would clear auth state
    window.location.href = '/';
  };

  const handleQuickAction = (action) => {
    setActiveComponent(action);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'cost-calculator':
        return <CostCalculator />;
      case 'vendor-search':
        return <VendorSearch />;
      case 'market-analysis':
        return <MarketAnalysis />;
      case 'financial-planning':
        return <FinancialPlanning />;
      default:
        return (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                AI Business Assistant
              </h2>
              <p className="text-gray-600">Ask me anything about your business. I can help with cost analysis, vendor recommendations, market insights, and more.</p>
            </div>
            
            {/* Search Box */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex w-full max-w-lg bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a business question..."
                  className="flex-grow px-6 py-4 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading || !query.trim()}
                  className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-2xl font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Ask'
                  )}
                </button>
              </div>
            </form>

            {/* Response Area */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 min-h-[300px] border border-gray-200/50">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="flex space-x-2 justify-center mb-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <p className="text-gray-600">AI is thinking...</p>
                  </div>
                </div>
              ) : response ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800">AI Response</h3>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{response}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Your AI response will appear here</p>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  const quickActions = [
    {
      id: 'cost-calculator',
      title: 'Cost Calculator',
      description: 'Calculate project costs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'vendor-search',
      title: 'Vendor Search',
      description: 'Find suppliers',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      description: 'Industry insights',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning',
      description: 'Budget & forecasts',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'ai-chat',
      title: 'AI Assistant',
      description: 'Ask business questions',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Foundr.ai
                </h1>
              </div>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">Welcome, {user.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <button 
                    key={action.id}
                    onClick={() => handleQuickAction(action.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 group ${
                      activeComponent === action.id 
                        ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-white/50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                        {action.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{action.title}</div>
                        <div className="text-sm text-gray-500">{action.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50/50 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Cost analysis completed</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Vendor inquiry sent</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50/50 rounded-xl">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Market research updated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
} 