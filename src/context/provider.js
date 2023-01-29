import React, { createContext, useReducer } from "react";
import authReducer from "./reducers/auth";
import authState from "./initialStates/auth";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(authReducer, authState);
  const [contact, contactDispatch] = useReducer(contactReducer, contactState);
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
