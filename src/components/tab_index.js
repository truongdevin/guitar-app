import React, { Component } from 'react';

import SearchBar from './search_bar';
import TabList from './tab_list';

export default class TabIndex extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TabList />
      </div>
    );
  }
}
