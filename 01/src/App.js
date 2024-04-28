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
      <ItemDate date="29" month="july" year="2064"></ItemDate>

      <div className="App">
        Hello there bhaiedf logg... Ram Ram bhai sarye ne
      </div>
    </div>
  );
}

export default App;
