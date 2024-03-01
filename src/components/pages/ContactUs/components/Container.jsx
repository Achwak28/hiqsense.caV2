import React from 'react'


export const Container = ({
    children
}) => {
    return (
        <div className='w-full max-w-[1200px] mx-auto px-5 h-full'>
            {children}
        </div>
    )
}