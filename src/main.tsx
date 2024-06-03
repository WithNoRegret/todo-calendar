import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.scss";
import { ModalProvider } from "./helpers/contexts/modalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
