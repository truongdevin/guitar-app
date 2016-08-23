import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import TabList from './tab_list';

export class TabIndex extends Component {
  constructor(props) {
    super(props);
    const img = `url('../imgs/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    this.divStyle = { backgroundImage: img };
  }

  render() {
    if (this.props.tabs === null) {
      var errorStyle = { opacity: "0" };
    } else if (this.props.tabs === undefined) {
      var errorStyle = { opacity: ".75" };
    } else {
      var errorStyle = { opacity: "0" };
    }

    return (
      <div>
        <div className="img-container fadein noselect" style={this.divStyle}>
          <div className='error' style={errorStyle}> No results found. Please try again. </div>
          <SearchBar />
        </div>
        <TabList tabs={this.props.tabs}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs.all };
}

export default connect(mapStateToProps)(TabIndex);
