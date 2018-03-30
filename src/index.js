import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Render the main component into the dom
ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
), document.getElementById('app'));
