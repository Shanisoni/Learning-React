// This component is used to check the shouldComponentUpdate lifecycle method in react
// mtlb ki jab hume kisi bhi component ko update karna ho to hume ye method use karna chahiye
//  BAasically is ki help se hum kisi component ke state and prop ko to change kr skte h lekin uske 
// output ko chnage hone se rok skte h false value dekr yhi khasiyat h iski 
// it is called before the render method is executed
// agr shouldcomponent return false krta h to render method call nhi hota h


import React, { Component } from 'react'



export default class ShouldComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {

        Name : "Aayushi Prakash"
         
      }

      console.log("Shani Soni")
    }
    shani = () =>  {

        this.setState({
           Name : "Swati Tomar "    
        });

    }
static getDrivedStateFromProps(props , state) {
    console.log("first")
}
//  Baap cheez h bhai idhr to 
shouldComponentUpdate() {

    console.log("FOOOI")

    return true 
}
 

    
  render() {
    return (
      <div>
        <h1>{this.state.Name} </h1>
        <h2>{this.props.City}</h2>
        <button onClick = {this.shani}>button </button>
      </div>
    )
  }
}
