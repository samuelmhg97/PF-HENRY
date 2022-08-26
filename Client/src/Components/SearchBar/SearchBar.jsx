import React from "react";

function SearchBar() {
  return (
  <div className="SearchBar-container">
    <select>
      <label className="">Categories</label>
      <label className="">Promotions</label>
      <label className="">Acerca De</label>
      <label className="">Ayuda</label>
      <label className="">Log In</label>
      <label className="">Register</label>
    </select>
    <img className="SearchBar-logo" alt="Logo"/>
    <div>
      <input className="" type="text" placeholder="Search..."></input>
      <button className=""></button>
    </div>
    <img className="" alt="LogIn-logo"/>
  </div>
  );
}

export default SearchBar;
