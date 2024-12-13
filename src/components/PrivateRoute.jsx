import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();

  return user ? Component : <Navigate to="/authentication/login" replace />;
};

export default PrivateRoute;
