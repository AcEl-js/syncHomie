import Navbar from '@/components/Navbar';
import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"

const sports = [
  { name: "MMA", icon: "boxing-glove" },
  { name: "Football", icon: "football" },
  { name: "Soccer", icon: "soccer-ball" },
  { name: "Tennis", icon: "tennis-ball" },
  { name: "Formula 1", icon: "flag" },
  { name: "Baseball", icon: "baseball" },
  { name: "Basketball", icon: "basketball" },
  { name: "Ice", icon: "snowflake" },
  { name: "Cricket", icon: "cricket" },
  { name: "Rugby", icon: "rugby-ball" },
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
    ],
  },
]


const Page = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-black text-white p-4">
          <h1 className="text-xl font-semibold mb-4">Sports</h1>
    
          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div className="flex space-x-4 p-4">
              {sports.map((sport) => (
                <Link
                  key={sport.name}
                  href={`#${sport.name.toLowerCase()}`}
                  className="inline-flex flex-col items-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <span className="sr-only">{sport.name}</span>
                    <div className="w-8 h-8 opacity-80 group-hover:opacity-100">
                      {/* Icon would be imported from lucide-react based on sport.icon */}
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
              <div key={day.day}>
                <h2 className="text-gray-400 text-sm mb-3">MATCH DAY {day.day}</h2>
                <div className="grid gap-3">
                  {day.matches.map((match, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                      <div className="flex justify-between items-center">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-gray-600" />
                            <span>{match.player1.name}</span>
                            <span className="text-gray-400">({match.player1.percentage})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-gray-600" />
                            <span>{match.player2.name}</span>
                            <span className="text-gray-400">({match.player2.percentage})</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{match.date}</div>
                          <div>{match.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
            
        </div>
       
      )
}

export default Page;
