import React from 'react'
import heroImage from '../../images/image-1.png'
import FeaturedWork from './FeaturedWork'
import './style.css'
import ClientTestimonials from './ClientTestimonials'
import ContactUs from './ContactUs'
export default function Portfolio() {
    return (
        <>
            <section className='flex flex-col md:flex-row justify-between items-center p-8 bg-custom-background bg-[#372B92] pb-0'>
                <div className='flex flex-col gap-2'>
                    <h1 className="font-serif font-bold text-5xl leading-normal pl-4 text-left text-[#F9F9F9] sm:text-center md:text-left">
                        Explore Our Signature Projects that Define the Future of <br />
                        Design
                    </h1>
                    <p className='md:w-3/4 font-sans font-semi text-left text-[#F9F9F9] pl-4 sm:text-center md:text-left'>
                        Immerse yourself in a collection of projects that exemplify our commitment to pushing the boundaries of innovation and design excellence. Each entry is a testament to our multifaceted expertise
                    </p>
                </div>
                <img src={heroImage} />
            </section>
            <FeaturedWork/>
            <ClientTestimonials/>
            <ContactUs/>
        </>
    )
}