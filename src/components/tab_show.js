import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTab } from '../actions/index';

export class TabShow extends Component {
  componentWillMount() {
    this.props.fetchTab(this.props.params.id);
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html:this.props.selected }} />
    );
  }
}

function mapStateToProps(state) {
  return {selected: state.tabs.selected };
}

export default connect(mapStateToProps, { fetchTab })(TabShow);
