import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../../UserContext";
function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const fromSignup = location.state?.fromSignup || false;
  const userContext = useContext(UserContext);
  console.log(userContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);
    axios
      .post(`http://localhost:5000/api/users/login`, loginData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        userContext.setAuth({
          token: response.data.token,
          isAuthenticated: true,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage(err.message);
        }
      });
  };

  return (
    <form>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            {fromSignup && <h6>You registered successfully, Please login</h6>}
            <h3>Login</h3>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={loginData.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <button
              className="btn btn-primary"
              disabled={!loginData.email || !loginData.password}
              onClick={handleSubmit}
            >
              Login
            </button>
           
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
