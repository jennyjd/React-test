import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './index.css';

import App from './App';
import HomePage from './components/HomePage/HomePage.jsx';
import Registration from './components/Registration/Registration.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path='registration' component={Registration} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('root')
);
