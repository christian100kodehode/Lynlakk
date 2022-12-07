import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-1">
          <a className="mail" href="mailto:post@lynlakk.no">
            Email: post@lynlakk.no
          </a>
          <p>Org. nr: 921811217 MVA</p>
        </div>
        <span className="line-vertical"></span>
        <div className="col-2">
          <a className="phone" href="Tel:95223314">
            Tel: 95223314
          </a>
          <p>Copyright 2022 @ Lynlakk AS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
