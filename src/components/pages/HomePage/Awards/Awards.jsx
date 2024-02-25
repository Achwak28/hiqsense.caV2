import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";

function Awards() {
    return (
        <>
            <section className="px-2 py-10">
                <PrimaryHeading headingText="Recognition and Awards" />
                <PrimarySubHeading subText="Recognized by top industry leaders for exceptional work" />

                <div className="grid grid-cols-1">
                    <div><h3 className="text-center font-hebrew-bold text-txt-primary text-[32px] mb-5">We’ve More Then 254+
                        Global Partners</h3></div>
                    <div><p className="text-center font-hebrew-regular text-txt-primary text-[14px] ">We’ve partnered and recognized by 20+ companies. We aim to continue serving businesses and offering them the best possible solution.</p></div>
                </div>
            </section>
        </>
    )
}

export default Awards;