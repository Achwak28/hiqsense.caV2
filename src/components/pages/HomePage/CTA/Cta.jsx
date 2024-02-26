import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";

function Cta() {
    return (
        <>
            <section className="px-4 py-10">
                <PrimaryHeading headingText="Stay Connected with Our Newsletter" />
                <PrimarySubHeading subText="Subscribe to receive the latest updates, offers, and news." />

                <form>
                    <input type="email" name="email" id="email" placeholder="Your email here" className="newsLetterEmail" />
                    <input type="submit" value="Subscribe" className="bg-btn-primary border border-btn-primary text-[#F9F9F9] font-hebrew-bold tracking-[0.1px] px-6 py-2.5 rounded text-sm w-full" />
                </form>
            </section>
        </>
    )
}

export default Cta;