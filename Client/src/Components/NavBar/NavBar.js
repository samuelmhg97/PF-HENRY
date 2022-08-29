import React from "react";
import "./Navbar.css";

function NavBar() {
  const categories = [
    {
      image: "https://flyclipart.com/thumb2/mobile-menu-icon-png-40149.png",
      alt: "Categorie",
    },
  ];

  return (
    <div className="SearchBar-container">
      <select className="SearchBar-menu">
        <option className="">Categories</option>
        <option className="">Promotions</option>
        <option className="">Acerca De</option>
        <option className="">Ayuda</option>
        <option className="">Log In</option>
        <option className="">Register</option>
      </select>

      <div>
        <input
          className="SearchBar-input"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="SearchBar-btn">Icons</button>
      </div>
    </div>
  );
}

export default NavBar;
