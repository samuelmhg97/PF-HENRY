import React from "react";
import { Link } from "react-router-dom";

function EditMovie() {
  return (
    <div>
      EditMovie
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default EditMovie;
