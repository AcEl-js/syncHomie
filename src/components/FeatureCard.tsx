"use client";
import React from 'react';


interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description,}: FeatureCardProps) => {
  return (
    <div  className="block transition-all duration-300 hover:translate-y-[-2px] hover:shadow-custom cursor-pointer ">
      <div className="bg-[#141421] p-6 rounded-lg sm:h-[260px] sm:w-[300px] lg:h-[320px] lg:w-[360px] transition-colors duration-300 hover:bg-[#1a1a2d]">
        <div className="w-full">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;