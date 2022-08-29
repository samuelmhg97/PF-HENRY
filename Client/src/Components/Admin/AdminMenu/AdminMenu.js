import React from "react";
import "./AdminMenu.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import NavBar from "../../NavBar/NavBar";
import SocialMedia from "../../SocialMedia/SocialMedia";
import Footer from "../../Footer/Footer";

function AdminMenu() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="admin--menu--container">
        <div className="admin--menu">
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
            <Link to="/adminmenu/editmovie">
              <button className="admin--button">Edit Movie</button>
            </Link>
            <Link to="/adminmenu/deletemovie">
              <button className="admin--button">Delete Movie</button>
            </Link>
          </div>
          <br />
          <div className="admin--menu--user--options">
            <h2>Users</h2>
            <br />
            <Link to="/adminmenu/createuser">
              <button className="admin--button">Create User</button>
            </Link>
            <Link to="/adminmenu/resetuserpassword">
              <button className="admin--button">Reset User Password</button>
            </Link>
            <Link to="/adminmenu/upgradedemoteusers">
              <button className="admin--button">Upgrade/Demote Users</button>
            </Link>
            <Link to="/adminmenu/banuser">
              <button className="admin--button">Ban User</button>
            </Link>
            <Link to="/adminmenu/deleteuser">
              <button className="admin--button">Delete User</button>
            </Link>
          </div>
          <br />
        </div>
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default AdminMenu;
