'use client';

import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Get intelligent business recommendations and market analysis powered by advanced AI.',
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Calculate project costs, analyze expenses, and optimize your business spending.',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Vendor Network',
      description: 'Find reliable suppliers and vendors with detailed ratings and contact information.',
      icon: '🤝',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Access market trends, financial planning tools, and strategic insights.',
      icon: '📊',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Foundr.ai provides comprehensive tools and insights to help MSMEs make informed decisions and accelerate growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${feature.gradient} text-white text-xl`}>
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 