import React from "react";
import Billboard from "./../Billboard/Billboard";

function Home() {

  React.useEffect(() => {
    console.log('render home')
  },[])

  return (
    <div>
      <h2>Home</h2>
      <Billboard />
    </div>
  )
}

export default Home;
