import React from 'react';
import { Button } from './ui/button';
import { CircleAlert, ThumbsDown, ThumbsUp } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  content: string;
  subtitle: string;
}

const ReviewCard = ({ name, content, subtitle }: ReviewCardProps) => {
  return (
    <div className="bg-[#141421] p-4 rounded-lg min-w-[350px]">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
        <div>
          <h4 className="text-gray-200 font-medium">{name}</h4>
          <p className="text-gray-400 text-sm">{content}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <div className=" flex items-center py-2" >
              <Button className="bg-[#141421] ">
                  <CircleAlert  className=" h-[22px] w-[22px] " />
              </Button >
              <Button className="bg-[#141421] ">
                    <ThumbsUp className="h-6 w-6" />
              </Button >
              <Button className="bg-[#141421] ">
                    <ThumbsDown className="h-6 w-6" />
              </Button >
              <Button className="bg-[#141421] ">
                    <img src="/ArrowBend.svg" className="" />
              </Button >
            </div>
            <div className="flex  text-[#BCBCBC] text-xs gap-2">
            <div className="flex items-center cursor-pointer bg-[#FFFFFF26] px-2 py-2 rounded-md " >Funniest 😂</div>
            <div className="flex items-center cursor-pointer " >Most Interesting 🤔</div>
            <div className="flex items-center cursor-pointer " >Most Rage Inducing 😠</div>
            <div className="flex items-center cursor-pointer " >Saddest 😢</div>
          </div>
    </div>
  );
};

export default ReviewCard;