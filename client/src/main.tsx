import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Suspense } from "react";

// Create a loader component for suspense fallback
const Loader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);
