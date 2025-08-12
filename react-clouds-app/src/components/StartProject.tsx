import React from 'react';
import { ArrowLeft, MessageCircle, Calendar, Code, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600 relative z-10">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-indigo-500 -ml-2 mt-1 relative z-20">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400 -ml-2 relative z-10">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clouds</span>
              <span className="text-gray-900 ml-1">Weave</span>
            </div>
          </div>
          <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Let's Weave Something
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your vision into digital excellence? Let's discuss your project and create something extraordinary together in the cloud.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Discovery Call</h3>
              <p className="text-gray-600">
                We'll discuss your vision, requirements, and goals to understand exactly what you need for digital excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Planning & Design</h3>
              <p className="text-gray-600">
                We create detailed plans, wireframes, and designs that align with your business objectives and cloud architecture.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Development</h3>
              <p className="text-gray-600">
                Our expert team weaves your application with cutting-edge cloud technology and best practices for digital excellence.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Development</h4>
                  <p className="text-gray-600">Tailored cloud-based solutions built specifically for your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Responsive Design</h4>
                  <p className="text-gray-600">Perfect experience across all devices and platforms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                  <p className="text-gray-600">Fast loading times and smooth user experience in the cloud</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-600">Maintenance and updates to keep your app running smoothly</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Book a free consultation call and let's discuss your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full">
                Schedule Free Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-full">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;