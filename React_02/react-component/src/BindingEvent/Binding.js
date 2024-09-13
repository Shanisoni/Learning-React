import React, { Component } from 'react'

export default class Binding extends Component {

    constructor(){

        super();
        this.shani = this.shani.bind(this);
        

        this.state = {
            
            Name : 'Shani Soni' 


            
        }


    }

    shani(){
        console.log( "shanni");


        
        
        this.setState({

           

            Name : "Akgec Ghaziabad "

        })
    }
  render() {
    return (
      <div >
        <h1> {this.state.Name} </h1>

        {/* if we want to bind the this in the rendor method then do this  */}
        <input type='button'   onClick={this.shani.bind(this)}  value='click'    ></input>
        {/* <input type='button' value='click'  onClick={()=>this.shani}  ></input> */}
      </div>
    )
  }
}
