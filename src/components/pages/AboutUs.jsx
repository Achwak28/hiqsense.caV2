import React from "react";
import person from "../../assets/about-us/hero-section.png";
import people from "../../assets/about-us/transforming-section.png";
import line from "../../assets/about-us/line.png";
import pseudo from "../../assets/about-us/pseudo.png";
import delivery2 from "../../assets/about-us/delivery2.png";
import legacy2 from "../../assets/about-us/legacy2.png";
import milestone1 from "../../assets/about-us/milestone1.png";
import relationship2 from "../../assets/about-us/relationship2.png";
import footer from "../../assets/about-us/footer-img.png";
import members from "../../constants";
import { features, services } from "../../constants";
import TeamMember from "../TeamMember";
import "./AboutUs.css";
import Feature from "../Feature";
import AboutButton from "../AboutButton";
import Service from "../Service";
import Team from "../Team/Team";

const AboutUs = () => {
  return (
    <div>
      <div className="about-hero-section w-full  ">
        <div
          style={{ paddingBottom: "5rem" }}
          className=" mx-auto grid md:grid-cols-2 hero-about-content"
        >
          <div className=" hero-about-text">
            <p
              style={{
                fontSize: "3rem",
                marginTop: "10.56rem",
                marginLeft: "6.125rem",
                color: "#F9F9F9",
                lineHeight: "4.56rem",
              }}
              className="about-hero-text font-body font-bold text-center md:text-left text-whiteTitle"
            >
              Empowering Your Digital <br /> Journey – A Decade of Design
              Excellence in Saskatoon
            </p>
            <p
              style={{
                marginLeft: "6.125rem",
                color: "#F9F9F9",
                fontWeight: "400",
                fontSize: "1rem",
                letter: "0.25px",
                lineHeight: "1.5rem",
              }}
              className="about-hero-text text-center md:text-left text-whiteTitle font-subTitle"
            >
              Transforming Urban Landscapes: Saskatoon's 10-Year Design Odyssey
            </p>
          </div>
          <img
            style={{ marginTop: "10.56rem" }}
            className="w-[500px] mx-auto my-4"
            src={person}
            alt="person"
          />
        </div>
      </div>

      

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={people} alt="/" />
          <div className="flex flex-col justify-center">
            <p
              style={{ fontSize: "2rem" }}
              className=" transform-text sm:text-3xl  font-bold text-left font-subTitle"
            >
              Transforming Urban Landscapes: Saskatoon's 10-Year Design Odyssey
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
                lineHeight: "1.625rem",
                letter: "0.25px",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              className=" md:text-left font-subTitle text-transform"
            >
              Welcome to a decade of design excellence where innovation meets
              urban evolution. At [Your Company Name], we take pride in our
              commitment to shaping Saskatoon's landscape through cutting-edge
              design solutions. Our journey has been marked by a relentless
              pursuit of excellence, leaving an indelible mark on the city's
              digital transformation.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "400",
                lineHeight: "1.625rem",
                letter: "0.25px",
                marginBottom: "3rem",
              }}
              className="text-transform font-subTitle"
            >
              Join us on this transformative journey, where design meets
              excellence, and together, we shape the future of Saskatoon.
            </p>

            <img className="line" src={line} alt="line" />
          </div>
        </div>
      </div>

      <div className="about-services w-full">
        <div className="about-services-left md:text-left">
          <p
            style={{
              fontSize: "2rem",
              lineHeight: "2.5rem",
              letter: "0.25px",
              color: "#F9F9F9",
            }}
            className="font-bold font-subTitle text-center md:text-left transform-text"
          >
            {" "}
            We are Dedicated to Pushing the Boundaries of Design and Automation
          </p>
          <div className="btn-services-container">
            <AboutButton
              someStyle="add-width"
              className="services-btn"
              text="Get started"
            />
          </div>
        </div>
        <div className="about-services-right">
          {services.map((service) => (
            <Service
              key={service.id}
              image={service.image}
              text={service.text}
              tittle={service.title}
            />
          ))}
        </div>
      </div>

      <div
        style={{ margin: "5rem 0", paddingBottom: "5rem" }}
        className="my-10"
      >
        <div className="about-achievements">
          <div>
            <img src={milestone1} alt="milestone" />
          </div>

          <div className="achievements-legacy">
            <img src={legacy2} alt="delivery" />
          </div>
          <div>
            <img src={relationship2} alt="delivery" />
          </div>
          <div className="achievements-legacy">
            <img src={delivery2} alt="delivery" />
          </div>
        </div>
      </div>

      <div className="about-team">
        <p
          style={{ fontSize: "3.5rem", color: "#F9F9F9" }}
          className="font-body font-bold"
        >
          Meet the Team{" "}
        </p>
        <Team />
      </div>

      <div className="about-values">
        <div>
          {" "}
          <p
            style={{ fontSize: "3.5rem", marginTop: "5rem" }}
            className="font-body font-bold text-6xl"
          >
            Values and Approach
          </p>
          <p
            style={{ fontSize: "1.125rem", marginTop: "1rem" }}
            className="font-normal font-subTitle"
          >
            {" "}
            Our approach combines cutting-edge technology with personalized
            strategies <br /> to deliver exceptional results.
          </p>
        </div>

        <img className="pseudo" src={pseudo} alt="pseudo" />
        <div className="about-features hover:scale-105 hover:shadow-xl duration-300 ">
          {features.map((feature) => (
            <Feature
              key={feature.id}
              image={feature.image}
              text={feature.text}
              tittle={feature.title}
            />
          ))}
        </div>
        <AboutButton text="Get started" />
      </div>
      {/* <div className="footer-img">
        <img className="footer" src={footer} alt="footer" />
      </div> */}
    </div>
  );
};

export default AboutUs;
