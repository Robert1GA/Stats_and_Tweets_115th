import React, { Component } from 'react';

class ShowMovie extends Component {
  render() {
    return (
      <div>
        <h1>imdbID: {this.props.params.imdbID} </h1>
      </div>
    );
  }
}

module.exports = ShowMovie;
