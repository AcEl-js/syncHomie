import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
 

interface Movie {
  title: string;
  image: string;
  rating: number;
  genre: string;
}

interface TrendingMoviesProps {
  movies: Movie[];
  categorie:string
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ movies, categorie }) => {
  

  return (
    <div className="py-16 px-4 .hide-scrollbar ">
      <div className="max-w-7xl mx-auto">
        
        {/* movies */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold text-[#571B3F]">132,784</span>
            <span className="text-3xl text-blue-500 ">{categorie}</span>
          </div>
          <h2 className="text-xl mt-4 flex items-center gap-2 text-white">
            <div className="w-1 h-6 bg-blue-500 " />
            Most watched movies this month
          </h2>
        </div>
        <div className=" movies flex space-x-6 overflow-x-auto pb-6 hide-scrollbar">
          
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      
      </div>

     
    </div>
  );
};

export default TrendingMovies;