import React from "react";
import "./Video.css";
import { useState } from "react";
import workdetails from "./images/workdetail.jpg";
import workdetails2 from "./images/workdetail2.jpg";
import workdetails3 from "./images/workdetail3.jpg";

function Video() {
  // Setting up the state to show/hide contents
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="infoContainer">
      <p className="moreText">
        Lynlakk eies og driftes av Even Stangeland Westbye. Fagbrev i Billakkering ble bestått i år 2005, han har lang fartstid i yrket og har
        opparbeidet seg mange gode ferdigheter innen faget. {<br />}
        {<br />}
        Smart repair lakkering holder kostnaden din nede som kunde. Enhver skade er forskjellig, og best mulig måte å reparere denne blir fagmessig
        vurdert, for å få mest valuta for pengene og et godt resultat! Ofte trenger ikke hele delen lakkeres, og med gode produkter sikrer det deg et
        holdbart resultat. {<br />}
        {<br />}Har du en skade som skulle vært utbedret? Leasing bil som skal inn etter endt leasing periode? Skjemmende steinsprut / riper?
        Forhindre rust med å få dette utbedret.
      </p>
      <div className="imageContainer">
        <img className="workImages" src={workdetails3} alt="Work details" />
      </div>
    </div>
  );

  const linkName = readMore ? "Mindre om Lynlakk <<" : "Mer om Lynlakk >>";

  return (
    <div id="video" className="video">
      <div className="container">
        <div className="col-1">
          <p>Lynlakk A/S</p>
          <p>Lokalisert i Verdalen, Klepp.</p>
          <p>Besøk oss eller ring idag for en profesjonell utført jobb.</p>
          <a href="Tel:95223314" target="_blank" rel="noreferrer">
            <button className="button"> Ring oss</button>
          </a>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/hqwL0ew6aZY?controls=0"
            title="Lynlakk Video"
            frameBorder={"0"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div></div>
      </div>
      <a
        className="read-more-link"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h4>
          {linkName}
          <span className="line"></span>
        </h4>
      </a>
      {readMore && extraContent}
    </div>
  );
}

export default Video;
