import React, { Component } from 'react';
import './Header.css'

class Header extends Component{
  render(){
    return(
      <div id="nav">
        <ul>
          <li><a>Home</a></li>
          <li><a>Registration</a></li>
        </ul>
      </div>
    )
  }
}

export default Header
