import Navbar from '@/components/Navbar';
import React from 'react';
import EpisodeList from './eposode-lists';
import "./style.css"
import OverviewMenu from './OverviewMenu';
import { Button } from '@/components/ui/button';
import { Bookmark, ChevronDown, Star, ChevronLeft, ChevronRight  } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import Reviews from '@/components/Reviews';

const App = () => {
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
             <div>
                <div className=' lg:grid grid-container'>
                    <img className='grid-img1' src="/movies/always.png" alt="" />
                    <div className=' flex relative grid-img2'>
                        <img  className=' ' src="https://www.figma.com/file/doFTVNXU6JS5vkDwViNO0x/image/35432983b9e7fab5da1fe629c93460840cef9c2f" alt="" />
                        <div className=' absolute top-4 right-4 flex gap-4'>
                        <Button variant="secondary" className="gap-2 h-[42px] rounded-[10px] px-[18px] py-[8px]  bg-[#A3A3A3]/30 shadow-[0_1px_2px_0_#FFFFFF0D_inset] text-white"><Star/>Rate </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="default" className="bg-[#F5C518] text-black hover:bg-yellow-600 h-11">
                                <Bookmark className="mr-2 h-4 w-4" />
                                <span>•</span>
                                Add to Bookmark
                                <div className="h-[29px] w-[1px] bg-[#08080829] "/>
                                <ChevronDown/>
                            </Button>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                        </div>
                        <div className=' flex items-center px-2 h-10 gap-2 absolute bottom-3 left-5 cursor-pointer rounded-xl bg-[#A3A3A326] '>
                            <img src="/play.svg" alt="" />
                            <h2 className=' text-[#C3C3C3] '>Trailer</h2>
                            <span className=' text-[#797979]'>•  00:31</span>
                         
                        </div>
                        <div className=' flex items-center absolute bottom-3 right-5 gap-3'>
                            <div className=' rounded-full flex justify-center items-center cursor-pointer h-10  w-10 bg-[#A3A3A3]/5 '>
                                <ChevronLeft/>
                            </div>
                            <div className=' rounded-full flex justify-center items-center cursor-pointer h-10 w-10 bg-[#A3A3A326]  '>
                                <ChevronRight/>
                            </div>
                        
                        </div>
                        
                    </div>
                    <div className=' lg:flex hidden'>
                    <OverviewMenu />
                    </div>
                    <div className='grid grid-cols-3 grid-rows-2 col-span-4'> 
                        <div className='flex watch-item1'>
                            <span className='text-[#F5C518] '>•</span>
                            <h1>Watch On</h1>
                        </div>

                        <div className='flex gap-2 watch-item2'>
                            <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>
                                <img 
                                src="./icons/netflix.png" 
                                alt="Netflix" 
                                className="h-11 rounded-full" 
                                />
                                </div>
                                <div className=' transition-transform duration-300 hover:scale-110  hover:brightness-110 cursor-pointer'>
                                <img 
                                src="./icons/hbo.jpeg" 
                                alt="HBO" 
                                className="h-11 rounded-full transition-transform duration-300 hover:scale-125 hover:brightness-110 cursor-pointer" 
                                />
                            </div>
                        </div>

                        
                        <div className=' watch-item3 flex items-center gap-4'>
                            <h3>Plot</h3>
                            <p>Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.</p>
                        </div>

                        <div className='watch-item4 flex items-center gap-4'>
                            <h3>Genre</h3>
                            <div className='flex gap-1 '>
                                <div className=' h-9 px-3 flex rounded-xl items-center bg-[#A3A3A326]'> Comedy</div>
                                <div className=' h-9 px-3 flex rounded-xl items-center bg-[#A3A3A326]'> Adventure</div>
                            </div>
                        </div>

                    </div>
                </div>
             </div>
             <Reviews  reviews={reviews} title='•  User Reviews' />
            <EpisodeList/>
            </div>
           
        </div>
    );
}

export default App;
