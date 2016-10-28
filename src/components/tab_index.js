import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import TabList from './tab_list';

export class TabIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "url('./imgs/guitar/guitar1.jpg')",
      animation: '500ms forwards fadein'
    };
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

  // reset animation before each render or else animation won't play
  componentWillReceiveProps() {
    this.setState({ animation: null });
  }

  handleImage = () => {
    if (this.state.backgroundImage.includes(this.props.instrument.toLowerCase())) {
      return;
    }

    // preload the image into cache before fading them in
    // only setState and trigger rerender after image is cached
    const image = new Image();
    image.onload = () => {
      this.setState({
        backgroundImage: `url(${image.src})`,
        animation: '500ms forwards fadein'
      });
    }

    if (this.props.instrument === "Guitar") {
      image.src = `./imgs/guitar/guitar${Math.floor((Math.random() * 2)+1)}.jpg`;
    }

    if (this.props.instrument === "Piano") {
      image.src = `./imgs/piano/piano${Math.floor((Math.random() * 3)+1)}.jpg`;
    }
  }

  render() {
    {this.handleImage()}
    {this.handleError()}
    return (
      <div>
        <div className="img-container noselect" style={this.state}>
          <div className='error' style={this.errorStyle}> No results found. Please try again. </div>
          <div className='page-title'>Search</div>
          <SearchBar instrument={this.props.instrument} />
        </div>
        <TabList tabs={this.props.tabs} instrument={this.props.instrument} />
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
