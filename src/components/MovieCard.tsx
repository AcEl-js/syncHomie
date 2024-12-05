import React from 'react';
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from 'lucide-react'

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
}

const MovieCard = ({ title, image, rating, genre }: MovieCardProps) => {
  return (
    <div className="min-w-[240px]  bg-[#0D0D1F]  rounded-lg overflow-hidden">
      <div className="relative group flex">
      <div className=' absolute right-2 top-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m10.692-5.75h.116c.893 0 1.648 0 2.25.092c.647.099 1.22.318 1.67.829c.437.497.612 1.108.694 1.794c.078.664.078 1.505.078 2.536v2.585c0 .74 0 1.35-.044 1.814c-.043.446-.137.958-.492 1.327a1.7 1.7 0 0 1-1.006.513c-.55.07-1.005-.231-1.331-.49c-.344-.274-.752-.68-1.237-1.163l-.032-.032a8 8 0 0 0-.49-.467a1 1 0 0 0-.097-.07a.1.1 0 0 0-.042 0a1 1 0 0 0-.097.07a8 8 0 0 0-.49.467l-.032.032c-.485.482-.893.889-1.237 1.162c-.326.26-.782.561-1.331.49a1.7 1.7 0 0 1-1.006-.512c-.355-.369-.45-.88-.492-1.327c-.044-.465-.044-1.074-.044-1.814V11.5c0-1.031 0-1.872.078-2.536c.082-.686.257-1.297.695-1.794c.45-.511 1.022-.73 1.67-.83c.6-.091 1.356-.091 2.25-.091m.043 9.264l-.001.001zM9.92 7.823c-.443.068-.634.183-.77.337c-.148.17-.266.428-.331.98c-.067.565-.068 1.317-.068 2.408v2.497c0 .79 0 1.327.037 1.713c.032.33.082.424.086.433a.2.2 0 0 0 .072.05c.036-.018.113-.062.243-.166c.27-.215.62-.562 1.146-1.085l.022-.021c.208-.207.4-.398.573-.54a1.7 1.7 0 0 1 .71-.374a1.6 1.6 0 0 1 .722 0c.294.067.523.22.71.373c.174.143.365.334.573.54l.022.022c.526.523.875.87 1.146 1.085c.13.104.207.148.243.166a.2.2 0 0 0 .072-.05c.004-.01.054-.104.086-.433c.036-.386.037-.923.037-1.713v-2.497c0-1.091-.001-1.843-.068-2.408c-.065-.552-.183-.81-.331-.98c-.136-.154-.327-.269-.77-.336c-.475-.073-1.114-.075-2.081-.075s-1.606.002-2.081.075" clipRule="evenodd"/></svg>
        </div>
        <img src={image} alt={title} className="w-full h-[350px] object-fill" />
        <div className="inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent ">
          <div className="absolute top-0 left-0 right-0 p-2 flex justify-center">
            <button className=" bg-[#1A1A2E] text-white p-2 w-32 rounded flex items-center justify-center gap-2 hover:bg-[#252538] transition-colors">
            <span className="text-md">Watch on </span>
            <img loading="lazy"  className='h-6' src="/icons/netflix.png" />
            </button>
         
          </div>
        </div>
      </div>
     
      <Card className="w-full h-full max-w-sm bg-zinc-900 text-white">
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl font-medium">{title}</h2>
              <Info className="w-6 h-6 text-zinc-400 ml-4" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
             
              <Switch />
              <span className="text-sm text-zinc-600 font-bold">Spoiler Off</span>
            </div>
          </div>
          
          <div className="text-sm text-zinc-400 flex justify-center">
            Episode 10 Released on 10/17
          </div>
          
          <div className="flex items-center gap-2 justify-center">
            <span className="text-pink-500">★</span>
            <span className="font-medium">{rating}/10</span>
            
          </div>
          
          <div className="grid gap-2 grid-cols-2 w-full justify-center items-center text-sm">
            <div className="flex items-center justify-center">
              <span>😂 45%</span>
            </div>
            <div className="flex items-center justify-center">
              <span>😮 20%</span>
            </div>
            <div className="flex items-center justify-center">
              <span>😢 20%</span>
            </div>
            <div className="flex items-center justify-center">
              <span>😡 15%</span>
            </div>
          </div>
        </CardContent>
      </Card>
 
    </div>
  );
};

export default MovieCard;