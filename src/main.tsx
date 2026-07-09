import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AdminPage from "./pages/AdminPage";
import ResultsPage from "./pages/ResultsPage";

function routeElement() {
  switch (window.location.pathname.replace(/\/+$/, "")) {
    case "/results":
      return <ResultsPage />;
    case "/admin":
      return <AdminPage />;
    default:
      return <App />;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{routeElement()}</StrictMode>,
);
