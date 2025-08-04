'use client';

import { useState, useEffect } from 'react';

export default function ResponseBox() {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleAIResponse = (event) => {
      setResponse(event.detail.response);
      setQuery(event.detail.query);
      setIsLoading(false);
    };

    const handleLoading = () => {
      setIsLoading(true);
      setResponse('');
    };

    // Listen for AI response events
    window.addEventListener('aiResponse', handleAIResponse);
    
    // Listen for loading events (when search starts)
    window.addEventListener('aiLoading', handleLoading);

    return () => {
      window.removeEventListener('aiResponse', handleAIResponse);
      window.removeEventListener('aiLoading', handleLoading);
    };
  }, []);

  return (
    <div className="w-full max-w-xl mt-8 bg-white p-4 rounded-md shadow-md min-h-[200px]">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      ) : response ? (
        <div className="space-y-4">
          {query && (
            <div className="mb-4 p-3 bg-gray-50 rounded-md">
              <h4 className="text-sm font-medium text-gray-700 mb-1">Your Question:</h4>
              <p className="text-gray-600 text-sm">{query}</p>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">AI Response:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your AI response will appear here.</p>
      )}
    </div>
  );
} 