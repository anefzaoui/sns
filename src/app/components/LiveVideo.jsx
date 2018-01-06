import React from 'react';
import { Link } from 'react-router-dom';

export default class LiveVideo extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let self = this;
    let videoDiv = document.getElementById(this.props.id);
    let player = new Clappr.Player({
      source: self.props.liveurl,
      height: 150,
      width: 240
    });
    player.attachTo(videoDiv);
  }

  render() {
    return (
      <Link className="live-video-page-link" to={"/live/" + this.props.id}>
        <div className="video-element">
          <div id={this.props.id}></div>
          <div className="live-status">
            <i className="fa fa-play" aria-hidden="true"></i><span>Live Now</span>
          </div>
        </div>
      </Link>
    );
  }
}
