import {React} from "react";
import Carrousel from "../Carrousel/Carrousel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import SocialMedia from "../SocialMedia/SocialMedia";
import Billboard from "./../Billboard/Billboard";
import "./Home.css";

import { useAuth } from "../Context/authContext";
import {useNavigate} from "react-router-dom"

function Home() {

  const {user, logOut} = useAuth()
  console.log(user)

  const navigate = useNavigate()


  const handleLogOut = async () => {
    await logOut();
    navigate("/login")
  }
  return (

    <div>
      <Header />
      <Carrousel />
      <Billboard />
      <button onClick={handleLogOut}>Log Out</button>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default Home;
