import PricingCard from "../../../ui/PricingCard";
import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";

function PricingOptions() {
    return (
        <>
            <section className="px-2 py-10">
                <PrimaryHeading headingText="Pricing Options" />
                <PrimarySubHeading subText="Choose the plan that fits your budget" />

                <div className="grid grid-cols-1">
<PricingCard/>
<PricingCard/>
<PricingCard/>
<PricingCard/>
                </div>
            </section>
        </>
    )
}

export default PricingOptions;