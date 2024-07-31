import React, { Component } from "react";
import Updating2 from "./Updating.js/Updating2";

export default class Updating1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: " Data Base Management Sysytem ",
    };

    
  }


  

  

  render() {
    return (
      <div>
        <Updating2 Name1={this.state.Name} />
       
      </div>
    );
  }
}
