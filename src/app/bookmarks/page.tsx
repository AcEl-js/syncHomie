"use client"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/Navbar"
import { MediaCard } from "./MediaCard"
import {NavButton } from "./NavButton"
import {Sidebar} from "./Sidebar"
import "./style.css"

import { Button } from "@/components/ui/button"
import { Import, Menu } from 'lucide-react'
import { useDragScroll } from '@/components/dragScrolling';

import { useState } from "react"

const navItems = [
  { label: "All", count: 36, isActive: true },
  { label: "TV Shows", count: 10, color: "#C85684" },
  { label: "Movies", count: 3, color: "#4E253F" },
  { label: "Anime", count: 12, color: "#EDC884" },
  { label: "Drama", count: 42, color: "#83BAAB" },
  { label: "Sports", count: 502, color: "#EC8164" },
]

const mediaItems = [
  {
    title: "Futurama",
    genres: ["Animation", "Comedy"],
    rating: 4,
    description: "Futurama's return is a wild ride through space and time, blending hilarious satire with heartwarming moments. The quirky characters continue to shine, especially Bender's iconic one-liners and Fry's lovable cluelessness!",
    currentEpisode: "S9E10",
    latestEpisode: "S9E10",
    totalEpisodes: "S9E10",
    nextEpisodeInfo: "Next ep airs on Disney+ • Sun 02/27/2022 • 08:00 PM",
    imageSrc: "/bookmarks/Visual.png"
  },{
    title: "Futurama",
    genres: ["Animation", "Comedy"],
    rating: 4,
    description: "Futurama's return is a wild ride through space and time, blending hilarious satire with heartwarming moments. The quirky characters continue to shine, especially Bender's iconic one-liners and Fry's lovable cluelessness!",
    currentEpisode: "S9E10",
    latestEpisode: "S9E10",
    totalEpisodes: "S9E10",
    nextEpisodeInfo: "Next ep airs on Disney+ • Sun 02/27/2022 • 08:00 PM",
    imageSrc: "/bookmarks/Visual.png"
  }
  // Add more media items here...
]

export default function StreamingDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { containerRef, dragHandlers } = useDragScroll();
  return (
    <div className="bg-black w-full  text-white mt-[55px]">
      <Navbar />
      
      <nav className="py-2 sm:py-4 border-b border-zinc-800 bg-black fixed top-[72px] z-40 w-screen">
        <div className="w-full mx-auto flex  items-center justify-between px-4">
          {/* Existing nav items */}
          <div 
           ref={containerRef}
           className="flex space-x-6 overflow-x-auto  hide-scrollbar cursor-grab active:cursor-grabbing select-none "
           {...dragHandlers}>
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                count={item.count}
                color={item.color}
                className={`text-xs sm:text-sm hover:bg-zinc-800 hover:text-white ${
                  item.isActive ? "text-white " : ""
                }`}
              >
                {item.label}
              </NavButton>
            ))}
          </div>
           {/* Mobile menu button */}
           <div className="lg:hidden ">
            <Button
              variant="ghost"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center flex-wrap space-x-2 sm:space-x-4">
            <NavButton count={5} icon={Import} className="text-xs sm:text-sm hover:bg-zinc-800 hover:text-white">
              Your Reviews
            </NavButton>
            <div className="p-1 rounded-2xl border-[1px] border-[#B55BA1]">
                  <Button className="bg-[#B55BA1] hover:bg-[#b55ba2bd] text-sm w-full rounded-xl">
                    <Import className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                </div>
            <Button
              variant="ghost"
              className="hover:bg-zinc-800 hover:text-white text-xs sm:text-sm"
            >
              <img
                src="./icons/Eye off.png"
                alt="Hide colored tiles"
                className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4"
              />
              Tiles
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-zinc-800 hover:text-white text-xs sm:text-sm"
            >
              <img
                src="./icons/color.png"
                alt="Sort"
                className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4"
              />
              Sort
            </Button>
          </div>

         

          {/* Mobile dropdown menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full right-0  bg-black border-t border-zinc-800 shadow-lg">
              <div className="flex flex-col space-y-2 p-4">
                <NavButton count={5} icon={Import} className="text-sm w-full hover:bg-zinc-800 hover:text-white">
                  Your Reviews
                </NavButton>
                <div className="p-1 rounded-2xl border-[1px] border-[#B55BA1]">
                  <Button className="bg-[#B55BA1] hover:bg-[#b55ba2bd] text-sm w-full rounded-xl">
                    <Import className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="hover:bg-zinc-800 hover:text-white text-sm w-full"
                >
                  <img
                    src="./icons/Eye off.png"
                    alt="Hide colored tiles"
                    className="mr-2 h-4 w-4"
                  />
                  Tiles
                </Button>
                <Button
                  variant="ghost"
                  className="hover:bg-zinc-800 hover:text-white text-sm w-full"
                >
                  <img
                    src="./icons/color.png"
                    alt="Sort"
                    className="mr-2 h-4 w-4"
                  />
                  Sort
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>


      {isMenuOpen && (
        <div className="sm:hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <NavButton count={5} icon={Import} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              Your Reviews
            </NavButton>
            <Button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <Import className="mr-2 h-4 w-4 inline" />
              Import
            </Button>
            <Button variant="ghost" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <img src="./icons/Eye off.png" alt="Hide colored tiles" className="mr-2 h-4 w-4 inline" />
              Tiles
            </Button>
            <Button variant="ghost" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
              <img src="./icons/color.png" alt="Sort" className="mr-2 h-4 w-4 inline" />
              Sort
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row mt-[140px]">
        <div className="hidden sm:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="w-full sm:ml-[234px] p-2 sm:p-6 bg-black">
          <div className="w-full max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 gap-6 grid-cols-2-lg mt-11">
              {mediaItems.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </main>



      </div>
    </div>   
  )
}

