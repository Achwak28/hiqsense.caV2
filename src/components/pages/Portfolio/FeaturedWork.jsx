// FeaturedWork.js
import React, { useEffect, useRef, useState } from 'react';
import card_1 from '../../images/card-1.png';
import card_2 from '../../images/card-2.png';
import card_3 from '../../images/card-3.png';
import smallRoll from '../../images/small-roll.png';
import linear from '../../images/linear.png';
import ArrowRight from '../../svg/ArrowRight';
import NavigationCircle from './NavigationCircle';

const initialTypes = [
    { index: 1, name: 'Logo & Graphic Design', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: card_1, visible: true },
    { index: 3, name: 'Web Design', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: card_2, visible: true },
    { index: 2, name: 'SEO', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: card_1, visible: true },
    { index: 4, name: 'Email Hosting', des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: card_3, visible: true }
];

const items = [
    { index: 1, title: 'Logo & Graphic Design', rotationAngle: 0 },
    { index: 3, title: 'Web Design', rotationAngle: 15 },
    { index: 2, title: 'SEO', rotationAngle: 30 },
    { index: 4, title: 'Email Hosting', rotationAngle: 45 }
];

export default function FeaturedWork() {
    const [isVisible, setIsVisible] = useState(false);
    const [types, setTypes] = useState(initialTypes);
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

    const handleNavClick = (index) => {
        const clickedItem = items.find(item => item.index === index);
        const clickedType = types.find(type => type.name === clickedItem.title);
        const updatedTypes = types.filter(type => type !== clickedType);
        updatedTypes.unshift(clickedType);
        setTypes(updatedTypes);
    };

    return (
        <container className='flex flex-col gap-3 bg-[#0A0628] pt-24'>
            <h2 className='font-serif font-bold text-5xl leading-normal pl-4 text-[#F9F9F9]'>Featured Work</h2>
            <p className='font-sans font-normal text-[#F9F9F9] pl-4 mb-12'>Explore our diverse range of creative projects.</p>
            <section className='flex flex-col md:flex-row'>
                <div className='relative flex flex-col gap-4 w-[35%]'>
                    <NavigationCircle items={items} onItemClick={handleNavClick} />
                    <div className='hidden md:block'>
                        <img src={linear} className='absolute bottom-[-15%]' />
                    </div>
                    <div className='hidden md:block'>
                        <img src={smallRoll} className='h-[40px] w-[40px] absolute top-[50%] right-[20%] transform -translate-y-1/2' />
                    </div>
                </div>
                <div ref={carouselRef} className='carousel-container'>
                    {
                        types.map((card, index) => (
                            card.visible &&
                            <>
                                <div className={`hidden gird-cols-1 carousel-track ${isVisible ? 'slide-up' : ''} md:flex md:block`} key={index}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <img src={card.img} className='h-[400px] w-1/2' />
                                            <div className='h-[400px] flex flex-col gap-3 p-[40px] overflow-hidden'>
                                                <p className='font-sans text-6xl leading-normal text-[#F9F9F9] overflow-hidden'>{card.name}</p>
                                                <p className='font-normal text-[#F9F9F9] text-left overflow-hidden'>{card.des}</p>
                                                <button className='flex items-center gap-2'>
                                                    <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                                    <ArrowRight className='w-16 h-16' />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className='h-[400px] flex flex-col gap-3 p-[40px] overflow-hidden'>
                                                <p className='font-sans text-6xl leading-normal text-[#F9F9F9] overflow-hidden'>{card.name}</p>
                                                <p className='font-normal text-[#F9F9F9] text-left overflow-hidden'>{card.des}</p>
                                                <button className='flex items-center gap-2'>
                                                    <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                                    <ArrowRight className='w-16 h-16' />
                                                </button>
                                            </div>
                                            <img src={card.img} className='h-[400px] w-1/2' />
                                        </>
                                    )}
                                </div>
                                <div className={`block flex flex-col items-center carousel-track ${isVisible ? 'slide-up' : ''} md:hidden`} key={index}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <img src={card.img} className='h-[400px]' />
                                            <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                                                <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>{card.name}</p>
                                                <p className='font-normal text-[#F9F9F9] text-left'>{card.des}</p>
                                                <button className='flex items-center gap-2'>
                                                    <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                                    <ArrowRight className='w-16 h-16' />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <img src={card.img} className='h-[400px]' />
                                            <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                                                <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>{card.name}</p>
                                                <p className='font-normal text-[#F9F9F9] text-left'>{card.des}</p>
                                                <button className='flex items-center gap-2'>
                                                    <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                                    <ArrowRight className='w-16 h-16' />
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        ))
                    }
                </div>
            </section>
        </container>
    );
}
