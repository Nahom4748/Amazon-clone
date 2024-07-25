import React, { useContext, useState } from "react";
import { auth } from "../utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../components/DataPrivider/DataProvider";
import "./auth.css";
import { Type } from "../utility/Action.type";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function Auth() {
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");
  const [displayName, SetdisplayName] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();

  const AuthHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      toast("Wait .....");

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.USER_AUTH,
            user: userInfo.user,
          });
          navigate("/");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: error.message,
          });
          console.log(error);
        });
    } else {
      toast("Wait for Sign up");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.USER_AUTH,
            user: userInfo.user,
          });
          Swal.fire("SignUp Completed !");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: error.message,
          });
          console.log(error);
        });
    }
  };

  return (
    <div className="auth">
      <div className="auth--logo">
        <img
          onClick={() => navigate("/")}
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt="Log_of Amazon"
        />
      </div>
      <div className="login_outer_container">
        <h1>Sign In</h1>
        <small>
          <b>Email or mobile phone number</b>
        </small>
        <form action="" className="login_form">
          <div className="input_email">
            <input
              value={email}
              onChange={(e) => Setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div className="input_password">
            <small>Password</small> <br />
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            className="Submit_button"
            name="signin"
            type="submit"
            onClick={AuthHandler}
          >
            Sign In
          </button>

          <div className="terms">
            <small>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </small>
          </div>
        </form>
      </div>
      <div className="sign_up_container">
        <small>New to Amazon?</small> <br />
        <button
          className="sign_up_btn"
          name="sugnUp"
          type="submit"
          onClick={AuthHandler}
        >
          Sign up
        </button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </div>
    </div>
  );
}

export default Auth;
