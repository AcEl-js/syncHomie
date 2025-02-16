import { Button } from '@/components/ui/button';
import { MessageSquare, Play, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react';

interface Comment{
    avatar?: string;
    username: string;
    subtitles:string
    time: string;
    content: string;
    image?: string;
  }
  
  const reactions = [
      { name: 'Funny', emoji: '😂' },
      { name: 'Interesting', emoji: '🤔' },
      { name: 'Infuriating', emoji: '😠' },
      { name: 'Sad', emoji: '😢' }
    ]

const FeedItems = ({avatar,username,subtitles,time,content,image}:Comment) => {

    return (
        <div className=" rounded-lg p-4 mb-4">
        <div className="flex items-center mb-4">
          <img src={avatar} alt={username} className="w-10 h-10 rounded-full mr-3" />
          <div className='flex gap-3 items-center text-[#8899A6] '>
            <h3 className="text-white font-semibold">{username}</h3>
            <h2>{subtitles}</h2>
            <span className=" text-sm">{time}</span>
          </div>
        </div>
        <p className="text-gray-200 mb-4">{content}</p>
        {image && (
          <div className="relative mb-4 rounded-lg overflow-hidden border border-[#8899A6]">
            <img src={image} alt="Post content" className="w-full h-auto " />
            {image.includes('trivia') && (
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-6 py-2 rounded-full flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Play
              </button>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between text-gray-400">
          <div className="flex space-x-4">
            <button className="hover:text-white flex items-center">
              <ThumbsUp className="w-5 h-5 mr-1" />
            </button>
            <button className="hover:text-white flex items-center">
              <ThumbsDown className="w-5 h-5 mr-1" />
            </button>
            <button className="hover:text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-1" />
            </button>
            <button className="hover:text-white flex items-center">
              <Share2 className="w-5 h-5 mr-1" />
            </button>
          </div>
          <div className="flex gap-2 my-4">
          {reactions.map((reaction) => (
            <Button
              key={reaction.name}
              variant="secondary"
              size="sm"
              className="bg-[#2a2f3b] hover:bg-[#3a3f4b] text-gray-300"
            >
              {reaction.emoji} {reaction.name}
            </Button>
          ))}
        </div>
          
        </div>
      </div>
    );
}



export default FeedItems;
