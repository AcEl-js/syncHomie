"use client"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EpisodeList() {
  const seasons = Array.from({ length: 16 }, (_, i) => i + 1)
  const [selectedSeason,setSelectedSeason] = useState(1)
  const episodes = [
    {
      id: 1,
      title: "S1.E1. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Completed",
    },
    {
      id: 2,
      title: "S1.E2. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Add to list",
    },
    {
      id: 3,
      title: "S1.E3. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Add to list",
    },
    {
      id: 4,
      title: "S1.E4. The Gang Gets Racist",
      description:
        "The guys hire Dee's friend as a promoter for the bar and get more than they bargained for when they discover what's next.",
      rating: "8.9/10",
      votes: "4.8k",
      status: "Add to list",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Season Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {seasons.map((season) => (
          <Button
            key={season}
            variant={season === selectedSeason ? "default" : "ghost"}
            className={`min-w-[40px] ${season === selectedSeason ? "bg-pink-600 hover:bg-pink-700" : ""}`}
            onClick={()=>{setSelectedSeason(season)}}
          >
            S{season}
          </Button>
        ))}
      </div>

      {/* Episode List */}
      <div className="space-y-4">
        {episodes.map((episode) => (
          <div key={episode.id} className="flex gap-4 rounded-lg overflow-hidden">
            {/* Thumbnail */}
            <div className="relative w-48 h-32 bg-gray-700 flex-shrink-0">
              <Button variant="ghost" size="icon" className="absolute top-2 left-2 bg-black/50 hover:bg-black/70">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* Episode Info */}
            <div className="flex-1 py-4 pr-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{episode.title}</h3>
                <Badge
                  variant="secondary"
                  className={`px-[18px] py-[8px] text-[#C3C3C3] bg-[#A3A3A3]/15 shadow-[0_1px_2px_0_#FFFFFF0D_inset] `}
                >
                  {episode.status}
                </Badge>
              </div>
              <p className="text-gray-400 text-sm mb-2">{episode.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-sm text-gray-400">{episode.rating}</span>
                <span className="text-sm text-gray-500">({episode.votes})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

