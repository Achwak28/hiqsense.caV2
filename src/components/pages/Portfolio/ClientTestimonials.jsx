import React, { useState } from 'react';
import background from '../../images/background.png';
import Carousel from './Carsoul'
import profile from '../../images/profile-image.png'
import profile_2 from '../../images/profile-sam.png'
import profile_3 from '../../images/profile-malik.png';
import stars from '../../images/stars.png'

export default function ClientTestimonials() {
    const [selected, setSelected] = useState(0);
    const items = [
        { name: "Nika K.", job: "Lead Designer", profileImage: profile, star: stars, title: 'A very quick turnover indeed.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.' },
        { name: "Malik M.", job: "Lead Designer", profileImage: profile_3, star: stars, title: 'The product is amazing!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.' },
        { name: "Sam A.", job: "Lead Designer", profileImage: profile_2, star: stars, title: 'Topnotch customer service.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.' },
    ];

    return (
        <div className='relative'>
            <div className="absolute inset-0" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', filter: 'blur(30px)', zIndex: -1 }}></div>
            <div className='flex flex-col gap-4 pt-24'>
                <h2 className='font-serif font-bold text-5xl leading-normal pl-4 text-[#0A0628]'>Client Testimonials</h2>
                <p className='font-sans font-normal text-[#0A0628] pl-4 mb-12'>Read what our clients have to say about us</p>
                <div className="container mx-auto mt-8 mb-16">
                    <Carousel items={items} selected={selected} setSelected={setSelected} />
                    <div className="flex justify-center mt-4">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 bg-gray-400 mx-1 mt-8 rounded-full focus:outline-none ${index === selected ? 'bg-gray-800' : ''
                                    }`}
                                onClick={() => setSelected(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
