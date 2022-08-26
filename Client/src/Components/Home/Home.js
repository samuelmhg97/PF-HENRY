import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";
import "./Home.css";

function Home() {
  React.useEffect(() => {
    console.log("render home");
  }, []);

  return (
    <div className="home--container">
      <Header />
      <Carrousel />
      <Billboard />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
