
'use client'
import React from 'react';
import { Heart, Star } from 'lucide-react';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Pencil } from 'lucide-react'

import Navbar from '@/components/Navbar';
import { MovieCard } from './MovieCard';

interface Movie {
  id: number;
  title: string;
  rating: number;
  boxOffice: string;
  imageUrl: string;
}

interface Show {
  date:string
  time: string
  duration: string
  title: string
  poster: string
  genre: string
  cast: string[]
  platforms: string[]
}

function App() {
    const [upvotes, setUpvotes] = useState(57)
    const [downvotes, setDownvotes] = useState(43)
    
    const reactions = [
      { name: 'Funny', emoji: '😂' },
      { name: 'Interesting', emoji: '🤔' },
      { name: 'Infuriating', emoji: '😠' },
      { name: 'Sad', emoji: '😢' }
    ]
  const movies: Movie[] = [
    {
      id: 1,
      title: "Kung Fu Panda 4",
      rating: 6.6,
      boxOffice: "$58M",
      imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=250&h=350"
    },
    {
      id: 2,
      title: "Dune: Part Two",
      rating: 8.9,
      boxOffice: "$46M",
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=250&h=350"
    },
    {
      id: 3,
      title: "Imaginary",
      rating: 4.8,
      boxOffice: "$9.9M",
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=250&h=350"
    },
    {
      id: 4,
      title: "Kung Fu Panda 4",
      rating: 7.8,
      boxOffice: "$99M",
      imageUrl: "/movies/panda.png"
    },
    {
      id: 5,
      title: "Dune: Part Two",
      rating: 4.4,
      boxOffice: "$19.5M",
      imageUrl: "/movies/dunc.png"
    },
    {
      id: 6,
      title: "Imaginary",
      rating: 8.1,
      boxOffice: "$22M",
      imageUrl: "/movies/imaginary.png"
    },
  ];

  const shows: Show[] = [
    {
      date: "October, 28th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/netflix.png", "./icons/hbo.jpeg"]
    },
    {
      date: "October, 28th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/disney.jpeg", "./icons/hulu.jpeg"]
    },
   
  ]
  return (
    <div>
        <Navbar/>
         <div className="min-h-screen bg-black text-white p-8  mt-12">
      {/* Actor Profile Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-light">People</h1>
          <span className="text-gray-400">Actors</span>
        </div>
      </header>
      <div className="flex gap-6 mb-12 mt-4">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Actor profile"
          className="w-48 h-48 object-cover rounded-lg"
        />
        <div className="flex flex-col ">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Charlie Day</h1>
              <span className="text-green-500">57%</span>
              <Heart className="text-gray-400 cursor-pointer flex justify-self-start hover:text-red-500 transition-colors" />
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Charlie was born in New York City and raised in Middletown, Rhode Island. His parents are both music teachers - his mother, Mary (Peckham), is a piano teacher and his father, Dr. Thomas Charles Day, was a professor of music at Salve Regina University in Newport, Rhode Island. Charlie plays both piano and guitar. He has Italian (from his paternal grandfather), Irish, and English ancestry.
            </p>
          </div>
        {/* rate section */}
          <div className="w-full max-w-2xl p-4 space-y-4 rounded-lg text-white">
      <div className=" xl:flex  gap-4 items-center ">
        <div className="flex items-center gap-4 p-2 rounded-sm   bg-[#1a1f2b]">
          <span className="text-gray-300 text-nowrap">Rate this Actor</span>
          <div className="flex items-center gap-2 ">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <ThumbsUp className="w-5 h-5 mr-1" />
              {upvotes}%
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              <ThumbsDown className="w-5 h-5 mr-1" />
              {downvotes}%
            </Button>
          </div>
          
        </div>
        <div className="flex gap-2 my-4">
        {reactions.map((reaction) => (
          <Button
            key={reaction.name}
            variant="secondary"
            size="sm"
            className="bg-[#2a2f3b] hover:bg-[#3a3f4b] text-gray-300"
          >
            {reaction.emoji} {reaction.name}
          </Button>
        ))}
      </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-300 h-11 hover:text-white flex gap-2 items-center  rounded-[10px] px-[18px] py-[8px]  bg-[#A3A3A30D] shadow-[0_1px_2px_0_#FFFFFF0D_inset]"
        >
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Button>
      </div>
      
    </div>
        </div>
      </div>

      {/* Known For Section */}
      <div className='mb-20'>
      
        <h2 className="text-xl font-semibold mb-6"><span className='text-[#F5C518]'>•</span> Known For</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols- gap-6">
          {movies.map((movie, index) => (
           <MovieCard key={movie.id} movie={movie} index={index} />
          ))}
        </div>
      </div>


      {/* credits */}
      {shows.map((show, index) => (
      <div
        key={index}
        className="m-4 group w-auto " // Add a 'group' class for hover effects
      >
    {index === 0 || shows[index].date !== shows[index - 1].date ? (
      <h2 className="text-xl font-semibold mb-6"><span className='text-[#F5C518]'>•</span> Credits</h2>
    ) : null}
    <div className="flex rounded-lg overflow-hidden flex-row flex-1 hover:bg-zinc-800 transition">
      <div className="min-w-[60px] text-sm text-gray-400 flex flex-col px-3 justify-center items-center">
        <div>{show.time}</div>
        <div>{show.duration}</div>
      </div>
      <img src="/movies/venom.png" alt="" />
      <div>
        <h3 className="font-semibold mb-1 h-full flex items-center px-3 text-wrap">
          {show.title}
        </h3>
      </div>
      <div
        className={`flex gap-4 w-[3px] h-[70px] mx-7 self-center rounded-md ${
          index % 2 === 0 ? 'bg-[#83BAAB]' : 'bg-[#C85684]'
        }`}
      />
      <div
        className={`flex gap-4 p-4 text-center rounded-md min-h-24 ${
          index % 2 === 0
            ? 'border-l-8 border-[#83BAAB] bg-[#83baab61]'
            : 'border-l-8 border-[#C85684] bg-[#C856842A]'
        }`}
      >
        <div className="flex-1">
          <div className="text-sm text-gray-400 mb-1">{show.genre}</div>
          <div className="flex flex-wrap gap-2 lg:gap-8">
            {show.cast.map((member, idx) => (
              <span key={idx} className="text-sm text-gray-300">
                {member}
              </span>
            ))}
          </div>
        </div>
      </div>
      {show.platforms.map((platform, idx) => (
        <img
          key={idx}
          className="h-8 w-8 rounded-full self-center ml-4 mr-2"
          src={platform}
        />
      ))}
    </div>
  </div>
))}
    </div>
    </div>
   
  );
}

export default App;