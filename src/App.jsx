import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import OMDBSearch from './components/OMDBSearch';
import About from './components/About';
import ShowMovie from './components/ShowMovie';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <Route path="/" component={OMDBSearch} />
            <Route path="/about" component={About} />
            <Route path="/results/:imdbID" component={ShowMovie} />
          </div>
        </Router>
    );
  }
}

export default App;
