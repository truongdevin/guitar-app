import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class TabList extends Component {
  renderTabs() {
    return this.props.tabs.map((tab) => {
      let { id, name, artist, rating, url } = tab.$;
      return (
        <li key={id} onClick={() => browserHistory.push('/tabs/'+id)}>
          <div>Title: {name}, Artist: {artist}, Rating: {rating}, URL: {url}</div>
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
