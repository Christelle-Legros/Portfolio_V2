import React from "react";
import cvVisuel from "../assets/cvVisuel22.png";
import cv from "../assets/cv_2022.pdf";
import TypeWriterEffect from "react-typewriter-effect";

const About = () => {
  return (
    <div className="about" id="about">
      <p className="about__title">Qui suis-je ?</p>
      <div className="about__text">
        <p>
          Après 21 années en tant qu'assistante du service technique d'un
          laboratoire pharmaceutique au Pays-Basque, il était temps de donner un
          nouveau souffle à ma carrière, dans un domaine qui me fait vibrer
          depuis toujours : l'informatique.
        </p>
        <br />
        <p>
          Virage à 90° en 2021 : je m'engage pleinement dans une reconversion
          professionnelle dans le développement web. <br />
          Au sein de la Wild Code School, je suis une formation aussi intense et
          exigeante que passionnante.
        </p>
        <p>
          Les technologies que j'utilise :
          <ul>
            <li>
              <span className="subtitles">Côté frontend :</span> HTML - CSS et
              SASS - Javascript - ReactJs
            </li>
            <li>
              <span className="subtitles">Côté backend : </span>MySql - Express
              - NodeJs
            </li>
            <li>
              <span className="subtitles">Autres outils : </span>GitHub -
              Postman - VsCode...
            </li>
          </ul>
        </p>{" "}
        <br />
        <p>
          Mais bien évidemment, je suis prête à travailler sur toute nouvelle
          technologie !
        </p>
        <br />
        <TypeWriterEffect
          textStyle={{
            fontSize: "1em",
            fontWeight: "300",
            textAlign: "justify",
          }}
          startDelay={100}
          cursorColor="black"
          text="La suite, c'est avec vous que je vais l'écrire..."
          typeSpeed={80}
          // scrollArea={myAppRef}
        />
      </div>
      <div className="about__cvVisuel">
        <a href={cv} target="_blank" rel="noreferrer">
          <img src={cvVisuel} alt="Visuel du cv" />
        </a>
      </div>
    </div>
  );
};

export default About;
