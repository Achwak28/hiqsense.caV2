import React, { useEffect, useState, useRef } from 'react';
import saly from '../../images/Saly.png';
import linear from '../../images/linear.png';
import './style.css';

export default function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full flex flex-col mid:flex-row justify-between items-center bg-[#0A0628] h-[750px]'>
                <div className='relative flex flex-col gap-4 small:items-center mid:items-start'>
                    <div ref={titleRef}>
                        <h3 className={`font-serif font-bold text-5xl leading-normal text-left text-[#F9F9F9] small:text-center mid:text-left pl-0 mid:pl-[100px] ${isVisible ? 'slide-in-left' : ''}`}>
                            Do You Have a Project in Mind?
                        </h3>
                    </div>
                    <p className={`mid:w-3/4 font-sans font-semibold text-left text-[#F9F9F9] small:text-center mid:text-left pl-0 mid:pl-[100px] ${isVisible ? 'slide-in-left' : ''}`}>
                        Contact us and let’s get down to business!
                    </p>
                    <button className={`z-[50] bg-[#F6393D] w-1/4 px-2 py-2 rounded-lg small:ml-0 mid:ml-[100px] ${isVisible ? 'slide-in-left' : ''}`}>
                        <p className='text-[#F9F9F9]'>Get started</p>
                    </button>
                    <img src={linear} className={`absolute top-4 w-2/3 ${isVisible ? 'slide-in-left' : ''}`} alt="Linear" />
                </div>
                <img src={saly} className={`max-w-[60%] ${isVisible ? 'slide-in-right' : ''}`} alt="Saly" />
            </div>
            <div className='z-[50] relative w-full'>
                <div className="absolute top-1/2 left-1/2 p-4 rounded-lg transform -translate-x-1/2 -translate-y-1/2 w-[80%] bg-gradient-to-r from-red-600 via-purple-600 to-indigo-700">
                    <div className='block mid:flex flex-col mid:flex-row justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-sans font-bold text-white text-2xl p-4 text-left'>Start Building your Business Today</p>
                            <div className='flex flex-col mid:flex-row gap-3 p-4 pt-0'>
                                <p className='text-white'>Web Design</p>
                                <p className='text-white'>Logo and Graphic Design</p>
                                <p className='text-white'>SEO Optimization</p>
                                <p className='text-white'>Email Hosting</p>
                            </div>
                        </div>
                        <div className='small:flex gap-2 items-center justify-center w-full mid:flex gap-4 items-center justify-end mid:w-1/2'>
                            <button className='w-1/4 bg-transparent px-2 py-2 text-white border border-white rounded-lg'>Get in Touch</button>
                            <button className='w-1/4 bg-[#F6393D] px-2 py-2 text-white  rounded-lg'>About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}