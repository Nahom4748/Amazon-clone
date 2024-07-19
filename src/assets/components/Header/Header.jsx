// src/Header.js

import React, { useContext } from "react";
import Headercss from "./Header.module.css"; // Import your CSS file for styling
import { IoLocationOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from "@mui/icons-material/Search";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../../components/DataPrivider/DataProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [state, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className={Headercss.fixed}>
      <div className={Headercss.Header}>
        <div className={Headercss.Header_left_logos}>
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
        <select name="" id="" className={Headercss.option}>
          <option value="all">All</option>
          <option value="volvo">All Department</option>
          <option value="saab">Art Craft</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>

        <input
          className={Headercss.midle}
          type="text"
          placeholder="Search amazon"
        />
        <SearchIcon sx={{ fontSize: 39 }} className={Headercss.search} />
        <div className={Headercss.right}>
          <div className={Headercss.in}>
            <a href="" className={Headercss.right_inner}>
              <img
                className={Headercss.flag}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/188px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="" className={Headercss.lang}>
                <option value="">EN</option>
              </select>
            </a>
          </div>
          <div className={Headercss.hello}>
            <p>hello, sign in </p>
            <p className={Headercss.BOLD}>Account & List</p>
          </div>
          <div className={Headercss.hello}>
            <p>Returns </p>
            <p className={Headercss.BOLD}>& Order</p>
          </div>
          <div
            onClick={() => navigate("/carts")}
            className={Headercss.cart_box}
          >
            <BiCart className={Headercss.cart} />
            <div className={Headercss.counter}>
              <span>{state.basket.length}</span>
            </div>

            <div className={Headercss.crt}>
              <span className={Headercss.BOLD}>Cart</span>
            </div>
          </div>
        </div>
      </div>
      {/* <LowerHeader /> */}
    </div>
  );
};

export default Header;
