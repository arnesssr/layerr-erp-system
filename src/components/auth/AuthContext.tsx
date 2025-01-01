import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
  bypassAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    // Simulate authentication
    setIsAuthenticated(true);
    toast.success("Logged in successfully");
  };

  const register = (email: string, password: string) => {
    // Simulate registration
    setIsAuthenticated(true);
    toast.success("Registered successfully");
  };

  const logout = () => {
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };

  const bypassAuth = () => {
    setIsAuthenticated(true);
    toast.success("Auth bypassed for testing");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, bypassAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}