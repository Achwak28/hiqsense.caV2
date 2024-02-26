import Content from "./service/Content";
import Hero from "./service/Hero";
import OfferingSection from "./service/OfferingSection";
import TeamView from "./service/TeamView";
const Service = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <OfferingSection />
        </div>
      </div>
      <TeamView />
      <Content />
    </div>
  );
};

export default Service;
