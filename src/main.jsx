import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider } from "styled-components";
import Theme from "./config/theme.jsx";
import GlobalStyle from "./config/globalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
