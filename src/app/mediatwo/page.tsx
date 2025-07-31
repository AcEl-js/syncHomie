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
import Sidebar from "@/components/Sidebar";
import EpisodeProgressTracker from "./episode-tracker";
import ReviewsSection from "./reviewsSection";

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
 const friendActivity = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/api/placeholder/40/40",
      watchDate: "2 days ago",
      rating: 4,
      review: "Really enjoyed this episode! The character development was fantastic and the plot twists kept me on the edge of my seat."
    },
    {
      id: 2,
      name: "Jane Smith", 
      avatar: "/api/placeholder/40/40",
      watchDate: "1 week ago",
      rating: 5,
      review: "Absolutely brilliant! One of the best episodes I've seen this season. The writing was top-notch."
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

  const friendActivity = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      watchDate: "2 days ago",
      rating: 5,
      review: "Absolutely incredible episode! The character development was phenomenal and the plot twists kept me on the edge of my seat."
    }
  ];
  

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
    const [isReviewPublic, setIsReviewPublic] = useState(true);
  const [reviewContent, setReviewContent] = useState('');
  const [privateNotes, setPrivateNotes] = useState('');

  // Sample friend activity data
 
      

  
  return (
    <div className="min-w-full">
     
      <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
        {/* Main content with proper margin to account for sidebar */}
        <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"} relative z-10`}>
          <div className=" mx-aufto  bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-fixed rounded-lg overflow-hidden shadow-xl text-white">
            
            <TvShowDetails/>
            
            <div className="w-full px-4 py-8">
    {/* Main Grid - 4 columns on large screens, stacked on smaller screens */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      
      {/* Column 1 - For you */}
      <div className="space-y-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-3">For you</h2>
          <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
        <div>
          <EpisodeProgressTracker/>
        </div>
        <div className="mt-4">
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Column 2 - Your Review */}
      <div>
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Your Review</h2>
            
            {/* Privacy Toggle */}
            <div className="flex items-center space-x-2">
              <span className={`text-sm ${!isReviewPublic ? 'text-white font-medium' : 'text-gray-400'}`}>Private</span>
              <button 
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  isReviewPublic ? 'bg-blue-600' : 'bg-gray-600'
                }`}
                onClick={() => setIsReviewPublic(!isReviewPublic)}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isReviewPublic ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-sm ${isReviewPublic ? 'text-white font-medium' : 'text-gray-400'}`}>Public</span>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500 to-blue-500 mb-6"></div>

          {/* Main Review Textarea */}
          <textarea
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            placeholder="Write your review here..." 
            className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 lg:h-40 mb-4"
          />

          {/* Private Notes Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Private Notes (Only you can see this)
            </label>
            <textarea
              value={privateNotes}
              onChange={(e) => setPrivateNotes(e.target.value)}
              placeholder="Add your private thoughts, reminders, or notes..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
              rows={3}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">
                Review will be: <span className={`font-medium ${isReviewPublic ? 'text-green-400' : 'text-orange-400'}`}>
                  {isReviewPublic ? 'Public' : 'Private'}
                </span>
              </span>
            </div>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              Submit Review
            </button>
          </div>
        </div>
      </div>

      {/* Column 3 - Friend Activity */}
      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">Friend Activity</h3>
          <div className="h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
        <div className=" rounded-lg p-4 border border-gray-700 max-h-64 lg:max-h-80 overflow-y-auto">
          {friendActivity.map((friend) => (
            <div key={friend.id} className="flex items-start space-x-3 mb-4 last:mb-0">
              {/* Friend Avatar */}
              <img 
                src={friend.avatar} 
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                {/* Friend Info Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white text-sm lg:text-base">{friend.name}</span>
                    <span className="text-xs lg:text-sm text-gray-400">{friend.watchDate}</span>
                  </div>
                  
                  {/* Friend's Rating */}
                  <div className="flex items-center space-x-1 flex-shrink-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 lg:w-4 lg:h-4 ${
                          star <= friend.rating ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs lg:text-sm text-gray-300 ml-1">{friend.rating}/5</span>
                  </div>
                </div>
                
                {/* Friend's Review */}
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  {friend.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 4 - Cast */}
      <div className="space-y-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Cast</h2>
          <div className="h-px bg-gradient-to-r from-orange-500 to-red-500"></div>
        </div>
        
        {/* Actors Seen Before */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Actors Seen Before</h3>
         <div className=" space-y-3">
    {castMembers.slice(0, 2).map((member, index) => (
      <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 hover:shadow-lg">
        <img
          src={member.image}
          width={50}
          height={50}
          alt={member.name}
          className="rounded-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm lg:text-base truncate">{member.name}</div>
          <div className="text-xs lg:text-sm text-gray-400 truncate mb-2">{member.character}</div>
          <div className="flex items-center gap-2 lg:gap-4 mt-2 flex-wrap">
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Tv className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
                <span className="tooltip"># of Episodes</span>
              </div>
              <span>{Math.floor(Math.random() * 100) + 50}</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Eye className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                <span className="tooltip">Seen Before</span>
              </div>
              <span>{Math.random() > 0.5 ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500" />
                <span className="tooltip">Your Rating</span>
              </div>
              <span>{Math.random() > 0.3 ? (Math.random() * 3 + 7).toFixed(1) : '—'}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
        </div>

        {/* Watch On & Action Buttons */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Watch on</h3>
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
                alt="Hulu"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-center lg:justify-start">
            <a href="#comments">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                      <MessageSquare className="h-4 w-4 lg:h-5 lg:w-5" />
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
                  <Button variant="ghost" size="icon" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                    <Share2 className="h-4 w-4 lg:h-5 lg:w-5" />
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

            
            {/* Updated Cast Section */}
          <div className="w-full px-4 mb-8">
  <h1 className='text-2xl font-semibold text-gray-200 mb-8'>
    <span className='text-[#F5C518]'>•</span> Cast
  </h1>
  
  <style>
    {`
      .tooltip-container {
        position: relative;
        display: inline-block;
      }
      .tooltip-container .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: #1f2937;
        color: white;
        text-align: center;
        border-radius: 6px;
        padding: 5px 8px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
        border: 1px solid #374151;
      }
      .tooltip-container .tooltip::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #1f2937 transparent transparent transparent;
      }
      .tooltip-container:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
    `}
  </style>
  
  <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 ">
    {castMembers.map((member, index) => (
      <div key={index} className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200 hover:shadow-lg">
        <img
          src={member.image}
          width={50}
          height={50}
          alt={member.name}
          className="rounded-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm lg:text-base truncate">{member.name}</div>
          <div className="text-xs lg:text-sm text-gray-400 truncate mb-2">{member.character}</div>
          <div className="flex items-center gap-2 lg:gap-4 mt-2 flex-wrap">
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Tv className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" />
                <span className="tooltip"># of Episodes</span>
              </div>
              <span>{Math.floor(Math.random() * 100) + 50}</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Eye className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                <span className="tooltip">Seen Before</span>
              </div>
              <span>{Math.random() > 0.5 ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-300">
              <div className="tooltip-container">
                <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500" />
                <span className="tooltip">Your Rating</span>
              </div>
              <span>{Math.random() > 0.3 ? (Math.random() * 3 + 7).toFixed(1) : '—'}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
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
            
      <ReviewsSection reviews={reviews} />

<h1 className=' text-2xl font-semibold text-gray-200 ml-4'><span className='text-[#F5C518] '>•</span> Media </h1>

<div className="max-w-7xl mx-auto px-4 mb-8">
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

      <div className=" flex justify-center #comment">
      <section className="w-full mx-4" id="comments">
     <CommentSys/>
     </section>
      </div>

          
    <div className="w-full text-white">
    

    {/*  more liked*/}

    <h1 className=' text-2xl font-semibold text-gray-200 my-8 ml-4 '><span className='text-[#F5C518] '>•</span> More Like This</h1>
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