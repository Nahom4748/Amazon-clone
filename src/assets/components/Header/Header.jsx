// // src/Header.js

// import React, { useContext } from "react";
// import Headercss from "./Header.module.css"; // Import your CSS file for styling
// import { IoLocationOutline } from "react-icons/io5";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SearchIcon from "@mui/icons-material/Search";
// import { BiCart } from "react-icons/bi";
// import { DataContext } from "../../components/DataPrivider/DataProvider";
// import { useNavigate } from "react-router-dom";
// import NavigationBar from "./NavigationBar";

// const Header = () => {
//   const [{ basket, user }, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();

//   return (
//     <div className={Headercss.all_header_container}>
//       <div className={Headercss.fixed}>
//         <div className={Headercss.Header}>
//           <div className={Headercss.Header_left_logos}>
//             <a className={Headercss.Header_logo} href="/">
//               <img
//                 src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//                 alt=""
//               />
//             </a>
//             <div className={Headercss.Header_location}>
//               <div className={Headercss.Header_location_container}>
//                 <div className={Headercss.Header_location_logo}>
//                   <a href="#">
//                     <IoLocationOutline className={Headercss.custom_icon} />
//                   </a>
//                 </div>
//                 <div className={Headercss.Header_deliver}>
//                   <small>Deliver to</small>
//                   <span>Ethiopia</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <select name="" id="" className={Headercss.option}>
//             <option value="all">All</option>
//             <option value="volvo">All Department</option>
//             <option value="saab">Art Craft</option>
//             <option value="opel">Opel</option>
//             <option value="audi">Audi</option>
//           </select>

//           <input
//             className={Headercss.midle}
//             type="text"
//             placeholder="Search amazon"
//           />
//           <SearchIcon sx={{ fontSize: 39 }} className={Headercss.search} />
//           <div className={Headercss.right}>
//             <div className={Headercss.in}>
//               <a href="" className={Headercss.right_inner}>
//                 <img
//                   className={Headercss.flag}
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/188px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
//                   alt=""
//                 />
//                 <select name="" id="" className={Headercss.lang}>
//                   <option value="">EN</option>
//                 </select>
//               </a>
//             </div>
//             <div onClick={() => navigate("/Auth")} className={Headercss.hello}>
//               {user ? (
//                 <>
//                   <p className={Headercss.user_login}>
//                     Well Come <br />
//                     {user.email}
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <p>hello, sign in </p>
//                   <p className={Headercss.BOLD}>Account & List</p>
//                 </>
//               )}
//             </div>
//             <div className={Headercss.hello}>
//               <p>Returns </p>
//               <p className={Headercss.BOLD}>& Order</p>
//             </div>
//             <div
//               onClick={() => navigate("/carts")}
//               className={Headercss.cart_box}
//             >
//               <BiCart className={Headercss.cart} />
//               <div className={Headercss.counter}>
//                 <span>{basket.length}</span>
//               </div>

//               <div className={Headercss.crt}>
//                 <span className={Headercss.BOLD}>Cart</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <NavigationBar className={Headercss.additional_header} />
//     </div>
//   );
// };

// export default Header;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
// import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
// import LowerHeader from "./LowerHeader.jsx";
// import { DataContext } from "../DataProvider/DataProvider";

// src/Header.js

// import React, { useContext } from "react";
import Headercss from "./Header.module.css"; // Import your CSS file for styling
// import { IoLocationOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
// import SearchIcon from "@mui/icons-material/Search";
import { BiCart } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import { DataContext } from "../../components/DataPrivider/DataProvider";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../../utility/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  console.log(user);
  const navigate = useNavigate();
  const [logouts, setlog] = useState(false);
  const logout = () => {
    logouts ? setlog(false) : setlog(true);
  };
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo  section*/}
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              {/* delevery */}

              <div className={classes.delevery}>
                <span>
                  <SlLocationPin />
                </span>
                <div className={classes.delivery_txts}>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search section */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Amazon" />
              {/* icon */}
              <BsSearch size={46} />
            </div>

            {/* Other serach*/}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/188px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt=""
                />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to={!user && `/auth`}>
                {user ? (
                  <div onClick={logout} className={classes.imgProfile}>
                    <FaUserCircle size={35} /> <br />
                    <small>{user?.email.split("@")[0]}</small>
                  </div>
                ) : (
                  <>
                    <span>Sign In</span> <br />
                    <span>Account & Lists</span>
                  </>
                )}
              </Link>
              {logouts ? (
                <div className={classes.userinfo}>
                  <div className={classes.userdetail}>
                    <div className={classes.userflex}>
                      <div>
                        <small>Email :{user?.email}</small>
                      </div>
                      <div>
                        <small>User Name : {user?.email.split("@")[0]}</small>
                      </div>
                      <div
                        onClick={() => {
                          auth.signOut();
                          navigate("/");
                          setlog(false);
                        }}
                        className={classes.logoicon}
                      >
                        <LogoutIcon />
                        <spam> Logout</spam>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <Link to="/orders">
                <span>Returns</span>
                <br />
                <span>& Orders</span>
              </Link>
              <Link to="/carts" className={classes.cart}>
                <BiCart size={35} />
                <span>{basket.length}</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <NavigationBar />
    </>
  );
}

export default Header;
