import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-link active">
              <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faDashboard} />{" "}
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faUser} />{" "}
              <Link to="/profile">Profile</Link>
            </div>
            <div className="nav-link">
              <Link to="/signup">SignUp</Link>
            </div>
            <div className="nav-link">
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
