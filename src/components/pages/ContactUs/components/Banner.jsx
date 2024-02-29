import React, { useEffect, useRef } from 'react';
import Avatar1 from "../../../images/ContactUs/Avatar.png";
import Avatar2 from "../../../images/ContactUs/avatar2.png";
import { useMediaQuery } from '../../../../hooks/useMediaQuery';

export const Banner = () => {
    const isDesktop = useMediaQuery('(min-width: 950px)');
    const avatarRef = useRef(null);

    useEffect(() => {
        if (avatarRef.current) {
            setTimeout(() => {
                avatarRef.current.style.opacity = 1;
            }, 10);
        }
    }, []);

    return (
        <div className='relative flex items-end w-full h-[569px] md:h-[450px] bg-[#4334B6] text-white overflow-hidden'>

            <div className='w-full h-full flex flex-col justify-between items-center px-2 md:px-12 xl:px-[7.5rem]'>
                {!isDesktop && (
                    <div className='flex flex-col mt-24 px-4 transition-all duration-500 ease-in-in'>
                        <h1 className='text-3xl font-bold'>
                            Unleash the Power of Your Digital Experiences
                        </h1>
                        <p className='text-sm sm:text-base lg:text-xl mt-5'>
                            Join us on a journey where your digital presence is not just enhanced but elevated,
                            shaping the urban landscape in ways that are both visually stunning and strategically impactful.
                        </p>
                    </div>
                )}
                <div className='w-full h-full flex gap-x-5 justify-between items-center'>
                    <img
                        ref={avatarRef}
                        src={Avatar2}
                        alt="Brand logo"
                        className='w-[40%] md:w-[30%] lg:max-w-[300px] self-end opacity-0 transition duration-1000 ease-in-out'
                    />
                    {isDesktop && (
                        <div className='flex flex-col'>
                            <h1 className='text-4xl font-bold'>Contact Us</h1>
                            <p className='text-base lg:text-xl mt-5'>
                                Let&apos;s Transform Your Ideas into Reality - Reach Out Today
                            </p>
                        </div>
                    )}
                    <img
                        src={Avatar1}
                        alt="Brand logo"
                        className='w-[40%] md:w-[30%] lg:max-w-[300px] self-end '
                    />
                </div>
            </div>
        </div>
    );
};

