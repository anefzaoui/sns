import React from 'react';
import { Link } from 'react-router-dom';

export default class LiveVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * We initalize the Clappr video player only after we make sure
   * the DOM element has been loaded. Therefore Clappr initalization
   * goes in componentDidMount().
   */
  componentDidMount() {
    let self = this;
    let videoDiv = document.getElementById(this.props.id);
    let player = new Clappr.Player({
      source: self.props.liveurl,
      height: 360,
      width: 640
    });
    player.attachTo(videoDiv);
  }

  render() {
    return (
      <Link className="lv-large live-video-page-link" to={"/live/watch?v=" + this.props.liveurl}>
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
