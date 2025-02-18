import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppProvider>
            <Router>
                <App />
            </Router>
        </AppProvider>
    </StrictMode>
);
