import { React } from "react";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Carrousel from "../Carrousel/Carrousel";
import Billboard from "./../Billboard/Billboard";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";

import "./Home.css";

import { useAuth } from "../Context/authContext";

function Home() {
  return (
    <div className="home--container">
      <br />
      <Header />
      <br />
      <NavBar />
      <br />
      <Carrousel />
      <br />
      <Billboard />
      <br />
      <SocialMedia />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
