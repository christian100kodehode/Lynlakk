import React from "react";
import "./About.css";
import service1 from "./images/services1small.png";
import service2 from "./images/services2.png";
import service3 from "./images/services3.png";

import { Element } from "react-scroll";

const About = () => {
  return (
    <div className="about" id="tjenester">
      <div className="container">
        <h2>Tjenester</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={service1} alt="Service1" />
            <p>Smart Repair</p>
            <p>
              <span>Rimelig og rask reperasjon av skader på bil og MC.</span>
            </p>
            <p>Få det fikset før rusten kommer.</p>
          </div>

          <div className="card">
            <img src={service2} alt="Foliering" />
            <p>Foliering.</p>
            <p>
              <span>Ta hele bilen eller deler.</span>
            </p>
            <p>Rimelig løsning som kan gjøres raskt, kommer i starten av 2023. Ta kontakt viss interesse eller spørsmål.</p>
          </div>
          <div className="card">
            <img src={service3} alt="Custom design" />
            <p>Spesial design.</p>
            <p>
              <span>Custom design til Bil/MC.</span>
            </p>
            <p>Ta kontakt for en prat om designet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
