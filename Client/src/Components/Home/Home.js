import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";

function Home() {

  return (
    <div>
      <SearchBar/>
      <h2>Home</h2>
      <Carrousel />
      <Billboard />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
