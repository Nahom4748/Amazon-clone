import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./assets/components/DataPrivider/DataProvider.jsx";
import { Initial, Reduser } from "./assets/utility/Reduser.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider Reduser={Reduser} Initial={Initial}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
