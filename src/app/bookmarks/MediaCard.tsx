"use client"

import { Star, Info, FileText, Share2, Bookmark, ChevronDown, ChevronUp, Calendar } from 'lucide-react'
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface MediaCardProps {
  title: string
  genres: string[]
  rating: number
  description: string
  currentEpisode: string
  latestEpisode: string
  totalEpisodes: string
  nextEpisodeInfo: string
  imageSrc: string
}

export function MediaCard({
  title,
  genres,
  rating,
  description,
  currentEpisode,
  latestEpisode,
  totalEpisodes,
  nextEpisodeInfo,
  imageSrc
}: MediaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-[#571B3F26] rounded-lg p-2 sm:p-4 space-y-2 sm:space-y-4 w-full ">
      <div className="flex flex-col gap-2 sm:gap-4 lg:flex-row md:flex-row">
        <Image
          src={imageSrc}
          alt={`${title} Poster`}
          width={100}
          height={150}
          className="w-20 h-30 sm:w-[150px] sm:h-[200px] rounded-lg object-cover mx-auto sm:mx-0"
        />
        <div className="flex-1 space-y-1 sm:space-y-2">
          <div className="flex items-center gap-1 text-[#4caf50] mb-2">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-[11px]">{nextEpisodeInfo}</span>
          </div>
          <div className="flex flex-col justify-between items-start gap-1 sm:gap-2">
            <div className="w-full">
              <div className=' flex flex-row items-center justify-between h-full '>
              <h2 className="text-base sm:text-xl font-semibold text-white ">{title}</h2>
              
              <div className="flex flex-wrap gap-1 sm:gap-2 items-center h-full">
                {genres.map((genre) => (
                  <Badge key={genre} variant="secondary" className="bg-zinc-800 text-zinc-400 text-[10px] sm:text-xs">
                    {genre}
                  </Badge>
                ))}
              </div>

              </div>
              
            </div>
            <div className="flex items-center gap-1 mt-1 sm:mt-0 lg:gap-9 justify-between w-full">
            <div className=' flex flex-row items-center justify-around'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'fill-green-600 text-green-600' : 'text-green-600'}`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2 items-center ">
                {[Info, FileText, Share2, Bookmark].map((Icon, index) => (
                  <Button key={index} size="icon" variant="ghost" className="text-zinc-400 hover:bg-zinc-800 hover:text-white h-8 w-8 sm:h-10 sm:w-10">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {isExpanded && (
            <p className="text-zinc-400 text-sm">{description}</p>
          )}

          <EpisodeProgress
            currentEpisode={currentEpisode}
            latestEpisode={latestEpisode}
            totalEpisodes={totalEpisodes}
          />

          <Button
            variant="ghost"
            className="w-full text-zinc-400 hover:text-white text-sm sm:text-base"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            ) : (
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            )}
            {isExpanded ? "View Less" : "View More"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

interface EpisodeProgressProps {
  currentEpisode: string
  latestEpisode: string
  totalEpisodes: string
}
function EpisodeProgress({ currentEpisode, latestEpisode, totalEpisodes }: EpisodeProgressProps) {
  return (
    <div className="space-y-1 sm:space-y-2 w-full">
      <div className="flex h-1 sm:h-2 rounded-full">
        <div className="bg-red-600 w-1/3 rounded-s-full" />
        <div className="bg-pink-400 w-1/3" />
        <div className="bg-gray-300 w-1/3 rounded-e-full" />
      </div>
      <div className="flex w-full justify-between gap-1 sm:gap-4 text-[8px] sm:text-xs">
        {[
          { label: "Current", value: currentEpisode, color: "bg-red-600" },
          { label: "Latest", value: latestEpisode, color: "bg-pink-400" },
          { label: "Total", value: totalEpisodes, color: "bg-gray-300" },
        ].map(({ label, value, color }) => (
          <div key={label} className="relative flex-1">
            <div className="absolute left-1/2 -translate-x-1/2 z-0 -top-2 w-4 h-4 overflow-hidden">
              <div className={`${color} w-full h-full rotate-45 transform origin-bottom-left`} />
            </div>
            <div className={`${color} ${color === 'bg-gray-300' ? 'text-gray-700' : 'text-white'} relative z-10 px-2 sm:px-2 py-1 rounded-xl font-medium text-center`}>
              {label}: {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}