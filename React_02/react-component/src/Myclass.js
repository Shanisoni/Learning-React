import React, { Component } from 'react'

export default class Myclass extends Component {
  render() {
    return (
      <div>
        <h1>
            I will be a great coder , Definetly and {this.props.name}
            {this.props.AGE}
            
        </h1>
      </div>
    )
  }
}
