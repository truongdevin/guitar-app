import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuitar, fetchPiano, setInstrument } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: ""};
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === "") return;

    if (this.props.instrument === "Guitar") {
      this.props.fetchGuitar(this.state.search);
    } else if (this.props.instrument === "Piano") {
      this.props.fetchPiano(this.state.search)
    }
  }

  handleInstrument = (e) => {
    e.preventDefault();
    const instrument = e.target.innerHTML
    if (["Guitar", "Piano"].includes(instrument)) {
      this.props.setInstrument(instrument);
    }
  }

  handleTabClass = () => {
    const select = "search-tab-item tab-selected";
    const noSelect = "search-tab-item"
    this.guitarClass = this.props.instrument === "Guitar" ? select : noSelect;
    this.pianoClass = this.props.instrument === "Piano" ? select : noSelect;
  }

  render() {
    {this.handleTabClass()}
    return (
      <div className="search-bar-container">
        <div className="search-tab-flex" onClick={this.handleInstrument}>
          <div className={this.guitarClass}>Guitar</div>
          <div className={this.pianoClass}>Piano</div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type='text'
            placeholder="Enter artist or song name"
            value={this.state.search}
            onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchGuitar, fetchPiano, setInstrument })(SearchBar);
