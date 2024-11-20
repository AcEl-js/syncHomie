import React from 'react';

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
}

const MovieCard = ({ title, image, rating, genre }: MovieCardProps) => {
  return (
    <div className="min-w-[200px]  bg-[#0D0D1F] rounded-xl overflow-hidden ">
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-[300px] object-cover" />
        <button className="absolute top-2 left-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
          <span className="text-xl">+</span>
        </button>
      </div>
      <div className=" p-4 bg-[#1b1b1b] -mt-20 relative z-10 h-full">
        <h3 className="text-white text-xl font-medium mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{genre}</p>
        <div className="flex items-center gap-1 mb-3">
          <span className="text-pink-500 text-sm">★</span>
          <span className="text-white text-sm">{rating}</span>
        </div>
        <button className="w-full bg-[#282828] text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-[#0052a3] transition-colors mb-2">
          <span className="text-sm text-[#1C97FF]">▶ Watch trailer</span>
        </button>
        <button className="w-full bg-[#1A1A2E] text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-[#252538] transition-colors">
          <span className="text-sm">Watch on </span>
          <img className='h-4' src="/icons/netflix.png" />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;