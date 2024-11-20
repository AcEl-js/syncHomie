import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-[#141421] p-6 rounded-lg sm:h-[260px] sm:w-[300px]">
      <div className=" w-full">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;