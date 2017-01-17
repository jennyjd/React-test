import React, { Component } from 'react';
import './RegistrationForm.css';

class Registration extends Component {
  constructor(){
    super();
    this.state = {name: '', email: '', password: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form className="reg-form">
        <h1>Registration</h1>
        <ul>
          <li><label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </li>
          <li><label>Email:</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
          </li>
          <li><label>Password:</label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </li>
        </ul>
        <button className="sub-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default Registration;
