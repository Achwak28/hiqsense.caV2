import React, { useEffect } from "react";
import members from "../../constants";
import "./Team.css";
import AOS from "aos";
import 'aos/dist/aos.css'

const Team = () => {
  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])
  return (
    <div>
      <div className="about-team-member">
        <img data-aos="fade-up" className="w-[500px] " src={members[0].image} alt="/" />

        <img data-aos="fade-up"
          className="w-[500px] "
          style={{
            paddingTop: "9.5rem",
          }}
          src={members[0].description}
          alt="/"
        />
      </div>

      <div className="about-team-member about-team-member-reverse ">
        <img data-aos="fade-up" className="w-[500px] " src={members[1].image} alt="/" />

        <img data-aos="fade-up"
          style={{ paddingTop: "9.5rem" }}
          className="w-[500px] "
          src={members[1].description}
          alt="/"
        />
      </div>

      <div className="about-team-member">
        <img data-aos="fade-up" className="w-[500px] " src={members[2].image} alt="/" />

        <img data-aos="fade-up"
          className="w-[500px] "
          style={{
            paddingTop: "9.5rem",
          }}
          src={members[2].description}
          alt="/"
        />
      </div>

      <div className="about-team-member about-team-member-reverse ">
        <img data-aos="fade-up" className="w-[500px] " src={members[3].image} alt="/" />

        <img data-aos="fade-up"
          className="w-[500px] "
          style={{
            paddingTop: "9.5rem",
          }}
          src={members[3].description}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Team;
