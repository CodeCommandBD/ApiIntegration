"use client";
import { createContext, useContext, useState } from "react";
import api from "@/lib/axois";
import toast from "react-hot-toast";

// AuthContext তৈরি করা হচ্ছে
const AuthContext = createContext(null);

// Provider component
export const AuthProvider = ({ children }) => {
  // user state → user logged in কিনা বোঝার জন্য
  const [user, setUser] = useState(null);

  // loading state → API call চলছে কিনা
  const [loading, setLoading] = useState(false);

  // login function (এখন real API call করবে)
  const login = async (data) => {
    try {
      // loading শুরু
      setLoading(true);

      // API call করা হচ্ছে
      const response = await api.post("/login", data);

      // response থেকে user data নেওয়া
      const userData = response.data.user;

      // user state update করা
      setUser(userData);

      // success toast দেখানো
      toast.success("Login successful! 🎉");

      return userData; // success return করা
    } catch (error) {
      // error handling
      const errorMessage = error.response?.data?.message || "Login failed!";

      // error toast দেখানো
      toast.error(errorMessage);

      throw error; // error throw করা যাতে component এ handle করা যায়
    } finally {
      // loading শেষ (success বা error যাই হোক)
      setLoading(false);
    }
  };

  // logout function
  const logout = () => {
    // user null করা
    setUser(null);

    // success toast
    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
