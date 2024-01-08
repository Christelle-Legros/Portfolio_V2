import React, { useState } from "react";
import WwqVisuel from "../assets/WwqVisuel.png";
import LiveUpVisuel from "../assets/LiveUpVisuel.png";
import LuneticVisuel from "../assets/LuneticVisuel.png";
import ClWebVisuel from "../assets/ClWebVisuel.png";
import QuizDepartementsVisuel from "../assets/QuizDepartementsVisuel.png";
import Coverflow from "react-coverflow";
import ProjectModal from "./ProjectModal";

const Realisations = () => {
  const [selectedProject, setSelectedProject] = useState("");

  const fn = (index) => {
    setSelectedProject(index);
    console.log(selectedProject);
  };

  return (
    <div className="realisations" id="realisations">
      <p className="realisations__title">Mes réalisations</p>
      <div className="realisations__projectsContainer">
        {/* carrousel */}
        <Coverflow
          className="carrousel"
          width="1100"
          height="800"
          displayQuantityOfSide={2}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
          infiniteScroll={true}
          media={{
            "@media (max-width: 900px)": {
              width: "auto",
              height: "300px",
            },
            "@media (min-width: 900px)": {
              width: "auto",
              height: "600px",
            },
          }}
          currentFigureScale="1.7"
          handleSelect={(index) => {
            setSelectedProject(index);
          }}
        >
          <img
            src={LiveUpVisuel}
            alt="Live Up"
            data-action="https://christelle-legros.github.io/Liveup/#/"
            id="project1"
          />

          <img
            src={LuneticVisuel}
            alt="Lunetic"
            data-action="https://lunetic.fr/"
            id="project2"
          />
          <img
            src={WwqVisuel}
            alt="World Wild Quiz"
            data-action="https://christelle-legros.github.io/WorldWildQuiz/#/"
          />
          <img src={ClWebVisuel} alt="CLWeb" />
          <img
            src={QuizDepartementsVisuel}
            alt="Quiz departements"
            data-action="https://departements-quiz.netlify.app/"
          />
        </Coverflow>

        <div className="realisations__projectsContainer_description">
          <ol>
            <li>
              <span className="description_title">Live up</span> : Hackaton 30h
              environ : création d'un site fullstack (thème: musique) |{" "}
              <span className="description_tech">
                ReactJs, Express et MySql.
              </span>
            </li>
            <li>
              <span className="description_title">Lunetic</span> : Projet 3 Wild
              Code School : création d'un site fullstack |{" "}
              <span className="description_tech">
                ReactJs, Typescript, Express, MySql, Sass.
              </span>
            </li>
            <li>
              <span className="description_title">World Wild Quiz</span> :
              Projet 2 Wild Code School : création d'un quiz et d'un memory en
              faisant appel à une API |{" "}
              <span className="description_tech">React JS - CSS.</span>
            </li>
            <li>
              <span className="description_title">CL Web</span> : Création d'un
              site vitrine |{" "}
              <span className="description_tech">WordPress (Elementor).</span>
            </li>
            <li>
              <span className="description_title">Quiz departements</span> :
              Création d'un quiz en faisant appel à 2 API |
              <span className="description_tech">React JS - Sass.</span>
            </li>
          </ol>
        </div>

        {/* <ProjectModal description="Hackaton de 40h dans le cadre de ma formation à la Wild Code School" /> */}

        {/* VERSION 1 */}
        {/* <div className="realisations__projects" id="realisations__wwqProject">
          <a
            href="https://christelle-legros.github.io/WorldWildQuiz/#/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WwqVisuel} alt="Screenshot World Wild Quiz" />

            <p>
              Projet 2 Wild Code School : création d'un quiz et d'un memory avec
              ReactJs en faisant appel à une API.
            </p>
          </a>
        </div>
        <div
          className="realisations__projects"
          id="realisations__liveUpProject"
        >
          <a
            href="https://christelle-legros.github.io/Liveup/#/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LiveUpVisuel} alt="Screenshot Live Up" />
            <p>
              Hackaton 30h environ : création d'un site fullstack (thème:
              musique) avec : ReactJs, Express et MySql.
            </p>
          </a>
        </div>
        <div className="realisations__projects" id="luneticProject">
          <a href="https://lunetic.fr/" target="_blank" rel="noreferrer">
            <img src={LuneticVisuel} alt="Screenshot Lunetic" />
            <p>
              Projet 3 Wild Code School : création d'un site fullstack avec
              utilisation de ReactJs, Typescript, Express, MySql, Sass.
            </p>
          </a>
        </div>
        <div className="realisations__projects" id="clwebProject">
          <a
            href="https://christellelegros-web.fr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ClWebVisuel} alt="Screenshot ClWeb" />
            <p>
              Création d'un site vitrine en utilisant WordPress (Elementor).
            </p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Realisations;
