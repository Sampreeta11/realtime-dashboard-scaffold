import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import { ErrorBoundary } from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Dashboard />
  </ErrorBoundary>
);
