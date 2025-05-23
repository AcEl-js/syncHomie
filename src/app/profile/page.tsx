import React from 'react'
import { ArrowLeft } from 'lucide-react';
import Entries from '../releases/entries';
import Navbar from '@/components/Navbar';
import FeedItems from '../releases/feedItems';
import { Switch } from "@/components/ui/switch"
import "../discover/style.css"

interface Comment{
  avatar?: string;
  username: string;
  subtitles:string
  time: string;
  content: string;
  image?: string;
}

const comments:Comment[] =[
  {
    avatar : "/other/man2.jpeg",
    username:"SevyrX",
    subtitles:"Posted a review",
    time:"3h",
    content:"Absolute blast of a show! I’m buzzin’ for some mre episodes from this team <3",
    image:"/other/cover.png",
  },]

  

function App() {
    const categories = [
        { name: 'Movies', entries: 204, color: 'bg-green-400' },
        { name: 'TV Series', entries: 147, color: 'bg-blue-400' },
        { name: 'Anime', entries: 141, color: 'bg-purple-400' },
        { name: 'Drama', entries: 115, color: 'bg-pink-400' },
        { name: 'Sport', entries: 108, color: 'bg-red-400' }
      ];
    
      const genreScores = [
        { genre: 'Action', score: 16 },
        { genre: 'Drama', score: 3 },
        { genre: 'Comedy', score: 13 },
        { genre: 'Fantasy', score: 12 },
        { genre: 'Adventure', score: 12 }
      ];
  return (
    <div className='bg-black'>
      <Navbar/>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEC97B21] to-[#A33B3B00]flex flex-col items-center text-white min-h-screen p-4 mt-16 ">
        
        

        <div className='flex flex-col justify-center items-center '>
          {/* Header */}
        <div className="flex items-center mb-6 lg:w-[800px] sm:w-5/6">
          <ArrowLeft className="w-6 h-6 mr-3" />
          <div>
            <h1 className="text-xl font-semibold">SevyrX</h1>
            <p className="text-sm text-gray-400">Total Bookmarks: 45</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center">
            <Switch />
              <span className="ml-2 text-sm">Public Profile</span>
            </div>
          </div>
        </div>
        <div className='bg-white/10 lg:w-[800px]  py-10 px-8 rounded-xl mb-10 flex items-center justify-center '>
        
        <Entries/>

        </div>
  
        {/* Profile Section */}
        <div className="flex gap-6 lg:w-[800px]">
          {/* Left Column */}
          <div className="w-1/4 lg:relative bottom-16 left-2 ">
            <img  className="rounded-full w-36 h-36 object-cover border-4 border-[#17202A]  mb-4" src="/other/man2.jpeg" alt="Profile" />
            <h2 className="text-xl font-semibold mb-1">SevyrX</h2>
            <p className="text-sm text-[#8899A6]">Joined November 2024</p>
            <div className="text-sm text-gray-400 flex gap-2">
              <div className='flex gap-2 text-white'>569 <p className='text-[#8899A6]'> Following</p></div>
              <div className='flex gap-2 text-white'>72 <p className='text-[#8899A6]'> Followers</p></div>
            </div>
          </div>
  
          {/* Right Column */}
          <div className="w-1/12">
           
        </div>
  

            {/* Genre Scores */}

              <div>
                <div className=' grid  grid-cols-4'>
                    <div  className="gap-2">
                      <div className=" text-sm text-[10px] text-gray-400 font-bold">Comment Score</div>
                      <div className="text-2xl ">22</div>
                    </div>
                    <div  className="gap-2">
                      <div className=" text-sm text-[10px] text-gray-400 font-bold">Post Score</div>
                      <div className="text-2xl ">12</div>
                    </div>
                    <div>
                      <img src="/other/sync8.svg" alt="" />
                    </div>
                    <div className='w-28 h-10 flex items-center justify-center border border-[#1DA1F2] rounded-3xl '>
                      Follow
                    </div>
                    <div  className="gap-2">
                      <div className=" text-sm text-[10px] text-gray-400 font-bold">Review Score</div>
                      <div className="text-2xl ">9</div>
                    </div>
                    <div  className="gap-2">
                      <div className=" text-sm text-[10px] text-gray-400 font-bold">Quiz Score</div>
                      <div className="text-2xl ">55</div>
                    </div>

                </div>

                
                <div className="grid grid-cols-5 gap-4 mt-3">
                  {genreScores.map((genre) => (
                    <div key={genre.genre} >
                      <div className="text-sm text-gray-400">{genre.genre}</div>
                      <div className="text-2xl font-bold ">{genre.score}</div>
                    </div>
                  ))}
                </div>
                
              </div>
          </div>

          {/* Navigation Tabs */}
        <div className="mt-6 border-b border-gray-700">
          <div className="flex gap-6">
            <button className="px-4 py-2 text-gray-400 hover:text-white">Overview</button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">Comments (90)</button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">View Bookmarks (372)</button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">Submissions</button>
            <button className="px-4 py-2 text-gray-400 hover:text-white">Trivia Scores</button>
          </div>
        </div>
          <div className='w-[598px] mt-4 flex justify-center items-center self-center '>
            {comments.map((comment,index)=>(
              <FeedItems key={index} {...comment}/>
            ))}
        </div>

        </div>
  
        

      
        </div>
    </div>
      
    

  )
}

export default App
