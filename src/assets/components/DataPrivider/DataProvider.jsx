import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, Reduser, Initial }) => {
  return (
    <DataContext.Provider value={useReducer(Reduser, Initial)}>
      {children}
    </DataContext.Provider>
  );
};
