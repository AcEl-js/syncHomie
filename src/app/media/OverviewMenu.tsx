
"use client"
import React, { useState } from 'react';
import { Share } from 'lucide-react';

const OverviewMenu = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const menuItems = [
    'Overview',
    'User reviews',
    'Episodes',
    'Behind The Scenes', 
    'Trivia',
    'More like this'
  ];

  return (
    <div className=" text-white w-48 p-4 rounded-lg relative">
      <div 
        className="absolute left-0 top-0 w-1 bg-purple-500" 
        style={{
          height: '40px',
          top: `${menuItems.indexOf(activeItem) * 40 + 15}px`
        }}
      ></div>
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className={`py-2 pl-4 cursor-pointer ${
            activeItem === item 
              ? 'text-pink-500 font-bold' 
              : 'text-gray-400 hover:bg-gray-800'
          }`}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </div>
      ))}
      <div className="mt-4 flex items-center text-gray-400 hover:text-white cursor-pointer pl-4">
        <Share size={16} className="mr-2" />
        Share
      </div>
    </div>
  );
};

export default OverviewMenu;