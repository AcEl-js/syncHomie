"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-gradient-to-b from-[#282453] to-black p-4 fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto ">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          {/* Left side with logo and nav items */}
          <div className="flex items-center h-5/6">
            <img src="./logo.svg" alt="SyncHomie" className="h-10" />
            
            {/* Navigation items - hidden on mobile */}
            <div className="hidden sm:flex ml-8 sm:space-x-5 lg:space-x-14 text-gray-300">
              <Link href="/" className='hover:text-blue-400' >Home</Link>
              <Link href="/people" className='hover:text-blue-400' >People</Link>
              <Link href="/discover" className='hover:text-blue-400' >Discover</Link>
              <Link href="/calendar" className='hover:text-blue-400' >Calendar</Link>
              <Link href="/bookmarks" className='hover:text-blue-400 flex items-center gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z"/>
                </svg>
                Bookmarks
              </Link>
            </div>
          </div>

          {/* Right side with search and sign up */}
          <div className="flex items-center gap-4">
            {/* Search icon */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path fill="white" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"/>
              </svg>
            </div>

            {/* Sign Up button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </button>

            {/* Hamburger menu button - only visible on mobile */}
            <button 
              onClick={toggleMenu}
              className=" text-gray-300 hover:text-blue-400 sm:hidden lg:hidden  max-500:flex "
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - slides down when hamburger is clicked */}
        <div className={`
          max-500:hidden 
          ${isMenuOpen ? 'block' : 'hidden'}
          pt-4 mt-4 border-t border-gray-700
        `}>
          <div className="flex flex-col space-y-4 text-gray-300">
          <Link href="/" className='hover:text-blue-400' >Home</Link>
              <Link href="/people" className='hover:text-blue-400' >People</Link>
              <Link href="/discover" className='hover:text-blue-400' >Discover</Link>
              <Link href="/calendar" className='hover:text-blue-400' >Calendar</Link>
              <Link href="/bookmarks" className='hover:text-blue-400 flex items-center gap-1' >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z"/>
                </svg>
                Bookmarks
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;