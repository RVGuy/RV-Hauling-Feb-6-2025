import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
import SEOHead from '../components/SEOHead';

const Home = () => {
  return (
    <>
      <SEOHead 
        title="RV HAULING - Professional RV Transport Services in Western Canada | Chestermere Alberta"
        description="Professional RV transportation services across Western Canada. Safe and reliable RV hauling with experienced drivers and modern equipment. Based in Chestermere, serving Alberta, BC, Saskatchewan, and Manitoba."
      />
      <div className="bg-gray-50">
        <div className="relative">
          <div className="absolute inset-0">
            <OptimizedImage
              className="w-full h-full object-cover"
              src="https://i.ibb.co/HfH8yyZc/zz14.webp?auto=format&fit=crop&q=80&w=1920"
              alt="RV being transported"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-orange-500 sm:text-6xl lg:text-7xl text-center mb-8">
              RV HAULING
            </h1>
            <p className="text-3xl text-white text-center max-w-4xl mx-auto">
              Southern Alberta's Professional RV Hauling Service
            </p>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto text-center">
              Based in Chestermere Alberta, we're your local experts in CUSTOM RV HAULING. Trust your recreational vehicle to an experienced RV professional. <span className="text-orange-500 font-bold text-lg">RV HAULING</span> provides point-to-point, customized hauling solutions locally, or throughout Western Canada.
            </p>
            <p className="mt-4 text-xl font-bold text-orange-500 text-center">
              IF THERE'S A ROAD, A BRIDGE, or A FERRY - WE GO THERE!!
            </p>
            <div className="mt-10 text-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-green-700 pulse"
              >
                GET A FREE QUOTE <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Our Service?
              </h2>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">EXPERIENCE!!</h3>
                  <p className="mt-2 text-gray-600">
                    <span className="text-orange-500 font-bold text-lg">RV HAULING</span> has many years of RV hauling experience and has a wealth of first hand knowledge with the inner workings of most RVs. With <span className="text-orange-500 font-bold text-lg">RV HAULING</span> you get much more than a truck driver. You get a dedicated, mature hauler who has years of industry experience in all things RV!
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">MODERN EQUIPMENT</h3>
                  <p className="mt-2 text-gray-600">
                    Late model 3500 HD DIESEL truck equipped with the industries best safety features, plus unsurpassed pulling and stopping power.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">AFFORDABILITY</h3>
                  <p className="mt-2 text-gray-600">
                    <span className="text-orange-500 font-bold text-lg">RV HAULING</span> provides highly affordable prices that are constantly adjusted to keep in step with changing market conditions. This ensures our customers always receive fair and competitive pricing for their hauling needs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900">Insurance Coverage</h3>
                  <p className="mt-2 text-gray-600">
                    <span className="text-orange-500 font-bold text-lg">RV HAULING</span> provides the necessary liability coverage for hauling your RV. Additional peace of mind coverage is provided by the customers own RV insurance policy. This assures that the customer is always in control, while allowing us to offer our customers very competitve pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <OptimizedImage
                className="w-full h-96 object-cover rounded-lg shadow-xl"
                src="https://i.ibb.co/v6NLNtm3/412-DF6-CC-8-DCC-44-BC-BB8-B-B8-F301-E05755.jpg?w=1200"
                alt="RV being hauled"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;