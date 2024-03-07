import React from 'react'
import { Select } from './Select'
import emailjs from '@emailjs/browser';

const Input = React.forwardRef(({ type, placeholder, required, disabled }, ref) => (
    <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={
            `h-12 text-sm text-[#828282] border border-[#E0E0E0] py-3 px-5 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`
        }
    />
))

Input.displayName = 'Input'

export const ContactForm = () => {
    const [selected, setSelected] = React.useState('')
    const nameRef = React.useRef(null)
    const emailRef = React.useRef(null)
    const phoneRef = React.useRef(null)
    const messageRef = React.useRef(null)
    const [isLoading, setLoading] = React.useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = nameRef.current?.value || ''
        const email = emailRef.current?.value || ''
        const phone = phoneRef.current?.value || ''
        const message = messageRef.current?.value || ''

        let messageContent = `Messgage: ${message}\n`;
        if (selected !== '') {
            messageContent += `\nHow did you find us? ${selected}\n`
        }
        messageContent += `\nEmail: ${email} \n Phone: ${phone}`

        setLoading(true)

        await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                "user_name": name,
                message: messageContent,
                "from_name": name,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        setLoading(false);
        setSelected('')
        e.target.reset();
    }

    return (
        <form className='flex flex-col gap-4 pt-16 w-full' onSubmit={handleSubmit}>
            <Input
                ref={nameRef}
                type='text'
                placeholder='Name'
                required
                disabled={isLoading || false}
            />
            <Input
                type='Email'
                placeholder='Email'
                ref={emailRef}
                required
                disabled={isLoading || false}
            />
            <Input
                ref={phoneRef}
                type='text'
                placeholder='Phone number'
                required
                disabled={isLoading}
            />
            <Select
                value={selected}
                setValue={setSelected}
                disabled={isLoading}
            />
            <textarea
                ref={messageRef}
                required
                placeholder='Message'
                className='w-full h-28 text-sm text-[#828282] border border-[#E0E0E0] py-3 px-5 resize-none'
                disabled={isLoading}
            />
            <button
                type='submit'
                className={`relative flex justify-center items-center h-12 bg-[#F6393D] text-white text-base font-bold
                    ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#F6393D]/80'}`
                }
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_elmnt" style={{ background: "#FFFFFF" }}></span>
                        <span className="loader_elmnt" style={{ background: "#FFFFFF" }}></span>
                        <span className="loader_elmnt" style={{ background: "#FFFFFF" }}></span>
                    </div>
                ) : 'Send'}
            </button>
        </form>
    )
}