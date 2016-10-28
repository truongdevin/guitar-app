import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import TabList from './tab_list';

export class TabIndex extends Component {

  handleError = () => {
    if (this.props.tabs === null) {
      this.errorStyle = { opacity: "0" , top: "-300px"};
    } else if (this.props.tabs === undefined) {
      this.errorStyle = { opacity: ".75" , top: "-100px"};
    } else {
      this.errorStyle = { opacity: "0" , top: "-300px"};
    }
  }

  handleImage = () => {
    // window.setTimeout(() => {
    //   console.log('poop');
    //   return { backgroundImage: this.props.img };
    // }, 1000);
    return { backgroundImage: this.props.img }
  }

  render() {
    {this.handleError()}
    return (
      <div>
        <div className="img-container fadein noselect" style={this.handleImage()}>
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
    instrument: state.tabs.instrument,
    img: state.tabs.img
  };
}

export default connect(mapStateToProps)(TabIndex);
