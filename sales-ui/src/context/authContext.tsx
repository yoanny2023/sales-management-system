"use client";

import { User } from "@/features/auth/types/auth.types";
import React, { useContext, useEffect, useState } from "react"

  type AuthContextType = {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (user: User,token: string) => void;
    logout: () => void;
};    


const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthContextProvider({children}:{children: React.ReactNode}){
  const[user,setUser] = useState<User | null>(null);
  const[token, setToken] = useState<string | null>(null);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    const storedUser = window.localStorage.getItem("user");

    if(storedToken && storedUser){
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  },[]);

  function login(user: User,token: string) {
    setUser(user);
    setToken(token);

    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
  }

  function logout() {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return(
    <AuthContext.Provider value={
     { user,
      token,
      isAuthenticated: !!token,
      isLoading,
      login,
      logout
    }
    }>
      {children}
    </AuthContext.Provider>

  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}