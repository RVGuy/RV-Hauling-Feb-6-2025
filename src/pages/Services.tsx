import React from 'react';
import OptimizedImage from '../components/OptimizedImage';
import SEOHead from '../components/SEOHead';

const Services = () => {
  return (
    <>
      <SEOHead 
        title="RV Transport Services | RV HAULING - Western Canada"
        description="Professional RV transport services including campground delivery, seasonal site relocation, storage transport, and dealership pickup/delivery across Western Canada. Serving AB, BC, SK, MB."
      />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">Services Provided</h1>
            <p className="mt-4 text-xl text-gray-600">
              Professional RV Hauling Solutions for Western Canada
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="relative">
                <OptimizedImage
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  src="https://i.ibb.co/mFRFh5QF/Site2.webp?auto=format&fit=crop&q=80&w=800"
                  alt="RV Transport"
                />
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">Campgrounds, Seasonal Sites, Relocations, Storage Facilities</h3>
                  <p className="mt-2 text-gray-600">
                    Safe and reliable transportation of your RV across Western Canada, including British Columbia, Alberta, Saskatchewan, and Manitoba. <span className="text-orange-500 font-bold text-lg">RV HAULING</span> will pick up your RV and deliver it to the location of your choice. YES - <span className="text-orange-500 font-bold text-lg">RV HAULING</span> will spot your RV directly onto your site for you. (some conditions apply)
                  </p>
                </div>
              </div>

              <div className="relative">
                <OptimizedImage
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  src="https://i.ibb.co/KcnbcsTV/Site3.webp?auto=format&fit=crop&q=80&w=800"
                  alt="RV Delivery"
                />
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">Dealership Pick Up & Delivery</h3>
                  <p className="mt-2 text-gray-600">
                    Specialized service for RV dealerships. <span className="text-orange-500 font-bold text-lg">RV HAULING</span> will take your trade-in to the dealership for you, and pick up your new RV on your behalf.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 mb-16 bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-green-50 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">Professional Equipment</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Late model 3500 HD DIESEL Powered truck</li>
                    <li>• Professionally equipped with Powerful Duramax Engine, Tow-Haul Mode, 25K lb rated 5th Wheel Hitch, 12K & 20K lb rated Bumper Pull Hitches</li>
                    <li className="font-semibold mt-4">SAFETY and SECURITY FEATURES:</li>
                    <li>• Automatic Integrated Sway Control</li>
                    <li>• Additional 5000 lb Air Bags for proper load levelling</li>
                    <li>• Additional Weight Distribution Hitch for Large Trailers</li>
                    <li>• Multiple Cameras for Blind Spot Monitoring</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">Coverage Area</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Alberta</li>
                    <li>• British Columbia, Including High Mountain Passes and Ferry Crossings </li>
                    <li>• Saskatchewan</li>
                    <li>• Southern Manitoba</li>
                  </ul>
                </div>

                <div className="p-6 bg-green-50 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">Additional Services</h3>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>• Progress Updates & Advance Notifications Regarding ETA</li>
                    <li>• Flexible scheduling</li>
                    <li>• Assistance in Relocating RVs out of Wildfire Evacuation Alert Zones</li>
                    <li>• RV Setup Assistance Upon Request (additional fee may apply)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;