import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTabs } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: ""};
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchTabs(this.state.search);
  }

  render() {
    return (
      <div>
        <div className='center'>Search</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="search-bar"
            type='text'
            placeholder="Enter artist or song name"
            value={this.state.search}
            onChange={this.handleChange.bind(this)} />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchTabs })(SearchBar);
