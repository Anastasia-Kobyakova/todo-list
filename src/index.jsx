import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./components/screens/Home/Home";
import { Layout } from "./components/layout/layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>
);
