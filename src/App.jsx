import React, { Component } from 'react';
import './App.css';

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

import OMDBSearch from './components/OMDBSearch';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history="{browserHistory}">
          <Route path='/' component={OMDBSearch} />
          <Route path='/about' component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
