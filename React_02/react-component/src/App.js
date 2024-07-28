
// rcc for react class component 
// rccp for React class proptype component 
// rfc for React Function Component 
// rfcp for React function component with proptype  

import './App.css';

import React, {Component}  from 'react';

import Products from './Components/Products' ;
import Constructor from './Components/Constructor';


class App  extends Component
{
  render(){

    return(
      <>
      
      <h1>Shani Soni</h1>
      </>
    )

  }
}


export function Shani(){
  return(
    <>
    <div>
      <h1>
        I am from Ghaziabad 
      </h1>
    </div>
    </>
  )
}
 




// const App = () =>  { 

//   const products = [
//     {
//       id : 'p1' ,

//       title : 'Nirma' ,

//       amount : 100 , 

//       date : new Date(2021 , 8, 10)
//     } ,

//     {
//       id : 'p1' ,

//       title : 'Nirma' ,

//       amount : 100 , 

//       date : new Date(2021 , 8, 10)
//     },

//     {
//       id : 'p1' ,

//       title : 'Nirma' ,

//       amount : 100 , 

//       date : new Date(2021 , 8, 10)
//     },

//     {
//       id : 'p1' ,

//       title : 'Nirma' ,

//       amount : 100 , 

//       date : new Date(2021 , 8, 10)
//     },
//   ];

//   return (
//     <div>
//       <Products items = {products} />
//     </div>
//   );


// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
