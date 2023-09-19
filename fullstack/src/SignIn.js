import "./App.css";
import "./Compenent/Themes.css";
import Header from "./Compenent/Header";
import Footer from "./Compenent/Footer";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigation } from "react-router-dom";

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./Firebase/Config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [e, sete] = useState(" ");
  const [eReset, seteReset] = useState("");
  const [p, setp] = useState("");
  const [Close, setClose] = useState("");
  const [check, setcheck] = useState(false);
  const [error, seterror] = useState(" ");
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>SignIn</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Header></Header>
      <div className="mere">
        <form action="" id="forgetPsW" className={`forgetPsW ${Close}`}>
          <div className="close">
            <i
              className="fa-solid  fa-xmark fa-lg iclose"
              onClick={() => {
                setClose("HideForm");
                // let cls = document.querySelector("#forgetPsW");
                // cls.setAttribute(
                //   "style",
                //   "scale:0.4;transition: 0.5s;"
                // );
              }}
            ></i>
          </div>
          <h4>Forget PassWord :</h4>
          <input
            required
            onChange={(eo) => {
              seteReset(eo.target.value);
            }}
            className="txt EmailTxt"
            type="email"
            placeholder="Tapez Votre Email"
            name="email"
          />
          <button
            className="btn btn-primary"
            onClick={(eo) => {
              eo.preventDefault();
              const Emailtxt = document.querySelector(".EmailTxt");

              sendPasswordResetEmail(auth, eReset)
                .then(() => {
                  // @ts-ignore
                  if (Emailtxt.value) {
                    setcheck(true);
                  }
                  console.log("Opetation Success");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // ..
                });
            }}
          >
            Reset Email
          </button>
          <br />
          <p id="TxtReset" style={{ color: "red" }}>
            {check && <b>Please Check your Email to reset your Passeword</b>}
          </p>
        </form>
        <br />
        <form
          className="form"
          onSubmit={(eo) => {
            eo.preventDefault();
          }}
        >
          <h1>Login : </h1>
          <br />
          <input
            required
            className="txt"
            type="email"
            onChange={(eo) => {
              sete(eo.target.value);
            }}
            placeholder="Your Email"
            name="email"
          />

          <input
            required
            className="txt"
            type="password"
            onChange={(eo) => {
              setp(eo.target.value);
            }}
            placeholder="Your Password"
            name="PassWord"
          />
          <p className="text-danger fw-bold">{error}</p>
          <div>
            <button
              className="btnLogin btn btn-primary"
              onClick={(eo) => {
                signInWithEmailAndPassword(auth, e, p)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterror(errorCode);
                  });
              }}
              type="submit"
            >
              Login
            </button>

            <h5>
              Forget
              <input
                type="button"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
                onClick={() => {
                  setClose("ShowForm");
                  // let cls = document.querySelector("#forgetPsW");
                  // let mere = document.querySelector(".mere");
                  // cls.setAttribute(
                  //   "style",
                  //   "Display:flex ;transition: all 0.7s;animation: AnimateOpen ease-in-out 1s;"
                  // );
                }}
                value="PassWord"
                className="link-warning Link bold"
              />
            </h5>
          </div>
          <NavLink
            className="Link bold"
            style={{ fontWeight: "bold" }}
            to="/SignUp"
          >
            Register ..
          </NavLink>
        </form>
      </div>
      <Footer></Footer>
      <div className="forgetPsw">
        <div></div>
      </div>
    </div>
  );
};

export default SignIn;
