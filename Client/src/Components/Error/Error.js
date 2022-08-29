import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";

function Error() {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h1>Ups! something goes wrong!</h1>
        <Link to="/" className="go--back--button">
          <div>Go Back</div>
        </Link>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Error;
