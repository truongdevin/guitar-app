import React, { Component } from 'react';
import SearchBar from './search_bar';
import TabList from './tab_list';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TabIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { divStyle: {} };
  }

  componentWillMount() {
    const img = `url('../imgs/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    this.setState({
      divStyle: { backgroundImage: img }
    });
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="transition"
          transitionAppear = {true} transitionAppearTimeout = {500}
          transitionEnter = {false} transitionLeave = {false}>
          <div className="img-container noselect" style={this.state.divStyle}>
            <SearchBar />
          </div>
        </ReactCSSTransitionGroup>
        <div className='list-container'>
          <TabList />
        </div>
      </div>
    );
  }
}
