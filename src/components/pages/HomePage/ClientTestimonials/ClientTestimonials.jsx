import PrimaryHeading from "../../../ui/PrimaryHeading";
import PrimarySubHeading from "../../../ui/PrimarySubHeading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import TestimonialsCard from "../../../ui/TestimonialsCard";
import bgImg from "../../../images/client-testimonials/bg.jpg";
import PrimaryButtonSolid from "../../../ui/PrimaryButtonSolid";
import transformBusinessImg from "../../../images/client-testimonials/transformBusiness.svg";
import PrimaryButtonOutlined from "../../../ui/PrimaryButtonOutlined";
import clientImg from "../../../images/client-testimonials/client1.png";
import { useEffect } from "react";

const clientsObj = [
  {
    name: "Nika K.",
    designation: "Lead Designer",
    rating: 4,
    heading: "A very quick turnover indeed.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    thumbnail: clientImg,
  },

  {
    name: "Sam A.",
    designation: "Lead Designer",
    rating: 5,
    heading: "Topnotch customer service.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },

  {
    name: "Malik M.",
    designation: "Lead Designer",
    rating: 3,
    heading: "The product is amazing!",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },

  {
    name: "Nika K.",
    designation: "Lead Designer",
    rating: 5,
    heading: "A very quick turnover indeed.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },

  {
    name: "Sam A.",
    designation: "Lead Designer",
    rating: 4,
    heading: "Topnotch customer service.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },

  {
    name: "Malik M.",
    designation: "Lead Designer",
    rating: 5,
    heading: "The product is amazing!",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
];

function ClientTestimonials() {
  useEffect(() => {}, [clientsObj]);
  // Dynamic import function to load images based on the index
  const getClientImage = (index) =>
    import(`../../../images/client-testimonials/client${index + 1}.png`);
  return (
    <>
      <section
        className="py-10 lg:py-20 h-auto"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <PrimaryHeading headingText="Client Testimonials" />
        <PrimarySubHeading subText="Read what our clients have to say about us" />

        <Splide
          aria-label="Client Testimonials images"
          className="clientSplide"
          options={{
            heightRatio: "auto", // Set the height ratio of the slider
            pagination: true, // Enable or disable pagination
            arrows: true,
            perPage: 3,
            type: "loop",
            gap: "7rem",
            focus: "center",
            padding: "7rem",
            autoplay: true,
            interval: 8000,
            flickMaxPages: 3,
            updateOnMove: true,
            throttle: 300,
            breakpoints: {
              1024: {
                perPage: 1,
                pagination: true, // Enable or disable pagination
                arrows: true,
                gap: "4rem",
                type: "loop",
                padding: "5rem",
                focus: "center",
              },
              767: {
                perPage: 1,
                pagination: true, // Enable or disable pagination
                arrows: false,
                gap: "2rem",
                padding: "1rem",
              },
              640: {
                perPage: 1,
                pagination: true, // Enable or disable pagination
                arrows: false,
                gap: "2rem",
                padding: "1rem",
              },
            },
          }}
        >
          {clientsObj.map((client, index) => (
            <SplideSlide key={index}>
              <TestimonialsCard
                clientname={client.name}
                clientDesignation={client.designation}
                clientRating={client.rating}
                headingQuote={client.heading}
                paraQuote={client.para}
                clientImage={getClientImage(index)}
              />
            </SplideSlide>
          ))}
        </Splide>

        <div className="px-2 py-5 lg:py-20 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-5 md:mt-10">
            <div>
              <PrimaryHeading headingText="Crafting Digital Experiences That Inspire and Engage" />
            </div>
            <div>
              <PrimarySubHeading subText="We are a team of experts dedicated to creating digital experiences that inspire and engage. With our innovative web and graphic design solutions, we tailor our services to perfectly match your brand." />
              <PrimaryButtonSolid buttonlabel="About Us" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-5 md:mt-10">
            <div className="md:order-2">
              <img
                src={transformBusinessImg}
                alt="Transform Business"
                className="lg:w-[1000px]"
              />
            </div>
            <div className="md:order-1">
              <PrimaryHeading headingText="Transform Your Business Today" />
              <PrimarySubHeading subText="Schedule a free consultation or request a quote to get started." />
              <PrimaryButtonSolid
                buttonlabel="Free Consultation"
                testimonialsMarg="15px"
              />
              <PrimaryButtonOutlined buttonlabel="Request a Quote" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientTestimonials;
