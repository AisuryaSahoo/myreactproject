import React, { Component } from 'react'

export default class MyState extends Component {
    constructor(props){
        super(props);
        this.state={
            eid:12345,
            
        }
    }
    handleRegno = () =>{
        this.setState({eid:45345})
        console.log(this.state.eid);
    }
  render() {
    return (
      <div style={{textAlign:"center",marginTop:"30px"}}>
          <h1>Employee Logged IN</h1>
          <h3>Your registration no is:{this.state.eid} </h3>
        <button onClick={this.handleRegno}>change id</button>
      </div>
    )
  }
}
