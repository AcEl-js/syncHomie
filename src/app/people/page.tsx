
'use client'
import React from 'react';
import { Heart, Star } from 'lucide-react';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Pencil } from 'lucide-react'

import Navbar from '@/components/Navbar';
import  MovieCard  from '@/components/MovieCard';
import CommentSys from '@/components/CommentSys';
import { useDragScroll } from '@/components/dragScrolling';

interface Movie {
  id: number;
  title: string;
  rating: number;
  image: string;
  genre: string;
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
    const { containerRef, dragHandlers } = useDragScroll();
    
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
      image: "/movies/panda.png",
      genre: "Comedy/Romance"

    },
    {
      id: 2,
      title: "Dune: Part Two",
      rating: 8.9,
      image: "/movies/dunc.png",
      genre: "Sci-Fi/Action"
    },
    {
      id: 3,
      title: "Imaginary",
      rating: 4.8,
      image: "/movies/imaginary.png",
      genre: "Comedy/Romance"

    },
    {
      id: 4,
      title: "Kung Fu Panda 4",
      rating: 7.8,
      image: "/movies/panda.png",
      genre: "Sci-Fi/Action"
    },
    {
      id: 5,
      title: "Dune: Part Two",
      rating: 4.4,
      image: "/movies/dunc.png",
      genre: "Comedy/Romance"
    },
    {
      id: 6,
      title: "Imaginary",
      rating: 8.1,
      image: "/movies/imaginary.png",
      genre: "Comedy/Romance"
    },
  ];

  const shows: Show[] = [
    {
      date: "October, 28th",
      time: "20h00",
      duration: "1/20/2024",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/netflix.png", "./icons/hbo.jpeg"]
    },
    {
      date: "October, 28th",
      time: "20h00",
      duration: "2/2/2024",
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
         <div className="min-h-screen bg-black text-white  p-8 max-sm:p-2  mt-12">
      {/* Actor Profile Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-light">People</h1>
          <span className="text-gray-400">Actors</span>
        </div>
      </header>
      <div className="flex max-sm:flex-col gap-6 mb-12 mt-4 ">
        <img
          src="/other/man2.jpeg"
          alt="Actor profile"
          className="w-48 h-72 object-cover rounded-lg"
        />
        <div className="flex flex-col ">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Charlie Day</h1>
              <span className="text-green-500">57%</span>
              <Heart className="text-gray-400 cursor-pointer flex justify-self-start hover:text-red-500 transition-colors" />
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl ">
              Charlie was born in New York City and raised in Middletown, Rhode Island. His parents are both music teachers - his mother, Mary (Peckham), is a piano teacher and his father, Dr. Thomas Charles Day, was a professor of music at Salve Regina University in Newport, Rhode Island. Charlie plays both piano and guitar. He has Italian (from his paternal grandfather), Irish, and English ancestry.
            </p>
          </div>
        {/* rate section */}
          <div className="w-full max-w-2xl md:p-4 py-4 space-y-4 rounded-lg text-white max-sm:overflow-scroll">
      <div className=" xl:flex  gap-4 items-center ">
        <div className="flex items-center gap-4 p-2 rounded-sm  w-[364px] justify-around  bg-[#1a1f2b]">
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
            className="bg-[#2a2f3b] hover:bg-[#3a3f4b] text-gray-300 flex "
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
        <div ref={containerRef}
              className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing select-none ml-5"
              {...dragHandlers}>
            {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>


      <CommentSys/>

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
      <div className="min-w-[60px] mx-4 text-sm text-gray-400 flex flex-col px-3 justify-center items-center">
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
        className={`flex gap-4 p-4 text-center rounded-md min-h-24 max-sm:hidden ${
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

<div className='mt-20'>
<h2 className="text-xl font-semibold mb-6"><span className='text-[#F5C518]'>•</span> Other Details</h2>
<div className="max-w-sm rounded overflow-hidden shadow-lg p-6  ">
      <div className="font-bold text-xl mb-2"></div>
      <p className="text-gray-400 text-base my-5">
        <strong>Official Name:</strong>Charlie Peckham Day
      </p>
      <p className="text-gray-400 text-base my-5">
        <strong>Born:</strong> June 28, 1991, San Jose, Costa Rica
      </p>
      <p className="text-gray-400 text-base my-5">
        <strong>Height:</strong> 59" (1.75 cm)
      </p>
      <p className="text-gray-400 text-base my-5">
        <strong>Parents:</strong> Daniel Day
      </p>
      <p className="text-gray-400 text-base my-5">
        <strong>Awards:</strong> Top Rated Serie #102 Nominations
      </p>
    </div>
</div>
    </div>
    </div>
   
  );
}

export default App;