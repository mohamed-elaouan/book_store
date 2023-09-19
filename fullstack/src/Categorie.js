import React from "react";
import Header from "./Compenent/Header";
import Footer from "./Compenent/Footer";
import MainCon from "./Compenent/ContentMain";
import "./Compenent/Themes.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase/Config";
import Loading from "./Compenent/loading";
import { useAuthState } from "react-firebase-hooks/auth";
const Categorie = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if (user && user.emailVerified) {
    return (
      <div>
        <Helmet>
          <title>Catégories</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Header></Header>
        <MainCon NomPage="Catégories" />
        <Footer></Footer>
      </div>
    );
  }
  if (user && !user.emailVerified) {
    return navigate("/");
  }
  if (loading) {
    return (
      <div>
        <Helmet>
          <title>Home-Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Loading />
      </div>
    );
  }
  if (!user) {
    return navigate("/");
  }
};

export default Categorie;
