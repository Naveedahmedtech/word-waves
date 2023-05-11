import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { postsApi } from "./services/postsApi";
import store from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { AuthProvider } from "./context/AuthProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ApiProvider api={postsApi}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApiProvider>
  </Provider>
);
