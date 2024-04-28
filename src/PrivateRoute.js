import { useContext } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useContext(UserContext);
  if (user.auth.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login"></Navigate>;
  }
  console.log(user);
};

export default PrivateRoute;
