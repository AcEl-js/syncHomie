"use client"
import Navbar from "@/components/Navbar";
import TvShowDetails from "./tv-show";
import Image from "next/image"
import "./style.css"
import OverviewMenu from "../media/OverviewMenu";
import EpisodeList from "../media/eposode-lists";
import Reviews from "@/components/Reviews";
import CommentSys from "@/components/CommentSys";
import SeriesCast from "./series-cast";
import { useDragScroll } from '@/components/dragScrolling';
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Show {
    title: string
    rating: number
    image: string
  }

export default function App() {
    const [showEpisodeList, setShowEpisodeList] = useState(false)

    
const shows: Show[] = [
    {
      title: "Scrubs",
      rating: 4.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "How I Met Your Mother",
      rating: 4.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "The Big Bang Theory",
      rating: 4.3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Curb Your Enthusiasm",
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Fuller House",
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
    {
      title: "Blockbuster",
      rating: 4.2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0V4Lh6pGemaiN-qCSuf6j1TjYPN4YT1yUA&s",
    },
  ]

    const reviews = [
        {
          name: "P O lane",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },
        {
          name: "Tomas Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },
        {
          name: "Achraf Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }, {
          name: "Allan Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        },{
          name: "Achraf Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }, {
          name: "Allan Name",
          content: "Lorem Ipsum",
          subtitle: "It's Always Sunny in Philadelphia"
        }
      ];
    const { containerRef, dragHandlers } = useDragScroll();
      

  
  return (
    <div className=" min-w-full">
        <Navbar/>
        <div className=" sm:mt-24 mt-44 mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5498821] to-[#A33B3B00]   rounded-lg overflow-hidden shadow-xl text-white">
        

          
           
            <TvShowDetails/>
            <h1 className='text-2xl font-semibold lg:ml-28 text-gray-200 m-8 ml-4'><span className='text-[#F5C518] '>•</span> Series Cast</h1>
            <SeriesCast/>

            <div className="text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Show Details Section */}
        <div className=" rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="lg:text-2xl text-base text-gray-400 mb-2">
              Latest Release: Season 16 Episode 8 <span className="ml-4">Air Date: October 10th 2024</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Show Poster */}
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/movies/always.png"
                  alt="It's Always Sunny in Philadelphia"
                  width={192}
                  height={288}
                  className="rounded-md w-full h-auto"
                />
              </div>

              {/* Show Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Dennis Takes a Mental Health Day</h1>

                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-900 px-2 py-1 rounded-md flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                    <span className="font-bold">86%</span>
                  </div>
                  <span className="text-gray-400">2023 • 8 Episodes</span>
                </div>

                <p className="text-gray-300 mb-6">
                  After a physical reveals Dennis has high blood pressure, he decides to take a day away from The Gang
                  to de-stress at the beach. But life has other plans, and his day spirals into a string of mishaps
                  until he can no longer contain his rage.
                </p>

                <Button
                  variant="outline"
                  className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700"
                  onClick={() => setShowEpisodeList(!showEpisodeList)}
                >
                  <span className="mr-2">📋</span> View Episode List
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Episode List Section - Conditionally rendered */}
        {showEpisodeList && (
          <div className="mt-6">
            <h1 className='text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Season 1: 12/12 Episodes Released</h1>
            <EpisodeList />
          </div>
        )}
      </div>
    </div>
            
      <Reviews reviews={reviews} title='• User Reviews' />
      <div className=" flex justify-center">

     <CommentSys/>
      </div>

            <h1 className=' text-2xl font-semibold text-gray-200 m-8 ml-4'><span className='text-[#F5C518] '>•</span> Media </h1>


    <div className="w-full text-white">
    <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex items-center gap-4 mb-6 justify-between">
       
          <Tabs defaultValue="popular" className="w-full flex justify-between">
            <TabsList className="bg-transparent border-b text border-neutral-800 w-full justify-center h-auto p-0 gap-6">
              <TabsTrigger
                value="popular"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="backdrops"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Backdrops
              </TabsTrigger>
              <TabsTrigger
                value="posters"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent   text-neutral-400 h-auto"
              >
                Posters
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <button className="text-sm text-neutral-400 hover:text-white transition-colors">Edit</button>
        </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[1, 2, 3].map((i) => (
    <div key={i} className="relative aspect-[3/2] overflow-hidden rounded-lg">
    <img
        src="/other/cover.png"
        alt="Media gallery image"
        className="object-cover hover:opacity-75 transition-opacity cursor-pointer"
    />
    </div>
    ))}
    </div>
    </div>

    {/*  more liked*/}

    <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> More Like This</h1>
    <div>
    <div className="grid w-max-[1219px] ml-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {shows.map((show) => (
    <div key={show.title} className="group relative">
        <div className=" overflow-hidden rounded-lg">
        <img
            src={show.image || "/placeholder.svg"}
            alt={show.title}
            width={181}
            height={181}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110 h-[181px] w-[181px] "
        />
        </div>
        <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-white truncate">{show.title}</h3>
        <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm text-gray-400">{show.rating}</span>
        </div>
        </div>
    </div>
    ))}


    </div>


    </div>

    </div>

    <Footer/>
            </div>
        </div>
    
  )
}
