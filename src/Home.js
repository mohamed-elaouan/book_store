import "./App.css";
import "./Compenent/Themes.css";
import Header from "./Compenent/Header";
import Footer from "./Compenent/Footer";
import Loading from "./Compenent/loading";
import MainCon from "./Compenent/ContentMain";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase/Config";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (user && user.emailVerified) {
    return (
      <div>
        <Helmet>
          <title>Home-Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Header></Header>
        {user && (
          <div className="d-flex justify-content-center home ">
            <h1>
              Welcome : {user.displayName}... <span className="love">🧡</span>
            </h1>
          </div>
        )}

        <Footer></Footer>
      </div>
    );
  }
  if (user && !user.emailVerified) {
    return (
      <div>
        <Helmet>
          <title>SignUp</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Header></Header>
        <div>
          <div className="d-flex flex-column justify-content-center home ">
            <h3>
              Please Vérifie Your Email adress : {user.displayName}...{" "}
              <span className="love">🧡</span>
            </h3>
            <br />
            <button
              onClick={() => {
                sendEmailVerification(auth.currentUser).then(() => {
                  // Email verification sent!
                  // ...
                });
              }}
              className="btn btn-danger"
            >
              Send again
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <Helmet>
          <title>Home-Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        {/* <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100wv", height: "100vh" }}
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> */}
        <Loading />
      </div>
    );
  }
  if (!user) {
    return (
      <div>
        <Helmet>
          <title>Home-Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Header></Header>
        <div
          style={{ width: "100wv", height: "70vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <h4>
            Please{" "}
            <Link className="text-danger fw-bolder" to="/SignIn">
              SignIn
            </Link>
            ,
            <Link className="text-primary fw-bolder" to="/SignUp">
              SignUp
            </Link>{" "}
            to Continue ....
          </h4>
        </div>

        <Footer></Footer>
      </div>
      
    );
  }
}

export default Home;
