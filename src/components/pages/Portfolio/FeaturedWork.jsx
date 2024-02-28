import React, { useEffect, useRef, useState } from 'react'
import card_1 from '../../images/card-1.png'
// import card_3 from '../../images/card-3.png'
// import card_4 from '../../images/card-4.png'
// import roll from '../../images/roll.png'
import smallRoll from '../../images/small-roll.png'
import linear from '../../images/linear.png'
import ArrowRight from '../../svg/ArrowRight'
import NavigationCricle from './NavigationCircle'
{/* <img src={roll} className='h-[650px]' /> */ }

const items = [
    { index: 1, title: 'Logo & Graphic Design', rotationAngle: 0 },
    { index: 3, title: 'Web Design', rotationAngle: 15 },
    { index: 2, title: 'SEO', rotationAngle: 30 },
    { index: 4, title: 'Email Hosting', rotationAngle: 45 }
];
export default function FeaturedWork() {
    const [isVisible, setIsVisible] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { top, bottom } = carouselRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (top < windowHeight && bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <container className='flex flex-col gap-3 bg-[#0A0628] pt-24'>
            <h2 className='font-serif font-bold text-5xl leading-normal pl-4 text-[#F9F9F9]'>Featured Work</h2>
            <p className='font-sans font-normal text-[#F9F9F9] pl-4 mb-12'>Explore our diverse range of creative projects.</p>
            <section className='flex flex-col md:flex-row'>
                <div className='relative flex flex-col gap-4 w-[35%]'>
                    <NavigationCricle items={items} />
                    <div className='hidden md:block'>
                        <img src={linear} className='absolute bottom-[-15%]' />
                    </div>
                    <div className='hidden md:block'>
                        <img src={smallRoll} className='h-[40px] w-[40px] absolute top-[50%] right-[20%] transform -translate-y-1/2' />
                    </div>
                </div>
                <div ref={carouselRef} className='carousel-container grid grid-cols-1 md:grid-cols-2'>
                    <div className={`carousel-track flex flex-col overflow-hidden ${isVisible ? 'slide-up' : ''}`}>
                        <img src={card_1} className='h-[400px]' />
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                    </div>
                    <div className={`carousel-track flex flex-col overflow-hidden ${isVisible ? 'slide-up' : ''}`}>
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                        <img src={card_1} className='h-[400px]' />
                    </div>
                    <div className={`carousel-track flex flex-col overflow-hidden ${isVisible ? 'slide-up' : ''}`}>
                        <img src={card_1} className='h-[400px]' />
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                    </div>
                    <div className={`carousel-track flex flex-col overflow-hidden ${isVisible ? 'slide-up' : ''}`}>
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                        <img src={card_1} className='h-[400px]' />
                    </div>
                </div>
            </section>
        </container>
    )
}

