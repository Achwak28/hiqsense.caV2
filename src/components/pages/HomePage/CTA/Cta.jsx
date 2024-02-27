import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";

function Cta() {
    return (
        <>
            <section className="px-4 lg:px-40 py-10 lg:py-20">
                <PrimaryHeading headingText="Stay Connected with Our Newsletter" />
                <PrimarySubHeading subText="Subscribe to receive the latest updates, offers, and news." />

                <form className="lg:flex lg:items-center lg:mx-auto lg:w-[50%]">
                    <input type="email" name="email" id="email" placeholder="Your email here" className="newsLetterEmail" />
                    <input type="submit" value="Subscribe" className="bg-btn-primary border border-btn-primary text-[#F9F9F9] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm w-full lg:w-[35%]" />
                </form>
            </section>
        </>
    )
}

export default Cta;