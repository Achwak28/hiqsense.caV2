import timelineBg from '../../../images/Timeline/bg.jpg'
import PrimaryButtonOutlined from '../../../ui/PrimaryButtonOutlined';
import PrimaryHeading from '../../../ui/PrimaryHeading';
import { TimelineSteps, TimelineStepsLeft } from '../../../ui/TimelineSteps';

function TimelineSection() {
    return (
        <>
            <section className="px-4 py-10" style={{ backgroundImage: `url(${timelineBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <PrimaryHeading headingText="From Concept to Completion: Our Process for Crafting Digital Experiences" custColor="#fff" />

                <div className='grid grid-cols-1'>
                    <TimelineSteps stepsContent={{ Steps: 'Step 1', Heading: 'Planning', SubHeading: 'Planning and brainstroming strategy' }} />
                    <TimelineStepsLeft stepsContent={{ Steps: 'Step 2', Heading: 'Communicate', SubHeading: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' }} />
                    <TimelineSteps stepsContent={{ Steps: 'Step 3', Heading: 'Create', SubHeading: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' }} />
                    <TimelineStepsLeft stepsContent={{ Steps: 'Step 4', Heading: 'Turnover', SubHeading: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' }} />
                    <TimelineSteps stepsContent={{ Steps: 'Step 5', Heading: 'Design', SubHeading: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' }} />
                    <TimelineStepsLeft stepsContent={{ Steps: 'Step 6', Heading: 'Maintenance', SubHeading: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ' }} />
                </div>
                <div className='px-10'>
                    <PrimaryButtonOutlined buttonlabel="Learn More" />
                </div>
            </section>
        </>
    )
}

export default TimelineSection;