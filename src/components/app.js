import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        'Ultimate Guitar v2.0'
        {this.props.children}
      </div>
    );
  }
}
