import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner/>;

  if (!user)
    return (
      <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );

  return children;
};

export default PrivateRoute;
