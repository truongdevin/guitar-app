import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav-container noselect" >
        <li className="home" onClick={() => browserHistory.push('/')}>MusicLand</li>
        <li>Search</li>
        <li>Github</li>
      </ul>
    );
  }
}
