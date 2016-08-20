import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTab, fetchArtist } from '../actions/index';

export class TabShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      animation: null
    };
  }
  componentWillMount() {
    this.props.fetchTab(this.props.params.id);
    this.props.fetchArtist(this.props.location.state.artist)
      .then(this.handleImage.bind(this));
  }

  parseHTML() {
    let __html = this.props.selected.replace(/\[ch\]|\[\/ch\]/g, '');
    return { __html };
  }

  handleImage() {
    const images = [];
    const artist = this.props.artist;

    if (!artist || !artist[0].strArtistFanart) {
      this.setState({image: `url('../imgs/default.png')`});
      return
    } else {
      images.push(artist[0].strArtistFanart);
    }

    if (artist[0].strArtistFanart2) {
      images.push(artist[0].strArtistFanart2);
    }

    if (artist[0].strArtistFanart3) {
      images.push(artist[0].strArtistFanart3);
    }

    const rand = Math.floor(Math.random() * images.length);
    const image = new Image();
    image.onload = () => {
      this.setState({
        image: `url(${image.src})`,
        animation: '500ms forwards fadein'
      });
    }
    image.src = `${images[rand]}`;
  }

  render() {
    if (!this.props.selected) {
      return <div>Loading...</div>;
    }

    const { name, artist } = this.props.location.state;

    return (
      <div>
        <div
          className="img-container noselect"
          style={{
            backgroundImage: this.state.image,
            animation: this.state.animation
          }}>
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
