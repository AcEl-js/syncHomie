import React from 'react';
import TrendingMovies from './TrendingMovies';
import CommentCard from './CommentCard';


const comments = [
    {
      episodeId: "19",
      comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
      showTitle: "It's Always Sunny in Philadelphia"
    },
    {
      episodeId: "19",
      comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
      showTitle: "It's Always Sunny in Philadelphia"
    },
    {
      episodeId: "19",
      comment: "Funny episode, kinda makes you rethink a lot. Like what? If we're all connected to one super mega-consciousness!",
      showTitle: "It's Always Sunny in Philadelphia"
    }
  ];

  const movies = [
    {
      title: "The Wolf of Wall Street",
      image: "/movies/wolf.jpeg",
      rating: 8.2,
      genre: "Crime/Drama"
    },
    {
      title: "Interstellar",
      image: "/movies/interstellar.jpeg",
      rating: 8.7,
      genre: "Sci-Fi/Adventure"
    },
    {
      title: "Anyone But You",
      image: "/movies/anyone.jpeg",
      rating: 6.2,
      genre: "Romance/Comedy"
    },
    {
      title: "Inception",
      image: "/movies/inception.jpeg",
      rating: 8.8,
      genre: "Sci-Fi/Action"
    },
    {
      title: "Poor Things",
      image: "/movies/poor.jpeg",
      rating: 7.9,
      genre: "Comedy/Sci-Fi"
    },
    {
      title: "10 Things I Hate About You",
      image: "/movies/things.jpeg",
      rating: 7.3,
      genre: "Comedy/Romance"
    }
  ];

const Moviescatego = () => {
    return (
        <div className='px-6'>
            <div className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-200">• Trending Comments</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-[#1A1A2E] flex items-center justify-center">
                <span className="text-gray-400">←</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-[#1A1A2E] flex items-center justify-center">
                <span className="text-gray-400">→</span>
              </button>
            </div>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar">
            {comments.map((comment, index) => (
              <CommentCard key={index} {...comment} />
            ))}
          </div>
        </div>

        <div className="my-20 text-center ">
          <h3 className="text-xl font-semibold mb-6 text-white">Register to select your Streaming Services</h3>
          <div className=' lg:flex gap-16 justify-center h-12'>
          <div className="flex justify-center space-x-4 mb-8 gap-8">
            <img src="./icons/netflix.png" alt="Netflix" className="h-11 lg:h rounded-full" />
            <img src="./icons/hbo.jpeg" alt="HBO" className="h-11 lg:h rounded-full" />
            <img src="./icons/hulu.jpeg" alt="Hulu" className="h-11 lg:h rounded-full" />
            <img src="./icons/disney.jpeg" alt="Disney+" className="h-11 lg:h rounded-full" />
          </div>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Register Now
          </button>
          </div>
        </div>
            <TrendingMovies movies={movies} categorie={"Movies"}/>
            <TrendingMovies movies={movies} categorie={"TV Shows"}/>
            <TrendingMovies movies={movies} categorie={"Anime"}/>
            <TrendingMovies movies={movies} categorie={"Drama"}/>

            <div className="mt-20 text-center pb-16">
          <h2 className="text-4xl font-semibold mb-8 text-white">Start Tracking What You Watch</h2>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
              <img src="/google.png" alt="Google" className="w-10 h-10" />
              Sign up with Google
            </button>
            <button className=" flex items-center gap-2 bg-[#93AFC7] text-black px-6 py-3 rounded-md hover:bg-[#a3b5c3] transition-colors">
            <svg className=' relative bottom-[3px]' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="M16 112v384h480V112Zm220.8 229.6a32.17 32.17 0 0 0 38.4 0l23.467-17.6L464 448v16H48v-16l165.333-124ZM256 316L48 160v-16h416v16ZM48 200l138.667 104L48 408Zm416 208L325.333 304L464 200Z"/></svg>
              Sign up with Email
            </button>
          </div>
        </div>
            <footer className="border-t border-gray-800  py-20 px-2 mt-16 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo.png" alt="SyncHomie" className="h-8" />
              <p className="text-gray-400 text-sm">Copyrights © 2024. All rights reserved by SyncHomie.com</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              <div className="flex items-center gap-4 ml-6">
                <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M5.077 9.457c0-.778.136-1.513.404-2.199a5.63 5.63 0 0 1 1.121-1.802a7.614 7.614 0 0 1 1.644-1.329a7.513 7.513 0 0 1 2.002-.844a8.57 8.57 0 0 1 2.185-.281c1.139 0 2.199.241 3.182.721a6.021 6.021 0 0 1 2.391 2.094c.614.915.919 1.95.919 3.104c0 .692-.068 1.369-.207 2.031a8.28 8.28 0 0 1-.646 1.913a6.605 6.605 0 0 1-1.082 1.617a4.723 4.723 0 0 1-1.568 1.114a4.962 4.962 0 0 1-2.045.417c-.489 0-.977-.115-1.459-.346c-.482-.23-.828-.546-1.036-.951c-.073.281-.173.687-.306 1.218c-.128.53-.214.872-.252 1.027c-.04.154-.114.411-.222.767a5.183 5.183 0 0 1-.281.769l-.344.674a7.98 7.98 0 0 1-.498.838c-.181.262-.405.575-.672.935l-.149.053l-.099-.108c-.107-1.133-.162-1.811-.162-2.035c0-.663.079-1.407.235-2.233c.153-.825.395-1.862.72-3.109c.325-1.246.511-1.979.561-2.196c-.229-.467-.345-1.077-.345-1.827c0-.599.187-1.16.562-1.688c.376-.526.851-.789 1.427-.789c.441 0 .783.146 1.028.439c.246.292.366.66.366 1.109c0 .476-.158 1.165-.476 2.066c-.318.902-.476 1.575-.476 2.022c0 .453.162.832.486 1.129a1.68 1.68 0 0 0 1.179.449c.396 0 .763-.09 1.104-.271a2.46 2.46 0 0 0 .849-.733a6.123 6.123 0 0 0 1.017-2.225c.096-.422.17-.823.216-1.2c.049-.379.07-.737.07-1.077c0-1.247-.396-2.219-1.183-2.915c-.791-.696-1.821-1.042-3.088-1.042c-1.441 0-2.646.466-3.611 1.401c-.966.932-1.452 2.117-1.452 3.554c0 .317.048.623.139.919c.089.295.186.53.291.704c.104.171.202.338.291.492c.09.154.137.264.137.33c0 .202-.053.465-.16.79c-.111.325-.242.487-.4.487c-.015 0-.077-.011-.185-.034a2.21 2.21 0 0 1-.979-.605a3.17 3.17 0 0 1-.659-1.022a6.986 6.986 0 0 1-.352-1.169a4.884 4.884 0 0 1-.132-1.153z" fill="currentColor"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-2 -2 24 24"><path fill="currentColor" d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z"/></svg>                </a>
              </div>
            </div>
          </div>
        </footer>
        </div>

        
    );
}

export default Moviescatego;
