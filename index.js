import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import App from "./app.js";
import "./stars.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
