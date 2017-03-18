import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import {Router} from 'react-router';
import { Route, browserHistory } from 'react-router';
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/profile" component={App}>


      </Route>
  </Router>,
  document.getElementById('root')
);
