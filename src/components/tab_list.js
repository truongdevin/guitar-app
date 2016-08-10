import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

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
        {this.renderTabs()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs.all };
}

export default connect(mapStateToProps)(TabList);
