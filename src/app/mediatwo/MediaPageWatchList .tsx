"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, Check, Play, Pause, Square, X, Clock, Eye, Lock, Bell, BellOff } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Type for watch options
type WatchOption = {
  label: string;
  color: string;
  icon: React.ElementType;
  value: string;
};

// Type for episode release info
type EpisodeRelease = {
  season: number;
  episode: number;
  releaseDate: string;
  released: boolean;
};
interface MediaPageWatchListProps {
  onStatusChange: (status: string) => void;
  // ... other props
}

const MediaPageWatchList: React.FC<MediaPageWatchListProps> = ({ onStatusChange }) => {
  const [watchStatus, setWatchStatus] = useState<WatchOption | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEpisodeTracker, setShowEpisodeTracker] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [hoveredEpisode, setHoveredEpisode] = useState<{season: number, episode: number} | null>(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showCustomListOptions, setShowCustomListOptions] = useState(false);

  const totalSeasons = 16;
  const episodesPerSeason = 12;
  const totalEpisodes = totalSeasons * episodesPerSeason;

  // Mock data for unreleased episodes - you can replace this with real data
  const episodeReleases: EpisodeRelease[] = [
    { season: 1, episode: 10, releaseDate: "2025-07-15", released: false },
    { season: 1, episode: 11, releaseDate: "2025-07-22", released: false },
    { season: 1, episode: 12, releaseDate: "2025-07-29", released: false },
    { season: 2, episode: 1, releaseDate: "2025-08-05", released: false },
    { season: 2, episode: 2, releaseDate: "2025-08-12", released: false },
  ];

  // Mock custom lists - replace with your actual data
  const customLists = [
    { id: '1', name: 'Favorites', count: 12 },
    { id: '2', name: 'Weekend Binge', count: 8 },
    { id: '3', name: 'Anime Collection', count: 24 },
  ];

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
    onStatusChange(status.value);

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

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleAddToCustomList = (listId: string) => {
    // Handle adding to custom list - replace with your actual logic
    console.log(`Added to custom list: ${listId}`);
    setShowCustomListOptions(false);
  };

  const calculateProgress = () => {
    const watchedEpisodes = (currentSeason - 1) * episodesPerSeason + currentEpisode;
    return (watchedEpisodes / totalEpisodes) * 100;
  };

  const isEpisodeReleased = (season: number, episode: number) => {
    const episodeInfo = episodeReleases.find(
      ep => ep.season === season && ep.episode === episode
    );
    return episodeInfo ? episodeInfo.released : true; // Default to released if not in the list
  };

  const getEpisodeReleaseDate = (season: number, episode: number) => {
    const episodeInfo = episodeReleases.find(
      ep => ep.season === season && ep.episode === episode
    );
    return episodeInfo?.releaseDate;
  };

  const formatReleaseDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'numeric', 
      day: 'numeric', 
      year: '2-digit' 
    });
  };

  const handleSeasonChange = (season: number) => {
    const newSeason = Math.max(1, Math.min(season, totalSeasons));
    setCurrentSeason(newSeason);
    
    // Reset episode to 1 if changing seasons and current episode is unreleased
    if (!isEpisodeReleased(newSeason, currentEpisode)) {
      // Find the last released episode in this season
      let lastReleasedEpisode = 1;
      for (let ep = episodesPerSeason; ep >= 1; ep--) {
        if (isEpisodeReleased(newSeason, ep)) {
          lastReleasedEpisode = ep;
          break;
        }
      }
      setCurrentEpisode(lastReleasedEpisode);
    }
  };

  const handleEpisodeChange = (episode: number) => {
    const newEpisode = Math.max(1, Math.min(episode, episodesPerSeason));
    
    // Don't allow selecting unreleased episodes
    if (!isEpisodeReleased(currentSeason, newEpisode)) {
      return;
    }
    
    setCurrentEpisode(newEpisode);
  };

  const getMaxSelectableEpisode = (season: number) => {
    // Find the last released episode in the season
    for (let ep = episodesPerSeason; ep >= 1; ep--) {
      if (isEpisodeReleased(season, ep)) {
        return ep;
      }
    }
    return 1; // Fallback to episode 1
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="relative flex-1">
          <Button
            onClick={() => setShowCustomListOptions(!showCustomListOptions)}
            variant="ghost"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-[#cc8b8b0c] px-3 py-2 rounded-lg justify-start w-full"
          >
            <Plus size={14} />
            <span>Add to Custom List</span>
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${showCustomListOptions ? 'rotate-180' : ''}`} />
          </Button>

          {showCustomListOptions && (
            <div className="absolute top-full mt-2 w-full bg-[#13111B] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CC8B8B10] to-[#A33B3B00] rounded-xl shadow-lg z-10 border border-gray-700">
              {customLists.map((list) => (
                <Button
                  key={list.id}
                  onClick={() => handleAddToCustomList(list.id)}
                  variant="ghost"
                  className="w-full justify-between py-3 px-4 hover:bg-[#cc8b8b0c] hover:text-white first:rounded-t-xl last:rounded-b-xl text-sm"
                >
                  <span>{list.name}</span>
                  <span className="text-xs text-gray-400">{list.count} items</span>
                </Button>
              ))}
              
              <div className="border-t border-gray-700">
               {/*  <Button
                  onClick={() => {
                    // Handle create new list - replace with your actual logic
                    console.log('Create new custom list');
                    setShowCustomListOptions(false);
                  }}
                  variant="ghost"
                  className="w-full justify-start py-3 px-4 hover:bg-[#cc8b8b0c] hover:text-white rounded-b-xl text-sm text-gray-400"
                >
                  <Plus size={14} className="mr-2" />
                  Create New List
                </Button> */}
              </div>
            </div>
          )}
        </div>

        <Button
          onClick={toggleNotifications}
          variant="ghost"
          className={`p-2 rounded-lg transition-colors ${
            notificationsEnabled 
              ? 'text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10' 
              : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
          }`}
          title={notificationsEnabled ? 'Disable episode notifications' : 'Enable episode notifications'}
        >
          {notificationsEnabled ? <Bell size={16} /> : <BellOff size={16} />}
        </Button>
      </div>
      <div className="relative pb-3">
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
              className="h-2 bg-gray-700 "
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
              <div className="flex items-center gap-2 mb-3">
                <label className="block text-sm font-medium text-gray-300">Episode {currentEpisode}</label>
                {!isEpisodeReleased(currentSeason, currentEpisode) && (
                  <Lock className="w-4 h-4 text-amber-500" />
                )}
              </div>
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
                    max={getMaxSelectableEpisode(currentSeason)}
                    value={Math.min(currentEpisode, getMaxSelectableEpisode(currentSeason))}
                    onChange={(e) => handleEpisodeChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>{getMaxSelectableEpisode(currentSeason)}</span>
                    {getMaxSelectableEpisode(currentSeason) < episodesPerSeason && (
                      <span className="text-amber-500">({episodesPerSeason - getMaxSelectableEpisode(currentSeason)} unreleased)</span>
                    )}
                  </div>
                </div>
                
                <Button
                  onClick={() => handleEpisodeChange(currentEpisode + 1)}
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 bg-gray-700 border-gray-600 hover:bg-gray-600"
                  disabled={currentEpisode >= getMaxSelectableEpisode(currentSeason)}
                >
                  +
                </Button>
                
                <input
                  type="number"
                  value={currentEpisode}
                  onChange={(e) => handleEpisodeChange(parseInt(e.target.value) || 1)}
                  className="w-16 px-2 py-1 text-center bg-gray-700 border border-gray-600 rounded text-white text-sm"
                  min="1"
                  max={getMaxSelectableEpisode(currentSeason)}
                />
              </div>
            </div>

            {/* Unreleased Episodes Display */}
            {episodeReleases.filter(ep => ep.season === currentSeason && !ep.released).length > 0 && (
              <div className="mt-4 p-3 bg-amber-900/20 border border-amber-700/50 rounded-lg">
                <h4 className="text-sm font-medium text-amber-200 mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Upcoming Episodes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {episodeReleases
                    .filter(ep => ep.season === currentSeason && !ep.released)
                    .map((ep) => (
                      <div 
                        key={`${ep.season}-${ep.episode}`}
                        className="relative"
                        onMouseEnter={() => setHoveredEpisode({season: ep.season, episode: ep.episode})}
                        onMouseLeave={() => setHoveredEpisode(null)}
                      >
                        <div className="px-3 py-2 bg-gray-700/50 border border-amber-700/30 rounded text-xs text-amber-200 cursor-help">
                          Ep {ep.episode}
                        </div>
                        
                        {/* Tooltip */}
                        {hoveredEpisode?.season === ep.season && hoveredEpisode?.episode === ep.episode && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-xs text-white whitespace-nowrap z-20 shadow-lg">
                            Episode {ep.episode} releases on {formatReleaseDate(ep.releaseDate)}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Current Status Display */}
          <div className="mt-4 p-3 bg-gray-800/50 rounded-lg">
            <div className="text-sm text-gray-300">
              <span className="font-medium">Currently watching:</span> Season {currentSeason}, Episode {currentEpisode}
              {!isEpisodeReleased(currentSeason, currentEpisode) && (
                <span className="text-amber-400 ml-2">(Unreleased)</span>
              )}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {((currentSeason - 1) * episodesPerSeason + currentEpisode)} of {totalEpisodes} episodes watched
            </div>
            {getEpisodeReleaseDate(currentSeason, currentEpisode) && (
              <div className="text-xs text-amber-400 mt-1">
                Releases on {formatReleaseDate(getEpisodeReleaseDate(currentSeason, currentEpisode)!)}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom List and Notifications Section */}
      

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