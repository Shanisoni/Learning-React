import "./App.css";

import Item from "./Component/Item";
import ItemDate from "./Component/ItemDate";

function App() {
  return (
    <div id="root">
      <Item name="Nirma"></Item>
      <ItemDate date="28" month="june" year="2024"></ItemDate>
      <Item name="Surf"></Item>
      <ItemDate date="27" month="Agust" year="2044"></ItemDate>
      <Item name="Sabun"></Item>
      <ItemDate date="29" month="july" year="2064"></ItemDate>f
      <div className=" bg-black text-green-300  ">
        Hello there My name is shani soni
      </div>
    </div>
  );
}

export default App;
