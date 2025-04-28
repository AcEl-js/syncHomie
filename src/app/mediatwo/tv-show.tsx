"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Bell, MessageSquare, FileText, Share2, Star, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import UserScore from "./user-score"
import { Switch } from "@/components/ui/switch"


interface Emotion{
    name:string;
    emoji:string;

 }

export default function TvShowDetails() {
    const [isRating, setIsRating] = useState(false)
    const [rating, setRating] = useState<number | null>(null);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [selectedRating, setSelectedRating] = useState<number | null>(null)
    const [showEmotions, setShowEmotions] = useState(false)
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
    const [expandedDescription, setExpandedDescription] = useState(false)
    const [isEditingRating, setIsEditingRating] = useState(false);
    const [emotion, setEmotion] = useState<string | null>()
    

 const starsContainerRef = useRef<HTMLDivElement | null>(null);
 
   
   const handleRatingClick = (starValue:number) => {
     setRating(starValue);
     
     if (!emotion) {
       setShowEmotions(true);
     } else {
       setIsEditingRating(false);
     }
   };
   
   const handleEmotionSelect = (selectedEmotio:any) => {
     setEmotion(selectedEmotio);
     setShowEmotions(false);
     setIsEditingRating(false);
   };
   
   const handleEditRating = () => {
     setIsEditingRating(true);
     setShowEmotions(false);
   };
   
   // Calculate rating based on mouse position
   const calculateRating = (e:any) => {
     if (!starsContainerRef.current) return null;
     
     const container = starsContainerRef.current;
     const rect = container.getBoundingClientRect();
     const width = rect.width;
     const position = e.clientX - rect.left;
     const percentage = position / width;
     
     // Convert to 0.5-5 scale (10 possible values)
     const rawRating = percentage * 5;
     // Round to nearest 0.5
     const roundedRating = Math.max(0.5, Math.min(5, Math.round(rawRating * 2) / 2));
     
     return roundedRating;
   };
   
   const handleMouseMove = (e:any) => {
     const calculatedRating = calculateRating(e);
     if (calculatedRating !== hoveredRating) {
       setHoveredRating(calculatedRating);
     }
   };
   
   const handleMouseLeave = () => {
     setHoveredRating(null);
   };
   
   // Array for displaying emotion options
   const emotions: Emotion[] = [
     { name: 'Funny', emoji: '😂' },
     { name: 'Interesting', emoji: '🤔' },
     { name: 'Infuriating', emoji: '😡' },
     { name: 'Sad', emoji: '😢' }
   ];
   
   // Function to render stars based on rating
   const renderStars = (value:number|null) => {
     const displayValue = value || 0;
     const stars = [];
     
     // Loop through 5 star positions
     for (let i = 1; i <= 5; i++) {
       const starFill = Math.min(Math.max(displayValue - (i-1), 0), 1);
       const starPosition = i;
       
       stars.push(
         <div key={starPosition} className="relative w-5 h-5 mx-0.5">
           {/* Background star (empty) */}
           <Star 
             size={20} 
             className="absolute text-gray-600"
           />
           
           {/* Calculate percentage fill for partial stars */}
           {starFill > 0 && (
             <div className="absolute overflow-hidden" style={{ width: `${starFill * 100}%` }}>
               <Star 
                 size={20} 
                 fill="#FCD34D" 
                 className="text-yellow-400"
               />
             </div>
           )}
         </div>
       );
     }
     
     return stars;
   };

  const handleStarSelect = (rating: number) => {
    setSelectedRating(rating)
    setIsRating(false)
    setShowEmotions(true)
  }


  

  return (
    <div className="max-w-7xl mx-auto text-white rounded-lg overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Poster */}
        <div className="md:w-1/4 p-4">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src="/movies/always.png"
              alt="It's Always Sunny in Philadelphia Poster"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

              className="object-cover rounded-md"
              priority
            />
          </div>
          
        </div>

        {/* Content */}
        <div className="md:w-3/4  p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                It&apos;s Always Sunny in Philadelphia <span className="text-gray-400 pr-4">(2005)</span>
                <Switch /> 
                <span className="text-base text-zinc-600 font-bold pl-2">Spoiler Off</span>
              </h1>
              <div className="flex items-center justify-between">
           
          </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                <span className="bg-gray-700 px-2 py-0.5 rounded">TV-MA</span>
                <span>Comedy</span>
                <div>
              <div className="text-sm text-gray-300 mr-4">
                Keywords:{" "}
                <span className="text-gray-400">
                  sitcom, sibling relationship, parent child relationship, crude humor, slacker
                </span>
              </div>
            </div>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                <span>70 hours</span>
                <span>•</span>
                <span>16 seasons</span>
                <span>•</span>
                <span>169 episodes</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="text-black">Add to Watchlist</span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Button variant="ghost" size="sm" className="text-xs">
                  Add to Custom List
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="bg-yellow-500/10 text-yellow-500">
                        <Bell className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Get notified of new releases</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* NEW ADDITION: You've Watched Progress Bar */}
         
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400 font-medium">You've Watched</span>
              <span className="text-sm text-gray-300">0 Seasons 0 Episodes</span>
            </div>
          

          <div className="flex items-center gap-4 mt-2 ">
            <UserScore emotion={emotions.find(e => e.name === emotion)?.emoji}  />
            <div className="bg-[#f6c700] max-md:hidden rounded-sm pr-2 font-bold flex text-black gap-2 items-center">
            <img className="h-9" src="/icons/imdb.png" alt="IMDb" />
            <h1>56%</h1>
          </div>

          <div className="relative font-bold max-md:hidden">
            <img className="h-11" src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg" alt="Rotten Tomatoes" />
            <h1 className="absolute top-4 left-2 text-sm text-black">86%</h1>
          </div>
            <div className="ml-4">
            <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center min-w-48">
              {(rating === null || isEditingRating) && !showEmotions ? (
                <>
                  <span className="mr-2 text-sm whitespace-nowrap">
                    {isEditingRating ? "Edit your rating:" : "What's your rating?"}
                  </span>
                  <div 
                    className="flex items-center relative cursor-pointer" 
                    ref={starsContainerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => hoveredRating && handleRatingClick(hoveredRating)}
                  >
                    {/* Interactive rating selector */}
                    <div className="flex">
                      {renderStars(hoveredRating || (isEditingRating ? rating : 0))}
                    </div>
                    
                    {/* Display hovered rating */}
                    {hoveredRating && (
                      <span className="ml-2 text-sm text-yellow-400 font-medium whitespace-nowrap">
                        {hoveredRating.toFixed(1)}
                      </span>
                    )}
                  </div>
                </>
              ) : showEmotions ? (
                <>
                  <span className="mr-2 text-sm whitespace-nowrap">How did it make you feel?</span>
                  <div className="flex">
                    {emotions.map((em) => (
                      <button
                        key={em.name}
                        onClick={() => handleEmotionSelect(em.name)}
                        className="flex flex-col items-center mx-1 hover:bg-gray-700 p-1 rounded transition-colors"
                      >
                        <span className="text-lg">{em.emoji}</span>
                        <span className="text-xs">{em.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <button 
                      className="flex items-center group"
                      onClick={handleEditRating}
                    >
                      <div className="flex mr-2">
                        {renderStars(rating)}
                      </div>
                      <span className="text-sm text-yellow-400 font-medium mr-2 group-hover:underline">
                        {rating?.toFixed(1)}
                      </span>
                    </button>
                    {emotion && (
                      <span className="text-sm bg-gray-700 px-2 py-0.5 rounded-full">
                        {emotions.find(e => e.name === emotion)?.emoji} {emotion}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>

            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Status: Ongoing | Air Date: 08/04/2005 - Now</h2>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300">
              {expandedDescription
                ? "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships. Unfortunately, their warped views and precarious judgments often lead them to trouble, creating myriad uncomfortable situations that usually only get worse before they get better. The gang includes twin siblings Dennis and Dee, their longtime friends Charlie and Mac, and their father Frank."
                : "Four egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships..."}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2 text-gray-400"
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? "Show Less" : "Read Longer Description"}
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", expandedDescription && "rotate-180")} />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-4">
          
          </div>
        </div>
      </div>
    </div>
  )
}