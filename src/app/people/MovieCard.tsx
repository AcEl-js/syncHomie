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
    <div className="h-[234px] w-[464px] relative gap-2 flex lg:flex-row bg-[#1a1a1a] rounded-lg overflow-hidden group">
      {/* Index number */}
      <div className="  mt-4 gap-2 text-white w-8 h-8 flex items-center justify-center z-10">
        <h2 className=' text-2xl'> {index + 1}</h2>
       
    
        <div className=' bg-[#E318F5] w-1 h-10 rounded-2xl '/>
      </div>
      
      {/* Movie poster */}
      <div className=" flex-shrink-0 h-full flex  items-center">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="w-32 h-[194px] object-cover rounded-sm "
        />
      </div>

      {/* Movie info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium mb-2 ">{movie.title}</h3>

          <span className='text-gray-500'>{movie.boxOffice}</span>
          <div className="flex items-center gap-3 text-sm mt-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-[#E318F5] " fill="currentColor" />
              <span>{movie.rating}</span>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
              <Star className='h-4'/>
              Rate
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <Info className='h-4' />
          </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}