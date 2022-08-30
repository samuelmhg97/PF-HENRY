import React from "react";

import {Link} from "react-router-dom"


import logos from "../../Images/Images";
import iconSource from "../../Icons/iconSource.js";

import "./Header.css";

const logoCinema = logos[0].image;
const plusIcon = iconSource[2];
const userIcon = iconSource[4];

function Header() {
  return (
    <div className="header--container">
      <div className="header">
        <div className="header--menu--ico">
          <img src={plusIcon.image} alt={plusIcon.alt} />
        </div>

        <div className="header--logo--menu">
          <Link to={"/"}>
            <img src={logoCinema} />
          </Link>
        </div>

        <div className="header--user--ico">
        <Link to ="/login">
          <img src={userIcon.image} alt={userIcon.alt} />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
