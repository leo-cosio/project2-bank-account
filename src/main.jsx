import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import worker from "./mock/index.js";
import { AuthContextProvider } from "./contexts/auth-context.jsx";

worker
  .start()
  .then(() => {
    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <BrowserRouter>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </StrictMode>,
    );
  })
  .catch((error) => console.error(error));
