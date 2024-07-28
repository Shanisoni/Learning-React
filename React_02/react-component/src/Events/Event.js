// import React from 'react'


import React, { Component } from 'react'

 class Event extends Component {

      HelloFunction() {
        alert(' Durgesh Nai  ') ;
      }


  render() {
    return(
      <div>
           {/* onClick me jb function ka nam likhte h to this. lgate h  */}
           <input type='button' value='Click' onClick={this.HelloFunction} />
      </div>
    )
  }
}
 

// function Events() {

//   function HelloFunction() {
//     alert(' Durgesh Nai  ') ;
//   }
//   return (
//     <>
//     <div>
//       <h1>Events</h1>

//       <input type='button' value='Click' onClick={HelloFunction} />
//       {/* onClick me jb function ka nam likhte h to paranthesis () nhi lgate h  */}
//     </div>
//     </>
//   )
// }

export default Event  