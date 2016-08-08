import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <div onClick={() => browserHistory.push('/')}>
          'Ultimate Guitar v2.0'
        </div>
        {this.props.children}
      </div>
    );
  }
}
