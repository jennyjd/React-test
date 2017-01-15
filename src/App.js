import React, { Component } from 'react';
import Header from './components/Header/Header.jsx'
import HomePage from './components/HomePage/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
