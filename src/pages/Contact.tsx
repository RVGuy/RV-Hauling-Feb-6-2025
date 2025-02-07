import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact RV HAULING | RV Transport Services Western Canada"
        description="Contact RV HAULING for professional RV transport services. Based in Chestermere, Alberta. Serving Western Canada with reliable RV transportation. Call 403-669-2133."
      />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              We're here to help with your RV transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Phone or Text</p>
                    <p className="text-lg text-gray-600">403-669-2133</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-lg text-gray-600">rvhauling@shaw.ca</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Service Area</p>
                    <p className="text-lg text-gray-600">Western Canada</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Business Hours</p>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
              <div className="space-y-4">
                <p className="text-gray-800">
                  Service Areas include Alberta, British Columbia, Central & Southern Saskatchewan and Southern Manitoba.
                </p>
                
                <p className="text-gray-800">
                  <span className="text-orange-500 font-bold text-lg">RV HAULING</span> provides CUSTOM PICK UP and DELIVERY options for RV users.
                </p>
                
                <p className="text-gray-800">
                  <span className="text-orange-500 font-bold text-lg">RV HAULING</span> is effectively an RV TAXI SERVICE and therefore if you have a specific destination in mind for your RV, just ask <span className="text-orange-500 font-bold text-lg">RV HAULING</span>!
                </p>
                
                <p className="text-gray-800">
                  <span className="text-orange-500 font-bold text-lg">RV HAULING</span> has a wealth of experience doing RV pickups and deliveries in both rural and urban areas. We have delivered RVs to many campgrounds and seasonal sites throughout Western Canada. We specialize in hauls between Alberta and BC, and support all local economies we encounter.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-purple-50 rounded-lg shadow-xl p-8 mb-16"> {/* Added mb-16 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/request-quote" className="block p-6 bg-white rounded-lg hover:bg-blue-100 transition-colors">
                <h3 className="text-lg font-semibold text-blue-900">Request a Quote</h3>
                <p className="mt-2 text-blue-700">Get a quick quote for your RV transport needs</p>
              </Link>
              <Link to="/services" className="block p-6 bg-white rounded-lg hover:bg-green-100 transition-colors">
                <h3 className="text-lg font-semibold text-green-900">Our Services</h3>
                <p className="mt-2 text-green-700">Learn more about what we offer</p>
              </Link>
              <Link to="/about" className="block p-6 bg-white rounded-lg hover:bg-purple-100 transition-colors">
                <h3 className="text-lg font-semibold text-purple-900">About Us</h3>
                <p className="mt-2 text-purple-700">Discover our story and experience</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;