'use client';

import { useState } from 'react';
import { getAIResponse } from '../lib/ai';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    
    // Dispatch loading event
    window.dispatchEvent(new CustomEvent('aiLoading'));

    try {
      const aiResponse = await getAIResponse(query);
      // Dispatch custom event to communicate with ResponseBox
      window.dispatchEvent(new CustomEvent('aiResponse', { 
        detail: { response: aiResponse, query: query } 
      }));
    } catch (error) {
      window.dispatchEvent(new CustomEvent('aiResponse', { 
        detail: { response: 'Sorry, I encountered an error. Please try again.', query: query } 
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mt-8">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask a business question..."
            className="flex-grow px-4 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !query.trim()}
            className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? '...' : 'Get Help'}
          </button>
        </div>
      </form>
    </div>
  );
} 