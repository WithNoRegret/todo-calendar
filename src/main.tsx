import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.scss";
import { ModalProvider } from "./helpers/contexts/modalContext/modalContext.tsx";
import { MobileProvider } from "./helpers/contexts/mobileContext/mobileContext.tsx";
import { DateProvider } from "./helpers/contexts/dateContext/dateContext.tsx";
import { TaskStorageProvider } from "./helpers/contexts/taskStorageContext/TaskStorageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <MobileProvider>
        <DateProvider>
          <TaskStorageProvider>
            <App />
          </TaskStorageProvider>
        </DateProvider>
      </MobileProvider>
    </ModalProvider>
  </React.StrictMode>
);
