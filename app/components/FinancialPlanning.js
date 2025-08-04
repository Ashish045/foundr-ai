'use client';

import { useState } from 'react';

export default function FinancialPlanning() {
  const [financialData, setFinancialData] = useState({
    revenue: '',
    expenses: '',
    profit: '',
    cashFlow: '',
    investment: '',
    loan: ''
  });
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinancialData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFinancials = () => {
    const revenue = parseFloat(financialData.revenue) || 0;
    const expenses = parseFloat(financialData.expenses) || 0;
    const profit = revenue - expenses;
    const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;
    
    setFinancialData(prev => ({
      ...prev,
      profit: profit.toString(),
      profitMargin: profitMargin.toFixed(2)
    }));
    setShowAnalysis(true);
  };

  const resetCalculator = () => {
    setFinancialData({
      revenue: '',
      expenses: '',
      profit: '',
      cashFlow: '',
      investment: '',
      loan: ''
    });
    setShowAnalysis(false);
  };

  const getFinancialMetrics = () => {
    const revenue = parseFloat(financialData.revenue) || 0;
    const expenses = parseFloat(financialData.expenses) || 0;
    const profit = parseFloat(financialData.profit) || 0;
    const cashFlow = parseFloat(financialData.cashFlow) || 0;
    const investment = parseFloat(financialData.investment) || 0;
    const loan = parseFloat(financialData.loan) || 0;

    return {
      revenue,
      expenses,
      profit,
      profitMargin: revenue > 0 ? (profit / revenue) * 100 : 0,
      cashFlow,
      investment,
      loan,
      totalAssets: revenue + investment,
      debtToEquity: (loan / (revenue + investment)) * 100,
      cashFlowRatio: expenses > 0 ? cashFlow / expenses : 0
    };
  };

  const metrics = getFinancialMetrics();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Financial Planning</h2>
        <p className="text-gray-600">Plan your business finances with budgeting and forecasting tools</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Data</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Revenue (₹)
              </label>
              <input
                type="number"
                name="revenue"
                value={financialData.revenue}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expenses (₹)
              </label>
              <input
                type="number"
                name="expenses"
                value={financialData.expenses}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cash Flow (₹)
              </label>
              <input
                type="number"
                name="cashFlow"
                value={financialData.cashFlow}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment (₹)
              </label>
              <input
                type="number"
                name="investment"
                value={financialData.investment}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                name="loan"
                value={financialData.loan}
                onChange={handleInputChange}
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={calculateFinancials}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Calculate Analysis
            </button>
            <button
              onClick={resetCalculator}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Analysis Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Analysis</h3>
          
          {showAnalysis ? (
            <div className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900">Profit</h4>
                  <p className="text-2xl font-bold text-green-600">₹{metrics.profit.toFixed(2)}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Profit Margin</h4>
                  <p className="text-2xl font-bold text-blue-600">{metrics.profitMargin.toFixed(1)}%</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Cash Flow Ratio</h4>
                  <p className="text-2xl font-bold text-purple-600">{metrics.cashFlowRatio.toFixed(2)}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900">Debt/Equity</h4>
                  <p className="text-2xl font-bold text-orange-600">{metrics.debtToEquity.toFixed(1)}%</p>
                </div>
              </div>

              {/* Financial Health */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Financial Health Assessment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Profitability:</span>
                    <span className={`text-sm font-medium ${metrics.profitMargin > 10 ? 'text-green-600' : metrics.profitMargin > 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {metrics.profitMargin > 10 ? 'Excellent' : metrics.profitMargin > 5 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Cash Flow:</span>
                    <span className={`text-sm font-medium ${metrics.cashFlowRatio > 1.5 ? 'text-green-600' : metrics.cashFlowRatio > 1 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {metrics.cashFlowRatio > 1.5 ? 'Strong' : metrics.cashFlowRatio > 1 ? 'Adequate' : 'Weak'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Leverage:</span>
                    <span className={`text-sm font-medium ${metrics.debtToEquity < 50 ? 'text-green-600' : metrics.debtToEquity < 100 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {metrics.debtToEquity < 50 ? 'Low Risk' : metrics.debtToEquity < 100 ? 'Moderate Risk' : 'High Risk'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Recommendations</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  {metrics.profitMargin < 10 && (
                    <li>• Consider cost optimization strategies</li>
                  )}
                  {metrics.cashFlowRatio < 1.5 && (
                    <li>• Improve cash flow management</li>
                  )}
                  {metrics.debtToEquity > 50 && (
                    <li>• Consider debt reduction strategies</li>
                  )}
                  {metrics.profitMargin > 10 && metrics.cashFlowRatio > 1.5 && (
                    <li>• Strong financial position - consider expansion</li>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>Enter your financial data and click &quot;Calculate Analysis&quot; to see insights</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors">
          Generate Financial Report
        </button>
        <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          Create Budget Plan
        </button>
        <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors">
          Schedule Financial Review
        </button>
      </div>
    </div>
  );
} 