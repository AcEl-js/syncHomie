"use client"
import React from 'react';
import { useState,useEffect } from 'react';
const Heavyweight = () => {

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
  
  const formatTime = (value:number) => {
    return value < 10 ? `0${value}` : value;
  };
    return (
        <div>
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
                
        
        <div className="text-center text-lg font-bold bg-[#363636] h-11 flex items-center justify-around">
        
                      <div className="w-[68px] h-[30px] justify-center items-center text-[10px] text-black  flex bg-[#F29098] rounded-[8px] border border-[#E63946]">
                          <h1 className="bg-white rounded-[8px] h-[30px] w-[42.22px] border-y border-r border-[#E63946] flex justify-center items-center ">92.86%</h1>
                          <h1 className="text-center text-wrap text-[#1D3557] leading-3 ">Vote 39</h1>
                      </div>

                      <div className="w-[68px] h-[30px] justify-center items-center text-[10px] text-black  flex bg-[#F29098] rounded-[8px] border border-[#E63946]">
                          <h1 className="bg-white rounded-[8px] h-[30px] w-[42.22px] border-y border-r border-[#E63946] flex justify-center items-center  ">92.86%</h1>
                          <h1 className=" text-wrap text-[#1D3557]  leading-3 ">Vote 39</h1>
                      </div>
                     
        </div>

        </div>
    );
}

export default Heavyweight;
