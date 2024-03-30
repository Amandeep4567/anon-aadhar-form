import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnonAadhaarProvider _useTestAadhaar={true}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AnonAadhaarProvider>
);
