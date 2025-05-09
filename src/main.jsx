import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Toast Notification
import { Toaster } from "react-hot-toast";

// Global Loading Context
import LoadingProvider from "./context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <App />
        <Toaster position="top-center" reverseOrder={false} />
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
