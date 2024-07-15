import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import axios from "axios";
import {ThemeProvider} from "@material-tailwind/react";
import {BrowserRouter} from "react-router-dom";
import Index from "./routers/Index";

axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Index />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
