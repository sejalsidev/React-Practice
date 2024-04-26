import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super();
        this.state={data:"harshiv"}
    }
    apple(){
        this.setState({data:"navadiya"})
    }
  render() {
    return (
        <div>
        <h1>{this.state.data}</h1>
        <button onClick={() =>this.apple()}>Update Date</button>
        </div>
    )
  }
}
