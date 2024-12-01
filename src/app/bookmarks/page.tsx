
import Navbar from '@/components/Navbar';
import ContentFilters from './ContentFilters';
import ShowCard from './ShowCard';

export default function App() {
  const futurama = {
    title: "Futurama",
    image: "https://m.media-amazon.com/images/M/MV5BNzA2ZDk2ZTUtMWU2Yi00NDVmLTk1ODEtMmFmMjQyNWYzODI0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    genres: ["Animation", "Comedy"],
    rating: 4,
    episodeCount: 140,
    watchTime: "150h37m",
    progress: 75,
    currentEpisode: 10,
    latestEpisode: 11,
    totalEpisodes: 12,
    nextAirDate: new Date("2022-02-27T20:00:00")
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <ContentFilters />
          
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-pink-600 rounded-lg text-sm font-medium">
              Import bookmarks
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium">
              Colored Titles
            </button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg text-sm font-medium">
              Sort by
            </button>
          </div>
        </div>
        
        <div className="flex space-x-8">
          
          <div className="flex-1">
            <ShowCard {...futurama} />
          </div>
        </div>
      </main>
    </div>
  );
}