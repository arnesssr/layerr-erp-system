import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isBypassMode: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
  bypassAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  
  const [isBypassMode, setIsBypassMode] = useState(() => {
    return localStorage.getItem("isBypassMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
    localStorage.setItem("isBypassMode", isBypassMode.toString());
  }, [isAuthenticated, isBypassMode]);

  const login = (email: string, password: string) => {
    console.log("Login attempt with:", email);
    setIsAuthenticated(true);
    setIsBypassMode(false);
  };

  const register = (email: string, password: string) => {
    console.log("Register attempt with:", email);
    setIsAuthenticated(true);
    setIsBypassMode(false);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsBypassMode(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("isBypassMode");
  };

  const bypassAuth = () => {
    console.log("Bypassing authentication");
    setIsAuthenticated(true);
    setIsBypassMode(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isBypassMode, login, register, logout, bypassAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}