import React from 'react';
import "../App.css"
import "../Compenent/Themes.css"
import { useContext } from "react";
import ThemeContext from "../Context/DataContext";
const Footer = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <div className={`Pier ${theme}`}>
      <div className=" text-white">
        <p className="text-center p-4 m-0"><b>My Application React & Firebase</b></p>
      </div>
    </div>
  );
}

export default Footer;
