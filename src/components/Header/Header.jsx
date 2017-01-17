import React, { Component } from 'react';
import { Link } from 'react-router'
import './Header.css'

class Header extends Component{
  render(){
    return(
      <div id="nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/registration'>Registration</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header
