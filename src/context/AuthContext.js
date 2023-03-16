import { createContext } from "react";
import React from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let [user, setUser] = React.useState(null);

  let signin = (newUser) => setUser(newUser);

  const value = { user, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
