"use client";
import { createContext, useContext } from "react";

type UserType = "user" | "admin" | "superAdmin";

type User = {
  data: {
    username?: string;
    type?: UserType;
  };
  isLogin: boolean;
};

const User: User = {
  data: {},
  isLogin: false,
};

const UserContext = createContext<User>(User);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return <UserContext.Provider value={User}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
