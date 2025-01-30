import React from 'react';
import { Star, Info } from 'lucide-react';


interface MovieCardProps {
  movie: Movie;
  index: number;
}
interface Movie {
  id: number;
title: string;
rating: number;
boxOffice: string;
imageUrl: string;
}

export function MovieCard({ movie, index }: MovieCardProps) {
  return (
    <div className="relative lg:flex bg-[#1a1a1a] rounded-lg overflow-hidden group">
      {/* Index number */}
      <div className="absolute top-0 left-0 bg-black/80 text-white w-8 h-8 flex items-center justify-center z-10">
        {index + 1}
      </div>
      
      {/* Movie poster */}
      <div className=" flex-shrink-0">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-full h-[270px] object-cover "
        />
      </div>

      {/* Movie info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium mb-2">{movie.title}</h3>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500" fill="currentColor" />
              <span>{movie.rating}</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              Rate
            </button>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="font-medium">Box Office:</span>
            <span>{movie.boxOffice}</span>
          </div>
          <button className="mt-3 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <Info size={14} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}