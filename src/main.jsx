import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";




// Render the main app wrapped with Redux Provider
ReactDOM.createRoot(document.getElementById("root")).render(
   <App />
);
