import { useState } from "react";
import "../App.css";
import { CounterProvider, userConter } from "../Utils/CounterProvider";

interface CounterProps {
  count: number;
}

function CounterDisplay({ count }: CounterProps) {
  return (
    <div style={{ color: count % 2 == 0 ? "green" : "red" }}>
      Count: {count}
    </div>
  );
}

function CounterControl({ isBtn = false }: { isBtn?: boolean }) {
  let { count, increment } = userConter();

  return (
    <>
      <button onClick={increment}>--increment--</button>
      {count !== undefined && isBtn && <CounterDisplay count={count} />}
    </>
  );
}

export default function Day2() {
  console.log("App Rendered");

  let [count1, setCount] = useState(0);
  const ClickHandler = () => {
    setCount(count1 + 1);
    // console.log("🚀 ~ ClickHandler ~ count:", count);
  };

  return (
    <CounterProvider>
      <div>My Counter</div>
      <CounterControl />
      <br />
      <CounterControl isBtn={true} />
      <br />
      <button onClick={ClickHandler}>increment</button>
      <CounterDisplay count={count1} />
    </CounterProvider>
  );
}
