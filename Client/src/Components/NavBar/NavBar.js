import React from "react";

import { SearchBar } from "./SearchBar/Searchbar";
import "./Navbar.css"
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";


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
  const {user, logOut} = useAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    await logOut();
    navigate("/login")
  }
  return (
  <div className="NavBar-container">
    <div className="NavBar-username">
      {user && (
        <div className="User-Id">
          <p className="User-optionesname">Bienvenido {user.email}</p>
          <button className="User-optionsbtn" onClick={(e) => handleLogOut(e)}>Log Out</button>
      </div>
      )}
    </div>
    <div className="NavBar-items">
    {/* <select className="NavBar-menu">
      <option className="">Categories</option>
      <option className="">Promotions</option>
      <option className="">Acerca De</option>
      <option className="">Ayuda</option>
      <option className="">Log In</option>
      <option className="">Register</option>
    </select> */}
    <SearchBar/>
    </div>
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