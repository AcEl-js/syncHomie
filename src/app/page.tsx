'use client'
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import Moviescatego from '@/components/Moviescatego';
import Footer from '@/components/footer';



function App() {
  const reviews = [
      {
        name: "P O lane",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      },
      {
        name: "Tomas Name",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      },
      {
        name: "Achraf Name",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      }, {
        name: "Allan Name",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      },{
        name: "Achraf Name",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      }, {
        name: "Allan Name",
        content: "Lorem Ipsum",
        subtitle: "It's Always Sunny in Philadelphia"
      }
    ];

     const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
     
    
  return (
    
    <div className="min-h-screen w-screen ">
         <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />
       <div className='first-part w-screen'>
      <Hero />
      <Features />
     </div>
     
      <Reviews reviews={reviews} title='• Trending Reviews' />
      <Moviescatego />
      <Footer/>
    </div>
  );
}

export default App;