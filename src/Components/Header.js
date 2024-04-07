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
    <nav className="main-header navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <div>
          <h4>Trips</h4>
        </div>

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
