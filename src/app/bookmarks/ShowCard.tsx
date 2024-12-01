import { format } from 'date-fns';
import { StarIcon, ShareIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
interface ShowCardProps {
  title: string;
  image: string;
  genres: string[];
  rating: number;
  episodeCount: number;
  watchTime: string;
  progress: number;
  currentEpisode: number;
  latestEpisode: number;
  totalEpisodes: number;
  nextAirDate?: Date;
}

export default function ShowCard({
  title,
  image,
  genres,
  rating,
  episodeCount,
  watchTime,
  progress,
  currentEpisode,
  latestEpisode,
  totalEpisodes,
  nextAirDate
}: ShowCardProps) {
  return (
    <div className="flex space-x-6 bg-gray-800/50 p-4 rounded-lg">
      <img src={image} alt={title} className="w-48 h-64 rounded-lg object-cover" />
      
      <div className="flex flex-col justify-between">
        <div>
          {nextAirDate && (
            <div className="text-sm text-green-400 mb-2">
              Next ep airs on Disney+ • {format(nextAirDate, 'MM/dd/yyyy • hh:mm a')}
            </div>
          )}
          
          <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={clsx(
                    'w-5 h-5',
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                  )}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              {genres.map(genre => (
                <span key={genre} className="text-gray-400">{genre}</span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>{episodeCount} Episodes</span>
            <span>Watch time: {watchTime}</span>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">{progress}% to complete</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-pink-600 text-white rounded-md">
            Current EP: S9E10
          </button>
          <button className="px-4 py-2 bg-pink-700 text-white rounded-md">
            Latest EP: S9E11
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md">
            Total EP: S9E12
          </button>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <InformationCircleIcon className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <ShareIcon className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}