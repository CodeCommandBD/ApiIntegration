import { Navigate } from "react-router-dom";

// Protected route - only accessible when logged in
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in, show the protected page
  return children;
};

export default ProtectedRoute;
