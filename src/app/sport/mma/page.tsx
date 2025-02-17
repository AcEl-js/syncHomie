"use client";
import { useRef, useEffect, useState } from 'react';
import MatchCard from './upcoming-matches';
import Navbar from '@/components/Navbar';
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import MatchDay from '../matchDay';
import Link from "next/link"
import { useDragScroll } from '@/components/dragScrolling';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


 




const Page = () => {

  const streamingServices = [
    {
      name: "Hulu",
      matches: 12,
      logo: "/icons/hulu.svg",
    },
    {
      name: "fuboTV",
      matches: 12,
      logo: "/icons/fubo.svg",
    },
    {
      name: "NFL Sunday Ticket",
      matches: 11,
      logo: "/icons/sunday.svg",
    },
    {
      name: "Paramount Plus",
      matches: 5,
      logo: "/icons/paramount.svg",
    },
    {
      name: "Fox Sports",
      matches: 5,
      logo: "/icons/fox.svg",
    },
  ]
    
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
   const { containerRef, dragHandlers } = useDragScroll();

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
        <div className=' h-screen bg-black'>
            <Navbar/>

            <div className="w-full bg-black text-white mt-16 pt-3">
              <nav className="  px-4 py-3 mb-5">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-lg text-[#C3C3C3] hover:bg-gray-800 hover:text-white">
                        Sports
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 p-4 w-40 bg-black text-white">
                          <Link href="/sport/mma" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                            MMA
                          </Link>
                          <Link href="/sport/nfl" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                            NFL
                          </Link>
                          <Link href="/sport/nba" className="block px-2 py-1.5 text-sm hover:bg-gray-800 rounded-md">
                            NBA
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="mt-2">
                  <h1 className="text-2xl text-gray-300 ">
                    Upcoming NFL Matches
                  </h1>
                </div>
              </nav>
            </div>


            <div 
              ref={containerRef}
              className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing select-none ml-5"
              {...dragHandlers}>
        <h1>Upcoming NFL Matches</h1>
            {[1,2,3,4,5,6].map((match) =>(
                <div key={match}>
                    <MatchCard/>
                </div>
            ))}
        </div>
        <div className="bg-black p-4 md:p-6">
      <h2 className="text-white mb-4 text-lg font-medium">Your 7 day guide: Where can I watch MMA live?</h2>
      <div 
      ref={scrollContainerRef}
      className="grid grid-flow-col gap-4 space-x-4 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={drag}>
        {streamingServices.map((service) => (
          <Card key={service.name} className=" w-[250px] h-[84px] bg-black border border-[#303740] rounded-3xl hover:bg-zinc-800 transition-colors flex items-center jutify-center cursor-pointer">
            <CardContent className="p-4 flex items-center gap-3">
              <Image
                src={service.logo || "/placeholder.svg"}
                alt={`${service.name} logo`}
                width={50}
                height={50}
                className="rounded-sm"
              />
              <div className="min-w-0">
                <h3 className="text-white text-lg font-medium truncate">{service.name}</h3>
                <p className="text-[#C6C8CD] text-base">{service.matches} Matches</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
       <MatchDay/>
    </div>

        </div>
    );
}

export default Page;
