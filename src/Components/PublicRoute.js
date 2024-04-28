import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";


function PublicRoute({ children }) {
  const { auth } = useContext(UserContext);

  // Redirect to dashboard if authenticated
  return !auth.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/dashboard" replace />
  );
}

export default PublicRoute;
