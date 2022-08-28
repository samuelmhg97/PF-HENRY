import React from "react";
import { Link } from "react-router-dom";

function ResetUserPassword() {
  return (
    <div>
      ResetUserPassword
      <Link to="/adminmenu" className="go--back--button">
        <div>Go Back</div>
      </Link>
    </div>
  );
}

export default ResetUserPassword;
