import React from 'react'
import { ArrowLeft } from 'lucide-react';

function App() {
    const categories = [
        { name: 'Movies', entries: 204, color: 'bg-green-400' },
        { name: 'TV Series', entries: 147, color: 'bg-blue-400' },
        { name: 'Anime', entries: 141, color: 'bg-purple-400' },
        { name: 'Gaming', entries: 115, color: 'bg-pink-400' },
        { name: 'Sport', entries: 108, color: 'bg-red-400' }
      ];
    
      const genreScores = [
        { genre: 'Action', score: 16 },
        { genre: 'Drama', score: 3 },
        { genre: 'Comedy', score: 13 },
        { genre: 'Fantasy', score: 12 },
        { genre: 'Adventure', score: 12 }
      ];
  return (
 
        <div className="bg-gray-900 text-white min-h-screen p-4">
          {/* Header */}
          <div className="flex items-center mb-6">
            <ArrowLeft className="w-6 h-6 mr-3" />
            <div>
              <h1 className="text-xl font-semibold">SevyrX</h1>
              <p className="text-sm text-gray-400">Total Bookmarks: 45</p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center">
                <div className="w-12 h-6 bg-gray-700 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-sm">Public Profile</span>
              </div>
            </div>
          </div>
    
          {/* Categories */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-5 gap-2 mb-4">
              {categories.map((cat) => (
                <div key={cat.name} className="text-center">
                  <div className={`${cat.color} text-white rounded px-3 py-1 text-sm mb-1`}>
                    {cat.name}
                  </div>
                  <div className="text-xs text-gray-400">{cat.entries} Entries</div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Profile Section */}
          <div className="flex gap-6">
            {/* Left Column */}
            <div className="w-1/4">
              <img src="/api/placeholder/150/150" alt="Profile" className="rounded-full mb-4" />
              <h2 className="text-xl font-semibold mb-1">SevyrX</h2>
              <p className="text-sm text-gray-400 mb-4">Joined November 2024</p>
              <div className="text-sm text-gray-400">
                <div>569 Following</div>
                <div>72 Followers</div>
              </div>
            </div>
    
            {/* Right Column */}
            <div className="flex-1">
              <div className="flex gap-6 mb-6">
                <div className="bg-gray-800 rounded-lg p-4 flex-1">
                  <h3 className="text-gray-400 mb-2">Community Score</h3>
                  <div className="text-3xl font-bold">19</div>
                  <div className="text-sm text-gray-400">Average Score: 47</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 flex-1">
                  <h3 className="text-gray-400 mb-2">Peak Score</h3>
                  <div className="text-3xl font-bold">22</div>
                  <div className="text-sm text-gray-400">High Score: 26</div>
                </div>
              </div>
    
              {/* Genre Scores */}
              <div className="grid grid-cols-5 gap-4">
                {genreScores.map((genre) => (
                  <div key={genre.genre} className="text-center">
                    <div className="text-2xl font-bold">{genre.score}</div>
                    <div className="text-sm text-gray-400">{genre.genre}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Navigation Tabs */}
          <div className="mt-6 border-b border-gray-700">
            <div className="flex gap-6">
              <button className="px-4 py-2 text-gray-400 hover:text-white">Overview</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white">Comments (90)</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white">View Bookmarks (372)</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white">Submissions</button>
              <button className="px-4 py-2 text-gray-400 hover:text-white">Trivia Scores</button>
            </div>
          </div>
        </div>
    

  )
}

export default App
