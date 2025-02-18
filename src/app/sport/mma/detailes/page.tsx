import React from 'react';
import { ArrowLeft, MapPin, Calendar, Radius as Stadium, Trophy } from 'lucide-react';

function StreamButton({ platform, quality, onWatch }: { platform: string; quality: string; onWatch: () => void }) {
  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-2">
      <div className="flex items-center gap-3">
       {/*  <img 
          src={`https://logo.clearbit.com/${platform.toLowerCase()}.com`} 
          alt={`${platform} logo`}
          className="w-8 h-8 rounded"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/32';
          }}
        /> */}
        <div>
          <span className="text-white font-medium">Live</span>
          <div className="text-gray-400 text-sm">Subs {quality}</div>
        </div>
      </div>
      {/* <button 
        onClick={onWatch}
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <span>Watch Now</span>
      </button> */}
    </div>
  );
}

function App() {
  const matchDetails = {
    event: "UFC Fight Night: Moreno vs. Albazi",
    date: "November 2, 2024",
    venue: "Rogers Place, Edmonton, Canada",
    competition: "NFL",
    homeTeam: "Dallas Cowboys",
    awayTeam: "Houston Texans",
    score: "3 - 1",
    status: "Full Time"
  };

  const handleWatch = () => {
    alert('Streaming service selected');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6" />
            <div>
              <h1 className="text-xl font-bold">Derrick Lewis</h1>
              <p className="text-gray-400">VS</p>
              <h2 className="text-xl font-bold">Jhonata Diniz</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{matchDetails.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Stadium className="w-4 h-4" />
            <span>AT&T Stadium</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Trophy className="w-4 h-4" />
            <span>{matchDetails.competition}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{matchDetails.venue}</span>
          </div>
        </div>

        {/* Score Section */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622818425825-1dcb4791d48c?w=400"
                alt="Derrick Lewis"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold">Derrick Lewis</h3>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{matchDetails.score}</div>
            <div className="text-gray-400">{matchDetails.status}</div>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=400"
                alt="Jhonata Diniz"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold">Jhonata Diniz</h3>
          </div>
        </div>

        {/* Watch Button */}
        <div className="bg-green-600 text-white p-3 rounded-lg text-center mb-8">
          Watch highlights now
        </div>

        {/* Streaming Options */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-4">Where to watch in</h3>
          <StreamButton platform="Hulu" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="ESPN" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="ABC" quality="HD" onWatch={handleWatch} />
          <StreamButton platform="Sling" quality="HD" onWatch={handleWatch} />
        </div>
      </div>
    </div>
  );
}

export default App;