import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer">
        <div className="footer--terms">
          <NavLink to={""}>Terms {"&"} Conditions</NavLink>
        </div>
        <div className="footer--about">
          <NavLink to={""}>About Us</NavLink>
        </div>
        <div className="footer--contact">
          <NavLink to={""}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
