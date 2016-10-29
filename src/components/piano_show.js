import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPianoSheet, fetchArtist } from '../actions/index';

export class PianoShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      image: null,
      animation: null
    };
  }
  componentWillMount() {
    this.props.fetchPianoSheet(this.props.params.id)
      .then(() => this.setState({ loaded: true }));
    this.props.fetchArtist(this.props.location.state.title.split("-")[0])
      .then(this.handleImage.bind(this));
  }

  parseHTML() {
    const iframeTag = this.props.selected.html;
    const __html = iframeTag.slice(0,8) + 'scrolling="no" ' + iframeTag.slice(8);
    return { __html };
  }

  handleImage() {
    const images = [];
    // const artist = this.props.artist.artists;
    const artist = this.props.artist ? this.props.artist.artists : false;

    if (!artist || !artist[0].strArtistFanart) {
      this.setState({
        image: `url('./imgs/default.png')`,
        animation: '500ms forwards fadein'
      });
      return
    } else {
      images.push(artist[0].strArtistFanart.replace('http','https'));
    }

    if (artist[0].strArtistFanart2) {
      images.push(artist[0].strArtistFanart2.replace('http','https'));
    }

    if (artist[0].strArtistFanart3) {
      images.push(artist[0].strArtistFanart3.replace('http','https'));
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
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    const { title } = this.props.location.state;

    return (
      <div>
        <div
          className="img-container noselect"
          style={{
            backgroundImage: this.state.image,
            animation: this.state.animation
          }}>
          <div className="page-title">{ title }</div>
        </div>
        <div className='tab-container slideup'>
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

export default connect(mapStateToProps, { fetchPianoSheet, fetchArtist })(PianoShow);
