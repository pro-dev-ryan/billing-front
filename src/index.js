import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import DataContext from "./Functions/Context/DataContext";
const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <DataContext>
        <App />
      </DataContext>
    </QueryClientProvider>
  </React.StrictMode>
);
