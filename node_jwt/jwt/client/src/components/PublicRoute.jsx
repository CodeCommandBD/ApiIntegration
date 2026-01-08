import { Navigate } from "react-router-dom";

// Public route - only accessible when NOT logged in
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Already logged in, redirect to profile
    return <Navigate to="/profile" replace />;
  }

  // Not logged in, show the public page (login/register)
  return children;
};

export default PublicRoute;
