"use client"
import Navbar from '@/components/Navbar';
import { Trophy, Medal, Award } from 'lucide-react';
import TriviaTitles from './triviaTitles';
import GameCard from './gameCard';

interface TriviaTitle{
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

interface TriviaQuiz {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    level: string;
    players: number;
    time: number;
    likes: number;
    dislikes: number
}

interface Player {
    id: number;
    name: string;
    level: string;
    quizzes: number;
    points: number;
    rank: number;
}
const players: Player[] = [
    { id: 1, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 1 },
    { id: 2, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 2 },
    { id: 3, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 3 },
    { id: 4, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 4 },
    { id: 5, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 5 },
    { id: 6, name: 'SEVYRX', level: 'Level 8', quizzes: 152, points: 1249, rank: 6 },
  ];

  const RankIcon = ({ rank }: { rank: number }) => {
    if (rank === 1) return <img className='w-8 h-8' src="/other/sync8.svg" />;
    if (rank === 2) return <Medal className="w-8 h-8 text-gray-400" />;
    if (rank === 3) return <Award className="w-8 h-8 text-amber-600" />;
    return <span className="w-8 h-8 flex items-center justify-center text-gray-400 font-bold">{rank}</span>;
  };


const App = () => {
    

   

    const triviaItems: TriviaTitle[] = [
        {
        id: 1,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 2,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      } ,{
        id: 3,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      } ,{
        id: 4,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 5,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 6,
        image: '/movies/lastofus.svg',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }];

      const triviaQuiz=[
        {
            id: 1,
            title: "The Good Place",
            subtitle: "Multiple Choice",
            level:"LEVEL 1",
            IQ: "20Q",
            image: "/movies/triviaimg.jpeg",
            description: "# of plays Submitted by Taken by x friends",
            likes: 3,
            dislikes: 1,
        },{
            id: 2,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "/movies/triviaimg.png",
            description: "# of plays Submitted by Taken by x friends",
            likes: 13,
            dislikes: 5,
        },{
            id: 3,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "/movies/triviaimg.jpeg",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 4,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "/movies/triviaimg.jpeg",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 5,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "/movies/triviaimg.png",
            description: "# of plays Submitted by Taken by x friends",
            likes: 13,
            dislikes: 5,
        },{
            id: 6,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "/movies/triviaimg.jpeg",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 7,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "/movies/triviaimg.jpeg",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 8,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "/movies/triviaimg.png",
            description: "# of plays Submitted by Taken by x friends",
            likes: 13,
            dislikes: 5,
        }
      ]

    return (

        <div className='text-white bg-black'>
            <Navbar/>
            <div className=' mt-[70px] pt-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEC97B21] to-[#A33B3B00]'>
                <h1 className=' text-2xl text-[#C3C3C3] mb-5 ml-5 '><span className='text-[#F5C518]'>•</span> Tending Trivia Titles</h1>
                <TriviaTitles isDiscover={false} triviaTitle={triviaItems}/>
                <h1 className=' text-2xl text-[#C3C3C3] mb-5 ml-5 '><span className='text-[#F5C518]'>•</span> Trending Trivia Quizzes</h1>
                <GameCard triviaQuiz={triviaQuiz}/>
                <h1 className=' text-2xl text-[#C3C3C3] mb-5 ml-5 '><span className='text-[#F5C518]'>•</span> Trivia Completed by Friends</h1>
                <GameCard triviaQuiz={triviaQuiz}/>
                <h1 className=' text-2xl text-[#C3C3C3] mb-5 ml-5 '><span className='text-[#F5C518]'>•</span> Top Ranking Users</h1>
                
                {/* ranking table */}

                <div className="min-h-screen text-white p-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-6 flex space-x-8 border-b border-gray-700 pb-4">
                        <button className="text-orange-500 font-semibold">This Week</button>
                        <button className="text-gray-400 hover:text-gray-300">This Month</button>
                        <button className="text-gray-400 hover:text-gray-300">Overall</button>
                        </div>

                        <div className="space-y-2">
                        <div className="grid grid-cols-12 text-sm text-gray-400 px-4 py-2">
                            <div className="col-span-1">RANK</div>
                            <div className="col-span-5">PLAYER</div>
                            <div className="col-span-3">SUBMITTED</div>
                            <div className="col-span-3">QUIZ SCORE</div>
                        </div>

                        {players.map((player) => (
                            <div
                            key={player.id}
                            className="grid grid-cols-12 items-center px-4 py-3 rounded-lg"
                            style={{
                                background: player.rank === 1 
                                ? 'linear-gradient(90deg, rgba(146, 109, 42, 0.5) 0%, rgba(45, 41, 29, 0.5) 100%)'
                                : player.rank % 2 === 0 
                                    ? 'rgba(45, 45, 45, 0.3)'
                                    : 'rgba(30, 30, 30, 0.3)'
                            }}
                            >
                            <div className="col-span-1">
                                <RankIcon rank={player.rank} />
                            </div>
                            <div className="col-span-5 flex items-center space-x-3">
                                <img
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&h=50&fit=crop"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full"
                                />
                                <div>
                                <div className="font-semibold">{player.name}</div>
                                <div className="text-sm text-gray-400">{player.level}</div>
                                </div>
                            </div>
                            <div className="col-span-3 text-gray-300">{player.quizzes} QUIZZES</div>
                            <div className="col-span-3 text-gray-300">{player.points} POINTS</div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>

                
            </div>
        </div>
    );
}

export default App;
