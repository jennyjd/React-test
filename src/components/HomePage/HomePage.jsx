import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component{
  constructor(){
    super();
    this.state = {username : ""};
  }

  update(e){
    this.setState({username: e.target.value});
  }

  render(){
    return (
      <div className="main">
        <h1>Welcome {this.state.username}!</h1>
        <input type="text" onChange={this.update.bind(this)} placeholder="Enter your name"/>
      </div>
    );
  }
}

export default HomePage
