import { createContext, useContext, useState } from "react";

interface CounterContextType {
  count: number;
  increment: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const userConter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("CounterContext == undefined");
  }
  return context;
};
