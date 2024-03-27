import React, { useEffect, useState, useRef } from 'react';
import heroImage from '../../images/image-1.png';
import FeaturedWork from './FeaturedWork';
import './style.css';
import ClientTestimonials from './ClientTestimonials';
import ContactUs from './ContactUs';
import { Helmet } from 'react-helmet-async';

export default function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
         <Helmet>
                    <title>Portfolio - Hiqsense Smart Systems: Showcasing Our Impact on Small Businesses</title>
                    <meta name= "description" content="Delve into the diverse portfolio of Hiqsense Smart Systems and witness 
                    the transformative impact we've had on small businesses across Canada. Our portfolio highlights our expertise in web design,
                     graphic design, SEO optimization, and more, showcasing real-world examples of our successful partnerships.
                      See how our innovative solutions have empowered businesses in various industries to reach their full potential" />
                    <meta name="keywords" content="Hiqsense portfolio, successful projects, web design showcase, graphic design examples,
                     SEO case studies, business transformation, Canadian small businesses, technology impact, portfolio showcase,
                      innovative solutions, client success stories, industry variety, Saskatoon web agency, technology excellence." />
                </Helmet>
               
            <section className='flex flex-col pt-[250px] mid:flex-row justify-between items-center p-8 bg-custom-background bg-[#372B92] pb-0 mid:pt-0'>
                <div className='flex flex-col gap-2'>
                    <h1 className={`font-serif font-bold text-5xl leading-normal pl-4 text-left text-[#F9F9F9] sm:text-center mid:text-left ${isVisible ? 'slide-in-left' : ''}`}>
                        Explore Our Signature Projects that Define the Future of <br />
                        Design
                    </h1>
                    <p className={`mid:w-3/4 font-sans font-semi text-left text-[#F9F9F9] pl-4 sm:text-center mid:text-left ${isVisible ? 'slide-in-left' : ''}`}>
                        Immerse yourself in a collection of projects that exemplify our commitment to pushing the boundaries of innovation and design excellence. Each entry is a testament to our multifaceted expertise
                    </p>
                </div>
                <img ref={imageRef} src={heroImage} alt="Hero" className={` ${isVisible ? 'slide-in-right' : ''}`} />
            </section>
            <FeaturedWork />
            <ClientTestimonials />
            <ContactUs />
        </>
    );
}
