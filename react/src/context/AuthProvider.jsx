import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  // ১. অ্যাপ লোড হওয়ার সময় লোকাল স্টোরেজ চেক করা
  const [auth, setAuth] = useState(() => {
    const savedAuth = localStorage.getItem("auth");
    return savedAuth ? JSON.parse(savedAuth) : null;
  });

  // ২. লগইন ফাংশন: স্টেট আপডেট করে এবং স্টোরেজে সেভ করে
  const login = (userData) => {
    setAuth(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  // ৩. লগআউট ফাংশন: সব ক্লিয়ার করে দেয়
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
  };

  // ৪. ইউজার লগইন আছে কি না তা বোঝার সহজ উপায় (Boolean)
  const isAuthenticated = !!auth?.accessToken;
  // ব্যাখ্যা: যদি accessToken থাকে, তার মানে লগইন করা আছে (True)

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
