import { useState } from "react";
import "./App.css";

var i = 1;

function App() {
  const [count, shani] = useState(0);
  console.log("Render", i++);
  function showClick() {
    setTimeout(() => {
      shani(count - 1);
    }, 2000);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={() => showClick()}>-</button>
      <div className="text-2xl">{count}</div>
      <button onClick={() => shani(count + 1)}>+</button>
      {i}
    </div>
  );
}

export default App;
