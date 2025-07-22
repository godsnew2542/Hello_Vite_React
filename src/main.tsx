import { createRoot } from "react-dom/client";
import "./index.css";
import Day3 from "./page/Day3.tsx";
import { CartProvider } from "./Context/CartContext.tsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <>
    <StrictMode>
      <CartProvider>
        {/* <App />
    <br />
    <hr />
    <div> Day 2</div>
    <Day2 />
    <br />
    <hr /> */}
        <Day3 />
      </CartProvider>
    </StrictMode>
  </>
);
