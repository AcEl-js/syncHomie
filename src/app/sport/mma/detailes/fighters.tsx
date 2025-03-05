"use client"
import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const FighterComparisonPage = () => {
  const [time, setTime] = useState({ hours: 1, minutes: 37, seconds: 8 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;
        
        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        
        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'HEIGHT', fighter1: "5'5\"", fighter2: "5'5\"" },
    { label: 'WEIGHT', fighter1: "126 lbs", fighter2: "126 lbs" },
    { label: 'AGE', fighter1: "30", fighter2: "31" },
    { label: 'REACH', fighter1: "70\"", fighter2: "68\"" },
    { label: 'STANCE', fighter1: "Orthodox", fighter2: "Orthodox" },
    { label: 'SIG STR LPM', fighter1: "3.87", fighter2: "2.80" },
    { label: 'SIG STR ACC', fighter1: "59.66%", fighter2: "48.57%" },
    { label: 'TD AVG', fighter1: "1.74", fighter2: "1.71" },
    { label: 'TD ACC', fighter1: "46.88%", fighter2: "33.33%" },
    { label: 'SUB AVG', fighter1: "0.46", fighter2: "0.73" }
  ];

  const formatTime = (value:number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className=" text-white h-screen flex flex-col mx-10 ">
      {/* Event header */}
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
      <div className="rounded-lg">
        <div className="text-center text-lg font-bold bg-[#363636] h-11 flex items-center justify-center">Heavyweight</div>
        
       
       
        
        {/* Fighter names row */}
        <div className="flex justify-between px-4  bg-[#191919] py-4">
          <div className="flex items-center">
            <div>
              <div className="font-bold">Derrick Lewis</div>
              <div className="text-sm text-gray-400">8-0-0</div>
            </div>
            <img 
                src="/sport/png.png"
                alt="Derrick Lewis"
                className=" object-cover  w-16 h-16 border-gray-500 rounded-full"
              />          </div>

           {/* Timer row */}
        <div className="flex justify-center items-center bg-[#191919]">
          <div className="flex flex-col items-center mx-6">
            <div className="text-sm text-gray-400">ESPN+</div>
            <div className="flex space-x-1 text-xl font-bold">
              <span>{time.hours}</span>
              <span className="opacity-50">:</span>
              <span>{formatTime(time.minutes)}</span>
              <span className="opacity-50">:</span>
              <span>{formatTime(time.seconds)}</span>
            </div>
            <div className="flex text-xs text-gray-400">
              <span className="w-8 text-center">Hours</span>
              <span className="w-12 text-center">Minutes</span>
              <span className="w-12 text-center">Seconds</span>
            </div>
          </div>
        </div>
          
          <div className="flex items-center">
          <img 
                src="/sport/png.png"
                alt="Derrick Lewis"
                className=" object-cover w-16 h-16 border-gray-500 rounded-full"
              />            <div className="text-right">
              <div className="font-bold">Jhonata Diniz</div>
              <div className="text-sm text-gray-400">8-0-0</div>
            </div>
          </div>
        </div>
        
       
      
      
      {/* Header tabs */}
      <div className="flex w-full border-b border-gray-700">
        <div className="w-1/2 bg-gray-800 py-3 text-center">
          Tale of the tape
        </div>
        <div className="w-1/2 py-3 text-center">
          Fight Odds
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Left fighter */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          <img 
            src="/api/placeholder/150/280" 
            alt="Fighter 1" 
            className="mb-2"
          />
          <div className="bg-green-700 w-20 h-3 rounded-sm"></div>
        </div>

        {/* Stats comparison */}
        <div className="w-1/2 flex flex-col justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex py-1">
              <div className="w-1/3 text-right pr-4">{stat.fighter1}</div>
              <div className="w-1/3 text-center font-bold text-gray-400">{stat.label}</div>
              <div className="w-1/3 pl-4">{stat.fighter2}</div>
            </div>
          ))}
        </div>

        {/* Right fighter */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          <img 
            src="/api/placeholder/150/280" 
            alt="Fighter 2" 
            className="mb-2"
          />
          <div className="bg-white w-20 h-3 rounded-sm"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FighterComparisonPage;