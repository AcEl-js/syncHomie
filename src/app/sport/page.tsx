"use client"
import Navbar from '@/components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"
import MatchDay from './matchDay';

const sports = [
  { name: "MMA", icon: "mma.svg" },
  { name: "Football", icon: "football.svg" },
  { name: "Soccer", icon: "soccer.svg" },
  { name: "Tennis", icon: "tennis.svg" },
  { name: "Formula 1", icon: "formula1.svg" },
  { name: "Baseball", icon: "baseball.svg" },
  { name: "Basketball", icon: "basketball.svg" },
  { name: "Ice", icon: "hockey.svg" },
  { name: "Cricket", icon: "cricket.svg" },
  { name: "Rugby", icon: "rugby.svg" },
]



const Page = () => {
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
        <div>
            <Navbar/>
            <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[300px] w-full">
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                    'url("/sport/bgsport.jpeg")',
                }}
                >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1C97FF] ">SyncHomie Sports</h1>
                    <p className="text-[#657182] max-w-2xl">
                    Find out where to stream sports online & keep track of your favorite competitions & teams!
                    </p>
                    <p className="text-[#657182] text-sm">Features to track your teams are coming soon!</p>
                </div>
                </div>
            </div>

            {/* Leagues Section */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-semibold mb-4">Leagues & tournaments</h2>
                
                <div 
                ref={scrollContainerRef}
                className="flex space-x-4  p-4 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
                onMouseDown={startDragging}
                onMouseLeave={stopDragging}
                onMouseUp={stopDragging}
                onMouseMove={drag}>
                    {[
                    { name: "NBA", logo: "/sport/NBA.svg" },
                    { name: "UEFA Nations League", logo: "/sport/UEFA.svg" },
                    { name: "NFL", logo: "/sport/NFL.svg" },
                    { name: "Davis Cup", logo: "/sport/Davis.svg" },
                    { name: "NHL", logo: "/sport/NLH.svg" },
                    { name: "FIFA World Cup Qualifiers", logo: "/sport/FIFA.svg" },
                    { name: "Formula 1", logo: "/sport/Formula.svg" },
                    { name: "Billie Jean King Cup", logo: "/sport/billie.svg" },
                    { name: "Premier League", logo: "/sport/PremierLeague.svg" },
                    { name: "International Friendly Games", logo: "/sport/InternationlFriendly.svg" },
                    ].map((league) => (
                    <div
                        key={league.name}
                        className="inline-flex flex-col items-center group bg-gray-800 rounded-lg justify-center p-2 group-hover:bg-gray-700 transition-colors w-[146px] h-[146px] "
                        draggable='false'
                    >
                        <div className="w-24 flex justify-center items-center my-2 ">
                        <img src={league.logo} className="w-[50px] h-[50px] bg-gray-700 rounded-lg" />
                        </div>
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white text-center max-w-[120px] text-wrap">
                        {league.name}
                        </span>
                    </div>
                    ))}
                </div>
              
            </div>

            {/* Existing Sports Navigation */}
            <div className="px-4">
                <h1 className="text-xl font-semibold mb-4">Sports</h1>

                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex space-x-4  p-4 ">
                    {sports.map((sport) => (
                    <Link
                        key={sport.name}
                        href={`/sport/${sport.name.toLowerCase()}`}
                        className="inline-flex flex-col items-center group"
                        draggable="false"
                    >
                        <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        <span className="sr-only">{sport.name}</span>
                        <div className="w-8 h-8 opacity-80 group-hover:opacity-100">
                          <img src={"/"+sport.icon}  />
                        </div>
                        </div>
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white">{sport.name}</span>
                    </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <MatchDay/>
                
            </div>
            </div>
            
        </div>
       
      )
}

export default Page;
