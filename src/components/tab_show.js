import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTab } from '../actions/index';

export class TabShow extends Component {
  componentWillMount() {
    this.props.fetchTab(this.props.params.id);
  }

  parseHTML() {
    let __html = this.props.selected.replace(/\[ch\]|\[\/ch\]/g, '');
    return { __html };
  }

  render() {
    if (!this.props.selected) {
      return <div>Loading...</div>;
    }
    return (
      <div dangerouslySetInnerHTML={this.parseHTML()} />
    );
  }
}

function mapStateToProps(state) {
  return {selected: state.tabs.selected };
}

export default connect(mapStateToProps, { fetchTab })(TabShow);
