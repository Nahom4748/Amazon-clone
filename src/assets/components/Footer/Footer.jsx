import React from "react";
import "./footer.css";

import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footerMain">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="footer logo"
        className="footerLogo"
      />

      <ul>
        <li>Australia</li>
        <li>Brazil</li>
        <li>Canada</li>
        <li>America</li>
        <li>China</li>
        <li>Riussia</li>
        <li>India</li>
        <li>Spain</li>
      </ul>

      <ul>
        <li>Conditions of Use & sale</li>
        <li>Privacy Notice</li>
        <li>Internet-based ads</li>
        <li>Amazon-clone</li>
      </ul>

      <div className="myLogo">
        <h3>
          This project is built by{" "}
          <span className="spanName">Nahom Hambissa</span>
        </h3>
        <a href="#" target="blank">
          <LinkedInIcon className="icons" />
        </a>
        <LanguageIcon className="icons" />
      </div>
    </div>
  );
}

export default Footer;
