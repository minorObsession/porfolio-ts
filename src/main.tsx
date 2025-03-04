import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.tsx";
import { DropdownProvider } from "./contexts/DropdownContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeProvider>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </DarkModeProvider>
  </StrictMode>
);
