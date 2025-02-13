"use client";
import ReviewCard from './ReviewCard';
import { useRef, useEffect, useState } from 'react';
import TrendingMovies from './TrendingMovies';
import CommentCard from './CommentCard';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

const comments = [
  {
    episodeId: "8",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
  {
    episodeId: "19",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
  {
    episodeId: "21",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },{
    episodeId: "1",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
];

const movies = [
  {
    title: "The Wolf of Wall Street",
    image: "/movies/wolf.jpeg",
    rating: 8.2,
    genre: "Crime/Drama"
  },
  {
    title: "Interstellar",
    image: "/movies/interstellar.jpeg",
    rating: 8.7,
    genre: "Sci-Fi/Adventure"
  },
  {
    title: "Anyone But You",
    image: "/movies/anyone.jpeg",
    rating: 6.2,
    genre: "Romance/Comedy"
  },
  {
    title: "Inception",
    image: "/movies/inception.jpeg",
    rating: 8.8,
    genre: "Sci-Fi/Action"
  },
  {
    title: "Poor Things",
    image: "/movies/poor.jpeg",
    rating: 7.9,
    genre: "Comedy/Sci-Fi"
  },
  {
    title: "10 Things I Hate About You",
    image: "/movies/things.jpeg",
    rating: 7.3,
    genre: "Comedy/Romance"
  }
];

const Moviescatego = () => {
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
    <div className=" flex flex-col px-6">
      <div className="mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-200">• Trending Comments</h2>
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
          {comments.map((comment, index) => (
            <CommentCard key={index} {...comment} />
          ))}
        </div>
      </div>

      <div className="flex flex-col my-20 self-center text-center px-4 p-4 rounded-lg bg-[#141421]">
  <h3 className="text-xl font-semibold mb-6 text-white">Register to select your Streaming Services</h3>
  <div className="lg:flex gap-16 justify-center">
    <div className="flex justify-center space-x-4 mb-8 gap-6 ">
      <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>

      <img 
        src="./icons/netflix.png" 
        alt="Netflix" 
        className="h-11 rounded-full" 
      />
      </div>
      <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>
      <img 
        src="./icons/hbo.jpeg" 
        alt="HBO" 
        className="h-11 rounded-full transition-transform duration-300 hover:scale-125 hover:brightness-110 cursor-pointer" 
      />
      </div>
      <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>
      <img 
        src="./icons/hulu.jpeg" 
        alt="Hulu" 
        className="h-11 rounded-full transition-transform duration-300 hover:hidden hover:scale-125 hover:brightness-110 cursor-pointer" 
      />
        </div>
        <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>
        
      <img 
        src="./icons/disney.jpeg" 
        alt="Disney+" 
        className="h-11 rounded-full transition-transform duration-300 hover:scale-125 hover:brightness-110 cursor-pointer" 
      />
        </div>
    </div>
    <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors h-12">
      Register Now
    </button>
  </div>
</div>

      <TrendingMovies movies={movies} categorie="Movies" colore='text-[#F5C518]'   Istitle={true} />
      <TrendingMovies movies={movies} categorie="TV Shows" colore='text-[#E54988]'  Istitle={true} />
      <TrendingMovies movies={movies} categorie="Anime" colore='text-[#FEC97B]' Istitle={true} />
      <TrendingMovies movies={movies} categorie="Drama" colore="text-[#67BFAF]"  Istitle={true} />

      <div className="mt-20 text-center pb-16">
        <h2 className="text-4xl font-semibold mb-8 text-white">Start Tracking What You Watch</h2>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
            <img src="/google.png" alt="Google" className="w-10 h-10" />
            Sign up with Google
          </button>
          <button className="flex items-center gap-2 bg-[#93AFC7] text-black px-6 py-3 rounded-md hover:bg-[#a3b5c3] transition-colors">
            <svg
              className="relative bottom-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M16 112v384h480V112Zm220.8 229.6a32.17 32.17 0 0 0 38.4 0l23.467-17.6L464 448v16H48v-16l165.333-124ZM256 316L48 160v-16h416v16ZM48 200l138.667 104L48 408Zm416 208L325.333 304L464 200Z"
              />
            </svg>
            Sign up with Email
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Moviescatego;
