"use client";
import ReviewCard from './ReviewCard';
import { useRef, useEffect, useState } from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Reviewer Name",
      content: "Lorem Ipsum",
      subtitle: "It's Always Sunny in Philadelphia"
    },
    {
      name: "Reviewer Name",
      content: "Lorem Ipsum",
      subtitle: "It's Always Sunny in Philadelphia"
    },
    {
      name: "Reviewer Name",
      content: "Lorem Ipsum",
      subtitle: "It's Always Sunny in Philadelphia"
    },
    {
      name: "Reviewer Name",
      content: "Lorem Ipsum",
      subtitle: "It's Always Sunny in Philadelphia"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        // Check if the container's scroll width is greater than its client width
        setIsScrollable(
          scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
        );
      }
    };

    // Check scrollability on mount and on window resize
    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, []);

  const scroll = (direction:any) => {
    if (scrollContainerRef.current) {
      // Calculate the width of one card plus any gap
      const cardWidth = (scrollContainerRef.current.querySelector('.review-card') as HTMLElement)?.offsetWidth || 300;
      const gap = 24; // Matches space-x-6 in Tailwind (6 * 0.25rem = 1.5rem = 24px)
      
      // Scroll by the width of one card plus gap
      const scrollAmount = direction === 'left' 
        ? -(cardWidth + gap) 
        : (cardWidth + gap);
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='py-16 px-4'>
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-200 mb-8 ml-4">• Trending Reviews</h2>
          {isScrollable && (
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full bg-[#1A1A2E] flex items-center justify-center"
              >
                <span className="text-gray-400">←</span>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full bg-[#1A1A2E] flex items-center justify-center"
              >
                <span className="text-gray-400">→</span>
              </button>
            </div>
          )}
        </div>
        <div 
          ref={scrollContainerRef} 
          className="flex space-x-6 overflow-x-auto pb-6 scroll-smooth hide-scrollbar"
        >
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="review-card flex-shrink-0"
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