import React, { createContext } from "react";
import { useQuery } from "react-query";
import { infos } from "../SideKick/fetcher";

const DataContext = ({ children }) => {
  const { data, isLoading, refetch } = useQuery("data", `${infos}`);
  const ContextData = createContext({});
  const value = { data, isLoading, refetch };
  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
};

export default DataContext;
