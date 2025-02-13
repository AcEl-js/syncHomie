"use client";
import { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
 

interface Movie {
  title: string;
  image: string;
  rating: number;
  genre: string;
}

interface TrendingMoviesProps {
  movies: Movie[];
  categorie:string
  colore:string
  Istitle:boolean
}


const TrendingMovies: React.FC<TrendingMoviesProps> = ({ movies, categorie, colore,Istitle }) => {
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
    <div className="py-16 px-4 .hide-scrollbar ">
      <div className="max-w-7xl mx-auto">
        {/* movies */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
           { Istitle && <span className={`text-6xl font-bold ${colore}`}>132,784</span>}
            <span className={`text-3xl ${Istitle ? "text-blue-500 ":"text-white"}  `}>{categorie}</span>
          </div>
          {Istitle && <h2 className="text-xl mt-4 flex items-center gap-2 text-white">
            <div className="w-1 h-6 bg-blue-500 " />
            Most watched movies this month
          </h2>}
        </div>
        <div 
      
        ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={drag}
        >
          
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      
      </div>

     
    </div>
  );
};

export default TrendingMovies;