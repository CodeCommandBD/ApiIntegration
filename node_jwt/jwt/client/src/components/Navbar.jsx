import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div className="flex justify-center gap-4 bg-blue-500 text-white p-4 font-bold">
          <Link to="/">Home</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile">Profile</Link>
              <button
                onClick={handleLogout}
                className="hover:bg-blue-600 px-3 py-1 rounded transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
