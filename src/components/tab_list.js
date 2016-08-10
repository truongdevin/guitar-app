import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class TabList extends Component {
  renderTabs() {
    return this.props.tabs.map((tab) => {
      const { id, name, artist, rating, url } = tab.$;
      return (
        <li key={id}
          className='list-item'
          onClick={() => browserHistory.push({
            pathname: '/tabs/'+id,
            state: { name, artist }
          })}>
          <div>{name} - {artist}</div>
          <div> Rating: {rating}</div>
        </li>
      );
    })
  }

  render() {
    return (
      <ul>
        <ReactCSSTransitionGroup transitionName="transition"
          transitionAppear = {true} transitionAppearTimeout = {500}
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.renderTabs()}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs.all };
}

export default connect(mapStateToProps)(TabList);
