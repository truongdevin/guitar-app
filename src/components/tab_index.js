import React, { Component } from 'react';

import SearchBar from './search_bar';
import TabList from './tab_list';

export default class TabIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { divStyle: {} };
  }

  componentWillMount() {
    const img = `url('../imgs/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    this.setState({
      divStyle: { backgroundImage: img }
    });
  }

  render() {
    return (
      <div>
        <div className="img-container noselect" style={this.state.divStyle}>
          <SearchBar />
        </div>
        <TabList />
      </div>
    );
  }
}
