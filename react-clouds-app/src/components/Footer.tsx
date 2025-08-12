import React from 'react';
import { Cloud, Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative flex items-center">
                <Cloud className="w-6 h-6 text-blue-400 relative z-10" />
                <Cloud className="w-6 h-6 text-indigo-400 -ml-2 mt-1 relative z-20" />
                <Cloud className="w-6 h-6 text-blue-300 -ml-2 relative z-10" />
              </div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Clouds</span>
                <span className="text-white ml-1">Weave</span>
              </div>
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We specialize in creating exceptional web applications that combine cutting-edge technology with beautiful design to deliver outstanding user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@clouds-weave.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-0.5" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Clouds Weave. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;