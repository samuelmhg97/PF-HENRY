import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--links--container">
        <div className="footer--links">
          <NavLink to={""}>Terms {"&"} Conditions</NavLink>
        </div>
        <div className="footer--links">
          <NavLink to={""}>About Us</NavLink>
        </div>
        <div className="footer--links">
          <NavLink to={""}>Contact Us</NavLink>
        </div>
        <div className="footer--links">
          <NavLink to={"/adminmenu"}>TEMPORAL ADMIN MENU ACCESS</NavLink>
        </div>
      </div>

      <div className="copyright">
        <p> © Copyright 2022 M A N S E D web design </p>
      </div>
    </div>
  );
}

export default Footer;
