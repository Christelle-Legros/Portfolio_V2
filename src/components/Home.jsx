import React from "react";
import logoCL from "../assets/logo.png";
import videoBackground from "../assets/UrsuiaLever.mp4";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__backvideo">
        <video autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>
      <img src={logoCL} alt="Logo CL" />
    </div>
  );
};

export default Home;
