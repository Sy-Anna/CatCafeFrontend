import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/App.tsx";

import "@assets/css/@base.css";
import "@assets/css/App.css";
import "@assets/css/AppDark.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
