import React, { Component } from 'react'

export default class Constructor extends Component {
//  State Change with Constructor 
    // constructor() {
    //     super();

    //     this.state = {

    //         Name : " Shani Soni " ,
    //         Class : "12th",
    //         Subject : "Computer Science"

    //     }
    // }



    //  State Change without using Constructor 

    state = {

        Name : " Shani Soni " ,
        Class : "12th",
        Subject : "Computer Science"

    }


    ShaniBhai() {
        this.setState({

            Name : this.state.Name +   1
            // Name : "Tear bhai " ,

            // Subject : "DBMS" ,

            // Class : "B.Sc"
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.Name} </h1>
        <h1> {this.state.Class} </h1>
        <h1> {this.state.Subject} </h1>
        <input type = "button" value = "click" onClick = { ()=> this.ShaniBhai()}></input>
      </div>
    )
  }
}
