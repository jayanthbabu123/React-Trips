import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
function Header() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    user.setAuth({
      token: null,
      isAuthenticated: false,
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  console.log(user);
  return (
    <nav className="main-header navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <div>
          <h4>Trips</h4>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {user.auth.isAuthenticated ? (
              <>
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
                <button className="btn btn-warning" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div className="nav-link">
                  <Link to="/signup">SignUp</Link>
                </div>
                <div className="nav-link">
                  <Link to="/login">Login</Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
