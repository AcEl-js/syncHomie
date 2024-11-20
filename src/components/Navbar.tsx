import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0D0D1F] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src="logo.png" alt="SyncHomie" className="h-10" />
          <div className="space-x-6 text-gray-300 flex flex-row">
            <a href="#" className="hover:text-blue-400">Home</a>

            <a href="#" className="hover:text-blue-400 flex flex-row"> Discover</a>
            <a href="#" className="hover:text-blue-400">Calendar</a>
            <a href="#" className="hover:text-blue-400">People</a>
            <a href="#" className="hover:text-blue-400 flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v12.975q0 1.075-.9 1.663t-1.9.162z"/></svg>Bookmarks</a>
          </div>
        </div>
        <div className=' flex flex-row text-center gap-10 justify-center'>
          <div className=' flex self-center'>
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"/></svg>
          </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;