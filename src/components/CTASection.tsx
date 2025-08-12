import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful digital solutions that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/start-project"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Schedule a Call
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Fast Response</div>
              <div className="opacity-80">We'll get back to you within 24 hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="opacity-80">No commitment, just expert advice</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Custom Solutions</div>
              <div className="opacity-80">Tailored to your specific needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;