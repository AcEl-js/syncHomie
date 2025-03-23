import { ScrollArea } from "@/components/ui/scroll-area"
import { Import } from 'lucide-react'
import "./style.css"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

interface Show {
  date:string
  time: string
  duration: string
  title: string
  poster: string
  genre: string
  cast: string[]
  platforms: string[]
}

export default function StreamingCalendar() {
  const shows: Show[] = [
    {
      date: "October, 28th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/netflix.png", "./icons/hbo.jpeg"]
    },
    {
      date: "October, 28th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/disney.jpeg", "./icons/hulu.jpeg"]
    },
    {
      date: "October, 29th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/disney.jpeg","./icons/hbo.jpeg",]
    },
    {
      date: "October, 29th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/netflix.png", "./icons/disney.jpeg"]
    },
    {
      date: "October, 29th",
      time: "20h00",
      duration: "(CET+1)",
      title: "Venom: The Last Dance",
      poster: "/placeholder.svg?height=80&width=60",
      genre: "Action - Adventure - Fantasy",
      cast: ["Tom Hardy", "Juno Temple", "Alanna Ubach", "Andy Serkis"],
      platforms: ["./icons/hbo.jpeg","./icons/hulu.jpeg"]
    }
  ]

  return (
    <div className="w-full min-h-screen bg-black text-white mt-[65px]">
       <Navbar />
       <nav className=" p-4 border-b border-zinc-800 bg-black fixed w-screen top-[72px] z-40">
       <div className=" flex flex-row gap-3 p-2 text-center items-center ">
        <h3 className="text-lg">Calendar</h3>
        <span className="text-zinc-400">185 Upcoming Releases</span>
       </div>
        <div className="max-w-7xl mx-auto flex items-center ">
       <div className=" items-center gap-3 mr-14 flex ">
         <img src="./icons/Sparkle.png" alt="" />
         <span className="text-zinc-400  text-sm font-thin">For You</span>
         <div className=" bg-zinc-400 w-[1px] h-8 ml-4"/>
        </div>
          <div className="flex items-center space-x-6 sm:space-x-1">
            <Button variant="ghost" className="text-[#939393] hover:text-[#939393] hover:bg-zinc-800">
              <div className=" h-4 w-4 bg-[#C85684] rounded-full"/>
              TV Shows <span className=" text-zinc-400 hidden lg:flex">(341,392)</span>
            </Button>
            <Button variant="ghost" className="text-[#939393] hover:text-[#939393] hover:bg-zinc-800">
             <div className=" h-4 w-4 bg-[#4E253F] rounded-full"/>
              Movies <span className=" text-zinc-400 hidden lg:flex">(31,392)</span>
            </Button>
            <Button variant="ghost" className="text-[#939393] hover:text-[#939393] hover:bg-zinc-800">
             <div className=" h-4 w-4 bg-[#EDC884] rounded-full"/>
              Anime <span className=" text-zinc-400 hidden lg:flex">(118,382)</span>
            </Button>
            <Button variant="ghost" className="text-[#939393] hover:text-[#939393] hover:bg-zinc-800">
             <div className=" h-4 w-4 bg-[#83BAAB] rounded-full"/>
              Drama <span className=" text-zinc-400 hidden lg:flex">(41,032)</span>
            </Button>
            <Button variant="ghost" className="text-[#939393] hover:text-[#939393]  hover:bg-zinc-800">
            <div className=" h-4 w-4 bg-[#EC8164] rounded-full"/>
            Sports <span className=" text-zinc-400 hidden lg:flex">(551,902)</span>
            </Button>
          </div>
          
        </div>
      </nav>

      <div className="h-[calc(100vh-200px)] w-full pt-5  lg:ml-8 mt-[180px]">
        <div className="space-y-6">
          <div className="mb-4 bg-black pb-3">
            
            <div className="space-y-4 ml-2">
            {shows.map((show, index) => (
              <div
                key={index}
                className="mb-4 group w-auto" // Add a 'group' class for hover effects
              >
                {index === 0 || shows[index].date !== shows[index - 1].date ? (
                  <h2 className="text-white mb-4">{show.date}</h2>
                ) : null}
                <div className="flex rounded-lg overflow-hidden flex-row flex-1 hover:bg-zinc-800 transition">
                  <div className="min-w-[60px] text-sm text-gray-400 flex flex-col px-3 justify-center items-center">
                    <div>{show.time}</div>
                    <div>{show.duration}</div>
                  </div>
                  <img src="/movies/venom.png" alt="" />
                  <div>
                    <h3 className="font-semibold mb-1 h-full flex items-center px-3 text-wrap">
                      {show.title}
                    </h3>
                  </div>
                  <div
                    className={`flex gap-4 w-[3px] h-[70px] mx-7 self-center rounded-md ${
                      index % 2 === 0 ? 'bg-[#83BAAB]' : 'bg-[#C85684]'
                    }`}
                  />
                  <div
                    className={`gap-4 p-4 text-center rounded-md min-h-24  md:flex hidden ${
                      index % 2 === 0
                        ? 'border-l-8 border-[#83BAAB] bg-[#83baab61]'
                        : 'border-l-8 border-[#C85684] bg-[#C856842A]'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1">{show.genre}</div>
                      <div className="flex flex-wrap gap-2 lg:gap-8">
                        {show.cast.map((member, idx) => (
                          <span key={idx} className="text-sm text-gray-300">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {show.platforms.map((platform, idx) => (
                    <img
                      key={idx}
                      className="h-8 w-8 rounded-full self-center ml-4 mr-2"
                      src={platform}
                    />
                  ))}
                </div>
              </div>
))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

