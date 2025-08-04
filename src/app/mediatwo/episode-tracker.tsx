"use client"
import { Button } from '@/components/ui/button';
import { Bell, Eye, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import MediaPageWatchList from './MediaPageWatchList ';
// import MediaPageWatchList from './MediaPageWatchList ';

const EpisodeProgressTracker = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [userRating, setUserRating] = useState(4.5); // Now supports half stars
  const [hoverRating, setHoverRating] = useState(0);
  const totalEpisodes = 20;
  const watchedEpisodes = 16;
  const [watchStatus, setWatchStatus] = useState("watching");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEpisodeTracker, setShowEpisodeTracker] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [showEpisodeTooltip, setShowEpisodeTooltip] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getEpisodeStatus = (episodeIndex: number) => {
    if (watchStatus === "completed") {
      return 'completed';
    }
    
    if (watchStatus === "dropped") {
      if (episodeIndex < watchedEpisodes) return 'watched-dropped';
      return 'dropped';
    }
    
    if (watchStatus === "on-hold") {
      if (episodeIndex < watchedEpisodes) return 'watched';
      if (episodeIndex === watchedEpisodes) return 'on-hold';
      return 'unwatched';
    }
    
    // Default "watching" or "plan-to-watch" behavior
    if (episodeIndex < watchedEpisodes) return 'watched';
    if (episodeIndex === watchedEpisodes && watchStatus === "watching") return 'current';
    return 'unwatched';
  };

  const getEpisodeColor = (status: string) => {
    switch (status) {
      case 'watched': return 'bg-blue-500';
      case 'watched-dropped': return 'bg-blue-400 opacity-60';
      case 'current': return 'bg-yellow-500';
      case 'completed': return 'bg-emerald-500';
      case 'dropped': return 'bg-red-500';
      case 'on-hold': return 'bg-amber-500';
      default: return 'bg-gray-600';
    }
  };

  const getProgressText = () => {
    switch (watchStatus) {
      case "completed":
        return `Completed ${totalEpisodes}/${totalEpisodes} episodes`;
      case "dropped":
        return `Dropped at ${watchedEpisodes}/${totalEpisodes} episodes`;
      case "on-hold":
        return `On hold at ${watchedEpisodes}/${totalEpisodes} episodes`;
      default:
        return `Seen ${watchedEpisodes}/${totalEpisodes} episodes • 1 hour remaining`;
    }
  };

  const getProgressPercentage = () => {
    if (watchStatus === "completed") return 100;
    return Math.round((watchedEpisodes / totalEpisodes) * 100);
  };

  // Callback to receive watch status from MediaPageWatchList
  const handleWatchStatusChange = (status: string) => {
    setWatchStatus(status);
  };
 
  const [episodeRatings, setEpisodeRatings] = useState<{[key: number]: number}>({
    1: 4, 2: 4.5, 3: 5, 4: 4, 5: 5, 6: 3.5, 7: 4, 8: 5, 9: 4.5, 10: 4,
    11: 5, 12: 4, 13: 3, 14: 4.5, 15: 5, 16: 4
  });

  const getRatedEpisodesCount = () => {
    return Object.keys(episodeRatings).length;
  };

  const getEpisodeAverage = () => {
    const ratings = Object.values(episodeRatings);
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum / ratings.length).toFixed(1);
  };

  // Helper function to determine star fill state
  const getStarFillState = (starIndex: number, rating: number) => {
    if (rating >= starIndex) return 'full';
    if (rating >= starIndex - 0.5) return 'half';
    return 'empty';
  };

  // Helper function to get rating text
  const getRatingText = (rating: number) => {
    if (rating === 0.5) return "Terrible - Avoid at all costs";
    if (rating === 1) return "Very Poor - Major issues";
    if (rating === 1.5) return "Poor - Not recommended";
    if (rating === 2) return "Below Average - Has problems";
    if (rating === 2.5) return "Fair - Some redeeming qualities";
    if (rating === 3) return "Average - Decent watch";
    if (rating === 3.5) return "Good - Worth your time";
    if (rating === 4) return "Great - Highly recommended";
    if (rating === 4.5) return "Excellent - Near perfect";
    if (rating === 5) return "Perfect - Absolute masterpiece!";
    return "";
  };

  // Handle star click for half-star ratings
  const handleStarClick = (starIndex: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const starWidth = rect.width;
    const isLeftHalf = clickX < starWidth / 2;
    
    const newRating = isLeftHalf ? starIndex - 0.5 : starIndex;
    setUserRating(newRating);
  };

  // Handle star hover for half-star ratings
  const handleStarHover = (starIndex: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const hoverX = event.clientX - rect.left;
    const starWidth = rect.width;
    const isLeftHalf = hoverX < starWidth / 2;
    
    const newHoverRating = isLeftHalf ? starIndex - 0.5 : starIndex;
    setHoverRating(newHoverRating);
  };

  // Star component that handles half fills
  const StarIcon = ({ fillState }: { fillState: 'full' | 'half' | 'empty' }) => {
    return (
      <div className="relative w-8 h-8">
        {/* Background star (empty) */}
        <svg
          className="absolute inset-0 w-8 h-8 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        
        {/* Filled star (with clipping for half stars) */}
        {fillState !== 'empty' && (
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ 
              clipPath: fillState === 'half' ? 'inset(0 50% 0 0)' : 'none'
            }}
          >
            <svg
              className="w-8 h-8 text-yellow-400 drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  
  return (
    <div className="text-white rounded-lg ">
      {/* Header */}
  
      
      {/* Rating Circle */}
      <div className="flex mb-4 justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
            <span className="text-xl font-bold">{userRating}/5</span>
          </div>
        </div>
        <div className="ml-4">
        </div>
        
        {/* Episode Average */}
        <div className="mr-4 text-center">
          <div 
            className="relative"
            onMouseEnter={() => setShowEpisodeTooltip(true)}
            onMouseLeave={() => setShowEpisodeTooltip(false)}
          >
            <div className="text-lg font-semibold text-blue-400 cursor-help">
              Ep. Avg: {getEpisodeAverage()}/5
            </div>
            {showEpisodeTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-100 transition-opacity whitespace-nowrap z-20 border border-gray-700">
                Average from {getRatedEpisodesCount()} episodes individually rated
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </div>
        </div>
        
        {/* Interactive Half-Star Rating */}
        <div className="flex mb-6">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <button
              key={starIndex}
              className="p-1 hover:scale-110 transition-transform duration-200 cursor-pointer"
              onClick={(e) => handleStarClick(starIndex, e)}
              onMouseMove={(e) => handleStarHover(starIndex, e)}
              onMouseLeave={() => setHoverRating(0)}
            >
              <StarIcon 
                fillState={getStarFillState(starIndex, hoverRating || userRating)}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Rating Feedback */}
      {hoverRating > 0 && (
        <div className="text-center mb-4 text-sm text-gray-300 animate-fade-in">
          {getRatingText(hoverRating)}
        </div>
      )}

      {/* Watchlist Button Placeholder */}
      <div>
              
              <MediaPageWatchList onStatusChange={handleWatchStatusChange} />

             
            </div>

      {/* Episode Progress */}
      <div className="mb-4">
        <div className="text-sm mb-3 text-gray-300">
          {getProgressText()}
        </div>
        
        {/* Single Line Episode Tracker */}
        <div className="flex space-x-1 h-3 rounded-full overflow-hidden bg-gray-800">
          {Array.from({ length: totalEpisodes }, (_, index) => {
            const status = getEpisodeStatus(index);
            const delay = index * 30;
            
            return (
              <div
                key={index}
                className="flex-1 relative group"
                style={{
                  animation: animationComplete ? 'none' : `fillIn 0.4s ease-out ${delay}ms both`
                }}
              >
                <div
                  className={`h-full ${getEpisodeColor(status)} transition-all duration-300 ${
                    status === 'current' ? 'animate-pulse' : ''
                  } ${index === 0 ? 'rounded-l-full' : ''} ${
                    index === totalEpisodes - 1 ? 'rounded-r-full' : ''
                  }`}
                  style={{
                    width: status === 'watched' || status === 'completed' || status === 'dropped' || status === 'watched-dropped' ? '100%' : 
                           status === 'current' ? '60%' : '100%',
                    backgroundColor: status === 'unwatched' ? 'rgb(75, 85, 99)' : undefined
                  }}
                />
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  Episode {index + 1}
                  {status === 'watched' && ' ✓'}
                  {status === 'watched-dropped' && ' ✓ (dropped)'}
                  {status === 'current' && ' (watching)'}
                  {status === 'completed' && ' ✓ (completed)'}
                  {status === 'dropped' && ' (dropped)'}
                  {status === 'on-hold' && ' (on hold)'}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress Summary */}
        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>Progress: {watchStatus === "completed" ? totalEpisodes : watchedEpisodes}/{totalEpisodes}</span>
          <span>{getProgressPercentage()}%</span>
        </div>

        {/* Status Indicator */}
        {watchStatus !== "watching" && (
          <div className="mt-2 text-xs">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              watchStatus === "completed" ? "bg-emerald-900/50 text-emerald-300" :
              watchStatus === "dropped" ? "bg-red-900/50 text-red-300" :
              watchStatus === "on-hold" ? "bg-amber-900/50 text-amber-300" :
              "bg-gray-900/50 text-gray-300"
            }`}>
              {watchStatus === "completed" && "✓ Completed"}
              {watchStatus === "dropped" && "✗ Dropped"}
              {watchStatus === "on-hold" && "⏸ On Hold"}
              {watchStatus === "plan-to-watch" && "📅 Plan to Watch"}
            </span>
          </div>
        )}
      </div>

      
      <style jsx>{`
        @keyframes fillIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default EpisodeProgressTracker;