import React from "react";
import "./AboutMap.css";

const AboutMap = () => {
  return (
    <div className="AboutMap" id="omoss">
      <h2>Besøk</h2>
      <span className="line"></span>
      <div className="Container">
        {/* Loading Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2067.8850321163322!2d5.615235600000007!3d58.782347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a47edcf2ea0a9%3A0x215642cf644e0649!2sLynlakk!5e0!3m2!1sen!2sno!4v1667318381124!5m2!1sen!2sno"
          width="100%"
          height="240"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="MapInfo">
          <p>Besøk oss rett ved Klepp Mek, kjør av fra Solavegen inn til Verdalen og så til Rognevegen 6. Samme bygg som Akershus Traktor.</p>
          <p>
            Ta{" "}
            <a href="https://lynlakk.no/sendForm/index.php" target="_blank" rel="noreferrer">
              kontakt
            </a>{" "}
            for prisoverslag!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMap;
