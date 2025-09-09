import React from 'react';
import { Code, Monitor, Settings, Users, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Tailored web applications built with modern technologies to meet your specific business requirements.",
      features: ["React & TypeScript", "API Integration", "Database Design"]
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.",
      features: ["Responsive Design", "User Research", "Prototyping"]
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamlessly connect your applications with third-party services and existing systems.",
      features: ["API Development", "Data Migration", "Automation"]
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic guidance to help you make informed decisions about your digital transformation.",
      features: ["Technology Audit", "Architecture Planning", "Best Practices"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support to ensure your applications remain secure, updated, and performing optimally.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web application services designed to elevate your business and deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-gray-50 rounded-lg">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;