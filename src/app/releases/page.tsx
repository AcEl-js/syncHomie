"use client"
import React, { useState } from 'react';
import { MessageSquare, Image, Smile, ThumbsUp, ThumbsDown, Share2, Play, } from 'lucide-react';
import "./style.css"
import TrendingMovies from '@/components/TrendingMovies';
import { Button } from "@/components/ui/button"
import FeedItems from './feedItems';
import Entries from './entries';
import Navbar from '@/components/Navbar';

type TimeRange = 'All Time' | 'Last 24h' | '7 Days' | '30 Days';
type Category = {
  name: string;
  entries: number;
  color: string;
  text: string
};

const comments:Comment[] =[
  {
    avatar :"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    username:"Trivia",
    subtitles:"You Recently Watched: The Good Place",
    time:"3h",
    content:"Test yourself with some trivia! Fun exercise with benefits to your brain!",
    image:"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&h=600&fit=crop",
  },
  {
    avatar :"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=100&h=100&fit=crop",
    username:"New Episode!",
    subtitles:"It’s Always Sunny in Philadelphia",
    time:"3h",
    content:"Test yourself with some trivia! Fun exercise with benefits to your brain!",
    image:"https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?w=1200&h=600&fit=crop",
  }, {
    avatar :"d",
    username:"Recommendation",
    subtitles:"Because you watched The Good Place",
    time:"3h",
    content:"Test yourself with some trivia! Fun exercise with benefits to your brain!",
    image:"https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&h=600&fit=crop",
  }, {
    avatar :"d",
    username:"Champions League",
    subtitles:"Barcelona vs Man City",
    time:"8h",
    content:"A space caster traverses trippy worlds inside his universe simulator, exploring existential questions about life, death and everything in between",
    image:"/movies/Container.png",
  }, {
   avatar :"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    username:"News",
    subtitles:"Modern Family",
    time:"12h",
    content:"‘Modern Family’ Star Eric Stonestreet Says ABC Rejecting Mitch-Cameron Spinoff ‘Felt a Little Hurtful’: ‘It Would Have Been a Slam Dunk’ Eric Stonestreet said it felt hurtful when ABC rejected a planned ",
    image:"https://s3-alpha-sig.figma.com/img/dc63/3045/d2efcf8699f2d75ebbf151ed3a3447fe?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TpPFbCdrnbl5vCj4QJu3zrBLCVWreva~icDEdE~76et27MiRI~Pqe12vRiaQ0BqDdBrXANo3pRJlR54XnER5RVm-g34YGzvPSHChjoS3OOTvc7w1QzgI~WLi-KIOcuFkbcGLCOXT~04oJrHmkYRvX5snfq2s2OYj0GC-mslbVHh~wxwD0SiPDT8-E2x6EBnQId-CHOCZL7Otwi2g3f2mfL0dwcwdl-huPdLabQU8CJEbwdAxvB8Hm7Dc5CKpGuEKyAwTnd-DSYYbvBapk~Hqt1ZSSlbESex0J-sp7dCMLaya83bPF0dcVIsBCZl1ZA3AJC3huyQy4P9cN-dtI8mk~Q__",
  }
]

const movies = [
  {
    title: "The Wolf of Wall Street",
    image: "/movies/wolf.jpeg",
    rating: 8.2,
    genre: "Crime/Drama"
  },
  {
    title: "Interstellar",
    image: "/movies/interstellar.jpeg",
    rating: 8.7,
    genre: "Sci-Fi/Adventure"
  },
  {
    title: "Anyone But You",
    image: "/movies/anyone.jpeg",
    rating: 6.2,
    genre: "Romance/Comedy"
  },
  {
    title: "Inception",
    image: "/movies/inception.jpeg",
    rating: 8.8,
    genre: "Sci-Fi/Action"
  },
  {
    title: "Poor Things",
    image: "/movies/poor.jpeg",
    rating: 7.9,
    genre: "Comedy/Sci-Fi"
  },
  {
    title: "10 Things I Hate About You",
    image: "/movies/things.jpeg",
    rating: 7.3,
    genre: "Comedy/Romance"
  }
];



interface Comment{
  avatar?: string;
  username: string;
  subtitles:string
  time: string;
  content: string;
  image?: string;
}






const Page = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>('All Time');
  
    const timeRanges: TimeRange[] = ['All Time', 'Last 24h', '7 Days', '30 Days'];
    
    const categories: Category[] = [
      { name: 'Movies', entries: 204, text: 'text-[#8AD056]', color: 'bg-[#8AD056]' },
      { name: 'TV Series', entries: 147, text: 'text-[#62A5F4]', color: 'bg-[#62A5F4]' },
      { name: 'Anime', entries: 141, text: 'text-[#885DE5]', color: 'bg-[#885DE5]' },
      { name: 'Drama', entries: 116, text: 'text-[#DB7F9F]', color: 'bg-[#DB7F9F]' },
      { name: 'Sport', entries: 108, text: 'text-[#CC6675]', color: 'bg-[#CC6675]' },
    ];
  
    const totalBookmarks = categories.reduce((sum, cat) => sum + cat.entries, 0);
    return (
      <div>
        <Navbar/>
        <div className="min-h-screen bg-black text-white p-8 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className=" text-5xl font-extrabold mb-12 text-center flex justify-center items-center gap-4">
          <span className="text-[#AAD0FF] ">Welcome Back</span>
          <img className='h-22' src="/other/sync8.svg "  />
          <span className="text-[#AAD0FF] ">Zaki</span>
        </div>

        {/* Stats Card */}
        <div className="rounded-xl backdrop-blur-sm p-8 mb-8  relative">
          <img src="/other/Background.svg" alt="" />
          <div className="text-center absolute sm:text-xl" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="sm:text-6xl text-3xl font-bold mb-2">{totalBookmarks}</div>
              <div className="text-gray-400 uppercase tracking-wider">Total Bookmarks</div>
          </div>
      </div>


        {/* Time Range Tabs */}
        <div className=' max-w-[500px] flex flex-col justify-self-center'>
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
        </div>


        <div className='flex justify-center w-full'>
          <Entries/>
        </div>
        {/* Categories */}
        
      </div>
      <TrendingMovies movies={movies} categorie="New Episodes / Releases" colore='text-white' Istitle={false} />
      
      <div className="min-h-screen text-white">
      <div className="container mx-auto max-w-2xl p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-6">
            <button className="text-blue-400 border-b-2 border-blue-400 pb-2">My Feed</button>
            <button className="text-gray-400 hover:text-white">Trending</button>
            <button className="text-gray-400 hover:text-white">Discover Media</button>
          </div>
          <button className="text-gray-400 hover:text-white">
            Sort by
          </button>
        </div>

        <div className=" rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-10 h-10 rounded-full mr-3"
            />
            <input
              type="text"
              placeholder="What's happening?"
              className="bg-black text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>

        <div>
          {comments.map((comment,index)=>(
            <FeedItems key={index} {...comment}/>
          ))}
        </div>

        

       
      </div>
    </div>
    </div>
      </div>
       

    );
}

export default Page;
/* 
 */