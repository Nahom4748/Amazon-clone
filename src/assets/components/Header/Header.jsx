// src/Header.js

import React from "react";
import Headercss from "./Header.module.css"; // Import your CSS file for styling
import { IoLocationOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <div className={Headercss.Header}>
      <div className={Headercss.Header_left_logos}>
        {/* <div className={Headercss.Header_logo}> */}
        <a className={Headercss.Header_logo} href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </a>
        {/* </div> */}
        <div className={Headercss.Header_location}>
          <div className={Headercss.Header_location_container}>
            <div className={Headercss.Header_location_logo}>
              <a href="#">
                <IoLocationOutline className={Headercss.custom_icon} />
              </a>
            </div>
            <div className={Headercss.Header_deliver}>
              <small>Deliver to</small>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
      <button>All</button>

      <input
        className={Headercss.midle}
        type="text"
        placeholder="Search from amazon"
      />
    </div>
  );
};

export default Header;
