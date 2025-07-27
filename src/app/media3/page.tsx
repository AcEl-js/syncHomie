"use client"
import Navbar from "@/components/Sidebar";
import TvShowDetails from "./tv-show";
import Image from "next/image"
import "./style.css"
import OverviewMenu from "../media/OverviewMenu";
import EpisodeList from "../media/eposode-lists";
import Reviews from "@/components/Reviews";
import CommentSys from "@/components/CommentSys";
import SeriesCast from "./series-cast";
import { useDragScroll } from '@/components/dragScrolling';
import { useState } from "react";
import { MessageSquare, Share2, Star, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Eye, Plus } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import StarRating from "./rating";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Sidebar from "./Sidebar";
import EpisodeProgressTracker from "./episode-tracker";

interface Show {
    title: string
    rating: number
    image: string
}

// Sample cast data for the new design
const castMembers = [
  {
    name: "Charlie Day",
    character: "Charlie Kelly",
    image: "/other/actor1.webp"
  },
  {
    name: "Glenn Howerton",
    character: "Dennis Reynolds",
    image: "/other/actor2.webp"
  },
  {
    name: "Rob McElhenney",
    character: "Mac",
    image: "/other/actor3.webp"
  },
  {
    name: "Kaitlin Olson",
    character: "Dee Reynolds",
    image: "/other/actor4.webp"
  },
  {
    name: "Danny DeVito",
    character: "Frank Reynolds",
    image: "/other/actor5.webp"
  },
  {
    name: "Mary Elizabeth Ellis",
    character: "The Waitress",
    image: "/other/actor1.webp"
  },
  {
    name: "Artemis Pebdani",
    character: "Artemis",
    image: "/other/actor2.webp"
  },
  {
    name: "Lynne Marie Stewart",
    character: "Charlie's Mom",
    image: "/other/actor3.webp"
  }
];

