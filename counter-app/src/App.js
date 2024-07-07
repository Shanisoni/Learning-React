import { useState } from "react";
import "./App.css";
import Compo from "./compi/Compo";
import Comp from "./compi/Comp";
import Shanii from "./compi/Shanii";
import NewComp from "./NewComp";

let a = 3;

let msg = "";

if (a > 5) {
  msg = " shani";
} else {
  msg = "soni";
}

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function IncreaseHandler() {
    setCount(count + 1);
  }

  function ResetHandler() {
    setCount(0);
  }

  const response = [
    {
      ItemName: "Nirma",

      ItemDate: "20",

      Itemmonth: "July",

      Itemyear: "2009",
    },

    {
      ItemName: "SurfExel",

      ItemDate: "27",

      Itemmonth: "December",

      Itemyear: "2002",
    },

    {
      ItemName: "555",

      ItemDate: "24",

      Itemmonth: "August",

      Itemyear: "2005",
    },
  ];

  return (
    <div>
      <NewComp/>
      <h1> {msg} </h1>

    

      <Comp name={response[0].ItemName}>hELLO My Name is Shani Soni</Comp>

      <Compo
        day={response[0].Itemday}
        month={response[0].Itemmonth}
        year={response[0].Itemyear}
      ></Compo>

      <Comp name={response[1].ItemName}></Comp>

      <Compo
        day={response[1].Itemday}
        month={response[1].Itemmonth}
        year={response[1].Itemyear}
      ></Compo>

      <Comp name={response[2].ItemName}></Comp>

      <Compo
        day={response[2].Itemday}
        month={response[2].Itemmonth}
        year={response[2].Itemyear}
      ></Compo>

      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-[#0398d4] font-medium text-2xl ">
          {" "}
          Increment & Decrement{" "}
        </div>

        <div className="font-medium text-2xl bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
          <button
            onClick={decreaseHandler}
            className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl "
          >
            -
          </button>

          <div className="text-[#0398d4]  text-5xl  gap-12 font-bold ">
            {count}
          </div>

          <button
            onClick={IncreaseHandler}
            className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl "
          >
            +
          </button>
        </div>

        <button
          className="text-white font-medium text-2xl bg-[#0398d4] px-5 py-2 rounded-sm text-lg "
          onClick={ResetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// var i = 1;

// function App() {
//   const [count, shani] = useState(0);
//   console.log("Render", i++);
//   function showClick() {
//     setTimeout(() => {
//       shani(count - 1);
//     }, 2000);
//   }
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <button onClick={() => showClick()}>-</button>
//       <div className="text-2xl">{count}</div>
//       <button onClick={() => shani(count + 1)}>+</button>
//       {i}
//     </div>
//   );
// }

export default App;
