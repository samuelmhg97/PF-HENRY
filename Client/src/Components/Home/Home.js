import {React} from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";
import "./Home.css";

// import { useAuth } from "../Context/auth";

function Home() {

  //const authContext = useAuth()
  //console.log(authContext)
  return (

    <div>
      <Header />
      <Carrousel />
      <Billboard />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
