// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

interface MyTypeProps {
  value: string;
  test1?: string;
  type?: "nomal" | "warning";
}

function MyText(props: MyTypeProps) {
  return (
    <div>
      {props.value} ===== {props.test1}
    </div>
  );
}

function MyTextV2({ value, test1 }: MyTypeProps) {
  return (
    <div>
      {value} ===== {test1}
    </div>
  );
}

function MyTextV3({ value, type }: MyTypeProps) {
  return (
    <div
      style={{
        color: type == "warning" ? "red" : "green",
        backgroundColor: type == "warning" ? "black" : "yellow",
        padding: "10px 300px",
      }}
    >
      {value}
    </div>
  );
}

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <MyText value="Hello Word" test1="qqqqq" />
      <MyTextV2 value="Hello New" />
      <MyTextV3 value="Hello New" type="nomal" />
      <MyTextV3 value="Hello New" type="warning" />
    </>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App;
