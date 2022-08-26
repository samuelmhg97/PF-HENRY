import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";

import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";
import "./Home.css";

function Home() {

  return (

    <div>
      <SearchBar/>
      <Header />
      <Carrousel />
      <Billboard />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
