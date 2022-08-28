import React from "react";
import "./AdminMenu.css";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="admin--menu--container">
      <div className="admin--menu--header">
        <h1>Admin Menu</h1>
      </div>
      <br />
      <div className="admin--menu--movie--options">
        <h2>Movies</h2>
        <br />
        <Link to="/adminmenu/createmovie">
          <div className="admin--button">Create Movie</div>
        </Link>
        <Link to="/adminmenu/editmovie">
          <div className="admin--button">Edit Movie</div>
        </Link>
        <Link to="/adminmenu/deletemovie">
          <div className="admin--button">Delete Movie</div>
        </Link>
      </div>
      <br />
      <div className="admin--menu--user--options">
        <h2>Users</h2>
        <br />
        <Link to="/adminmenu/createuser">
          <div className="admin--button">Create User</div>
        </Link>
        <Link to="/adminmenu/resetuserpassword">
          <div className="admin--button">Reset User Password</div>
        </Link>
        <Link to="/adminmenu/upgradedemoteusers">
          <div className="admin--button">Upgrade/Demote Users</div>
        </Link>
        <Link to="/adminmenu/banuser">
          <div className="admin--button">Ban User</div>
        </Link>
        <Link to="/adminmenu/deleteuser">
          <div className="admin--button">Delete User</div>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default AdminMenu;
