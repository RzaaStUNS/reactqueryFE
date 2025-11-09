import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import queryClient from "./utils/queryClient";
import { persister } from "./utils/storage";

persistQueryClient({
  queryClient,
  persister,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
