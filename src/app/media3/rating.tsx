"use client"

import { useState } from "react";
type Props = {
    onChange?: (starPosition: number) => void;
    rating?:number
    totalStars?:number
    size?:number
    color?:string

  };
export default function StarRating({ 
    rating = 0, 
    totalStars = 5, 
    size = 24, 
    color = "#FCD34D", 
    onChange
  }: Props) {
    const [hoverRating, setHoverRating] = useState(0);
    
    // Calculate the percentage fill for partial stars
    const getStarFill = (starPosition:number) => {
      const isInteractive = typeof onChange === 'function';
      const currentRating = isInteractive && hoverRating > 0 ? hoverRating : rating;
      
      if (currentRating >= starPosition) {
        return 100; // Full star
      } else if (currentRating > starPosition - 1) {
        // Calculate percentage for partial star
        return (currentRating - Math.floor(currentRating)) * 100;
      }
      return 0; // Empty star
    };
  
    const handleClick = (starPosition:number) => {
      if (typeof onChange === 'function') {
        onChange(starPosition);
      }
    };
  
    const handleMouseEnter = (starPosition:number) => {
      if (typeof onChange === 'function') {
        setHoverRating(starPosition);
      }
    };
  
    const handleMouseLeave = () => {
      if (typeof onChange === 'function') {
        setHoverRating(0);
      }
    };
  
    return (
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => {
          const starPosition = index + 1;
          const fillPercentage = getStarFill(starPosition);
          
          return (
            <div 
              key={index} 
              className={typeof onChange === 'function' ? "relative cursor-pointer" : "relative"}
              onClick={() => handleClick(starPosition)}
              onMouseEnter={() => handleMouseEnter(starPosition)}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FCD34D]"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              
              {/* Filled star overlaid with clip-path */}
              <div 
                className="absolute top-0 left-0 overflow-hidden" 
                style={{ width: `${fillPercentage}%` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={size}
                  height={size}
                  viewBox="0 0 24 24"
                  fill={color}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-transparent"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          );
        })}
        {typeof onChange === 'function' && (
          <span className="ml-2 text-sm text-gray-600">
            {hoverRating > 0 ? hoverRating : rating}
          </span>
        )}
      </div>
    );
  }
  