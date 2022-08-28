import React from "react";
import { Link } from "react-router-dom";

function BanUser() {
  return (
    <div>
      BanUser
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default BanUser;
