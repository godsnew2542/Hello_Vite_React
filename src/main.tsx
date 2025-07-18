import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Day2 from "./page/Day2.tsx";
import Day3 from "./page/Day3.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <StrictMode> */}
    {/* <App />
    <br />
    <hr />
    <div> Day 2</div>
    <Day2 />
    <br />
    <hr /> */}
    <Day3 />
    {/* </StrictMode> */}
  </>
);
