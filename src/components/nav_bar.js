import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav-container noselect" >
        <li className="home" onClick={() => hashHistory.push('/')}>Tab Haven</li>
        <li onClick={() => window.open('https://github.com/truongdevin/guitar-app','_blank')}>Github</li>
      </ul>
    );
  }
}
