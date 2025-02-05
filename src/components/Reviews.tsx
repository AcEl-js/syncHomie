"use client";
import React, { useRef, useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

 interface ReviewComment{
  name:string;
  content:string;
  subtitle:string;
 }
 interface ReviewsProps{
  reviews:ReviewComment[]
  title:string

 }


const Reviews: React.FC<ReviewsProps>  = ({reviews, title}) => {
  

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startDragging = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const drag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        setIsScrollable(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        );
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current && !isAnimating) {
      setIsAnimating(true);
      
      const container = scrollContainerRef.current;
      const cardWidth = (container.querySelector('.review-card') as HTMLElement)?.offsetWidth || 300;
      const gap = 24;
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      const startPosition = container.scrollLeft;
      const targetPosition = startPosition + scrollAmount;
      
      let startTime: number | null = null;
      const duration = 800; // Animation duration in milliseconds
      
      function animate(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smoother animation
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        
        const currentPosition = startPosition + (targetPosition - startPosition) * easeInOutCubic(progress);
        container.scrollLeft = currentPosition;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      }
      
      requestAnimationFrame(animate);
    }
  };

  return (
    <div className='py-16 px-4'>
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-200 mb-8 ml-4">{title} </h2>
          {isScrollable && (
            <div className="flex gap-2">
              <button
                    onClick={() => scroll('left')}
                    
                  >
                    <CircleArrowLeft className="text-[#79797989]"/>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    
                  >
                    <CircleArrowRight className="  text-[#797979]"/>
                  </button>
            </div>
          )}
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={drag}
        >
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="review-card flex-shrink-0 pointer-events-none"
            >
              <ReviewCard {...review} />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;