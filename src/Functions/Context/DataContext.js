import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { infos } from "../SideKick/fetcher";

const ContextData = createContext({});
const DataContext = ({ children }) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: "data",
    queryFn: infos,
  });
  console.log(data);
  const value = { data, isLoading, refetch };
  return <ContextData.Provider value={value}>{children}</ContextData.Provider>;
};
export const useData = () => {
  const context = useContext(ContextData);
  return context;
};

export default DataContext;
