import React from 'react'
import { Select } from './Select'


const Input = React.forwardRef(({ type, placeholder, required }, ref) => (
    <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        required={required}
        className='h-12 text-sm text-[#828282] border border-[#E0E0E0] py-3 px-5'
    />
))

Input.displayName = 'Input'


export const ContactForm = () => {
    const [selected, setSelected] = React.useState('')
    const nameRef = React.useRef(null)
    const emailRef = React.useRef(null)
    const phoneRef = React.useRef(null)
    const messageRef = React.useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = nameRef.current?.value || ''
        const email = emailRef.current?.value || ''
        const phone = phoneRef.current?.value || ''
        const message = messageRef.current?.value || ''

        console.log({ name, email, phone, message })

        nameRef.current.value = ''
        emailRef.current.value = ''
        phoneRef.current.value = ''
        messageRef.current.value = ''
        setSelected('')
    }

    return (
        <form className='flex flex-col gap-4 pt-16 w-full' onSubmit={handleSubmit}>
            <Input type='text' placeholder='Name' required ref={nameRef} />
            <Input type='Email' placeholder='Email' ref={emailRef} />
            <Input ref={phoneRef} type='text' placeholder='Phone number' required />
            <Select
                value={selected}
                setValue={setSelected}
            />
            <textarea
                ref={messageRef}
                required
                placeholder='Message'
                className='w-full h-28 text-sm text-[#828282] border border-[#E0E0E0] py-3 px-5 resize-none'
            />
            <button type='submit' className=' h-12 bg-[#F6393D] text-white text-base font-bold'>
                Send
            </button>
        </form>
    )
}