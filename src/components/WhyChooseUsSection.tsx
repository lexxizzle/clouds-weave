import React from 'react';
import { Star, Clock, Users, Shield } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">Us</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with a deep understanding of business needs to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence in Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in code quality, testing, and project delivery to ensure your satisfaction.
              </p>
            </div>
          </div>

          <div className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your timeline and consistently deliver projects on schedule without compromising quality.
              </p>
            </div>
          </div>

          <div className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated Team</h3>
              <p className="text-gray-600">
                Our experienced developers and designers work closely with you throughout the entire project lifecycle.
              </p>
            </div>
          </div>

          <div className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support and maintenance to keep your applications running smoothly long after launch.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Ideas into Reality?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Our process is designed around your success. From initial consultation to final deployment, we work collaboratively to ensure your vision becomes a powerful digital solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Free initial consultation and project assessment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Regular updates and milestone reviews</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5+ Years</div>
                <div className="text-gray-700 mb-6">of Experience</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 mb-6">Successful Projects</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-700">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;