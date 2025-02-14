"use client"
import Navbar from '@/components/Navbar';
import React, { useEffect, useRef, useState } from 'react';
import TriviaTitles from './triviaTitles';

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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const startDragging = (e: React.MouseEvent) => {
      if (!scrollContainerRef.current) return;
      
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const stopDragging = () => {
      setIsDragging(false);
    };
  
    const drag = (e: React.MouseEvent) => {
      if (!isDragging || !scrollContainerRef.current) return;
      
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const [isScrollable, setIsScrollable] = useState(false);
  
    useEffect(() => {
      const checkScrollable = () => {
        if (scrollContainerRef.current) {
          setIsScrollable(
            scrollContainerRef.current.scrollWidth > scrollContainerRef.current.clientWidth
          );
        }
      };
  
      checkScrollable();
      window.addEventListener('resize', checkScrollable);
  
      return () => {
        window.removeEventListener('resize', checkScrollable);
      };
    }, []);
  
    const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current && !isAnimating) {
        setIsAnimating(true);
        
        const container = scrollContainerRef.current;
        const cardWidth = (container.querySelector('.review-card') as HTMLElement)?.offsetWidth || 300;
        const gap = 24;
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
        const startPosition = container.scrollLeft;
        const targetPosition = startPosition + scrollAmount;
        
        let startTime: number | null = null;
        const duration = 800; // Animation duration in milliseconds
        
        function animate(currentTime: number) {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smoother animation
          const easeInOutCubic = (t: number) => 
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          
          const currentPosition = startPosition + (targetPosition - startPosition) * easeInOutCubic(progress);
          container.scrollLeft = currentPosition;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setIsAnimating(false);
          }
        }
        
        requestAnimationFrame(animate);
      }
    };

   

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

    return (

        <div className='text-white'>
            <Navbar/>
            <div className=' mt-[70px] pt-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEC97B21] to-[#A33B3B00]'>
                <h1 className=' text-2xl text-[#C3C3C3] mb-5 ml-5 '><span className='text-[#F5C518]'>•</span> Tending Trivia Titles</h1>
                <TriviaTitles triviaTitle={triviaItems}/>


                
            </div>
        </div>
    );
}

export default App;
