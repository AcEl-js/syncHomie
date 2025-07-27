'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Bookmark,
  ChevronDown,
  CircleArrowRight,
  CircleArrowLeft,
  Download,
  ThumbsDown,
  ThumbsUp,
  Upload,
  CircleAlert,

} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger  } from "@/components/ui/dropdown-menu"
import {Checkbox} from "@/components/ui/checkbox"
import Navbar from "@/components/Sidebar"
import CommentCard from "@/components/CommentCard"
import {useState,useRef,useEffect } from "react"
import SubtitesSelector from "./SubtitlesSelector"
import CommentSys from "@/components/CommentSys"
import Sidebar from "@/components/Sidebar"


const comments = [
  {
    episodeId: "S15E8",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
  {
    episodeId: "S15E19",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
  {
    episodeId: "S15E21",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },{
    episodeId: "S15E10",
    comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
    showTitle: "It's Always Sunny in Philadelphia"
  },
];

export default function Page() {
  const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    
      const startDragging = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
      };
    
      const stopDragging = () => {
        setIsDragging(false);
      };
    
      const drag = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
      };
    
      const [isScrollable, setIsScrollable] = useState(false);
    
      useEffect(() => {
        const checkScrollable = () => {
          if (scrollContainerRef.current) {
            setIsScrollable(
              scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
            );
          }
        };
    
        checkScrollable();
        window.addEventListener('resize', checkScrollable);
    
        return () => {
          window.removeEventListener('resize', checkScrollable);
        };
      }, []);
    
      const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current && !isAnimating) {
          setIsAnimating(true);
          
          const container = scrollContainerRef.current;
          const cardWidth = (container.querySelector('.review-card') as HTMLElement)?.offsetWidth || 350;
          const gap = 24;
          const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
          const startPosition = container.scrollLeft;
          const targetPosition = startPosition + scrollAmount;
          
          let startTime: number | null = null;
          const duration = 800; // Animation duration in milliseconds
          
          function animate(currentTime: number) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother animation
            const easeInOutCubic = (t: number) => 
              t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            
            const currentPosition = startPosition + (targetPosition - startPosition) * easeInOutCubic(progress);
            container.scrollLeft = currentPosition;
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setIsAnimating(false);
            }
          }
          
          requestAnimationFrame(animate);
        }
      };
  
      const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  return (
    <div className="min-h-screen bg-black text-white">
       <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
      <div className="container  px-4 py-6  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEC97B21] to-[#A33B3B00]">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
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
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-[350px,1fr]">
          <div>
           <img src="/other/epi.png" 
           alt="" 
           width={350}
           height={200}
           className="rounded-lg"/>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium">Overview</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Show Spoilers</span>
                  <Switch />
                </div>
              </div>

              <p className="text-gray-300">
                Dennis and Mac get into inflatable furniture to deal with the real inflation, while Dee tries to find a
                place to crash after being evicted by her greedy landlord and Charlie wants to pitch Frank his
                crypto/online investment idea. And in this inflation episode everything gets bigger - Dee's desperation,
                Mac's lips, and even Charlie's apartment!
              </p>
            </div>

            <div className="space-y-4">
             
              <SubtitesSelector/>

              
            </div>

            <div className="flex flex-wrap gap-4">
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
                <DropdownMenuContent>
                  <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
                  <DropdownMenuItem>Add to Favorites</DropdownMenuItem>
                  <DropdownMenuItem>Add to Custom List</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-6 ite text-[#BCBCBC]">
            <div className="flex items-center cursor-pointer bg-[#FFFFFF26] px-2 py-2 rounded-md">Funny 😂</div>
            <div className="flex items-center cursor-pointer" >Interestion 🤔</div>
            <div className="flex items-center cursor-pointer" >Infuriating 😠</div>
            <div className="flex items-center cursor-pointer" >Sad 😢</div>
          </div>
            </div>
          </div>
        </div>

        {/* Trending Comments */}
        <div className="mt-8">
            <h2 className="text-xl font-medium">Trending Comments</h2>
            <div className="flex items-center gap-2">
             
          <div className="mb-4 flex items-center justify-between w-screen">
              <div className="flex gap-6 ite text-[#BCBCBC] my-2">
                <div className="flex items-center cursor-pointer bg-[#FFFFFF26] px-2 py-2 rounded-md" >Funniest 😂</div>
                <div className="flex items-center cursor-pointer " >Most Interesting 🤔</div>
                <div className="flex items-center cursor-pointer " >Most Rage Inducing 😠</div>
                <div className="flex items-center cursor-pointer " >Saddest 😢</div>
              </div>
              <div className=" flex ">
                {isScrollable && (
                <div className="flex gap-2 items-center  rounded-[10px] px-[18px] py-[8px]  bg-[#A3A3A30D] shadow-[0_1px_2px_0_#FFFFFF0D_inset]">
                  <button
                    onClick={() => scroll('left')}
                    
                  >
                    <CircleArrowLeft className="text-[#79797989]"/>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    
                  >
                    <CircleArrowRight className="  text-[#797979]"/>
                  </button>
                </div>
              )}
              </div>
    
            </div>
          </div>
          <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing mt-16"
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={drag}
        >
          {comments.map((comment, index) => (
            <div key={index} className="bg-[#2C2737] p-4 rounded-lg min-w-[440px]">
            <p className="text-gray-200 text-sm mb-2">{comment.comment}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className="text-[#E4A5EE] text-sm">{comment.episodeId}</span>
            </div>
            <p className="text-gray-400 text-sm">{comment.showTitle}</p>
            <div className=" flex items-center py-2" >
              <Button className="bg-[#2C2737] ">
                  <CircleAlert  className=" h-[22px] w-[22px] " />
              </Button >
              <Button className="bg-[#2C2737] ">
                    <ThumbsUp className="h-6 w-6" />
              </Button >
              <Button className="bg-[#2C2737] ">
                    <ThumbsDown className="h-6 w-6" />
              </Button >
              <Button className="bg-[#2C2737] ">
                    <img src="/ArrowBend.svg" className="" />
              </Button >
            </div>
            <div className="flex  text-[#BCBCBC] text-xs gap-2">
            <div className="flex items-center cursor-pointer bg-[#FFFFFF26] px-2 py-2 rounded-md " >Funniest 😂</div>
            <div className="flex items-center cursor-pointer " >Most Interesting 🤔</div>
            <div className="flex items-center cursor-pointer " >Most Rage Inducing 😠</div>
            <div className="flex items-center cursor-pointer " >Saddest 😢</div>
          </div>
          </div>
          ))}
        </div>
        </div>
        <CommentSys/>
      </div>
    </div>
  )
}

