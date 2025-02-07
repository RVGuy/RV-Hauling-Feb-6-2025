import React from 'react';
import OptimizedImage from '../components/OptimizedImage';
import SEOHead from '../components/SEOHead';

const About = () => {
  return (
    <>
      <SEOHead 
        title="About RV HAULING | Professional RV Transport in Western Canada"
        description="RV HAULING is your trusted RV transport professional based in Chestermere, Alberta. Years of experience in safe and reliable RV transportation across Western Canada."
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
          <div className="absolute inset-0">
            <div className="h-full w-full shadow-sm">
              <OptimizedImage
                className="w-full h-full object-cover"
                src="https://i.ibb.co/sJqRcz1H/zz7.webp?auto=format&fit=crop&q=80&w=1920"
                alt="RV on the road"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  About <span className="text-orange-500">RV HAULING</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-100">
                  Your trusted professional in RV Hauling across Western Canada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600">
                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <p className="text-lg font-black text-black mb-2">Our Home Base</p>
                    <p><span className="text-orange-500 font-bold text-lg">RV HAULING</span> is based out of Chestermere, ALBERTA.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <p className="text-lg font-black text-black mb-2">Our Mission</p>
                    <p>It all started with a simple mission: to provide worry-free RV transportation services across Western Canada.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <p className="text-lg font-black text-black mb-2">Why We're Here</p>
                    <p>With ever increasing traffic, changing weather conditions, road construction issues, volatility of fuel costs and toll fees, <span className="text-orange-500 font-bold text-lg">RV HAULING</span> eliminates the stress of hauling your RV.</p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                    <p className="text-lg font-black text-black mb-2">Our Achievement</p>
                    <p>Today, <span className="text-orange-500 font-bold text-lg">RV HAULING</span> is proud to be one of the most trusted names in the industry, serving 100's of private RV owners throughout Western Canada.</p>
                    
                    <p className="mt-4">With years of experience in the RV lifestyle, we've built our reputation on reliability, professionalism, and exceptional customer service.</p>
                    
                    <p className="mt-4"><span className="text-orange-500 font-bold text-lg">RV HAULING</span> understands the unique challenges of transporting recreational vehicles and takes every precaution to ensure safe delivery.</p>
                    
                    <p className="mt-4">An RV is not just another piece of equipment - it is a HOME, and needs to be treated as such!</p>
                    
                    <p className="mt-4"><span className="text-orange-500 font-bold text-lg">RV HAULING</span> specializes in treating your RV with the care and attention it deserves!</p>
                  </div>
                </div>
              </div>
              <div>
                <OptimizedImage
                  src="https://i.ibb.co/0LSFBsF/Site4.jpg?auto=format&fit=crop&q=80&w=1200"
                  alt="RV being transported"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 pb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
                <p className="text-gray-600">
                  We prioritize the safety of your RV with professional equipment and highly experienced drivers.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability & Integrity</h3>
                <p className="text-gray-600">
                  Count on us for timely pickups and deliveries, with clear communication throughout. 
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Service</h3>
                <p className="text-gray-600">
                  We're committed to providing exceptional service and support at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;