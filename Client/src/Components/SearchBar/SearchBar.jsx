import React from "react";
import "../SearchBar/SearchBar.css"
function SearchBar() {

  const logo = [{
    image: "https://img.freepik.com/vector-premium/logo-cine_23-2147503279.jpg?1&w=740",
    url: "https://www.page.com.ar",
    alt: "logo"
  }]
  const LoginLogo = [{
    image: "https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg",
    url: "https://www.page.com.ar",
    alt: "login"
  }]
  return (
  <div className="SearchBar-container">
    <select>
      <option className="">Categories</option>
      <option className="">Promotions</option>
      <option className="">Acerca De</option>
      <option className="">Ayuda</option>
      <option className="">Log In</option>
      <option className="">Register</option>
    </select>
    {logo?.map((logo, key)=>{
      return(
        <img className="Searchlogo" src={logo.image} alt={logo.alt} key={key} />
      )
    })}
    <div>
      <input className="" type="text" placeholder="Search..."></input>
      <button className=""></button>
    </div>
    {/* <img className="" alt="LogIn-logo"/> */}
    {LoginLogo?.map((LoginLogo, key)=>{
      return(
        <img className="Searchlogin" src={LoginLogo.image} alt={LoginLogo.alt} key={key} />
      )
    })}
  </div>
  );
}

export default SearchBar;
