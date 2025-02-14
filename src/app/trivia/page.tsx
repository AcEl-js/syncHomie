import Navbar from '@/components/Navbar';
import React from 'react';

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


const App = () => {

    const colors = ["bg-[#4E402A]","bg-[#2F1F1F]","bg-[#4A282D]","bg-[#28362F]"]

    const triviaItems: TriviaTitle[] = Array(6).fill({
        id: 1,
        image: 'https://s3-alpha-sig.figma.com/img/7fed/5278/405abee1ddc516475923b7c67e384120?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2WvpS9R72m3GwDrQ8GsxJtJPjuCtsrlrx7SWkHEuAUMXVXETkxXDncho14UuFC~~ARN~NeC~NBq18~LFxi-Wc9EsfHODj6nq0Yx-i~bYS7WbBxDXc43yTmWezZh24d~6M6cCtwJYUIRUrMm20eEkh6sXewlOMdaJI27UzllK8Fd3OOWRBoqLiBS6HWUomxW~OL489j171Y6CJ59b1qyGuTPyY7aE~ogjKgZ5DFk95IYs3iTzAGNX1bD5EcbJtFd0CEpZh9yuNOesQ5zLD7IrkyVNim~JeSkI3uvxSuZ-wWYNUAFl63H-pBABIcC9-ZQyu5SFu1z4tCXb1Ei9zvMKA__',
        title: 'Browse Trivia',
        subtitle: 'Godzilla x Kong: The New Empire'
      });

    return (
        <div className='text-white'>
            <Navbar/>
            <div className=' mt-28'>
                <h1>Tending Trivia Titles</h1>
                    <div className='flex gap-5'>
                        
                    {triviaItems.map((item)=>(
                    <div key={item.id} className={`w-[231px] rounded-xl flex flex-col justify-center items-center ${colors[Math.floor(Math.random()*4)]}`}>
                    <div>
                        <img className='rounded-xl' src={item.image} alt="" />
                    </div>
                    <div className='flex flex-row gap-3 text-white'>
                        <img src="/icons/GameController.svg" className='h-[18px] w-[18px]' />
                        <h1 className=' text-base'>{item.title} </h1>
                    </div>
                    <h1 className='text-[#C3C3C3] text-base '>{item.subtitle} </h1>

                </div>
                ))}
                    </div>
            </div>
        </div>
    );
}

export default App;
