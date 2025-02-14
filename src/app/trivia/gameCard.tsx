import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { useDragScroll } from '@/components/dragScrolling';

interface TriviaQuiz{
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
    likes: number;
    dislikes: number;
    IQ:string;
    level:string;

}

interface GameCardProps{
    triviaQuiz: TriviaQuiz[]
}

export default function GameCard({triviaQuiz}:GameCardProps) {
    const { containerRef, dragHandlers } = useDragScroll();
    return (
        <div ref={containerRef}
        className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar cursor-grab active:cursor-grabbing select-none ml-5"
        {...dragHandlers}>
            {triviaQuiz.map((trivia)=>(
                <div className=" min-w-[150px]  rounded-xl  p-3 text-white">
                <div className="space-y-2">
                <div className="text-xs text-blue-400 h-6 text-center">{trivia.title}</div>
                <div className="flex items-center justify-between text-sm">
                    <span>Multiple Choice</span>
                    <span>20Q</span>
                </div>
        
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-blue-500/30" />
                    <img
                    src={trivia.image}
                    className="h-full w-full object-cover border-2 rounded-lg border-white"
                    />
                    <div className="absolute inset-0 flex items-end justify-center text-base font-bold ">{trivia.level}</div>
                </div>
        
                <div className="space-y-1 text-[11px] text-gray-400">
                    <div># of plays</div>
                    <div>Submitted by</div>
                    <div>Taken by x friends</div>
                </div>
        
                <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                    <button className="hover:text-white flex items-center">
                        <ThumbsUp className="w-[14.25px] h[14.25px] mr-1" />
                        <span>16</span>
                    </button>
                    <button className="hover:text-white flex items-center">
                        <ThumbsDown className="w-[14.25px] h[14.25px] mr-1" />
                        <span>20</span>
                    </button>
                    <button className="hover:text-white flex items-center">
                        <MessageSquare className="w-[14.25px] h[14.25px] mr-1" />
                    </button>
                    
                    </div>
                    
                </div>
                </div>
            </div>
            ))}
        </div>
    )
  }
  
  