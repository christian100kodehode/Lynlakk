import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>Uhellet ute?</p>
        <p>Smart Repair - Lakkering av Bil / MC</p>
        <p>Foliering av hel eller deler av bil fra neste år (2023) !</p>
        <p>Vi fikser raskt og effektivt!</p>

        <a className="mobileButton" href="Tel:95223314" target="_blank" rel="noreferrer">
          <button className="button"> Ring oss</button>
        </a>

        <a className="desktopButton" href="https://lynlakk.no/sendForm/index.php" target="_blank" rel="noreferrer">
          <button className="button"> Kontakt oss</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
