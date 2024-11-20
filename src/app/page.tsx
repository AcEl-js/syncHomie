import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import TrendingMovies from '@/components/TrendingMovies';
import Moviescatego from '@/components/Moviescatego';



function App() {
  return (
    <div className="min-h-screen ">
       <div className='first-part'>
      <Navbar />
      <Hero />
      <Features />
     </div>
      <Reviews />
      <Moviescatego />
    </div>
  );
}

export default App;