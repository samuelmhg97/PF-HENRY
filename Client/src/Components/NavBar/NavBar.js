import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import "./Navbar.css"

function NavBar() {
  const categories = [{
    image: "https://flyclipart.com/thumb2/mobile-menu-icon-png-40149.png",
    alt: "Categorie"
  }]
  const logo = [{
    image: "https://img.freepik.com/vector-premium/logo-cine_23-2147503279.jpg?1&w=740",
    alt: "logo"
  }]
  const LoginLogo = [{
    image: "https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg",
    alt: "login"
  }]
  return (
  <div className="NavBar-container">
    <select className="NavBar-menu">
      <option className="">Categories</option>
      <option className="">Promotions</option>
      <option className="">Acerca De</option>
      <option className="">Ayuda</option>
      <option className="">Log In</option>
      <option className="">Register</option>
    </select>
    <SearchBar/>
    {/* {logo?.map((logo, key)=>{
      return(
        <img className="Searchlogo" src={logo.image} alt={logo.alt} key={key} />
      )
    })} */}
    {/* <img className="" alt="LogIn-logo"/> */}
    {/* {LoginLogo?.map((LoginLogo, key)=>{
      return(
        <img className="Searchlogin" src={LoginLogo.image} alt={LoginLogo.alt} key={key} />
      )
    })} */}
  </div>
  );
}

export default NavBar;
