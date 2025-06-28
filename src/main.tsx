import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ScrollProvider } from "./context/ScrollContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ScrollProvider>
    <App />
  </ScrollProvider>
);
