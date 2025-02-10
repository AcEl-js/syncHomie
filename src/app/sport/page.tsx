import Navbar from '@/components/Navbar';
import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"

const sports = [
  { name: "MMA", icon: "mma.svg" },
  { name: "Football", icon: "football.svg" },
  { name: "Soccer", icon: "soccer.svg" },
  { name: "Tennis", icon: "tennis.svg" },
  { name: "Formula 1", icon: "formula1.svg" },
  { name: "Baseball", icon: "baseball.svg" },
  { name: "Basketball", icon: "basketball.svg" },
  { name: "Ice", icon: "hockey.svg" },
  { name: "Cricket", icon: "cricket.svg" },
  { name: "Rugby", icon: "rugby.svg" },
]

const matches = [
  {
    day: 11,
    matches: [
      {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },
    ],
  },
  {
    day: 12,
    matches: [
      {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },
      {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },
      {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },
      {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      }, {
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },{
        player1: { name: "Alex Pena", percentage: "88.5%" },
        player2: { name: "Connor Sparrow", percentage: "75%" },
        time: "08:15 PM",
        date: "Nov 18",
      },
    ],
  },
]


const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[300px] w-full">
                <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                    'url("/sport/bgsport.jpeg")',
                }}
                >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1C97FF] ">SyncHomie Sports</h1>
                    <p className="text-[#657182] max-w-2xl">
                    Find out where to stream sports online & keep track of your favorite competitions & teams!
                    </p>
                    <p className="text-[#657182] text-sm">Features to track your teams are coming soon!</p>
                </div>
                </div>
            </div>

            {/* Leagues Section */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-semibold mb-4">Leagues & tournaments</h2>
                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex space-x-4 pb-4">
                    {[
                    { name: "NBA", logo: "/sport/NBA.svg" },
                    { name: "UEFA Nations League", logo: "/sport/UEFA.svg" },
                    { name: "NFL", logo: "/sport/NFL.svg" },
                    { name: "Davis Cup", logo: "/sport/Davis.svg" },
                    { name: "NHL", logo: "/sport/NLH.svg" },
                    { name: "FIFA World Cup Qualifiers", logo: "/sport/FIFA.svg" },
                    { name: "Formula 1", logo: "/sport/Formula.svg" },
                    { name: "Billie Jean King Cup", logo: "/sport/billie.svg" },
                    { name: "Premier League", logo: "/sport/PremierLeague.svg" },
                    { name: "International Friendly Games", logo: "/sport/InternationlFriendly.svg" },
                    ].map((league) => (
                    <Link
                        key={league.name}
                        href={`#${league.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex flex-col items-center group  bg-gray-800 rounded-lg justify-center p-2 group-hover:bg-gray-700 transition-colors w-[146px] h-[146px] "
                        draggable='false'
                    >
                        <div className="w-24 flex justify-center items-center my-2 ">
                        <img src={league.logo} className="w-16 h-16 bg-gray-700 rounded-lg" />
                        </div>
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white text-center max-w-[120px] text-wrap">
                        {league.name}
                        </span>
                    </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            {/* Existing Sports Navigation */}
            <div className="px-4">
                <h1 className="text-xl font-semibold mb-4">Sports</h1>

                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex space-x-4 p-4">
                    {sports.map((sport) => (
                    <Link
                        key={sport.name}
                        href={`#${sport.name.toLowerCase()}`}
                        className="inline-flex flex-col items-center group"
                        draggable="false"
                    >
                        <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                        <span className="sr-only">{sport.name}</span>
                        <div className="w-8 h-8 opacity-80 group-hover:opacity-100">
                          <img src={"/"+sport.icon}  />
                        </div>
                        </div>
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white">{sport.name}</span>
                    </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <div className="mt-8 space-y-6">
                {matches.map((day) => (
                    <div key={day.day} className=' cursor-pointer'>
                    <h2 className="text-gray-400 text-sm mb-3">MATCH DAY {day.day}</h2>
                    <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2">
                        {day.matches.map((match, idx) => (
                          
                        <div key={idx} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                            <div className="flex justify-between items-center">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                <img src='https://s3-alpha-sig.figma.com/img/14bc/0966/9750ae0f1e96bde99b243b0e7d424e3a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WeN35vCdFzZu-nvY~o4iw8dFyifcBkor7rcFSKL3tPyWbck7DnHd0YryJmdcynB4a2urqGQVJa5C3u1MV~IX2cdovAg9VudX4DuApeM~9bD4xoL6QvcZHv6LwvoSPx-sjVHTJd6cibdN-FVshBfj8dUonJZ2pzywLyMIw4rvXOhJI89HQzAKx~AwCV~5SBLl6x9bqjNOro9g5dUSQ0t67rVx47BenU7cICRhwi5knilPCKt39iC~J2EPFKWq8~yCdc4YtCskVVmGujWyezED3z~RGWHC1OTtcu~UPiTNO2o4dO4zfz9TWMho6d~~QRIit~EcUP7ZBbSd3GFekxj~pw__' 
                                className="w-6 h-6 rounded-full object-contain" />
                                <span>{match.player1.name}</span>
                                <span className="text-gray-400">({match.player1.percentage})</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                <img src='https://s3-alpha-sig.figma.com/img/9d2b/729d/4f4a4548d168e5028c3c65ba1d0e9738?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s6CSIa-ceAbGoihzp-AcLKo7LWlIZCRsl5PMcgJ0Ax2W~SpALxaIQ~0vKQyteMi8KUfWFggH15IXRuH3dSGuR378wHjhcKsPDSQzLmpDow2El1Uwb7KNYbABCCoZekcZPcXCxsV2UWhEdR~iGJkhpiA~o52XiohBNNc5WTUnqlJv3zKgedTYNtFoAGW6AsINbgAyCX4Tg7~k4w70KhjHSB1ExRuK~cH1cT-KdbL9NzNaJKvgqau0Axo7mu0hcYsS~Nx9SkO6Nwlk3Gj-7khzEYfTIesaOnJvxyKM0yfuCuWKvuNpgE~9jhkLw~rQ-Byo4DXUIFudqhHFM8ylR~5Qug__' 
                                className="w-6 h-6 rounded-full object-contain" />
                                <span>{match.player2.name}</span>
                                <span className="text-gray-400">({match.player2.percentage})</span>
                                </div>
                                

                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-400">{match.date}</div>
                                <div>{match.time}</div>
                            </div>
                            <div><img src="/Button.svg" alt="" /></div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
            
        </div>
       
      )
}

export default Page;
