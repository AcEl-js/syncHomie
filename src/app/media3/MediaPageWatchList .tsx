"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, Check, Play, Pause, Square, X, Clock, Eye } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Type for watch options
type WatchOption = {
  label: string;
  color: string;
  icon: React.ElementType;
  value: string;
};

const MediaPageWatchList = () => {
  const [watchStatus, setWatchStatus] = useState<WatchOption | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEpisodeTracker, setShowEpisodeTracker] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(1);

  const totalSeasons = 16;
  const episodesPerSeason = 12;
  const totalEpisodes = totalSeasons * episodesPerSeason;

  const watchOptions: WatchOption[] = [
    { label: "Watching", color: "bg-[#5DD952]", icon: Play, value: "watching" },
    { label: "Completed", color: "bg-[#52D9D9]", icon: Check, value: "completed" },
    { label: "On-Hold", color: "bg-[#D9B352]", icon: Pause, value: "on-hold" },
    { label: "Dropped", color: "bg-[#D95A52]", icon: X, value: "dropped" },
    { label: "Plan to Watch", color: "bg-[#878E8E]", icon: Clock, value: "plan-to-watch" },
  ];

  const handleStatusSelect = (status: WatchOption) => {
    setWatchStatus(status);
    setShowDropdown(false);

    if (status.value === "watching") {
      setShowEpisodeTracker(true);
    } else {
      setShowEpisodeTracker(false);
    }
  };

  const handleRemoveStatus = () => {
    setWatchStatus(null);
    setShowEpisodeTracker(false);
  };

  const calculateProgress = () => {
    const watchedEpisodes = (currentSeason - 1) * episodesPerSeason + currentEpisode;
    return (watchedEpisodes / totalEpisodes) * 100;
  };

  const handleSeasonChange = (season: number) => {
    setCurrentSeason(Math.max(1, Math.min(season, totalSeasons)));
  };

  const handleEpisodeChange = (episode: number) => {
    setCurrentEpisode(Math.max(1, Math.min(episode, episodesPerSeason)));
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        {!watchStatus ? (
            <Button
            onClick={() => setShowDropdown(!showDropdown)}
            variant="ghost"
            className="flex bg-white text-black items-center gap-2 w-full justify-center"
          >
            
             <Plus size={16} />
                 <span>Add to Watchlist</span>
                <Eye size={16} />
            <ChevronDown className="w-4 h-4 ml-auto" />
          </Button>
        
        ) : (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowDropdown(!showDropdown)}
              variant="ghost"
              className="flex-1 justify-start py-5 hover:bg-[#cc8b8b0c] hover:text-white bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl"
            >
              <span className={`w-3 h-3 rounded-full ${watchStatus.color} mr-3`}></span>
              {watchStatus.label}
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Button>
            <Button
              onClick={handleRemoveStatus}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-[#cc8b8b0c] rounded-xl px-3 py-2"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {showDropdown && (
          <div className="absolute top-full mt-2 w-full bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl shadow-lg z-10 border border-gray-700">
            {watchOptions.map((option) => (
              <Button
                key={option.value}
                onClick={() => handleStatusSelect(option)}
                variant="ghost"
                className="w-full justify-start py-5 hover:bg-[#cc8b8b0c] hover:text-white first:rounded-t-xl last:rounded-b-xl"
              >
                <span className={`w-3 h-3 rounded-full ${option.color} mr-3`}></span>
                {option.label}
              </Button>
            ))}
          </div>
        )}
      </div>

      {showEpisodeTracker && (
        <div className="bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl p-4 border border-gray-700">
          <h3 className="text-lg font-medium mb-4 text-white">Episode Progress</h3>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Overall Progress</span>
              <span>{Math.round(calculateProgress())}% Complete</span>
            </div>
            <Progress 
              value={calculateProgress()} 
              className="h-2 bg-gray-700"
            />
          </div>

          <div className="space-y-4">
            {/* Season Control */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">Season {currentSeason}</label>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => handleSeasonChange(currentSeason - 1)}
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 bg-gray-700 border-gray-600 hover:bg-gray-600"
                  disabled={currentSeason <= 1}
                >
                  -
                </Button>
                
                {/* Season Slider */}
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="1"
                    max={totalSeasons}
                    value={currentSeason}
                    onChange={(e) => handleSeasonChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>{totalSeasons}</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleSeasonChange(currentSeason + 1)}
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 bg-gray-700 border-gray-600 hover:bg-gray-600"
                  disabled={currentSeason >= totalSeasons}
                >
                  +
                </Button>
                
                <input
                  type="number"
                  value={currentSeason}
                  onChange={(e) => handleSeasonChange(parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 text-center bg-gray-700 border border-gray-600 rounded text-white text-sm"
                  min="1"
                  max={totalSeasons}
                />
              </div>
            </div>

            {/* Episode Control */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-300">Episode {currentEpisode}</label>
              <div className="flex items-center gap-4">
                <Button
                  onClick={() => handleEpisodeChange(currentEpisode - 1)}
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 bg-gray-700 border-gray-600 hover:bg-gray-600"
                  disabled={currentEpisode <= 1}
                >
                  -
                </Button>
                
                {/* Episode Slider */}
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="1"
                    max={episodesPerSeason}
                    value={currentEpisode}
                    onChange={(e) => handleEpisodeChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>{episodesPerSeason}</span>
                  </div>
                </div>
                
                <Button
                  onClick={() => handleEpisodeChange(currentEpisode + 1)}
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 bg-gray-700 border-gray-600 hover:bg-gray-600"
                  disabled={currentEpisode >= episodesPerSeason}
                >
                  +
                </Button>
                
                <input
                  type="number"
                  value={currentEpisode}
                  onChange={(e) => handleEpisodeChange(parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 text-center bg-gray-700 border border-gray-600 rounded text-white text-sm"
                  min="1"
                  max={episodesPerSeason}
                />
              </div>
            </div>
          </div>

          {/* Current Status Display */}
          <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="text-sm text-gray-300">
              <span className="font-medium">Currently watching:</span> Season {currentSeason}, Episode {currentEpisode}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {((currentSeason - 1) * episodesPerSeason + currentEpisode)} of {totalEpisodes} episodes watched
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #5DD952;
          cursor: pointer;
          border: 2px solid #374151;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #5DD952;
          cursor: pointer;
          border: 2px solid #374151;
        }
      `}</style>
    </div>
  );
};

export default MediaPageWatchList;