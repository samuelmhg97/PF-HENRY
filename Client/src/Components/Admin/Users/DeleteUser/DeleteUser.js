import React from "react";
import { Link } from "react-router-dom";

function DeleteUser() {
  return (
    <div>
      DeleteUser
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default DeleteUser;
