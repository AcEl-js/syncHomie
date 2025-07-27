"use client"
import React, { useState } from 'react';
import TriviaTitles from '../trivia/triviaTitles';
import Sidebar from '@/components/Sidebar';
import { NavButton } from '../bookmarks/NavButton';
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react';
import { useDragScroll } from '@/components/dragScrolling';

import "./style.css"
import EnhancedFilter from './filters';

interface TriviaTitle {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const triviaItems: TriviaTitle[] = [
    {
    id: 1,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  }, {
    id: 2,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  } ,{
    id: 3,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  } ,{
    id: 4,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  }, {
    id: 5,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  }, {
    id: 6,
    image: '/movies/lastofus.svg',
    title: 'Browse Trivia',
    subtitle: 'Godzilla x Kong: The New Empire'
  }];

const navItems = [
  { label: "All", count: 36, isActive: true },
  { label: "TV Shows", count: 10, color: "bg-[#C85684]" },
  { label: "Movies", count: 3, color: "bg-[#4E253F]" },
  { label: "Anime", count: 12, color: "bg-[#EDC884]" },
  { label: "Drama", count: 42, color: "bg-[#83BAAB]" },
  { label: "Sports", count: 502, color: "bg-[#EC8164]" },
  // Updated People color to be more visible
  { label: "People", count: 502, color: "bg-[#3C4EB0]" }, // Brighter blue shade
]

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const { containerRef, dragHandlers } = useDragScroll();
  const [showEnhancedFilter, setShowEnhancedFilter] = useState(false);
  
  return (
    <div className='text-white bg-black'>
      <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
   
      
      {/* Enhanced filter section */}
     
      
      {/* Category Nav */}
      <nav className="p-4 md:pt-3 border-b border-zinc-800 bg-black fixed w-screen top-[0px] z-40">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="items-center gap-3 mr-14 hidden md:flex">
            <button 
              className="flex items-center gap-3 hover:text-yellow-400"
              onClick={() => setShowEnhancedFilter(!showEnhancedFilter)}
            >
              <img className='w-6' src="./icons/filter.svg" alt="" />
              <span className="text-yellow-400 text-sm font-medium">Filter By:</span>
            </button>
            <div className="bg-zinc-400 w-[1px] h-8 ml-4"/>
          </div>
          
          {/* Mobile filter button - only visible on small screens */}
          <div className="items-center gap-3 mr-4 flex md:hidden">
            <button 
              className="flex items-center gap-2 p-2 hover:bg-zinc-800 rounded-md"
              onClick={() => setShowEnhancedFilter(!showEnhancedFilter)}
            >
              <SlidersHorizontal size={18} className="text-yellow-400" />
              <span className="text-yellow-400 text-xs font-medium">Filters</span>
            </button>
          </div>
          
          <div
            ref={containerRef}
            className="flex space-x-6 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pt-1 select-none"
            {...dragHandlers}
          >
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                count={item.count}
                color={item.color}
                className={`text-xs sm:text-sm hover:bg-zinc-800 hover:text-white ${
                  item.isActive ? "text-white " : ""
                } ${item.label === "People" ? "font-medium text-base" : ""}`}
              >
                {item.label}
              </NavButton>
            ))}     
          </div>
        </div>
      </nav>
      
      {/* Search bar */}
      <div className="px-6 py-4 flex items-center space-x-4 mt-[130px] pt-6 justify-center">
        <button className="text-gray-400 hover:text-white">
          <ArrowLeft size={20} />
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Peanut"
            className="w-full bg-gray-800 rounded-full px-10 py-2 text-sm focus:outline-none h-11"
          />
        </div>

        <div className='transition-transform duration-300 hover:scale-110 hover:brightness-110 cursor-pointer'>
          <img 
            src="./icons/netflix.png" 
            alt="Netflix" 
            className="h-6 lg:h-11 border border-gray-600 rounded-full" 
          />
        </div>
        <div className='transition-transform duration-300 hover:scale-110 hover:brightness-110 cursor-pointer'>
          <img 
            src="./icons/hbo.jpeg" 
            alt="HBO" 
            className="h-6 lg:h-11 border border-gray-600 rounded-full" 
          />
        </div>
        <div className='transition-transform duration-300 hover:scale-110 hover:brightness-110 cursor-pointer'>
          <img 
            src="./icons/hulu.jpeg" 
            alt="Hulu" 
            className="h-6 lg:h-11 border border-gray-600 rounded-full" 
          />
        </div>
        <div className='transition-transform duration-300 hover:scale-110 hover:brightness-110 cursor-pointer'>
          <img 
            src="./icons/disney.jpeg" 
            alt="Disney+" 
            className="h-6 lg:h-11 border border-gray-600 rounded-full" 
          />
        </div>

        <div className="flex items-center space-x-2 text-gray-400">
          <img src="/icons/eye.svg" className='h-[15px]'/>
          <span className="text-sm">Colored Tiles</span>
        </div>
      </div>

       <EnhancedFilter />

      <div className='bg-black pt-5 '>
        <TriviaTitles isDiscover={true} triviaTitle={triviaItems}/>
      </div>
    </div>
  );
}

export default App;