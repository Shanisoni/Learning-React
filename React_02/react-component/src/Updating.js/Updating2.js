import React, { Component } from 'react'

export default class Updating2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name2 : this.props.Name1     
        }
    }






  render() {
    return (
      <div>
        <h1>{this.state.Name2} </h1>
      </div>
    )
  }
}
