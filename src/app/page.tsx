import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Reviews from '../components/Reviews';
import TrendingMovies from '@/components/TrendingMovies';
import Moviescatego from '@/components/Moviescatego';



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
  return (
    <div className="min-h-screen w-screen ">
      <Navbar />
       <div className='first-part w-screen'>
      <Hero />
      <Features />
     </div>
     
      <Reviews reviews={reviews} title='• Trending Reviews' />
      <Moviescatego />
    </div>
  );
}

export default App;