import React from "react";
import logoCL from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">
        <img className="navbar__logo" src={logoCL} alt="Logo moi" />
      </a>

      <div className="navbar__list">
        <ul>
          <li>
            <a href="#about">Qui suis-je</a>
          </li>
          <li>
            <a href="#realisations">Mes réalisations</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
