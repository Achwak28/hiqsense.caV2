import phoneIcon from '../../images/get-in-touch/phone.svg';
import fbIcon from '../../images/get-in-touch/facebook.svg';
import emailIcon from '../../images/get-in-touch/email.svg';

function GetInTouch() {
    return (
        <>
            <section className="px-4 lg:px-40 pb-20">
                <div className="grid grid-cols-1"><div><h2 className="font-hebrew-bold text-[32px] text-center text-txt-primary mb-6">Get in <span className="text-btn-primary">Touch</span></h2>

                    <form className="getInTouchForm">
                        <input type="text" placeholder="Name *" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone number *" />
                        <select>
                            <option value="0">How did you find us?</option>
                            <option value="1">...</option>
                            <option value="2">...</option>
                            <option value="3">...</option>
                            <option value="4">...</option>
                            <option value="5">...</option>

                        </select>
                        <input type="submit" value="Send" className="bg-btn-primary border border-btn-primary text-[#F9F9F9] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm w-full" />
                    </form></div><div></div></div>
                <div className="grid grid-cols-3 justify-items-center content-center items-center mt-2.5">
                    <div className="flex items-center"><div><img src={phoneIcon} alt="phoneIcon" /></div><div className='text-left ml-1.5'><h6 className='font-hebrew-bold text-[12px] text-txt-primary'>PHONE</h6>
                        <p className='font-hebrew-regular text-[12px] text-btn-primary'><a href="tel:03 5432 1234">03 5432 1234</a></p></div></div>
                    <div className="flex items-center"><div><img src={fbIcon} alt="phoneIcon" /></div><div className='text-left ml-1.5'><h6 className='font-hebrew-bold text-[12px] text-txt-primary'>FACEBOOK</h6>
                        <p className='font-hebrew-regular text-[12px] text-btn-primary'><a href="facebook.com/abc">facebook.com/abc</a></p></div></div>
                    <div className="flex items-center"><div><img src={emailIcon} alt="phoneIcon" /></div><div className='text-left ml-1.5'><h6 className='font-hebrew-bold text-[12px] text-txt-primary'>EMAIL</h6>
                        <p className='font-hebrew-regular text-[12px] text-btn-primary'><a href="mailto:abc@gmail.com">abc@gmail.com</a></p></div></div>
                </div>
            </section>
        </>
    )
}

export default GetInTouch;