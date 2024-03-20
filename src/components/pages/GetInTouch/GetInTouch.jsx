//import mapImg from "../../images/get-in-touch/map.png";
import { ContactForm } from "../ContactUs/components/FormNew";
import Map from "../ContactUs/components/Map";
import { Container } from "../ContactUs/components/Container";



function GetInTouch() {
  return (
    <>
     <Container>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-start px-1 md:px-3 py-9 lg:p-16 lg:pb-20 mb-16">
          <div className="flex flex-col pt-5">
            <h1 className="text-4xl text-left font-bold text-[#0A0628]">
              Get in
              <span className="text-[#F6393D]">Touch</span>
            </h1>
            <ContactForm />
          
          </div>
          <Map />
        </div>
      </Container>
    </>
  );
}

export default GetInTouch;
