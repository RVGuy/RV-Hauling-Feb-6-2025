import React from 'react';
import { ArrowRight, Truck, Calendar, MessageSquare, MapPin, CreditCard } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEOHead from '../components/SEOHead';

const HowItWorks = () => {
  return (
    <>
      <SEOHead 
        title="How RV Transport Works | RV HAULING Process Guide"
        description="Learn about our professional RV transport process. From quote to delivery, discover how RV HAULING safely transports your RV across Western Canada. Simple, reliable, and professional service."
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] mb-16">
          <div className="absolute inset-0">
            <OptimizedImage
              className="w-full h-full object-cover shadow-lg"
              src="https://i.ibb.co/kgrz8JVL/z3.webp"
              alt="Professional RV transport service - RV being safely transported on a mountain highway"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                  How It Works
                </h1>
                <p className="mt-2 max-w-2xl mx-auto text-xl text-white">
                  Simple, straightforward RV transportation process from start to finish
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Request a Quote</h3>
              <p className="text-gray-600">
                Fill out our simple quote request form with your RV details and preferred hauling date. We'll review your request and get back to you promptly with pricing and availability.
              </p>
              <p className="mt-4 text-gray-600">
                We take into account factors such as distance, size and weight of the RV, changing fuel prices and other relevant details to offer you a comprehensive, fair and competitive quote.
              </p>
              <p className="mt-4 text-gray-600 font-semibold">
                Please note: ALL QUOTES for basic pickup and delivery are "ALL-IN" pricing!
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Schedule Your Haul</h3>
              <p className="text-gray-600">
                Once you approve the quote, we'll confirm your preferred date and time for pickup. We'll provide you with all the necessary information and preparation instructions.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Professional Transport</h3>
              <p className="text-gray-600">
                A highly SKILLED, properly QUALIFIED and EXPERIENCED driver will arrive with a fully equipped 3500 HD truck to safely transport your RV to its destination. We handle everything with the utmost care and professionalism.
              </p>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Requirements & Preparation</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">RV Requirements</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>All RVs MUST be completely roadworthy</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>All trailer tires must be in very good condition (no weather cracks or excessive tread wear)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>All tires must be properly inflated to the pressure specified on the trailer information stamp</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Fully functioning landing gear is required</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>All trailer lights and brakes must work properly</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Functioning 12-volt battery (required for emergency braking)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>A set of trailer keys and a valid trailer plate (or in-transit permit) required for transportation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Access Requirements</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-sm text-yellow-700">
                    All quotes are for basic pick up and delivery only, where there is clear and unobstructed access at both locations.
                  </p>
                </div>
                <p className="text-gray-600 mb-4">To ensure your haul goes smoothly and without unnecessary delays, all areas around the pick up and delivery locations must be clearly accessible. Both truck and trailer must have sufficient room to maneuver. Following is a list of items that can often impede access if they are not dealt with prior to the drivers arrival:</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Deep Snow in Winter</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Decks & Deck Roofs, Gazebos, Sheds, Fences, Shrubs, Decorative Landscaping Items (large rocks, etc)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Sewage Pipes, Electrical Lines, Vehicles, Mowers, Tools, Toys, Swing Sets, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Excessive tree growth (branches often impede access and can damage the exterior of the truck and/or trailer)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-16 bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Information</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Accepted Payment Methods</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <span>E-Transfer</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Cash</span>
                  </li>
                </ul>
                <div className="mt-4 text-sm text-gray-500">
                  Note: Credit cards are not accepted at this time.
                </div>
              </div>
            </div>
          </div>

          {/* Service Coverage */}
          <div className="mt-16 mb-16 bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">A Few Places We've Been</h2>
            
            <div className="w-full h-large mx-auto">
              <OptimizedImage
                className="w-full rounded-lg shadow-lg mb-8"
                src="https://i.ibb.co/ZpwwM7dn/zz27A.jpg"
                alt="Map showing RV Hauling service coverage areas across Western Canada including Alberta, British Columbia, Saskatchewan, and Manitoba"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {['TRUSTED', 'RELIABLE', 'FRIENDLY', 'ALWAYS HELPFUL'].map((value) => (
                  <div key={value} className="bg-gray-50 p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;