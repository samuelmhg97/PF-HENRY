import React from "react";
import { Link } from "react-router-dom";

function CreateUser() {
  return (
    <div>
      CreateUser
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default CreateUser;
