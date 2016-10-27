import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import TabList from './tab_list';

export class TabIndex extends Component {
  constructor(props) {
    super(props);
    // if (this.props.instrument === "Guitar") {
    //   var img = `url('./imgs/guitar/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    // } else {
    //   var img = `url('./imgs/piano/piano${Math.floor((Math.random() * 3)+1)}.jpg')`;
    // }
    // this.divStyle = { backgroundImage: img };
    // this.state = { errorStyle: { opacity: "0" , top: "-300px"} };
  }

  handleImage() {
    if (this.props.instrument === "Guitar") {
      var img = `url('./imgs/guitar/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    } else {
      var img = `url('./imgs/piano/piano${Math.floor((Math.random() * 3)+1)}.jpg')`;
    }
    this.divStyle = { backgroundImage: img };
  }

  handleError = () => {
    if (this.props.tabs === null) {
      this.errorStyle = { opacity: "0" , top: "-300px"};
    } else if (this.props.tabs === undefined) {
      this.errorStyle = { opacity: ".75" , top: "-100px"};
    } else {
      this.errorStyle = { opacity: "0" , top: "-300px"};
    }
  }

  render() {
    {this.handleError()}
    {this.handleImage()}
    return (
      <div>
        <div className="img-container fadein noselect" style={this.divStyle}>
          <div className='error' style={this.errorStyle}> No results found. Please try again. </div>
          <div className='page-title'>Search</div>
          <SearchBar instrument={this.props.instrument} />
        </div>
        <TabList tabs={this.props.tabs} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs.all,
    instrument: state.tabs.instrument
  };
}

export default connect(mapStateToProps)(TabIndex);
