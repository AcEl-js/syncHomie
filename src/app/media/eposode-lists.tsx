"use client"
import { useState } from "react"
import { Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Episode {
  id: number
  title: string
  description: string
  rating: string
  votes: string
  status: string
}

export default function EpisodeList() {
  const seasons = Array.from({ length: 16 }, (_, i) => i + 1)
  const [selectedSeason, setSelectedSeason] = useState<number>(1)
  const [userRatings, setUserRatings] = useState<Record<number, number>>({})
  const [hoverRatings, setHoverRatings] = useState<Record<number, number>>({})

  const episodes: Episode[] = [
    {
      id: 1,
      title: "S1.E1. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Watch",
    },
    {
      id: 2,
      title: "S1.E2. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Watch",
    },
    {
      id: 3,
      title: "S1.E3. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promotor for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "watched",
    },
    {
      id: 4,
      title: "S1.E4. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Watch",
    },
  ]

  const handleRating = (episodeId: number, rating: number): void => {
    setUserRatings(prev => ({
      ...prev,
      [episodeId]: rating
    }))
  }

  const handleMouseEnter = (episodeId: number, rating: number): void => {
    setHoverRatings(prev => ({
      ...prev,
      [episodeId]: rating
    }))
  }

  const handleMouseLeave = (episodeId: number): void => {
    setHoverRatings(prev => ({
      ...prev,
      [episodeId]: 0
    }))
  }

  const handleStarClick = (episodeId: number, starIndex: number, isHalf: boolean): void => {
    const rating = starIndex + (isHalf ? 0.5 : 1)
    handleRating(episodeId, rating)
  }

  const handleStarHover = (episodeId: number, starIndex: number, isHalf: boolean): void => {
    const rating = starIndex + (isHalf ? 0.5 : 1)
    handleMouseEnter(episodeId, rating)
  }

  const getRatingStars = (episodeId: number) => {
    const userRating = userRatings[episodeId] || 0
    const hoverRating = hoverRatings[episodeId] || 0
    const displayRating = hoverRating || userRating

    return Array.from({ length: 5 }, (_, i) => {
      const isFullFilled = displayRating >= i + 1
      const isHalfFilled = displayRating >= i + 0.5 && displayRating < i + 1
      
      return (
        <div key={i} className="relative inline-block">
          {/* Full star button */}
          <button
            onClick={() => handleStarClick(episodeId, i, false)}
            onMouseEnter={() => handleStarHover(episodeId, i, false)}
            onMouseLeave={() => handleMouseLeave(episodeId)}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Star
              className={`w-4 h-4 transition-colors ${
                isFullFilled
                  ? 'fill-yellow-400 text-yellow-400'
                  : isHalfFilled
                  ? 'text-yellow-400'
                  : 'text-gray-500 hover:text-yellow-400'
              }`}
            />
          </button>
          
          {/* Half star overlay - positioned absolutely over the left half */}
          <button
            onClick={() => handleStarClick(episodeId, i, true)}
            onMouseEnter={() => handleStarHover(episodeId, i, true)}
            onMouseLeave={() => handleMouseLeave(episodeId)}
            className="absolute top-0 left-0 p-1 hover:scale-110 transition-transform"
            style={{ width: '50%', height: '100%' }}
          >
            <div className="relative overflow-hidden" style={{ width: '16px', height: '16px' }}>
              {isHalfFilled && (
                <>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0" />
                  <div 
                    className="absolute top-0 bg-gray-900" 
                    style={{ 
                      right: '0', 
                      width: '50%', 
                      height: '100%',
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    }}
                  />
                </>
              )}
            </div>
          </button>
        </div>
      )
    })
  }

  return (
    <div className="text-white p-3 sm:p-6">
      {/* Season Navigation */}
      <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {seasons.map((season: number) => (
          <Button
            key={season}
            variant={season === selectedSeason ? "default" : "ghost"}
            className={`
              min-w-[32px] sm:min-w-[40px] 
              text-xs sm:text-sm 
              px-2 sm:px-3 
              py-1 sm:py-2
              ${season === selectedSeason ? "bg-pink-600 hover:bg-pink-700" : ""}
            `}
            onClick={() => { setSelectedSeason(season) }}
          >
            S{season}
          </Button>
        ))}
      </div>

      {/* Episode List */}
      <div className="space-y-4">
        {episodes.map((episode: Episode) => (
          <div key={episode.id} className="flex flex-col sm:flex-row gap-4 rounded-lg overflow-hidden">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-48 h-32 bg-gray-700 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 w-8 h-8 sm:w-10 sm:h-10"
              >
                <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>

            {/* Episode Info */}
            <div className="flex-1 py-2 sm:py-4 pr-0 sm:pr-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-medium pr-2">{episode.title}</h3>
                <Badge
                  variant="secondary"
                  className={`
                    px-3 sm:px-[18px] 
                    py-1 sm:py-[8px] 
                    text-xs sm:text-sm
                    text-[#C3C3C3] 
                    bg-[#A3A3A3]/15 
                    shadow-[0_1px_2px_0_#FFFFFF0D_inset]
                    self-start
                  `}
                >
                  {episode.status}
                </Badge>
              </div>
              
              <p className="text-gray-400 text-xs sm:text-sm mb-3">{episode.description}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                {/* Original Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-xs sm:text-sm text-gray-400">{episode.rating}</span>
                  <span className="text-xs sm:text-sm text-gray-500">({episode.votes})</span>
                </div>
                
                {/* User Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400 mr-1">Your rating:</span>
                  <div className="flex items-center">
                    {getRatingStars(episode.id)}
                  </div>
                  {userRatings[episode.id] && (
                    <span className="text-xs text-gray-400 ml-2">
                      {userRatings[episode.id]}/5
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}