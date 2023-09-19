import React from "react";
import "../Compenent/Themes.css"


const ContentMain = ({NomPage}) => {

  return (
  <div className="Content">
    <h3>Page : <b>{NomPage}</b></h3>
  </div>
  );
};

export default ContentMain;
