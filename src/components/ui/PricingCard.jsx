import diamondImg from '../images/pricing-options/bgDiamond.svg'
import PrimaryButtonSolid from './PrimaryButtonSolid';

function PricingCard() {
    return (
        <>
            <div className="w-[100%] h-[803px] rounded-[26px] bg-transparent mb-4 text-left p-5 flex flex-col justify-between" style={{ border: "1px solid #A9ACBB" }}>
                <div>
                    <div className='mb-3'><img src={diamondImg} alt="Diamond Image" /></div>
                    <h3 className='font-hebrew-bold text-[32px] text-txt-primary mb-4'>Web Design</h3>
                    <p className='font-hebrew-light text=[18px] text-txt-primary mb-5'>Startup Package</p>
                    <h4 className='font-hebrew-bold text-[40px] text-txt-primary mb-5'>$100</h4>
                    <ul>
                        <li className='font-hebrew-regular text-[18px] text-txt-primary mb-4'>Domain Name - 1 Year</li>
                        <li className='font-hebrew-regular text-[18px] text-txt-primary mb-4'>4-Static Pages Web Design</li>
                        <li className='font-hebrew-regular text-[18px] text-txt-primary mb-4'>Hosting - 1 Year</li>
                        <li className='font-hebrew-regular text-[18px] text-txt-primary mb-4'>5 Business Email Accounts</li>
                    </ul>
                </div>
                <div>
                    <PrimaryButtonSolid buttonlabel="Get Started" pricingBtnColor="#4334B6" pricingTxtCenter="center" pricingBorder = "12px"/>
                </div>
            </div>
        </>
    )
}

export default PricingCard;