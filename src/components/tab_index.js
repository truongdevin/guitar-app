import React, { Component } from 'react';
import SearchBar from './search_bar';
import TabList from './tab_list';

export default class TabIndex extends Component {
  constructor(props) {
    super(props);
    const img = `url('../imgs/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
    this.divStyle = { backgroundImage: img };
  }

  render() {
    return (
      <div>
        <div className="img-container noselect" style={this.divStyle}>
          <SearchBar />
        </div>
        <div className='list-container'>
          <TabList />
        </div>
      </div>
    );
  }
}
