import { useContext } from "react";
import UserContext from "./UserContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useContext(UserContext);

  if (user.auth.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return children;
  }
};

export default PublicRoute;
