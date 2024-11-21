import React from 'react';
import { CodeBracketIcon, BookmarkIcon, UsersIcon, CalendarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import FeatureCard from './FeatureCard';


const Features = () => {
  const features = [
    {
      icon: <img className='h-auto w-full  ' src='/other/logos.png'/>,
      title: "Discover new media",
      description: "Discover new media and find out which platforms are streaming it now."
    },
    {
      icon: <img className='h-full w-full' src='/other/browser.png'/>,
      title: "Rhoubust API",
      description: "Rhoubust, and accessible API allowing anyone to embed and join the conversation"
    },
    {
      icon: <img className='h-full w-full' src='/other/chrome.png'/>,
      title: "Track media easily",
      description: "Track media easily with automated bookmarks using our Chrome extension"
    },
    {
      icon:  <img className='h-full w-full' src='/other/social.png'/>,
      title: "Social network system",
      description: "Social network system to keep track of what you think and share with your friends"
    },
    {
      icon: <img className='h-auto w-full' src='/other/calendar.png'/>, 
      title: "Calendar System",
      description: "Calendar System to allow you to stay on top of new releases, and be notified upon their release"
    },
    {
      icon:  <img className='h-full w-full' src='/other/book.png'/>,
      title: "Easy Import",
      description: "Easily import bookmarks from any platform for a consolidated list."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex justify-center">
      <div className="grid grid-cols-2 mt-11 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
export default Features;