import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Ensure BrowserRouter is here
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router should be ONLY here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
