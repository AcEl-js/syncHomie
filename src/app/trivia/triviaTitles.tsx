import { useEffect, useRef, useState } from 'react';
import { useDragScroll } from '@/components/dragScrolling';

interface TriviaTitle {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface TriviaTitlesProps {
  triviaTitle?: TriviaTitle[];  // Made optional with ?
}

const TriviaTitles = ({ triviaTitle = [] }: TriviaTitlesProps) => {  // Added default empty array
    const { containerRef, dragHandlers } = useDragScroll();
    const colors = ["bg-[#4E402A]", "bg-[#2F1F1F]", "bg-[#4A282D]", "bg-[#28362F]"];

  return (
    <div 
    ref={containerRef}
    className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing select-none ml-5"
    {...dragHandlers}>
      {triviaTitle.map((item) => (
        <div 
          key={item.id} 
          className={`flex-none w-[231px] rounded-xl  flex flex-col  justify-center items-center ${colors[item.id % colors.length]}`}
        >
          <div>
            <img className="rounded-xl mt-3" src={item.image} alt="" />
          </div>
          <div className="flex w-full ml-8 my-3  gap-3 text-white">
            <img src="/icons/GameController.svg" className="h-[18px] w-[18px]" alt="" />
            <h1 className="text-base">{item.title}</h1>
          </div>
          <h1 className="text-[#C3C3C3] text-base ml-4 mb-3">{item.subtitle}</h1>
        </div>
      ))}
    </div>
  );
};

export default TriviaTitles;