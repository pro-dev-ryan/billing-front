import React, { createContext } from "react";

const DataContext = ({ children }) => {
  const ContextData = createContext({});
  const value = {};
  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
};

export default DataContext;
