import React from "react";

import logos from "../../Images/Images";
import iconSource from "../../Icons/iconSource.js";

import "./Header.css";

const logoCinema = logos[0].image;
const plusIcon = iconSource[2];
const userIcon = iconSource[4];

function Header() {
  return (
    <div className="header--container">
      <div className="header--menu--ico">
        <img src={plusIcon.image} alt={plusIcon.alt} />
      </div>

      <div className="header--logo--menu">
        <img src={logoCinema} />
      </div>

      <div className="header--user--ico">
        <img src={userIcon.image} alt={userIcon.alt} />
      </div>
    </div>
  );
}

export default Header;
