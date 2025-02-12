"use client"
import React, { useState } from 'react';
import { Fish as Fist } from 'lucide-react';
import "./style.css"

type TimeRange = 'All Time' | 'Last 24h' | '7 Days' | '30 Days';
type Category = {
  name: string;
  entries: number;
  color: string;
};

const Page = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('All Time');
  
    const timeRanges: TimeRange[] = ['All Time', 'Last 24h', '7 Days', '30 Days'];
    
    const categories: Category[] = [
      { name: 'Movies', entries: 204, color: 'green-400' },
      { name: 'TV Series', entries: 147, color: 'blue-400' },
      { name: 'Anime', entries: 141, color: 'purple-400' },
      { name: 'Drama', entries: 116, color: 'pink-400' },
      { name: 'Sport', entries: 108, color: 'orange-400' },
    ];
  
    const totalBookmarks = categories.reduce((sum, cat) => sum + cat.entries, 0);
    return (
        <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className=" text-5xl font-extrabold mb-12 text-center flex justify-center items-center gap-4">
          <span className="text-[#AAD0FF] ">Welcome Back</span>
          <img className='h-22' src="/other/sync8.svg "  />
          <span className="text-[#AAD0FF] ">Zaki</span>
        </div>

        {/* Stats Card */}
        <div className="rounded-xl backdrop-blur-sm p-8 mb-8">
            <img src="/other/Background.svg" alt="" />
          <div className="text-center relative bottom-28">
            <div className="text-6xl font-bold mb-2">{totalBookmarks}</div>
            <div className="text-gray-400 uppercase tracking-wider">Total Bookmarks</div>
          </div>
        </div>

        {/* Time Range Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedTimeRange(range)}
              className={`flex items-center h-[42px] rounded-[10px] px-[18px] py-[8px] gap-[10px] bg-[#E9D7FE]/15 shadow-[0_1px_2px_0_#FFFFFF0D_inset] ${
                selectedTimeRange === range
                  ? 'bg-gray-700 text-[#E9D7FE]'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className=" rounded-lg p-4 text-center  cursor-pointer"
            >
              <div className= {`text-sm w-[75px] h-[25px] flex justify-center items-center rounded-sm text-white ${category.color}`}>{category.name}</div>
              <div className="mt-1 font-bold">
                <span className={`text-${category.color}`}>{category.entries}</span> <span className="text-xs">Entries</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-gray-700">
                <div
                  className={`h-full rounded-full bg-${category.color}`}
                  style={{
                    width: `${(category.entries / totalBookmarks) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default Page;
