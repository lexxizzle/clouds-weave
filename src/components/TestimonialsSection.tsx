import React from 'react';
import lebamsImage from '../assets/lebams.jpg';
import francisImage from '../assets/francis.jpg';
import mack from '../assets/mack.jpg';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Bambo Diaby",
      role: "Fullstack Developer",
      image: lebamsImage,
      description: "Expert in modern web technologies with a passion for creating scalable and efficient applications. Specializes in .NET, C#, and cloud architecture."
    },
    {
      name: "Mackonen Jordanos",
      role: "Frontend Specialist",
      image: {mack},
      description: "Creative frontend developer focused on delivering exceptional user experiences. Expert in React, TypeScript, and modern UI/UX design principles."
    },
    {
      name: "Francis Awagu",
      role: "Product Owner",
      image: francisImage,
      description: "Strategic product leader with deep understanding of business requirements and user needs. Ensures projects deliver real value and exceptional results."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of developers and designers dedicated to crafting exceptional digital solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 rounded-lg group">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;