import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/Registration/Registration.jsx';
import App from './App';
import HomePage from './components/HomePage/HomePage.jsx';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='registration' component={Registration} />
    </Route>
  </Router>,
  document.getElementById('root')
);
