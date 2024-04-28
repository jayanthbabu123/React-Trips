// create a Private route component, that should check the token in local storage, if token is there we need to access private route other wise need to navigae to Login

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(UserContext);

  return auth.isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
