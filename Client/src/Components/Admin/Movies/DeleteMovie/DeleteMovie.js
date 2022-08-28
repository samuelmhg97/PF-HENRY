import React from "react";
import { Link } from "react-router-dom";

function DeleteMovie() {
  return (
    <div>
      DeleteMovie
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default DeleteMovie;
