import Navbar from '@/components/Navbar';
import React from 'react';
import EpisodeList from './eposode-lists';

const App = () => {
    return (
        <div className='min-h-screen bg-black text-white '>
            <Navbar/>
            {/* header */}
            <div className="mb-6  px-4 py-6 pt-16 flex flex-col gap-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5498821] to-[#A33B3B00] ">
            <div className="flex pt-4 items-center gap-2 text-sm text-gray-400">
                <div className="flex items-center h-[42px] rounded-[10px] px-[18px] py-[8px] gap-[10px] bg-[#A3A3A3]/5 shadow-[0_1px_2px_0_#FFFFFF0D_inset]">
                <h1>Currently Watching </h1>
                <img src="/triangle.png" alt="" />
                </div>
            
            </div>

            <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-2xl font-medium text-[#C3C3C3]">It's Always Sunny in Philadelphia</h1>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>S16E01</span>
                <span>•</span>
                <span>The Gang Inflates</span>
                <span>•</span>
                <span>25min</span>
                </div>

                <div className="flex items-center gap-4">
                <div className="h-[42px] rounded-[10px] px-[18px] py-[8px] gap-[10px] bg-[#A3A3A3]/5 shadow-[0_1px_2px_0_#FFFFFF0D_inset]"> <span className=" bg-green-600 p-[2px] rounded-sm">79</span> Metascore</div>
                <div className="flex items-center h-[42px] rounded-[10px] px-[18px] py-[8px] gap-[10px] bg-[#A3A3A3]/15 shadow-[0_1px_2px_0_#FFFFFF0D_inset]">
                    <span className="text-yellow-400">★</span>
                    <span>8.9 IMDB</span>
                </div>
                <div className="flex items-center gap-1 h-[42px] rounded-[10px] px-[18px] py-[8px]  bg-[#A3A3A3]/15 shadow-[0_1px_2px_0_#FFFFFF0D_inset]">
                    <span className="text-yellow-400">★</span>
                    <span>8.7 JustWatch</span>
                </div>
                </div>
                <div className="flex gap-6 h-6 text-[#BCBCBC] text-[9.5px]">
                    <div className="flex items-center cursor-pointer bg-[#FFFFFF26] px-2 py-2 rounded-md">Funny 😂</div>
                    <div className="flex items-center cursor-pointer" >Interestion 🤔</div>
                    <div className="flex items-center cursor-pointer" >Infuriating 😠</div>
                    <div className="flex items-center cursor-pointer" >Sad 😢</div>
                </div>

            </div>
            <EpisodeList/>
            </div>
            
        </div>
    );
}

export default App;
