import Navbar from '@/components/Navbar';
import React from 'react';
import EpisodeList from './eposode-lists';
import "./style.css"
import OverviewMenu from './OverviewMenu';
import { Button } from '@/components/ui/button';
import { Bookmark, ChevronDown, Star, ChevronLeft, ChevronRight  } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Reviews from '@/components/Reviews';

import Image from "next/image"
import Footer from '@/components/footer';
import CommentSys from '@/components/CommentSys';


interface Show {
  title: string
  rating: number
  image: string
}

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

      let array = new Array(4).fill(4)
    return (
        <div className='min-h-screen  bg-black text-white '>
            <Navbar/>
            {/* header */}
            <div className="mb-6 pl-5  px-4 py-6 pt-16 flex flex-col gap-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5498821] to-[#A33B3B00] ">
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
                    <img className='grid-img1 rounded-md' src="/movies/always.png" alt="" />
                    <div className=' flex relative grid-img2'>
                        <img  className=' rounded-md' src="https://www.figma.com/file/doFTVNXU6JS5vkDwViNO0x/image/35432983b9e7fab5da1fe629c93460840cef9c2f" alt="" />
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
                            
                            <h1 className='text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Watch On</h1>
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
             <Reviews  reviews={reviews} title='• User Reviews' />

             <h1 className='text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Season 1: 12/12 Episodes Released</h1>

            <EpisodeList/>
            </div>

            <div>
            <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Trivia </h1>
            <div className='grid grid-cols-5 ml-4'>
              <div className='col-span-2 flex justify-center items-center'><h1 className='text-5xl text-white'>Are you a True Fan? 😎</h1></div>
              <div className='md:flex justify-center items-center hidden'><img src="./other/corn.svg" /></div>
              <div className='bg-[#020426B2] flex flex-col justify-center items-center gap-4 w-[392px] h-[220px] border relative top-6 right-16 px-4 py-8 border-[#E318F5] rounded-lg  '>
                <div className='fles justify-center items-center ' >
                  <h1 className='text-center'>Submit The Good Place Trivia!</h1>
                  <p className='text-[#737373]'>Use your knowledge to test your peers </p>
                  </div>
                <div className=' flex gap-5 justify-center'>
                  {array.map((item,index)=>(
                    <div key={index} className='flex items-center flex-col'>

                      <div className='text-gray-500 overflow-hidden border-2 border-[#E318F5] w-11 h-11 rounded-full flex justify-center flex-col '>
                        <img src="https://s3-alpha-sig.figma.com/img/e48b/0cb2/7a06bddc2dfe414eb8cbf0b8bbcbb44b?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rvj3RAJVV3wQ0lyDnk4kk53ap9dmaPnGbxuueDXPkq7E0OpT9aEHU1ldu2hXM71jAJ-ZyROfQNA7cXHbd4qXuzXRWnXsCXuNJmbur~moOU-udiETJyY7uGVejdrYxNRnzIu6zWD3OcY8wendZYt6Mxius4q8EVURaL7cvrxMl9qtFe7C20ezY8qmLLnYJ7JWmc81sPlQW-nQoZCN22ypdC2wrs1QGuddpIwBzyOyKMvl8fzSnsKHMalUlXUhInghNT4Q9xa03jZN8-J778bQDMyWksUZgQq6YyQPjmr7HIjrydK5qbU2WDi6NpPHKpQK3nWr0V8mW1vOaSWqNp93pw__" alt="" />
                      </div>
                      ?
                    </div>
                  ))}
                </div>
                <div className=' rounded-full w-full h-11 py-2 bg-[#B02EBC] flex justify-center items-center '>Submit Trivia Question</div>
              </div>
            </div>
            </div>

            <CommentSys/>

        {/*  Behind The Scenes */}
   

            <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Behind The Scenes </h1>
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
                    
                    <span className="ml-1 text-sm text-gray-400">Charlie</span>
                </div>
                </div>
            </div>
            ))}
            
            
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6  ">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-[#D8C882] text-base my-5">
            <strong className='text-[#797979]'>Official Name:</strong>Charlie Peckham Day
        </p>
        <p className="text-[#D8C882] text-base my-5">
            <strong className='text-[#797979]'>Born:</strong> June 28, 1991, San Jose, Costa Rica
        </p>
        <p className="text-[#D8C882] text-base my-5">
            <strong className='text-[#797979]'>Height:</strong> 59" (1.75 cm)
        </p>
        <p className="text-[#D8C882] text-base my-5">
            <strong className='text-[#797979]'>Parents:</strong> Daniel Day
        </p>
        <p className="text-[#D8C882] text-base my-5">
            <strong className='text-[#797979]'>Awards:</strong> Top Rated Serie #102 Nominations
        </p>
    </div>

            </div>
            <h1 className=' text-2xl font-semibold text-gray-200 mb-8 ml-4'><span className='text-[#F5C518] '>•</span> Media </h1>


            <div className="w-full bg-black  text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6 justify-between">
       
          <Tabs defaultValue="popular" className="w-full flex justify-between">
            <TabsList className="bg-transparent border-b text border-neutral-800 w-full justify-center h-auto p-0 gap-6">
              <TabsTrigger
                value="popular"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-black text-neutral-400 h-auto bg-transparent"
              >
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="backdrops"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Backdrops
              </TabsTrigger>
              <TabsTrigger
                value="posters"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
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
                src="https://s3-alpha-sig.figma.com/img/3fc8/7243/333eceac0409db8fcd7bdfe9e1df4204?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=G2LNjxyezgxi7auBc~ZSbS-pXuMdsHR8Z~BA3flX0Mu0WzHWe-hteb04mjJcVpL0MDikXmBEdLbNGr7~LHDpxwueT4QwYe9yo8TWsKG~xZz75BAWZdCJezEoqPveE2vWrBd-Cbya8HAZRAxEhx7b83PDjlvlJWlmD6t5xD6yHeE8kHQ6fzjKrPUF0fVzYtH~CtFgTmyWaG6E6sr~fTCQ3njYIr2FokCiChldbxJFelxZjP8taaMuItYk0O5PO8Rm8MvapSbNo1S~Ch~qflgLJiK8plF6wvTOv~h9MxpB2HHxnjJrA6UojT2tYipxc9QfR1a0SJwU1J7SmzikvprARw__"
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
    );
}

export default App;
