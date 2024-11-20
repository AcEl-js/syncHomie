import React from 'react';

interface ReviewCardProps {
  name: string;
  content: string;
  subtitle: string;
}

const ReviewCard = ({ name, content, subtitle }: ReviewCardProps) => {
  return (
    <div className="bg-[#141421] p-4 rounded-lg min-w-[300px]">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
        <div>
          <h4 className="text-gray-200 font-medium">{name}</h4>
          <p className="text-gray-400 text-sm">{content}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
};

export default ReviewCard;