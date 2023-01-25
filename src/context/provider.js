import React, { createContext, useReducer } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDisptch] = useReducer(authReducer, {});
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
