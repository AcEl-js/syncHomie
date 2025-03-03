import React from 'react';
import { ArrowLeft, MapPin, Calendar, Radius as Stadium, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CommentSys from '@/components/CommentSys';
import FighterComparisonPage from './fighters';

interface MatchDetails {
  time: string;
  info: string;
  icon: string;

}

const matchesDetails: MatchDetails[] =[{
  time:'Nov 18',
  info:'START DATE',
  icon:"/icons/START.svg"
},{
  time:'AT&T Stadium',
  info:'STADIUM',
  icon:"/icons/STADIUM.svg"
},{
  time:'NFL',
  info:'START DATE',
  icon:"/icons/COMPETITION.svg"
},{
  time:'Houston Texans',
  info:'START DATE',
  icon:"/icons/AWAY.svg"
},{
  time:'Dallas Coxboys',
  info:'START DATE',
  icon:"/icons/HOME.svg"
},]

function StreamButton({ platform, quality, onWatch }: { platform: string; quality: string; onWatch: () => void }) {
  return (
    <div className="flex items-center h-[80px] justify-between bg-gray-800 p-4 rounded-lg ">
      <div className="flex items-center gap-3">
        <img 
          src={platform} 
          alt={`${platform} logo`}
          className="w-8 h-8 rounded"
         
        />
        <div>
          <span className="text-white font-medium">Live</span>
          <div className="text-gray-400 text-sm">Subs <span className='text-[#FBC500] '>{quality}</span></div>
        </div>
      </div>
      <button  className="bg-[#0B1014] rounded-full hover:bg-gray-600 text-white px-4 py-2 flex items-center gap-2">
        <img src="/icons/goldPlay.svg" alt="" />
        <span>Watch Now</span>
      </button>
    </div>
  );
}

function App() {
  const matchDetails = {
    event: "UFC Fight Night: Moreno vs. Albazi",
    date: "November 2, 2024",
    venue: "Rogers Place, Edmonton, Canada",
    competition: "NFL",
    homeTeam: "Dallas Cowboys",
    awayTeam: "Houston Texans",
    score: "3 - 1",
    status: "Full Time"
  };

  const handleWatch = () => {
    alert('Streaming service selected');
  };

  return (
   <div>
    <Navbar/>
    <div className="min-h-screen  bg-black text-white flex flex-col justify-center items-center mt-16">
      {/* Header */}
      <div className=" p-4 lg:w-[1000px] xl:w-[1354px]">
        <div className="container mx-auto flex mt-11">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <div className='text-nowrap ml-2'>
              <h1 className="text-xl font-bold">Derrick Lewis</h1>
              <p className="text-gray-400">VS</p>
              <h2 className="text-xl font-bold">Jhonata Diniz</h2>
            </div>
          </div>
          <div className=' bg-[#1C97FF26] w-full ml-5 p-3 flex gap-11'>
           <div>
           <h1 className='text-[#1C97FF] text-2xl font-semibold '>UFC Fight Night: Moreno vs. Albazi</h1>
            <p className=' text-[#6C6D6D] text-base'>November 2, 2024</p>
            <p className=' text-[#9C9D9D] text-base'>Rogers Place, Edmonton, Canada</p>
           </div>
           <div className='text-2xl'>
            <h1>Prelims</h1>
            <h1>ESPN+-3:00PM</h1>
           </div>
          </div>
        </div>
      </div>

      <div className='flex gap-5 my-5'>
      {matchesDetails.map((match,index)=>(
          <div key={index} className='flex justify-center items-center gap-3'>
            <div><img className='h-10 w-10' src={match.icon} alt="" /></div>
            <div className='text-base'>
              <h1 className='text-[#657182] '>{match.time}</h1>
              <h1>{match.info} </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Match Details */}
      <div className="container p-4 mx-10 flex justify-center flex-col">
     

        {/* Score Section */}
        <div className='flex justify-center w-full items-center flex-col mt-10 '>
              <div className='font-bold text-base flex gap-2'>
                <span className='text-[#78A6B8] font-bold'> NFL</span>
                <h1 className='text-[#657182] '> (Match day 11)</h1>
              </div>
              <div className='bg-[#2C5C70] p-3 px-2 rounded-lg flex justify-center items-center gap-3 my-3'>
                <img className='w-6' src="/icons/hulu.svg" alt="" />
                <h1 className='text-lg font-bold'>Watch highlights now</h1>
              </div>
            </div>
        <div className="flex justify-between items-center mb-12 mx-6 xl:w-[1154px] lg:w-[854px] gap-20 self-center  ">
          <div className="text-center">
            <div className="w-28 h-28 flex justify-center items-center bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="/sport/png.png"
                alt="Derrick Lewis"
                className=" object-cover  w-24 h-24 border-gray-500 rounded-full"
              />
            </div>
            <h3 className="font-semibold">Derrick Lewis</h3>
          </div>
          
          <div className="text-center ">
          
            <div className="text-gray-400">Nov 18</div>
            <div className="text-4xl font-bold mb-2">{matchDetails.score}</div>
            <div className="text-gray-400">{matchDetails.status}</div>
          </div>

          <div className="text-center">
          <div className="w-28 h-28 flex justify-center items-center bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="/sport/png.png"
                alt="Derrick Lewis"
                className=" object-cover  w-24 h-24 border-gray-500 rounded-full"
              />
            </div>
            <h3 className="font-semibold">Jhonata Diniz</h3>
          </div>
        </div>

       

        {/* Streaming Options */}
          <h3 className="text-lg font-semibold mb-4">Where to watch in</h3>
        <div className="space-y-2 grid gap-3 justify-center items-center grid-cols-1 lg:grid-cols-2">
          <StreamButton platform="/icons/hulu.svg" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="/icons/espn.svg" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="/icons/abc.svg" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="/icons/siling.svg" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="/icons/E.svg" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="/icons/fubu.svg" quality="HD" onWatch={handleWatch} />
        </div>
      </div>
    <CommentSys/>
    </div> 
    <FighterComparisonPage/>
   </div>
  );
}

export default App;