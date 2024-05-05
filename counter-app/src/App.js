import { useState } from "react";
import "./App.css";


function App() {




  const [count , setCount] = useState(0) ;

  function  decreaseHandler () {

    setCount(count - 1);
   

  }


  function IncreaseHandler() {

    setCount(count + 1);
   

  }



  function ResetHandler() {

    setCount(0);
   

  }

  return(

    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl "> Increment & Decrement </div>

      <div className="font-medium text-2xl bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] ">
        
        <button onClick = {decreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl ">
          -
        </button>
      

      <div className="text-[#0398d4]  text-5xl  gap-12 font-bold ">

        {count}

      </div>

      
        <button onClick = {IncreaseHandler} className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl ">
          +
        </button>
      </div>

      <button className="text-white font-medium text-2xl bg-[#0398d4] px-5 py-2 rounded-sm text-lg " onClick = {ResetHandler}>
         Reset 
        </button>
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
