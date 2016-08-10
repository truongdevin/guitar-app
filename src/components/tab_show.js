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
    const { name, artist } = this.props.location.state;
    const img = `url('../imgs/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    if (!this.props.selected) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="img-container noselect" style={{ backgroundImage: img }}>
          <div className="page-title">{name}</div>
          <div className="page-title">{artist}</div>
        </div>
        <div className='tab-container'>
          <div className="tabs" dangerouslySetInnerHTML={this.parseHTML()} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {selected: state.tabs.selected };
}

export default connect(mapStateToProps, { fetchTab })(TabShow);
