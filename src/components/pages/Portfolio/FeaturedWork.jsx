import React from 'react'
import card_1 from '../../images/card-1.png'
import card_3 from '../../images/card-3.png'
import card_4 from '../../images/card-4.png'
import roll from '../../images/roll.png'
import smallRoll from '../../images/small-roll.png'
import linear from '../../images/linear.png'
import ArrowRight from '../../svg/ArrowRight'

export default function FeaturedWork() {
    return (
        <container className='flex flex-col gap-3 bg-[#0A0628] pt-24'>
            <h2 className='font-serif font-bold text-5xl leading-normal pl-4 text-[#F9F9F9]'>Featured Work</h2>
            <p className='font-sans font-normal text-[#F9F9F9] pl-4 mb-12'>Explore our diverse range of creative projects.</p>
            <section className='flex justify-between gap-[100px]'>
                <div className='hidden md:relative flex flex-col gap-4 w-1/2 md:block relative'>
                    <img src={roll} className='h-[650px]' />
                    <img src={linear} className='absolute bottom-0' />
                    <img src={smallRoll} className='h-[40px] w-[40px] absolute top-[50%] right-0 transform -translate-y-1/2' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col'>
                        <img src={card_1} className='h-[400px]' />
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
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
                    <div className='flex flex-col'>
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                        <img src={card_3} className='h-[400px]' />
                        <div className='h-[400px] flex flex-col gap-3 p-[40px]'>
                            <p className='font-sans text-6xl leading-normal text-[#F9F9F9]'>ABC Crafting</p>
                            <p className='font-normal text-[#F9F9F9] text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className='flex items-center gap-2'>
                                <p className='font-medium text-[#F9F9F9]'>View Live Site</p>
                                <ArrowRight className='w-16 h-16' />
                            </button>
                        </div>
                        <img src={card_4} className='h-[400px]' />
                    </div>
                </div>
            </section>
        </container>
    )
}