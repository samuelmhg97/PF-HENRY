import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer--container">
      <div className="footer">
        <NavLink className="footer--link" to={""}>
          Terms {"&"} Conditions
        </NavLink>
        <NavLink className="footer--link" to={""}>
          About Us
        </NavLink>
        <NavLink className="footer--link" to={""}>
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
