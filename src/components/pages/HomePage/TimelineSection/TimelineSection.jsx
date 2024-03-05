import timelineBg from "../../../images/Timeline/bg.jpg";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";
import PrimaryHeading from "../../../ui/PrimaryHeading";
import { TimelineSteps, TimelineStepsLeft } from "../../../ui/TimelineSteps";
import bluePulseImg from "../../../images/Timeline/blueEllipse.png";

function TimelineSection() {
  return (
    <>
      <section
        className="px-3 lg:px-40 pt-10 pb-20 lg:py-20 relative z-[1] overflow-hidden rightStick"
        style={{
          backgroundImage: `url(${timelineBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="topLeftBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div>
        <div className="centerRightBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div>
        <div className="bottomLeftBluePulseBlock">
          <img src={bluePulseImg} alt="bluePulseImg" />
        </div>
        <PrimaryHeading
          headingText="From Concept to Completion: Our Process for Crafting Digital Experiences"
          custColor="#fff"
          timelineHeading="lg:w-[70%] lg:mx-auto"
        />

        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 md:gap-20 md:mb-20 lg:mb-40 lg:mt-20">
          <TimelineSteps
            stepsContent={{
              Steps: "Step 1",
              Heading: "Planning",
              SubHeading: "Planning and brainstroming strategy",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 2",
              Heading: "Communicate",
              SubHeading:
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
          <TimelineSteps
            stepsContent={{
              Steps: "Step 3",
              Heading: "Create",
              SubHeading:
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 4",
              Heading: "Turnover",
              SubHeading:
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
          <TimelineSteps
            stepsContent={{
              Steps: "Step 5",
              Heading: "Design",
              SubHeading:
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
              lowerCol: "md:relative pointRight",
            }}
          />
          <TimelineStepsLeft
            stepsContent={{
              Steps: "Step 6",
              Heading: "Maintenance",
              SubHeading:
                "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
              lowerCol: "md:relative md:top-[111px] pointLeft",
            }}
          />
        </div>
        <div className="px-10">
          <PrimaryButtonOutlined buttonlabel="Learn More" />
        </div>
      </section>
    </>
  );
}

export default TimelineSection;
