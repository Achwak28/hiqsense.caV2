import React from 'react'

const options = [
    { name: 'Google' },
    { name: 'Facebook' },
    { name: 'Instagram' },
    { name: 'Friend' },
]
export const Select = ({
    value,
    setValue,
    disabled = false
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={
            `bg-white relative w-full flex items-center justify-between h-12 text-sm text-[#828282] border border-[#E0E0E0] py-3 px-5 outline-none  ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`
        }
            onClick={() => setIsOpen((prev) => !prev)}
        >
            {value === '' ? "How did you find us?" : value}
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            {isOpen && !disabled && (
                <div className='absolute top-14 left-0 w-full bg-white z-10 border border-[#E0E0E0] flex flex-col items-start'>
                    {options.map((item, index) => (
                        <span
                            key={index}
                            onClick={() => setValue(item.name)}
                            className={`w-full px-5 py-3 text-left cursor-pointer  hover:bg-[#F9F9F9] 
                                ${value === item.name && 'text-[#F6393D] bg-[#F9F9F9]'}
                            `}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
