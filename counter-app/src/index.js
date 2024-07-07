import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppKaAlternate from "./App";
import NewComp from "./NewComp";
import Messge from  './Messge';
import App, {App2} from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


<>
<AppKaAlternate/>
<App2/>
<Messge name = 'Sunny Sony'/>
<Messge date = '16th Agust '/>
<Messge nam = 'inte'/>

<NewComp name = 'Sunny Sony'/>
</>
);


