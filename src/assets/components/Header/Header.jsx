// export default Header;
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
