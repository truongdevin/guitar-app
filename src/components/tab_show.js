import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTab, fetchArtist } from '../actions/index';

export class TabShow extends Component {
  componentWillMount() {
    this.props.fetchTab(this.props.params.id);
    this.props.fetchArtist(this.props.location.state.artist);
  }

  parseHTML() {
    let __html = this.props.selected.replace(/\[ch\]|\[\/ch\]/g, '');
    return { __html };
  }

  handleImage() {
    const images = [];
    const artist = this.props.artist;

    if (!artist || !artist[0].strArtistFanart) {
      return `url('../imgs/default.png')`;
    } else {
      images.push(artist[0].strArtistFanart);
    }

    if (artist[0].strArtistFanart2) {
      images.push(artist[0].strArtistFanart2);
    }

    if (artist[0].strArtistFanart3) {
      images.push(artist[0].strArtistFanart3);
    }

    return `url('${images[Math.floor(Math.random() * images.length)]}')`;
  }

  render() {
    if (!this.props.selected) {
      return <div>Loading...</div>;
    }

    const { name, artist } = this.props.location.state;

    return (
      <div>
        <div className="img-container noselect" style={{ backgroundImage: this.handleImage() }}>
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
  return {
    selected: state.tabs.selected,
    artist: state.tabs.artist
  };
}

export default connect(mapStateToProps, { fetchTab, fetchArtist })(TabShow);
