import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Ping from "./Ping";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ping />
    </>
  );
}

export default App;
