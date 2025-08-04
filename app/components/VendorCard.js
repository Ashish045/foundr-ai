'use client';

export default function VendorCard({ vendor }) {
  // Default vendor data if none provided
  const defaultVendor = {
    name: "ABC Manufacturing Co.",
    location: "Mumbai, Maharashtra",
    rating: 4.5,
    verified: true,
    memberSince: "2018",
    products: ["Industrial Equipment", "Machinery Parts", "Custom Fabrication"],
    contact: {
      phone: "+91-98765-43210",
      email: "info@abcmanufacturing.com",
      website: "www.abcmanufacturing.com"
    },
    description: "Leading manufacturer of industrial equipment and machinery parts with over 10 years of experience in the industry.",
    certifications: ["ISO 9001:2015", "CE Certified"],
    responseTime: "2-4 hours"
  };

  const vendorData = vendor || defaultVendor;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{vendorData.name}</h2>
          {vendorData.verified && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          )}
        </div>
        <p className="text-blue-100 text-sm mt-1">{vendorData.location}</p>
      </div>

      {/* Rating and Member Since */}
      <div className="px-6 py-3 bg-gray-50 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(vendorData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{vendorData.rating} ({Math.floor(vendorData.rating * 20)}%)</span>
          </div>
          <span className="text-sm text-gray-500">Member since {vendorData.memberSince}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">{vendorData.description}</p>

        {/* Products */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Products & Services</h3>
          <div className="flex flex-wrap gap-1">
            {vendorData.products.map((product, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {product}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {vendorData.certifications && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Certifications</h3>
            <div className="flex flex-wrap gap-1">
              {vendorData.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Response Time */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Response time: {vendorData.responseTime}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-gray-700">{vendorData.contact.phone}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-gray-700">{vendorData.contact.email}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828L8 12.828l-3.586-3.586a2 2 0 112.828-2.828L8 7.172l4.586-4.586z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{vendorData.contact.website}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-3 bg-gray-50 border-t">
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm">
            Send Inquiry
          </button>
          <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
} 