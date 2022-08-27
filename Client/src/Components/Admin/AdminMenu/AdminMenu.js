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
          <button className="admin--button">Create Movie</button>
        </Link>
        <button className="admin--button">Edit Movie</button>
        <button className="admin--button">Delete Movie</button>
      </div>
      <br />
      <div className="admin--menu--user--options">
        <h2>Users</h2>
        <br />
        <button className="admin--button">Reset User Password</button>
        <button className="admin--button">Upgrade User To Admin</button>
        <button className="admin--button">Ban User</button>
        <button className="admin--button">Delete User</button>
      </div>
      <br />
    </div>
  );
}

export default AdminMenu;
