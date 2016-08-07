import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TabList extends Component {
  renderTabs() {
    return this.props.tabs.map((tab) => {
      return (
        <li key={tab.$.id}>
          <div>Title: {tab.$.name}, Artist: {tab.$.artist}, Rating: {tab.$.rating}, URL: {tab.$.url}</div>
        </li>
      );
    })
  }

  render() {
    console.log(this.props.tabs);
    if (!this.props.tabs) {
      return <div>Loading</div>;
    }
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
