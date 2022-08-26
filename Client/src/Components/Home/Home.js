import React from "react";
import Carrousel from "../Carrousel/Carrousel";
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
    </div>
  );
}

export default Home;
