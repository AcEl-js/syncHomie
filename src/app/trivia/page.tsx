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
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 2,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      } ,{
        id: 3,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      } ,{
        id: 4,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 5,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      }, {
        id: 6,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
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
            image: "https://s3-alpha-sig.figma.com/img/d146/0cf1/cbd75a737fea9589da6e684e051f5ca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uTV-Ch0WNyic00aDDvtLkLFQ9lCfh2yzMnVQPumJtxsbm~PSRAeNanxQwVl1v9WGDikLam-SHcPkk0h~TtewT7TNabQJ5PSF3pD17bxw35pCJ7eJtv71OxVygX9I1HH0qP0jcFhkavmUlafkWs3Ya87y2Au4z2KdEmUwQmzh2VSeeE-rw9PXJP0j1S-aItDRMTUO6EBOW3~QkZad37yHtzaJEdUPlzFYhFQNVPIWSYhLZr4E~lg8zxi5ZisgYqzTxOyUIcqy7ovdlLtr3-TWtJGvVyVakIg1nIVwGXr69g0xDVEDVddGZjrp8pWmkaZhxIbXb2moXdq4tJD27J2-QA__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 3,
            dislikes: 1,
        },{
            id: 2,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "https://s3-alpha-sig.figma.com/img/d501/b874/1b793ccf15f88e34dc40f1df29c3293b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TJgO62-e7jowg~OJOI1CnJXAFn3IlB532YAo68YCOj7WGjlU44DakwGqFL2gDVKglVwb~DLpmg685VrRV18FBxrdub6K6ot0Uou3NAzktR5xWVLZfOaU2TtRd7vKFMYcsheBpKdxcI3mtGjJFH4uBRe6vIF7PXQc5fJwNR2AzxdfCg1qLD6fj7OkmRAbduS4elyIkN7D3mQyTAF3qrNgJvMlY83of5PiFq1d88h7FWK6JU1vRgvHjswWfZ8I9SACxnM2hVUxOCn5Bi6UrlNd-xF44XDRNnEfPDsGpz419fU878zeUZvzL0FUs3BkLiBjeD~76wnR1HQpW3mkorVGNQ__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 13,
            dislikes: 5,
        },{
            id: 3,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "https://s3-alpha-sig.figma.com/img/d146/0cf1/cbd75a737fea9589da6e684e051f5ca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uTV-Ch0WNyic00aDDvtLkLFQ9lCfh2yzMnVQPumJtxsbm~PSRAeNanxQwVl1v9WGDikLam-SHcPkk0h~TtewT7TNabQJ5PSF3pD17bxw35pCJ7eJtv71OxVygX9I1HH0qP0jcFhkavmUlafkWs3Ya87y2Au4z2KdEmUwQmzh2VSeeE-rw9PXJP0j1S-aItDRMTUO6EBOW3~QkZad37yHtzaJEdUPlzFYhFQNVPIWSYhLZr4E~lg8zxi5ZisgYqzTxOyUIcqy7ovdlLtr3-TWtJGvVyVakIg1nIVwGXr69g0xDVEDVddGZjrp8pWmkaZhxIbXb2moXdq4tJD27J2-QA__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 4,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "https://s3-alpha-sig.figma.com/img/d146/0cf1/cbd75a737fea9589da6e684e051f5ca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uTV-Ch0WNyic00aDDvtLkLFQ9lCfh2yzMnVQPumJtxsbm~PSRAeNanxQwVl1v9WGDikLam-SHcPkk0h~TtewT7TNabQJ5PSF3pD17bxw35pCJ7eJtv71OxVygX9I1HH0qP0jcFhkavmUlafkWs3Ya87y2Au4z2KdEmUwQmzh2VSeeE-rw9PXJP0j1S-aItDRMTUO6EBOW3~QkZad37yHtzaJEdUPlzFYhFQNVPIWSYhLZr4E~lg8zxi5ZisgYqzTxOyUIcqy7ovdlLtr3-TWtJGvVyVakIg1nIVwGXr69g0xDVEDVddGZjrp8pWmkaZhxIbXb2moXdq4tJD27J2-QA__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 5,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "https://s3-alpha-sig.figma.com/img/d501/b874/1b793ccf15f88e34dc40f1df29c3293b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TJgO62-e7jowg~OJOI1CnJXAFn3IlB532YAo68YCOj7WGjlU44DakwGqFL2gDVKglVwb~DLpmg685VrRV18FBxrdub6K6ot0Uou3NAzktR5xWVLZfOaU2TtRd7vKFMYcsheBpKdxcI3mtGjJFH4uBRe6vIF7PXQc5fJwNR2AzxdfCg1qLD6fj7OkmRAbduS4elyIkN7D3mQyTAF3qrNgJvMlY83of5PiFq1d88h7FWK6JU1vRgvHjswWfZ8I9SACxnM2hVUxOCn5Bi6UrlNd-xF44XDRNnEfPDsGpz419fU878zeUZvzL0FUs3BkLiBjeD~76wnR1HQpW3mkorVGNQ__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 13,
            dislikes: 5,
        },{
            id: 6,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "https://s3-alpha-sig.figma.com/img/d146/0cf1/cbd75a737fea9589da6e684e051f5ca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uTV-Ch0WNyic00aDDvtLkLFQ9lCfh2yzMnVQPumJtxsbm~PSRAeNanxQwVl1v9WGDikLam-SHcPkk0h~TtewT7TNabQJ5PSF3pD17bxw35pCJ7eJtv71OxVygX9I1HH0qP0jcFhkavmUlafkWs3Ya87y2Au4z2KdEmUwQmzh2VSeeE-rw9PXJP0j1S-aItDRMTUO6EBOW3~QkZad37yHtzaJEdUPlzFYhFQNVPIWSYhLZr4E~lg8zxi5ZisgYqzTxOyUIcqy7ovdlLtr3-TWtJGvVyVakIg1nIVwGXr69g0xDVEDVddGZjrp8pWmkaZhxIbXb2moXdq4tJD27J2-QA__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 7,
            title: "Black Mirror",
            subtitle: "Match",
            level:"LEVEL 3",
            IQ: "6Q",
            image: "https://s3-alpha-sig.figma.com/img/d146/0cf1/cbd75a737fea9589da6e684e051f5ca6?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uTV-Ch0WNyic00aDDvtLkLFQ9lCfh2yzMnVQPumJtxsbm~PSRAeNanxQwVl1v9WGDikLam-SHcPkk0h~TtewT7TNabQJ5PSF3pD17bxw35pCJ7eJtv71OxVygX9I1HH0qP0jcFhkavmUlafkWs3Ya87y2Au4z2KdEmUwQmzh2VSeeE-rw9PXJP0j1S-aItDRMTUO6EBOW3~QkZad37yHtzaJEdUPlzFYhFQNVPIWSYhLZr4E~lg8zxi5ZisgYqzTxOyUIcqy7ovdlLtr3-TWtJGvVyVakIg1nIVwGXr69g0xDVEDVddGZjrp8pWmkaZhxIbXb2moXdq4tJD27J2-QA__",
            description: "# of plays Submitted by Taken by x friends",
            likes: 22,
            dislikes: 0,
        },{
            id: 8,
            title: "It’s Always Sunny in Philadelhpia",
            subtitle: "Multiple Choice",
            level:"Nosedive",
            IQ: "30Q",
            image: "https://s3-alpha-sig.figma.com/img/d501/b874/1b793ccf15f88e34dc40f1df29c3293b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TJgO62-e7jowg~OJOI1CnJXAFn3IlB532YAo68YCOj7WGjlU44DakwGqFL2gDVKglVwb~DLpmg685VrRV18FBxrdub6K6ot0Uou3NAzktR5xWVLZfOaU2TtRd7vKFMYcsheBpKdxcI3mtGjJFH4uBRe6vIF7PXQc5fJwNR2AzxdfCg1qLD6fj7OkmRAbduS4elyIkN7D3mQyTAF3qrNgJvMlY83of5PiFq1d88h7FWK6JU1vRgvHjswWfZ8I9SACxnM2hVUxOCn5Bi6UrlNd-xF44XDRNnEfPDsGpz419fU878zeUZvzL0FUs3BkLiBjeD~76wnR1HQpW3mkorVGNQ__",
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
