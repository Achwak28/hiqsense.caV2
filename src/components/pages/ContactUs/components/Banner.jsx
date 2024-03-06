import React, { useEffect, useRef } from 'react';
import Avatar1 from "../../../images/ContactUs/Avatar.png";
import Avatar2 from "../../../images/ContactUs/avatar2.png";
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Whirl } from './Whirl'
import { motion } from 'framer-motion'
import { Globe } from './Globe';

const duration = 2

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
        <div className='relative flex justify-center w-full h-[569px] md:h-[450px] bg-[#4334B6] text-white overflow-hidden'>
            <Whirl />
            <div className='absolute w-full flex justify-center items-center h-[60.0625rem]'>
                <div className='relative w-full max-w-[1300px] flex justify-center lg:justify-end items-center h-[56.37825rem]'>
                    <Globe />
                    <motion.svg
                        viewBox="0 0 1115 1352"
                        fill="transparent" xmlns="http://www.w3.org/2000/svg" className="absolute max-w-[1021px] max-h-[1054px] z-30 opacity-30">
                        <motion.path initial={{
                            pathLength: 0.5,
                            pathOffset: 1
                        }}
                            animate={{
                                pathLength: 0,
                                pathOffset: 0,
                                transition: { duration }
                            }}
                            d="M152.892 610.513C54.2483 654.145 -3.64275 693.655 2.99781 718.43C16.0892 767.273 275.027 740.35 581.351 658.296C887.675 576.243 1125.39 470.131 1112.3 421.289C1105.63 396.416 1035.2 391.192 927.232 402.891" stroke="#22DAE5" strokeWidth="6.22155"
                        />
                        <motion.path initial={{
                            pathLength: 0,
                        }}
                            animate={{
                                pathLength: 1,
                                transition: {
                                    duration,
                                    delay: duration / 2
                                }
                            }}
                            d="M926.657 740.841C1031.97 868.044 1089.79 961.447 1069.69 981.544C1036.37 1014.85 801.6 834.167 545.32 577.968C289.04 321.769 108.296 87.076 141.616 53.7659C161.545 33.8437 253.531 90.4688 379.081 194.014" stroke="url(#paint0_diamond_3_2565)" strokeWidth="6.22155"
                        />
                        <motion.path initial={{
                            pathLength: 0,
                        }}
                            animate={{
                                pathLength: 1,
                                transition: { duration }
                            }}
                            d="M231.675 800.532C154.373 982.11 127.073 1118.5 171.283 1144.02C237.289 1182.12 437.703 958.632 618.92 644.854C800.137 331.076 893.535 45.8255 827.529 7.729C790.854 -13.4384 712.685 46.1495 619.369 157.111" stroke="url(#paint1_diamond_3_2565)" strokeWidth="6.22155"
                        />
                        <defs>
                            <radialGradient id="paint0_diamond_3_2565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-97.5305 -202.107) rotate(45.9576) scale(1007.39 889.239)">
                                <stop offset="0.345736" stopColor="#22DAE5" />
                                <stop offset="1" stopColor="#22DAE5" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_diamond_3_2565" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(294.65 236.618) rotate(70.0854) scale(297.305 1515.75)">
                                <stop offset="0.238495" stopColor="#22DAE5" />
                                <stop offset="1" stopColor="#22DAE5" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </motion.svg>
                </div>
            </div>
            <div className='w-full max-w-[1500px] h-full flex flex-col justify-between items-center px-2 md:px-12 xl:px-[7.5rem] z-[40]'>
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
                            <p className='text-base lg:text-xl mt-5 text-center'>
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

