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
