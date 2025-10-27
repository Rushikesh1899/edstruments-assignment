/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    const storedExpiry = localStorage.getItem("expiry");

    if (storedUser && storedExpiry) {
      const now = new Date().getTime();
      if (now < Number(storedExpiry)) {
        setUser(JSON.parse(storedUser));
        setExpiryTime(Number(storedExpiry));
      } else {
        logout();
      }
    }
  }, []);

  const setSession = (userData) => {
    const sessionDuration = 30 * 60 * 1000;
    const expiry = new Date().getTime() + sessionDuration;

    setUser(userData);
    setExpiryTime(expiry);

    localStorage.setItem("authUser", JSON.stringify(userData));
    localStorage.setItem("expiry", expiry);
  };

  const signup = async ({ email, password }) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const isUserExist = users.some((u) => u.email === email);
    if (isUserExist) {
      throw new Error("User already exists with this email");
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSession({ email });
  };

  const login = async ({ email, password }) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return false
    }

    setSession({ email });
    return true
  };

  const logout = () => {
    setUser(null);
    setExpiryTime(null);
    localStorage.removeItem("authUser");
    localStorage.removeItem("expiry");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (expiryTime) {
        const now = new Date().getTime();
        if (now > expiryTime) {
          logout();
        }
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [expiryTime]);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);