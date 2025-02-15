"use client"
import React, { useState } from 'react';
import TriviaTitles from '../trivia/triviaTitles';
import Navbar from '@/components/Navbar';
import { NavButton } from '../bookmarks/NavButton';
import { Button } from '@/components/ui/button';
import { Import, Menu } from 'lucide-react';
interface TriviaTitle{
    id: number;
    image: string;
    title: string;
    subtitle: string;
}
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

  const navItems = [
    { label: "All", count: 36, isActive: true },
    { label: "TV Shows", count: 10, color: "#C85684" },
    { label: "Movies", count: 3, color: "#4E253F" },
    { label: "Anime", count: 12, color: "#EDC884" },
    { label: "Drama", count: 42, color: "#83BAAB" },
    { label: "Sports", count: 502, color: "#EC8164" },
    { label: "People", count: 502, color: "#4155C8" },
  ]

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='text-white bg-black h-screen'>
            <Navbar/>
            <div className=' mt-16'>
            <nav className=" p-4 border-b border-zinc-800 bg-black fixed w-screen top-[72px] z-40">
                    <div className="max-w-7xl mx-auto flex items-center ">
                <div className=" items-center gap-3 mr-14 flex ">
                    <img src="./icons/Sparkle.png" alt="" />
                    <span className="text-zinc-400  text-sm font-thin">For You</span>
                    <div className=" bg-zinc-400 w-[1px] h-8 ml-4"/>
                    </div>
                    <div className="flex items-center flex-wrap space-x-2 sm:space-x-4">
                    {
                            navItems.map((item)=>(
                                <NavButton
                                key={item.label}
                                count={item.count}
                                color={item.color}
                                className={`text-xs sm:text-sm hover:bg-zinc-800 hover:text-white ${
                                  item.isActive ? "text-white " : ""
                                }`}
                              >
                                {item.label}
                              </NavButton>
                            ))
                        }
                        
                        
                    </div>
                    
                    </div>
                </nav>
            <div className='mt-[180px] xl:mt-[138px]  bg-black pt-5'>
                <TriviaTitles isDiscover={true} triviaTitle={triviaItems}/>

            </div>

            </div>
        </div>
    );
}

export default App;
