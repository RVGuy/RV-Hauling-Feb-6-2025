import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import SEOHead from '../components/SEOHead';

interface QuoteFormData {
  name: string;
  phone: string;
  pickupAddress: string;
  deliveryAddress: string;
  rvType: string;
  rvYear: string;
  rvMake: string;
  rvModel: string;
  rvLength: string;
  rvWeight: string;
  rvStyleNumber: string;
  haulDate: Date | null;
  additionalInfo: string;
}

const RequestQuote = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    pickupAddress: '',
    deliveryAddress: '',
    rvType: '',
    rvYear: '',
    rvMake: '',
    rvModel: '',
    rvLength: '',
    rvWeight: '',
    rvStyleNumber: '',
    haulDate: null,
    additionalInfo: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      pickupAddress: '',
      deliveryAddress: '',
      rvType: '',
      rvYear: '',
      rvMake: '',
      rvModel: '',
      rvLength: '',
      rvWeight: '',
      rvStyleNumber: '',
      haulDate: null,
      additionalInfo: ''
    });
  };

  const showConfirmationMessage = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  useEffect(() => {
    if (isFormValid()) {
      setShowError(false);
    }
  }, [formData]);

  const handleTextRequest = async () => {
    if (!isFormValid()) {
      setShowError(true);
      return;
    }

    const message = `New RV Haul Request:
Name: ${formData.name}
Phone: ${formData.phone}
Pick Up: ${formData.pickupAddress}
Delivery: ${formData.deliveryAddress}
RV Type: ${formData.rvType}
RV: ${formData.rvYear} ${formData.rvMake} ${formData.rvModel}
Length: ${formData.rvLength} feet
Weight: ${formData.rvWeight} lbs
Style Number: ${formData.rvStyleNumber}
Date: ${formData.haulDate?.toLocaleDateString()}
Info: ${formData.additionalInfo}`;

    window.location.href = `sms:4036692133?body=${encodeURIComponent(message)}`;
    resetForm();
    showConfirmationMessage();
  };

  const handleEmailRequest = async () => {
    if (!isFormValid()) {
      setShowError(true);
      return;
    }

    const subject = "New RV Haul Request";
    const body = `Name: ${formData.name}
Phone: ${formData.phone}
Pick Up Address: ${formData.pickupAddress}
Delivery Address: ${formData.deliveryAddress}
RV Type: ${formData.rvType}
RV: ${formData.rvYear} ${formData.rvMake} ${formData.rvModel}
Length: ${formData.rvLength} feet
Weight: ${formData.rvWeight} lbs
Style Number: ${formData.rvStyleNumber}
Date: ${formData.haulDate?.toLocaleDateString()}
Additional Information: ${formData.additionalInfo}`;

    window.location.href = `mailto:rvhauling@shaw.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    resetForm();
    showConfirmationMessage();
  };

  const isFormValid = () => {
    return formData.name && 
           formData.phone && 
           formData.pickupAddress && 
           formData.deliveryAddress && 
           formData.rvType &&
           formData.rvYear && 
           formData.rvMake && 
           formData.rvModel &&
           formData.rvLength &&
           formData.rvWeight &&
           formData.haulDate;
  };

  const getInputStyle = (value: string) => {
    return `block w-full rounded-md border-2 border-blue-200 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 ${
      value ? 'bg-green-50' : 'bg-orange-50'
    }`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <SEOHead 
        title="Request a Quote | RV HAULING Transport Services"
        description="Get a quote for professional RV transport services across Western Canada. Safe and reliable RV hauling with competitive pricing."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-50 rounded-lg shadow-xl p-8 mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Request A Quote</h1>
          
          {showConfirmation && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Your request has been submitted successfully! A representative of <span className="text-blue-600 font-bold text-lg">RV HAULING</span> will provide a quote for your requested haul shortly.
            </div>
          )}

          {showError && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Required Information is Missing. Please Complete.
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={getInputStyle(formData.name)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={getInputStyle(formData.phone)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pick Up Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.pickupAddress}
                onChange={(e) => setFormData({...formData, pickupAddress: e.target.value})}
                className={getInputStyle(formData.pickupAddress)}
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Please provide complete address (urban, rural address, legal land description, or GPS coordinates). Including postal codes helps identify locations properly.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.deliveryAddress}
                onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                className={getInputStyle(formData.deliveryAddress)}
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Please provide complete address (urban, rural address, legal land description, or GPS coordinates). Including postal codes helps identify locations properly.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RV Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.rvType}
                onChange={(e) => setFormData({...formData, rvType: e.target.value})}
                className={getInputStyle(formData.rvType)}
                required
              >
                <option value="">Select RV Type</option>
                <option value="5th Wheel">5th Wheel</option>
                <option value="Bumper Pull">Bumper Pull</option>
                <option value="Destination Trailer">Destination Trailer</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RV Year <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.rvYear}
                  onChange={(e) => setFormData({...formData, rvYear: e.target.value})}
                  className={getInputStyle(formData.rvYear)}
                  required
                />
                <p className="mt-1 text-sm text-gray-500">(ex: 2025)</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RV Make <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.rvMake}
                  onChange={(e) => setFormData({...formData, rvMake: e.target.value})}
                  className={getInputStyle(formData.rvMake)}
                  required
                />
                <p className="mt-1 text-sm text-gray-500">(ex: KEYSTONE)</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  RV Model <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.rvModel}
                  onChange={(e) => setFormData({...formData, rvModel: e.target.value})}
                  className={getInputStyle(formData.rvModel)}
                  required
                />
                <p className="mt-1 text-sm text-gray-500">(ex: HIGH COUNTRY)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Length of RV (in feet) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.rvLength}
                  onChange={(e) => setFormData({...formData, rvLength: e.target.value})}
                  className={getInputStyle(formData.rvLength)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight of RV (in lbs) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.rvWeight}
                  onChange={(e) => setFormData({...formData, rvWeight: e.target.value})}
                  className={getInputStyle(formData.rvWeight)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Desired Haul Date <span className="text-red-500">*</span>
              </label>
              <DatePicker
                selected={formData.haulDate}
                onChange={(date) => setFormData({...formData, haulDate: date})}
                className={getInputStyle(formData.haulDate ? 'filled' : '')}
                minDate={new Date()}
                placeholderText="Select a date"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">RV Model Number (Extremely Helpful if Known)</label>
              <input
                type="text"
                value={formData.rvStyleNumber}
                onChange={(e) => setFormData({...formData, rvStyleNumber: e.target.value})}
                className="block w-full rounded-md border-2 border-blue-200 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
              <p className="mt-1 text-sm text-gray-500">(ex: Model 397FB)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                rows={4}
                className="block w-full rounded-md border-2 border-blue-200 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button
                onClick={handleTextRequest}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Text Request
              </button>
              <button
                onClick={handleEmailRequest}
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Email Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;