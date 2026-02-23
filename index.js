import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import App from "./app.js";
import "./stars.css";


const root = createRoot(document.getElementById("root"));
root.render(<App />);
