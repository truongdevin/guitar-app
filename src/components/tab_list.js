import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollCount: 1 };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.setState({ scrollCount:  this.state.scrollCount += 1 });
    }
  }

  renderTabs() {
    return this.props.tabs.slice(0,this.state.scrollCount*5).map((tab) => {
      const { id, name, artist, rating, url } = tab.$;
      return (
        <li key={id}
          className='list-item'
          onClick={() => browserHistory.push({
            pathname: '/tabs/'+id,
            state: { name, artist }
          })}>
          <div>{name} - {artist}</div>
          <div> Rating: {rating}</div>
        </li>
      );
    })
  }

  render() {
    if (this.props.tabs === null) {
      return <div/>;
    } else if (this.props.tabs === undefined) {
      return (
        <ul className='list-container fadedown'>
          <li className='list-item' />
        </ul>
      );
    } else {
      return (
        <ul className="list-container slideup">
          {this.renderTabs()}
        </ul>
      );
    }
    //
    // if (this.props.tabs === undefined) {
    //   return (
    //     <ul className='list-container'>
    //       <li className='list-item' />
    //     </ul>
    //   );
    // }

    // return (
    //   <ul className="list-container">
    //     {this.renderTabs()}
    //   </ul>
    // );
  }
}

function mapStateToProps(state) {
  return { tabs: state.tabs.all };
}

export default connect(mapStateToProps)(TabList);
