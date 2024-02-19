import { useState } from "react";
import { Greeting } from "./components/Greeting";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Greeting name="Jonathan" /> 
      <button type="button" onClick={increment}>
        Click Me!
      </button>
      <p>Count is: {count}</p>
    </>
  );
}

export default App;
