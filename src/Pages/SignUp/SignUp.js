import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:5000/api/users/register", userData)
      .then((response) => {
        console.log(response.data);
        setUserData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/login", { state: { fromSignup: true, userData } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <h3>Sign Up</h3>
            <div className="form-group">
              <label htmlFor="firstname">FirstName</label>
              <input
                type="text"
                value={userData.firstName}
                onChange={handleInputChange}
                name="firstName"
                className="form-control"
                id="firstname"
                placeholder="Enter FirstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">LastName</label>
              <input
                type="text"
                className="form-control"
                value={userData.lastName}
                onChange={handleInputChange}
                name="lastName"
                id="lastname"
                placeholder="Enter LastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={userData.email}
                onChange={handleInputChange}
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                value={userData.password}
                onChange={handleInputChange}
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
