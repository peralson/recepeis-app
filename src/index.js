import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/index.css";
import App from "./router/App";
import { FavoritesContextProvider } from "./context/FavoritesContext";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root"),
);