export default function App() {
    const [showEpisodeList, setShowEpisodeList] = useState(false)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
   

    
const shows: Show[] = [
    {
      title: "Scrubs",
      rating: 4.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "How I Met Your Mother",
      rating: 4.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "The Big Bang Theory",
      rating: 4.3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Curb Your Enthusiasm",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Fuller House",
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Blockbuster",
      rating: 4.2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
  ]
  

    const reviews = [
        {
          name: "P O lane",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },
        {
          name: "Tomas Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },
        {
          name: "Achraf Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }, {
          name: "Allan Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },{
          name: "Achraf Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }, {
          name: "Allan Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }
      ];
    const { containerRef, dragHandlers } = useDragScroll();
    
      

  
  return (
    <div className="min-w-full">
              <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

        {/* Main content with proper margin to account for sidebar */}
        <div className=" sm:mt-24  mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5498821] to-[#A33B3B00]   rounded-lg overflow-hidden shadow-xl text-white">
          <div className=" mx-aufto  bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-fixed rounded-lg overflow-hidden shadow-xl text-white">
            
            <TvShowDetails/>
            <div className="flex justify-center">
            <div className="grid w-full grid-cols-1 min-[900px]:grid-cols-[1fr_2fr_1fr] lg:justify-self-center   justify-self-center py-8 gap-6 p-4 rounded-lg mb-8 ">
          {/* Your Rating */}
          <div className="space-y-4 ">
           
              
           

            <div>
              
              <EpisodeProgressTracker/>
            </div>

            <div className="mt-4">

          </div>

          </div>

          {/* Your Review */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Review</h2>
            <Textarea placeholder="Write your review here..." className="bg-gray-800 border-gray-700 h-40" />
            <div className="flex justify-between mt-2">
            
              <Button variant="secondary" className="bg-gray-700">
                Submit
              </Button>
            </div>
          </div>

          {/* Actors and Watch On */}
          <div className="space-y-6">
            <div>
        <h2 className="text-xl font-semibold mb-4">Actors Seen Before</h2>
        <div className="space-y-3">
          {/* Rob McElhenney */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <img
               src="/other/actor3.webp"
                    width={50}
                    height={50}
                    alt="Tim Bryant"
                    className="rounded-md"
            />
            <div className="flex-1">
              <div className="font-medium">Rob McElhenney</div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Tv className="w-4 h-4 text-orange-500" />
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>Yes</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>8.5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tim Bryant */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
            <img
              src="/other/actor2.webp"
                    width={50}
                    height={50}
                    alt="Tim Bryant"
                    className="rounded-md"
            />
            <div className="flex-1">
              <div className="font-medium">Tim Bryant</div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Tv className="w-4 h-4 text-orange-500" />
                  <span>1</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>No</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>—</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            <div className="grid grid-cols-2 items-end">
              <div>
              <h2 className="text-xl font-semibold mb-4">Watch on</h2>
              <div className="flex flex-wrap gap-2">
                <img
                  src="/icons/netflix.png"
                  width={40}
                  height={40}
                  alt="Netflix"
                  className="rounded-md"
                />
                <img
                  src="/icons/hbo.jpeg"
                  width={40}
                  height={40}
                  alt="HBO Max"
                  className="rounded-md"
                />
                <img
                  src="/icons/hulu.svg"
                  width={40}
                  height={40}
                  alt="FX"
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
            <div className="flex  gap-2  justify-center">
            <a href="#comments">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="bg-purple-500/10 text-purple-500">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                 
                    <p>Comments</p>
                  
                   
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </a>
             
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="bg-purple-500/10 text-purple-500">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            </div>
            </div>

            
          </div>
        </div>
            </div>
            
            {/* Updated Cast Section */}
          <div className="w-full px-4 mb-8">
              <h1 className='text-2xl font-semibold text-gray-200 mb-8'>
                <span className='text-[#F5C518]'>•</span> Cast
              </h1>
              
              {/* New Cast Grid Design */}
              <div className=" mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {castMembers.map((member, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <div className="text-center space-y-1">
                        <h3 className="text-sm font-medium text-white truncate group-hover:text-[#F5C518] transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-xs text-gray-400 truncate">
                          {member.character}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-white">
      <div className=" mx-auto px-4 py-8">
        {/* Show Details Section */}
        <div className=" rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="lg:text-2xl text-base text-gray-400 mb-2">
              Latest Release: Season 16 Episode 8 <span className="ml-4">Air Date: October 10th 2024</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Show Poster */}
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/movies/always.png"
                  alt="It's Always Sunny in Philadelphia"
                  width={192}
                  height={288}
                  className="rounded-md w-full h-auto"

                />
              </div>

              {/* Show Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Dennis Takes a Mental Health Day</h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-900 px-2 py-1 rounded-md flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="font-bold">86%</span>
                  </div>
                  <span className="text-gray-400">2023 • 8 Episodes</span>
                </div>

                <p className="text-gray-300 mb-6">
                  After a physical reveals Dennis has high blood pressure, he decides to take a day away from The Gang
                  to de-stress at the beach. But life has other plans, and his day spirals into a string of mishaps
                  until he can no longer contain his rage.
                </p>

                {/* Episode Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-300">Progress: 5 | 8 | 12</span>
                      <span className="text-sm text-gray-400">Next Episode on 04/18/2026</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#F5C518] h-2 rounded-full relative" style={{width: '62.5%'}}>
                      <div className="absolute right-0 top-0 h-full w-1 bg-gray-400 rounded-r-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Current: Episode 5</span>
                    <span>Released: 8/12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Episode List Button - Moved down */}
            <div className="mt-6">
              <Button
                variant="outline"
                className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                onClick={() => setShowEpisodeList(!showEpisodeList)}
              >
                <span className="mr-2">📋</span> View Episode List
              </Button>
            </div>
          </div>
        </div>

        {/* Episode List Section - Conditionally rendered */}
        {showEpisodeList && (
          <div className="mt-6">
            <h1 className='text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Season 1: 12/12 Episodes Released</h1>
            <EpisodeList />
          </div>
        )}
      </div>
    </div>
            
      <Reviews reviews={reviews} title='• User Reviews' />
      <div className=" flex justify-center #comment">
      <section className="w-full mx-4" id="comments">
     <CommentSys/>
     </section>
      </div>

            <h1 className=' text-2xl font-semibold text-gray-200 m-8 ml-4'><span className='text-[#F5C518] '>•</span> Media </h1>


    <div className="w-full text-white">
    <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex items-center gap-4 mb-6 justify-between">
       
          <Tabs defaultValue="popular" className="w-full flex justify-between">
            <TabsList className="bg-transparent border-b text border-neutral-800 w-full justify-center h-auto p-0 gap-6">
              <TabsTrigger
                value="popular"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="backdrops"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Backdrops
              </TabsTrigger>
              <TabsTrigger
                value="posters"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Posters
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <button className="text-sm text-neutral-400 hover:text-white transition-colors">Edit</button>
        </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[1, 2, 3].map((i) => (
    <div key={i} className="relative aspect-[3/2] overflow-hidden rounded-lg">
    <img
        src="/other/cover.png"
        alt="Media gallery image"
        className="object-cover hover:opacity-75 transition-opacity cursor-pointer"
    />
    </div>
    ))}
    </div>
    </div>

    {/*  more liked*/}

    <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> More Like This</h1>
    <div>
    <div className="grid w-max-[1219px] ml-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {shows.map((show) => (
    <div key={show.title} className="group relative">
        <div className=" overflow-hidden rounded-lg">
        <img
            src={show.image || "/placeholder.svg"}
            alt={show.title}
            width={181}
            height={181}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 h-[181px] w-[181px] "
        />
        </div>
        <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-white truncate">{show.title}</h3>
        <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm text-gray-400">{show.rating}</span>
        </div>
        </div>
    </div>
    ))}


    </div>


    </div>

    </div>

    <Footer/>
          </div>
        </div>
    </div>
  )
}