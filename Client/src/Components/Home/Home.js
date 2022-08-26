import React from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";

function Home() {
  React.useEffect(() => {
    console.log("render home");
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <Carrousel />
      <Billboard />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
