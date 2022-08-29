import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import NavBar from "../../../NavBar/NavBar";
import SocialMedia from "../../../SocialMedia/SocialMedia";

function DeleteUser() {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        EditMovie
        <Link to="/adminmenu" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default DeleteUser;
