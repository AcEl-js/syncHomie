"use client"
import { Button } from '@/components/ui/button';
import { Bell, Eye, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import MediaPageWatchList from './MediaPageWatchList ';

const EpisodeProgressTracker = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [userRating, setUserRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const totalEpisodes = 20;
  const watchedEpisodes = 16;
  const [watchStatus, setWatchStatus] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEpisodeTracker, setShowEpisodeTracker] = useState(false);
  const [currentSeason, setCurrentSeason] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(1);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const getEpisodeStatus = (episodeIndex:number) => {
    if (episodeIndex < watchedEpisodes) return 'watched';
    if (episodeIndex === watchedEpisodes) return 'current';
    return 'unwatched';
  };

  const getEpisodeColor = (status:string) => {
    switch (status) {
      case 'watched': return 'bg-green-500';
      case 'current': return 'bg-yellow-500';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="text-white rounded-lg ">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Your Rating</h2>
      
      {/* Rating Circle */}
      <div className="flex  mb-4 justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
            <span className="text-xl font-bold">{userRating}/5</span>
          </div>
        </div>
        <div className="ml-4">
        </div>
        <div className="flex mb-6 ">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="p-1 hover:scale-110 transition-transform duration-200"
            onClick={() => setUserRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          >
            <svg
              className={`w-8 h-8 transition-colors duration-200 ${
                star <= (hoverRating || userRating) 
                  ? 'text-yellow-400 drop-shadow-lg' 
                  : 'text-gray-600 hover:text-gray-400'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      
      </div>

      {/* Interactive Star Rating */}
      
      {/* Rating Feedback */}
      {hoverRating > 0 && (
        <div className="text-center mb-4 text-sm text-gray-300 animate-fade-in">
          {hoverRating === 1 && "Poor - Not recommended"}
          {hoverRating === 2 && "Fair - Has some issues"}
          {hoverRating === 3 && "Good - Worth watching"}
          {hoverRating === 4 && "Great - Highly recommended"}
          {hoverRating === 5 && "Excellent - Must watch!"}
        </div>
      )}

      {/* Watchlist Button */}
      
            <div>
              
              <MediaPageWatchList/>

              <div className="flex items-center gap-2 mt-2 justify-between">
                <span className="text-sm">Add to Custom List</span>
                <Bell size={16} className="text-yellow-500" />
              </div>
            </div>

      {/* Episode Progress */}
      <div className="mb-4">
        <div className="text-sm mb-3 text-gray-300">
          Seen {watchedEpisodes}/{totalEpisodes} episodes • 1 hour remaining
        </div>
        
        {/* Single Line Episode Tracker */}
        <div className="flex space-x-1 h-3 rounded-full overflow-hidden bg-gray-800">
          {Array.from({ length: totalEpisodes }, (_, index) => {
            const status = getEpisodeStatus(index);
            const delay = index * 30; // Stagger animation
            
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
                    width: status === 'watched' ? '100%' : status === 'current' ? '60%' : '100%',
                    backgroundColor: status === 'unwatched' ? 'rgb(75, 85, 99)' : undefined
                  }}
                />
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  Episode {index + 1}
                  {status === 'watched' && ' ✓'}
                  {status === 'current' && ' (watching)'}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress Summary */}
        <div className="mt-2 flex justify-between text-xs text-gray-400">
          <span>Progress: {watchedEpisodes}/{totalEpisodes}</span>
          <span>{Math.round((watchedEpisodes / totalEpisodes) * 100)}%</span>
        </div>
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
            transform: translateY(0);
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