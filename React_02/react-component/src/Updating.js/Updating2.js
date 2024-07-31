import React, { Component } from 'react'

export default class Updating2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name2 : this.props.Name1     
        }
    }
    // Main mudda yhi h bhai ki jb hum state ko props
    //  se change krwana chahte h to hum getDerivedFromProps ka use krte h
    static getDerivedFromProps(props , state ) {
      if(props.Name1 !== state.Name2){
        return{ 
          Name2 : props.Name1
        }
      } 
    }

    shaniii = () => {
      console.log("shani");
      this.setState({
  
  
       
        Name2 : "Operating System"
  
      })
    }






  render() {
    return (
      <div>
        <h1>{this.state.Name2} </h1>
        <button type="button" onClick= {this.shaniii}>Change State</button>
      </div>
    )
  }
}
