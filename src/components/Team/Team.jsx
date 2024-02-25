import React from "react";
import members from "../../constants";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <div className="about-team-member">
        <img className="w-[500px] " src={members[0].image} alt="/" />

        <img
          className="w-[500px] "
          style={{
            paddingTop: "9.5rem",
          }}
          src={members[0].description}
          alt="/"
        />
      </div>

      <div className="about-team-member about-team-member-reverse ">
        <img className="w-[500px] " src={members[1].image} alt="/" />

        <img
          style={{ paddingTop: "9.5rem" }}
          className="w-[500px] "
          src={members[1].description}
          alt="/"
        />
      </div>

      <div className="about-team-member">
        <img className="w-[500px] " src={members[2].image} alt="/" />

        <img
          className="w-[500px] "
          style={{
            paddingTop: "9.5rem",
          }}
          src={members[2].description}
          alt="/"
        />
      </div>

      <div className="about-team-member about-team-member-reverse ">
        <img className="w-[500px] " src={members[3].image} alt="/" />

        <img
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
