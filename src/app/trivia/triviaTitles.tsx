import { useEffect, useRef, useState } from 'react';

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
  const colors = ["bg-[#4E402A]", "bg-[#2F1F1F]", "bg-[#4A282D]", "bg-[#28362F]"];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const preventDefaultDrag = (e: Event) => e.preventDefault();
    const container = scrollContainerRef.current;
    
    if (container) {
      container.addEventListener('dragstart', preventDefaultDrag);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('dragstart', preventDefaultDrag);
      }
    };
  }, []);

  // If no items, return null or a placeholder
  if (!triviaTitle.length) {
    return null;  // Or return a placeholder component
  }

  return (
    <div 
      ref={scrollContainerRef}
      className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={drag}
    >
      {triviaTitle.map((item) => (
        <div 
          key={item.id} 
          className={`flex-none w-[231px] rounded-xl flex flex-col justify-center items-center ${colors[item.id % colors.length]}`}
        >
          <div>
            <img className="rounded-xl" src={item.image} alt="" />
          </div>
          <div className="flex flex-row gap-3 text-white">
            <img src="/icons/GameController.svg" className="h-[18px] w-[18px]" alt="" />
            <h1 className="text-base">{item.title}</h1>
          </div>
          <h1 className="text-[#C3C3C3] text-base">{item.subtitle}</h1>
        </div>
      ))}
    </div>
  );
};

export default TriviaTitles;