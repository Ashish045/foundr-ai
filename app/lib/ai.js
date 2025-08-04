export async function getAIResponse(prompt) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      // Mock mode - simulate AI responses
      return await simulateAIResponse(prompt);
    }

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error getting AI response:', error);
    // Fallback to mock response if API fails
    return await simulateAIResponse(prompt);
  }
}

async function simulateAIResponse(prompt) {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lowerPrompt = prompt.toLowerCase();
  
  // Business-focused responses for MSME users
  const responses = {
    'cost': 'For cost calculations, I can help you estimate project expenses. Consider factors like materials, labor, overhead, and profit margins. Would you like me to help you create a detailed cost breakdown?',
    'vendor': 'I can help you find reliable vendors for your business needs. What type of vendor are you looking for? Consider factors like location, quality, pricing, and delivery time.',
    'profit': 'To improve profitability, focus on: 1) Cost optimization, 2) Pricing strategy, 3) Operational efficiency, 4) Market analysis. What specific area would you like to explore?',
    'marketing': 'Effective marketing strategies for MSMEs include: 1) Digital presence (website, social media), 2) Local SEO, 3) Customer referrals, 4) Content marketing. Which channel interests you most?',
    'finance': 'For business finance, consider: 1) Cash flow management, 2) Budget planning, 3) Funding options, 4) Financial tracking. What financial aspect do you need help with?',
    'hello': 'Hello! I\'m your MSME Copilot. How can I help your business today? I can assist with cost calculations, vendor recommendations, marketing strategies, and more.',
    'help': 'I\'m here to help your business grow! I can assist with: • Cost calculations and budgeting • Vendor and supplier recommendations • Marketing and sales strategies • Financial planning and analysis • Operational efficiency tips What would you like to explore?',
    'business': 'Great! I\'m here to help your business succeed. I can assist with strategic planning, cost analysis, market research, vendor selection, and operational improvements. What specific business challenge are you facing?',
    'start': 'Starting or growing a business? Here are key areas to focus on: 1) Market research and validation, 2) Business plan development, 3) Financial planning, 4) Marketing strategy, 5) Operational setup. Which area would you like to explore?',
    'plan': 'Business planning is crucial for success. Key elements include: 1) Executive summary, 2) Market analysis, 3) Financial projections, 4) Marketing strategy, 5) Operational plan. What aspect of planning do you need help with?'
  };

  // Check for keywords in the prompt
  for (const [keyword, response] of Object.entries(responses)) {
    if (lowerPrompt.includes(keyword)) {
      return response;
    }
  }

  // Default business-focused response
  return `I understand you're asking about: "${prompt}". As your MSME Copilot, I can help with business strategy, cost analysis, vendor selection, marketing, and financial planning. Could you provide more specific details about what you'd like to explore?`;
} 