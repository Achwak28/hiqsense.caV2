import React, { useEffect } from 'react';
import left from '../../images/chevron-down.png'
import right from '../../images/chevron-right.png'
const Carousel = ({ items, selected, setSelected }) => {
    const handlePrev = () => {
        setSelected(selected === 0 ? items.length - 1 : selected - 1);
    };

    const handleNext = () => {
        setSelected(selected === items.length - 1 ? 0 : selected + 1);
    };

    // Adjust items array for infinite scrolling
    const adjustedIndex = selected === 0 ? items.length - 1 : selected - 1;
    const adjustedItems = [
        items[adjustedIndex],
        items[selected],
        items[selected === items.length - 1 ? 0 : selected + 1],
    ];

    useEffect(() => {
        setTimeout(() => {
            handleNext()
        }, 2000)
    }, [selected])

    return (
        <div className="flex justify-center items-center gap-8 relative overflow-hidden">
            <button className='hidden md:block p-12' onClick={handlePrev}>
                <img src={left} className='w-[300px] h-[100px]' />
            </button>
            {adjustedItems.map((item, index) => (
                <div
                    key={index}
                    className={`w-full mx-1 relative ${index !== 1 && 'hidden md:block'}`} // Hide cards except the middle one on small screens
                >
                    <div className="bg-white h-[400px] p-4 rounded-lg shadow-md">
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <img src={item.profileImage} />
                                <div className='flex flex-col md:flex-row justify-between w-full items-center'>
                                    <div className='flex flex-col'>
                                        <p>{item.name}</p>
                                        <p>{item.job}</p>
                                    </div>
                                    <img src={item.star} className='w-full md:w-[50%] h-[20px]' />
                                </div>
                            </div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            <button className='hidden md:block p-12' onClick={handleNext}>
                <img src={right} className='w-[300px] h-[100px]' />
            </button>
        </div>

    );
};

export default Carousel;
